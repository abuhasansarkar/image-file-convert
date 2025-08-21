import { PDFDocument, PageSizes } from 'pdf-lib';

export interface ImagesToPdfOptions {
  pageSize: 'A4' | 'Letter' | 'Legal';
  dpi: number;
  compression: boolean;
}

export async function convertImagesToPdf(
  files: File[],
  options: ImagesToPdfOptions,
  onProgress?: (progress: number) => void
): Promise<Blob> {
  const pdfDoc = await PDFDocument.create();
  const totalFiles = files.length;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    onProgress?.(Math.round((i / totalFiles) * 90));

    try {
      const imageBytes = await file.arrayBuffer();
      let image;

      // Embed image based on type
      if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
        image = await pdfDoc.embedJpg(imageBytes);
      } else if (file.type === 'image/png') {
        image = await pdfDoc.embedPng(imageBytes);
      } else {
        // Convert other formats to PNG first with high quality
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d', {
          alpha: true,
          desynchronized: false,
          colorSpace: 'srgb'
        });
        
        if (!ctx) {
          throw new Error('Could not get canvas context');
        }
        
        const img = new Image();
        let objectUrl: string;
        
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          objectUrl = URL.createObjectURL(file);
          img.src = objectUrl;
        });

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
        
        ctx.drawImage(img, 0, 0, img.width, img.height);

        const pngBlob = await new Promise<Blob>((resolve, reject) => {
          canvas.toBlob((blob) => {
            URL.revokeObjectURL(objectUrl);
            if (blob) resolve(blob);
            else reject(new Error('Failed to convert image'));
          }, 'image/png');
        });

        const pngBytes = await pngBlob.arrayBuffer();
        image = await pdfDoc.embedPng(pngBytes);
      }

      // Get page dimensions
      const pageSize = PageSizes[options.pageSize];
      const page = pdfDoc.addPage(pageSize);
      const { width: pageWidth, height: pageHeight } = page.getSize();

      // Calculate image dimensions to fit page
      const imageAspectRatio = image.width / image.height;
      const pageAspectRatio = pageWidth / pageHeight;

      let imageWidth, imageHeight;
      if (imageAspectRatio > pageAspectRatio) {
        // Image is wider than page
        imageWidth = pageWidth * 0.9; // 90% of page width
        imageHeight = imageWidth / imageAspectRatio;
      } else {
        // Image is taller than page
        imageHeight = pageHeight * 0.9; // 90% of page height
        imageWidth = imageHeight * imageAspectRatio;
      }

      // Center the image on the page
      const x = (pageWidth - imageWidth) / 2;
      const y = (pageHeight - imageHeight) / 2;

      page.drawImage(image, {
        x,
        y,
        width: imageWidth,
        height: imageHeight,
      });

    } catch (error) {
      console.error(`Failed to process image ${file.name}:`, error);
      // Continue with other images
    }
  }

  onProgress?.(95);

  const pdfBytes = await pdfDoc.save({
    useObjectStreams: options.compression,
  });

  onProgress?.(100);

  return new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
}
