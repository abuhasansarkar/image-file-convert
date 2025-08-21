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
}

export async function convertImageToText(
  file: File,
  options: ImageToTextOptions,
  onProgress?: (progress: number) => void
): Promise<Blob> {
  try {
    onProgress?.(10);

    // Initialize Tesseract worker
    const worker = await Tesseract.createWorker(options.language || 'eng', 1, {
      logger: (m: TesseractLogMessage) => {
        if (m.status === 'recognizing text') {
          const progress = Math.round(10 + (m.progress * 80));
          onProgress?.(progress);
        }
      }
    });

    onProgress?.(20);

    // Process the image
    const { data } = await worker.recognize(file);
    
    onProgress?.(90);

    const result: TextResult = {
      text: data.text
    };

    if (options.confidence) {
      result.confidence = data.confidence;
    }

    if (options.outputFormat === 'json') {
      if (options.confidence && (data as any).words) {
        result.words = (data as any).words.map((word: any) => ({
          text: word.text,
          confidence: word.confidence,
          bbox: word.bbox
        }));
      }
    }

    // Clean up worker
    await worker.terminate();

    onProgress?.(95);

    // Create output blob
    let outputContent: string;
    let mimeType: string;

    if (options.outputFormat === 'json') {
      outputContent = JSON.stringify(result, null, 2);
      mimeType = 'application/json';
    } else {
      outputContent = result.text;
      mimeType = 'text/plain';
    }

    onProgress?.(100);

    return new Blob([outputContent], { type: mimeType });

  } catch (error) {
    console.error('OCR conversion error:', error);
    throw new Error(`Failed to extract text from image: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Supported languages for OCR
export const SUPPORTED_OCR_LANGUAGES = {
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
  'hin': 'Hindi'
} as const;

export type SupportedLanguage = keyof typeof SUPPORTED_OCR_LANGUAGES;
