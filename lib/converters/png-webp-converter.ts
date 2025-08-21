export interface PngToWebPOptions {
  quality: number;
  width?: number;
  height?: number;
  stripMetadata: boolean;
}

export async function convertPngToWebP(
  file: File,
  options: PngToWebPOptions,
  onProgress?: (progress: number) => void
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: false,
      colorSpace: 'srgb'
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
        
        // Improve image rendering quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        onProgress?.(50);

        // Clear canvas with transparency support
        ctx.clearRect(0, 0, width, height);
        
        // Draw image with high quality settings and transparency
        ctx.drawImage(img, 0, 0, width, height);

        onProgress?.(75);

        // Convert to WebP with transparency support and proper quality
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
          Math.max(0.1, Math.min(1.0, options.quality / 100))
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
