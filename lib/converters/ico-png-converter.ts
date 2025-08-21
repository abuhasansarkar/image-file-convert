export interface IcoToPngOptions {
  size: number;
  quality: number;
}

export async function convertIcoToPng(
  file: File,
  options: IcoToPngOptions,
  onProgress?: (progress: number) => void
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    onProgress?.(10);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    if (!ctx) {
      reject(new Error('Could not get canvas context'));
      return;
    }

    img.onload = () => {
      onProgress?.(30);

      // Set canvas size based on options or original size
      const targetSize = options.size || Math.max(img.width, img.height);
      canvas.width = targetSize;
      canvas.height = targetSize;

      onProgress?.(50);

      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate position to center the image
      const x = (targetSize - img.width) / 2;
      const y = (targetSize - img.height) / 2;

      ctx.drawImage(img, x, y, img.width, img.height);
      onProgress?.(80);

      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(img.src);
          if (blob) {
            onProgress?.(100);
            resolve(blob);
          } else {
            reject(new Error('Failed to convert ICO to PNG'));
          }
        },
        'image/png',
        options.quality / 100
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(img.src);
      reject(new Error('Failed to load ICO image'));
    };

    onProgress?.(5);
    img.src = URL.createObjectURL(file);
  });
}
