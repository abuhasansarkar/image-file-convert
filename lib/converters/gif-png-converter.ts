export interface GifToPngOptions {
  quality: number;
  preserveTransparency: boolean;
  extractFirstFrame: boolean;
}

export async function convertGifToPng(
  file: File,
  options: GifToPngOptions,
  onProgress?: (progress: number) => void
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    onProgress?.(10);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', {
      alpha: options.preserveTransparency,
      desynchronized: false,
      colorSpace: 'srgb'
    });
    const img = new Image();
    let objectUrl: string;

    const cleanup = () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
        objectUrl = '';
      }
    };

    if (!ctx) {
      reject(new Error('Could not get canvas context'));
      return;
    }

    img.onload = () => {
      try {
        onProgress?.(30);

        // Set canvas size with device pixel ratio for high quality
        const devicePixelRatio = window.devicePixelRatio || 1;
        canvas.width = img.width * devicePixelRatio;
        canvas.height = img.height * devicePixelRatio;
        canvas.style.width = img.width + 'px';
        canvas.style.height = img.height + 'px';

        // Scale context for high DPI displays
        ctx.scale(devicePixelRatio, devicePixelRatio);
        
        // Improve image rendering quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        onProgress?.(50);

        // Set background if not preserving transparency
        if (!options.preserveTransparency) {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, img.width, img.height);
        }

        ctx.drawImage(img, 0, 0, img.width, img.height);
        onProgress?.(80);

        canvas.toBlob(
          (blob) => {
            cleanup();
            if (blob) {
              onProgress?.(100);
              resolve(blob);
            } else {
              reject(new Error('Failed to convert GIF to PNG'));
            }
          },
          'image/png'
        );
      } catch (error) {
        cleanup();
        reject(error);
      }
    };

    img.onerror = () => {
      cleanup();
      reject(new Error('Failed to load GIF image. Please ensure the file is a valid GIF format.'));
    };

    try {
      onProgress?.(5);
      objectUrl = URL.createObjectURL(file);
      img.src = objectUrl;
      
      // Set timeout for loading
      setTimeout(() => {
        if (!img.complete) {
          cleanup();
          reject(new Error('GIF loading timeout. The file may be corrupted or too large.'));
        }
      }, 30000);
    } catch (error) {
      cleanup();
      reject(new Error(`Failed to process GIF file: ${error instanceof Error ? error.message : 'Unknown error'}`));
    }
  });
}
