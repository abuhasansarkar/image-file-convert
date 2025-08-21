import * as pdfjsLib from 'pdfjs-dist';

// Set up PDF.js worker with multiple fallbacks
if (typeof window !== 'undefined') {
  try {
    // Try to use local worker first
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
  } catch {
    // Fallback to CDN with HTTPS
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
  }
}

export interface PdfToJpgOptions {
  dpi: number;
  quality: number;
  pageRange?: string;
}

export async function convertPdfToJpg(
  file: File,
  options: PdfToJpgOptions,
  onProgress?: (progress: number) => void
): Promise<Blob[]> {
  try {
    onProgress?.(5);
    const arrayBuffer = await file.arrayBuffer();
    onProgress?.(10);
    
    const loadingTask = pdfjsLib.getDocument({ 
      data: arrayBuffer,
      cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
      cMapPacked: true,
      standardFontDataUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/standard_fonts/'
    });
    
    const pdf = await loadingTask.promise;
    onProgress?.(15);
  
  const totalPages = pdf.numPages;
  const pagesToConvert = parsePageRange(options.pageRange, totalPages);
  const results: Blob[] = [];
  
  for (let i = 0; i < pagesToConvert.length; i++) {
    const pageNum = pagesToConvert[i];
    onProgress?.(Math.round((i / pagesToConvert.length) * 90));
    
    try {
      const page = await pdf.getPage(pageNum);
      const scale = options.dpi / 72; // PDF default is 72 DPI
      const viewport = page.getViewport({ scale });
      
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d', {
        alpha: false,
        desynchronized: false,
        colorSpace: 'srgb'
      });
      
      if (!context) {
        throw new Error('Could not get canvas context');
      }
      
      // Set canvas size with device pixel ratio for high quality
      const devicePixelRatio = window.devicePixelRatio || 1;
      canvas.width = viewport.width * devicePixelRatio;
      canvas.height = viewport.height * devicePixelRatio;
      canvas.style.width = viewport.width + 'px';
      canvas.style.height = viewport.height + 'px';
      
      // Scale context for high DPI displays
      context.scale(devicePixelRatio, devicePixelRatio);
      
      // Improve rendering quality
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
        transform: [devicePixelRatio, 0, 0, devicePixelRatio, 0, 0],
      };
      
      await page.render(renderContext).promise;
      
      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(
          (blob) => {
            if (blob) resolve(blob);
            else reject(new Error('Failed to convert page to JPG'));
          },
          'image/jpeg',
          Math.max(0.1, Math.min(1.0, options.quality / 100))
        );
      });
      
      results.push(blob);
    } catch (error) {
      console.error(`Failed to convert page ${pageNum}:`, error);
    }
  }
  
  onProgress?.(100);
  return results;
  } catch (error) {
    console.error('PDF to JPG conversion error:', error);
    throw new Error(`Failed to convert PDF to JPG: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

function parsePageRange(pageRange: string | undefined, totalPages: number): number[] {
  if (!pageRange || pageRange.trim() === '') {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  
  const pages = new Set<number>();
  const parts = pageRange.split(',');
  
  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.includes('-')) {
      const [start, end] = trimmed.split('-').map(s => parseInt(s.trim()));
      if (!isNaN(start) && !isNaN(end)) {
        for (let i = Math.max(1, start); i <= Math.min(totalPages, end); i++) {
          pages.add(i);
        }
      }
    } else {
      const pageNum = parseInt(trimmed);
      if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
        pages.add(pageNum);
      }
    }
  }
  
  return Array.from(pages).sort((a, b) => a - b);
}
