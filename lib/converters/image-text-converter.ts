import Tesseract from 'tesseract.js';

export interface ImageToTextOptions {
  language: string;
  outputFormat: 'txt' | 'json';
  confidence: boolean;
  preserveFormatting: boolean;
}

interface TesseractLogMessage {
  status: string;
  progress: number;
}

interface TesseractWord {
  text: string;
  confidence: number;
  bbox: {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
  };
}

interface TesseractData {
  text: string;
  confidence: number;
  words?: TesseractWord[];
}

export interface TextResult {
  text: string;
  confidence?: number;
  words?: Array<{
    text: string;
    confidence: number;
    bbox: {
      x0: number;
      y0: number;
      x1: number;
      y1: number;
    };
  }>;
  metadata?: {
    language: string;
    processingDate: string;
    filename: string;
    fileSize: number;
    totalWords: number;
    averageConfidence: number;
  };
}

export async function convertImageToText(
  file: File,
  options: ImageToTextOptions,
  onProgress?: (progress: number) => void
): Promise<Blob> {
  let worker: Tesseract.Worker | null = null;
  
  try {
    onProgress?.(5);

    // Validate file type
    if (!file.type.startsWith('image/')) {
      throw new Error('File must be an image format (PNG, JPG, JPEG, GIF, BMP, WEBP)');
    }

    onProgress?.(10);

    // Initialize Tesseract worker with better error handling
    try {
      // Handle auto-detection properly
      const language = options.language === 'auto' || options.language === 'osd' ? 'eng+osd' : options.language || 'eng';
      
      worker = await Tesseract.createWorker(language, 1, {
        logger: (m: TesseractLogMessage) => {
          if (m.status === 'recognizing text') {
            const progress = Math.round(15 + (m.progress * 70));
            onProgress?.(progress);
          } else if (m.status === 'loading tesseract core') {
            onProgress?.(12);
          } else if (m.status === 'initializing tesseract') {
            onProgress?.(14);
          }
        }
      });
    } catch (workerError) {
      throw new Error(`Failed to initialize OCR engine: ${workerError instanceof Error ? workerError.message : 'Unknown error'}`);
    }

    onProgress?.(15);

    // Process the image with better error handling
    let data: TesseractData;
    try {
      const recognition = await worker.recognize(file);
      data = recognition.data as TesseractData;
    } catch (recognitionError) {
      throw new Error(`OCR processing failed: ${recognitionError instanceof Error ? recognitionError.message : 'Could not extract text from image'}`);
    }
    
    onProgress?.(85);

    // Validate OCR results
    if (!data || typeof data.text !== 'string') {
      throw new Error('OCR processing completed but no text was extracted from the image');
    }

    // Clean extracted text
    const cleanedText = data.text.trim();
    if (cleanedText.length === 0) {
      console.warn('No text found in image');
    }

    const result: TextResult = {
      text: cleanedText || 'No text detected in the image.'
    };

    if (options.confidence && typeof data.confidence === 'number') {
      result.confidence = Math.round(data.confidence * 100) / 100; // Round to 2 decimal places
    }

    // Enhanced JSON output with word-level data
    if (options.outputFormat === 'json') {
      if (options.confidence && data.words && Array.isArray(data.words)) {
        result.words = data.words
          .filter((word: TesseractWord) => word && word.text && word.text.trim().length > 0)
          .map((word: TesseractWord) => ({
            text: word.text.trim(),
            confidence: Math.round((word.confidence || 0) * 100) / 100,
            bbox: word.bbox || { x0: 0, y0: 0, x1: 0, y1: 0 }
          }));
      }
      
      // Add metadata to JSON output
      result.metadata = {
        language: options.language || 'eng',
        processingDate: new Date().toISOString(),
        filename: file.name,
        fileSize: file.size,
        totalWords: result.words?.length || 0,
        averageConfidence: result.words?.length ? 
          Math.round((result.words.reduce((sum, word) => sum + word.confidence, 0) / result.words.length) * 100) / 100 : 
          result.confidence || 0
      };
    }

    onProgress?.(90);

    // Clean up worker
    if (worker) {
      await worker.terminate();
      worker = null;
    }

    onProgress?.(95);

    // Create output blob with proper formatting
    let outputContent: string;
    let mimeType: string;
    let filename: string;

    if (options.outputFormat === 'json') {
      outputContent = JSON.stringify(result, null, 2);
      mimeType = 'application/json';
      filename = file.name.replace(/\.[^/.]+$/, '.json');
    } else {
      // Format text output nicely
      let formattedText = result.text;
      
      if (options.preserveFormatting) {
        // Keep original formatting
        formattedText = result.text;
      } else {
        // Clean up text formatting
        formattedText = result.text
          .replace(/\s+/g, ' ') // Replace multiple spaces with single space
          .replace(/\n\s*\n/g, '\n\n') // Clean up multiple line breaks
          .trim();
      }
      
      // Add metadata header for text files
      const header = `Extracted Text from: ${file.name}\n` +
                    `Processing Date: ${new Date().toLocaleString()}\n` +
                    `Language: ${options.language || 'eng'}\n` +
                    (result.confidence ? `Confidence: ${result.confidence}%\n` : '') +
                    `\n${'='.repeat(50)}\n\n`;
      
      outputContent = header + formattedText;
      mimeType = 'text/plain';
      filename = file.name.replace(/\.[^/.]+$/, '.txt');
    }

    onProgress?.(100);

    const blob = new Blob([outputContent], { type: mimeType });
    
    // Add filename property to blob for better handling
    Object.defineProperty(blob, 'suggestedFilename', {
      value: filename,
      writable: false,
      enumerable: false,
      configurable: true
    });

    return blob;

  } catch (error) {
    // Clean up worker in case of error
    if (worker) {
      try {
        await worker.terminate();
      } catch (cleanupError) {
        console.warn('Failed to cleanup OCR worker:', cleanupError);
      }
    }
    
    console.error('OCR conversion error:', error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('network') || error.message.includes('fetch')) {
        throw new Error('Network error: Could not download OCR resources. Please check your internet connection.');
      } else if (error.message.includes('worker') || error.message.includes('tesseract')) {
        throw new Error('OCR engine error: Failed to initialize text recognition. Please try again.');
      } else {
        throw new Error(`OCR processing failed: ${error.message}`);
      }
    } else {
      throw new Error('An unknown error occurred during text extraction. Please try again.');
    }
  }
}

