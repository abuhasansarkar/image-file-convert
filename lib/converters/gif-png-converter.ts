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
    const ctx = canvas.getContext('2d');
    const img = new Image();

    if (!ctx) {
      reject(new Error('Could not get canvas context'));
      return;
    }

    img.onload = () => {
      onProgress?.(30);

      canvas.width = img.width;
      canvas.height = img.height;

      onProgress?.(50);

      // Set background if not preserving transparency
      if (!options.preserveTransparency) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0);
      onProgress?.(80);

      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(img.src);
          if (blob) {
            onProgress?.(100);
            resolve(blob);
          } else {
            reject(new Error('Failed to convert GIF to PNG'));
          }
        },
        'image/png',
        options.quality / 100
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(img.src);
      reject(new Error('Failed to load GIF image'));
    };

    onProgress?.(5);
    img.src = URL.createObjectURL(file);
  });
}
