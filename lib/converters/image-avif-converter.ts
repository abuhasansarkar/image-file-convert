interface ImageToAvifOptions {
  quality?: number;
  width?: number;
  height?: number;
  stripMetadata?: boolean;
}

export async function convertImageToAvif(
  file: File,
  options: ImageToAvifOptions = {},
  onProgress?: (progress: number) => void
): Promise<Blob> {
  const {
    quality = 80,
    width,
    height
  } = options;

  return new Promise((resolve, reject) => {
    onProgress?.(10);

    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      try {
        onProgress?.(30);

        // Calculate dimensions
        let targetWidth = width || img.naturalWidth;
        let targetHeight = height || img.naturalHeight;

        // Maintain aspect ratio if only one dimension is specified
        if (width && !height) {
          targetHeight = (img.naturalHeight * width) / img.naturalWidth;
        } else if (height && !width) {
          targetWidth = (img.naturalWidth * height) / img.naturalHeight;
        }

        onProgress?.(50);

        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }

        canvas.width = targetWidth;
        canvas.height = targetHeight;

        onProgress?.(70);

        // Draw image on canvas
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

        onProgress?.(90);

        // Check if browser supports AVIF
        const testCanvas = document.createElement('canvas');
        testCanvas.width = 1;
        testCanvas.height = 1;
        
        try {
          testCanvas.toBlob(
            (testBlob) => {
              if (testBlob) {
                // Browser supports AVIF, proceed with conversion
                canvas.toBlob(
                  (blob) => {
                    if (blob) {
                      onProgress?.(100);
                      resolve(blob);
                    } else {
                      reject(new Error('Failed to convert image to AVIF format'));
                    }
                  },
                  'image/avif',
                  quality / 100
                );
              } else {
                reject(new Error('Your browser does not support AVIF format. Please use a modern browser like Chrome 85+, Firefox 93+, or Safari 16+.'));
              }
            },
            'image/avif',
            0.8
          );
        } catch {
          reject(new Error('AVIF format is not supported in your browser. Please use a modern browser.'));
        }
      } catch (error) {
        reject(error);
      }
    };

    img.onerror = () => {
      reject(new Error('Failed to load image. Please ensure the image is valid.'));
    };

    // Create object URL for the image file
    const objectUrl = URL.createObjectURL(file);
    img.src = objectUrl;

    // Clean up object URL after image loads
    const originalOnLoad = img.onload;
    img.onload = (event) => {
      URL.revokeObjectURL(objectUrl);
      if (originalOnLoad) originalOnLoad.call(img, event);
    };
  });
}

// Utility function to check if browser supports AVIF encoding
export function isAvifEncodingSupported(): Promise<boolean> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    
    try {
      canvas.toBlob(
        (blob) => {
          resolve(!!blob);
        },
        'image/avif',
        0.8
      );
    } catch {
      resolve(false);
    }
  });
}

// Get supported input formats for AVIF conversion
export const AVIF_INPUT_FORMATS = [
  'image/jpeg',
  'image/jpg', 
  'image/png',
  'image/webp',
  'image/bmp',
  'image/gif',
  'image/tiff',
  'image/svg+xml'
] as const;