// Comprehensive language support for OCR (100+ languages)
export const SUPPORTED_OCR_LANGUAGES = {
  // Auto-detection options
  'auto': '🤖 Auto-Detect Language',
  'osd': '🔍 Smart Detection (OSD)',
  
  // Major World Languages
  'eng': 'English',
  'spa': 'Spanish',
  'fra': 'French',
  'deu': 'German',
  'ita': 'Italian',
  'por': 'Portuguese',
  'rus': 'Russian',
  'chi_sim': 'Chinese (Simplified)',
  'chi_tra': 'Chinese (Traditional)',
  'jpn': 'Japanese',
  'kor': 'Korean',
  'ara': 'Arabic',
  'hin': 'Hindi',
  
  // European Languages
  'nld': 'Dutch',
  'swe': 'Swedish',
  'nor': 'Norwegian',
  'dan': 'Danish',
  'fin': 'Finnish',
  'pol': 'Polish',
  'ces': 'Czech',
  'hun': 'Hungarian',
  'ron': 'Romanian',
  'bul': 'Bulgarian',
  'hrv': 'Croatian',
  'srp': 'Serbian',
  'slk': 'Slovak',
  'slv': 'Slovenian',
  'est': 'Estonian',
  'lav': 'Latvian',
  'lit': 'Lithuanian',
  'ell': 'Greek',
  'tur': 'Turkish',
  'ukr': 'Ukrainian',
  'bel': 'Belarusian',
  'mkd': 'Macedonian',
  'alb': 'Albanian',
  'bos': 'Bosnian',
  'mlt': 'Maltese',
  'isl': 'Icelandic',
  'gle': 'Irish',
  'gla': 'Scottish Gaelic',
  'cym': 'Welsh',
  'eus': 'Basque',
  'cat': 'Catalan',
  'glg': 'Galician',
  
  // Asian Languages
  'tha': 'Thai',
  'vie': 'Vietnamese',
  'ind': 'Indonesian',
  'msa': 'Malay',
  'fil': 'Filipino',
  'ben': 'Bengali',
  'guj': 'Gujarati',
  'kan': 'Kannada',
  'mal': 'Malayalam',
  'mar': 'Marathi',
  'nep': 'Nepali',
  'ori': 'Odia',
  'pan': 'Punjabi',
  'sin': 'Sinhala',
  'tam': 'Tamil',
  'tel': 'Telugu',
  'urd': 'Urdu',
  'asm': 'Assamese',
  'bod': 'Tibetan',
  'mya': 'Myanmar (Burmese)',
  'khm': 'Khmer',
  'lao': 'Lao',
  'mon': 'Mongolian',
  'uzb': 'Uzbek',
  'kaz': 'Kazakh',
  'kir': 'Kyrgyz',
  'tgk': 'Tajik',
  'aze': 'Azerbaijani',
  'kat': 'Georgian',
  'hye': 'Armenian',
  'heb': 'Hebrew',
  'fas': 'Persian (Farsi)',
  'pus': 'Pashto',
  'snd': 'Sindhi',
  
  // African Languages
  'afr': 'Afrikaans',
  'amh': 'Amharic',
  'hau': 'Hausa',
  'ibo': 'Igbo',
  'kin': 'Kinyarwanda',
  'mlg': 'Malagasy',
  'orm': 'Oromo',
  'som': 'Somali',
  'swa': 'Swahili',
  'tir': 'Tigrinya',
  'xho': 'Xhosa',
  'yor': 'Yoruba',
  'zul': 'Zulu',
  
  // Middle Eastern Languages
  'kur': 'Kurdish',
  'ckb': 'Kurdish (Sorani)',
  
  // Latin Script Languages
  'lat': 'Latin',
  'epo': 'Esperanto',
  'ina': 'Interlingua',
  
  // Multi-language options
  'script/Arabic': 'Arabic Script',
  'script/Armenian': 'Armenian Script',
  'script/Bengali': 'Bengali Script',
  'script/Canadian_Aboriginal': 'Canadian Aboriginal Script',
  'script/Cherokee': 'Cherokee Script',
  'script/Cyrillic': 'Cyrillic Script',
  'script/Devanagari': 'Devanagari Script',
  'script/Ethiopic': 'Ethiopic Script',
  'script/Fraktur': 'Fraktur Script',
  'script/Georgian': 'Georgian Script',
  'script/Greek': 'Greek Script',
  'script/Gujarati': 'Gujarati Script',
  'script/Gurmukhi': 'Gurmukhi Script',
  'script/HanS': 'Han (Simplified) Script',
  'script/HanT': 'Han (Traditional) Script',
  'script/Hangul': 'Hangul Script',
  'script/Hebrew': 'Hebrew Script',
  'script/Hiragana': 'Hiragana Script',
  'script/Kannada': 'Kannada Script',
  'script/Katakana': 'Katakana Script',
  'script/Khmer': 'Khmer Script',
  'script/Lao': 'Lao Script',
  'script/Latin': 'Latin Script',
  'script/Malayalam': 'Malayalam Script',
  'script/Myanmar': 'Myanmar Script',
  'script/Oriya': 'Oriya Script',
  'script/Sinhala': 'Sinhala Script',
  'script/Tamil': 'Tamil Script',
  'script/Telugu': 'Telugu Script',
  'script/Thaana': 'Thaana Script',
  'script/Thai': 'Thai Script',
  'script/Tibetan': 'Tibetan Script',
  'script/Vietnamese': 'Vietnamese Script'
} as const;

export type SupportedLanguage = keyof typeof SUPPORTED_OCR_LANGUAGES;
