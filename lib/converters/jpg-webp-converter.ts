export interface JpgToWebPOptions {
  quality: number;
  width?: number;
  height?: number;
  stripMetadata: boolean;
}

export async function convertJpgToWebP(
  file: File,
  options: JpgToWebPOptions,
  onProgress?: (progress: number) => void
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { 
      alpha: false,
      desynchronized: false,
      colorSpace: 'srgb',
      willReadFrequently: false
    });
    
    if (!ctx) {
      reject(new Error('Could not get canvas context'));
      return;
    }

    const img = new Image();
    let objectUrl: string;

    const cleanup = () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
        objectUrl = '';
      }
    };

    img.onload = () => {
      try {
        onProgress?.(25);

        // Calculate dimensions
        let { width, height } = img;
        if (options.width || options.height) {
          const aspectRatio = width / height;
          if (options.width && options.height) {
            width = options.width;
            height = options.height;
          } else if (options.width) {
            width = options.width;
            height = width / aspectRatio;
          } else if (options.height) {
            height = options.height;
            width = height * aspectRatio;
          }
        }

        // Set canvas size with device pixel ratio for high quality
        const devicePixelRatio = window.devicePixelRatio || 1;
        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        // Scale context for high DPI displays
        ctx.scale(devicePixelRatio, devicePixelRatio);
        
        // Optimize image rendering quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        
        // Set optimal composite operation for best quality
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1.0;

        onProgress?.(50);

        // Draw image with high quality settings
        ctx.drawImage(img, 0, 0, width, height);

        onProgress?.(75);

        // Convert to WebP with optimized quality settings
        // Use higher quality for better image fidelity
        const webpQuality = Math.max(0.75, Math.min(0.95, options.quality / 100));
        
        canvas.toBlob(
          (blob) => {
            cleanup();
            if (blob) {
              onProgress?.(100);
              resolve(blob);
            } else {
              reject(new Error('Failed to convert image to WebP'));
            }
          },
          'image/webp',
          webpQuality
        );
      } catch (error) {
        cleanup();
        reject(error);
      }
    };

    img.onerror = () => {
      cleanup();
      reject(new Error('Failed to load image'));
    };

    objectUrl = URL.createObjectURL(file);
    img.src = objectUrl;
  });
}
