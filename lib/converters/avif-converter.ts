interface AvifConverterOptions {
  quality?: number;
  width?: number;
  height?: number;
  stripMetadata?: boolean;
  format?: 'jpg' | 'png' | 'jpeg';
}

export async function convertAvifToJpg(
  file: File,
  options: AvifConverterOptions = {},
  onProgress?: (progress: number) => void
): Promise<Blob> {
  return convertAvif(file, { ...options, format: 'jpg' }, onProgress);
}

export async function convertAvifToPng(
  file: File,
  options: AvifConverterOptions = {},
  onProgress?: (progress: number) => void
): Promise<Blob> {
  return convertAvif(file, { ...options, format: 'png' }, onProgress);
}

export async function convertAvifToJpeg(
  file: File,
  options: AvifConverterOptions = {},
  onProgress?: (progress: number) => void
): Promise<Blob> {
  return convertAvif(file, { ...options, format: 'jpeg' }, onProgress);
}

async function convertAvif(
  file: File,
  options: AvifConverterOptions = {},
  onProgress?: (progress: number) => void
): Promise<Blob> {
  const {
    quality = 90,
    width,
    height,
    format = 'jpg'
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

        // Convert to blob
        const outputFormat = format === 'jpg' || format === 'jpeg' ? 'image/jpeg' : 'image/png';
        const qualityValue = outputFormat === 'image/jpeg' ? quality / 100 : undefined;

        canvas.toBlob(
          (blob) => {
            if (blob) {
              onProgress?.(100);
              resolve(blob);
            } else {
              reject(new Error('Failed to convert AVIF image'));
            }
          },
          outputFormat,
          qualityValue
        );
      } catch (error) {
        reject(error);
      }
    };

    img.onerror = () => {
      reject(new Error('Failed to load AVIF image. Please ensure the image is valid.'));
    };

    // Create object URL for the AVIF file
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

// Utility function to check if browser supports AVIF
export function isAvifSupported(): Promise<boolean> {
  return new Promise((resolve) => {
    const avif = new Image();
    avif.onload = () => resolve(true);
    avif.onerror = () => resolve(false);
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  });
}
