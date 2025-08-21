import { Canvg } from 'canvg';
import { sanitizeSVG } from '@/lib/utils/file-utils';

export interface SvgToPngOptions {
  scale: number;
  backgroundColor: string;
  dpi: number;
}

export async function convertSvgToPng(
  file: File,
  options: SvgToPngOptions,
  onProgress?: (progress: number) => void
): Promise<Blob> {
  return new Promise(async (resolve, reject) => {
    try {
      onProgress?.(10);

      // Read SVG content
      const svgContent = await file.text();
      const sanitizedSvg = sanitizeSVG(svgContent);

      onProgress?.(25);

      // Create canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        throw new Error('Could not get canvas context');
      }

      onProgress?.(40);

      // Parse SVG and get dimensions
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(sanitizedSvg, 'image/svg+xml');
      const svgElement = svgDoc.documentElement;

      // Get SVG dimensions
      let width = 300; // default width
      let height = 150; // default height

      const viewBox = svgElement.getAttribute('viewBox');
      if (viewBox) {
        const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
        width = vbWidth;
        height = vbHeight;
      } else {
        const svgWidth = svgElement.getAttribute('width');
        const svgHeight = svgElement.getAttribute('height');
        if (svgWidth && svgHeight) {
          width = parseFloat(svgWidth);
          height = parseFloat(svgHeight);
        }
      }

      // Apply scale and DPI with device pixel ratio for high quality
      const devicePixelRatio = window.devicePixelRatio || 1;
      const scaleFactor = options.scale * (options.dpi / 96); // 96 DPI is default
      const finalWidth = width * scaleFactor;
      const finalHeight = height * scaleFactor;
      
      canvas.width = finalWidth * devicePixelRatio;
      canvas.height = finalHeight * devicePixelRatio;
      canvas.style.width = finalWidth + 'px';
      canvas.style.height = finalHeight + 'px';

      // Scale context for high DPI displays
      ctx.scale(devicePixelRatio, devicePixelRatio);
      
      // Improve rendering quality
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      onProgress?.(60);

      // Fill background if specified
      if (options.backgroundColor && options.backgroundColor !== 'transparent') {
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, finalWidth, finalHeight);
      }

      onProgress?.(75);

      // Render SVG to canvas using Canvg with high quality settings
      const v = Canvg.fromString(ctx, sanitizedSvg, {
        ignoreDimensions: true,
        scaleWidth: finalWidth,
        scaleHeight: finalHeight,
        enableRedraw: false,
        ignoreClear: true,
      });

      await v.render();

      onProgress?.(90);

      // Convert to PNG
      canvas.toBlob(
        (blob) => {
          if (blob) {
            onProgress?.(100);
            resolve(blob);
          } else {
            reject(new Error('Failed to convert SVG to PNG'));
          }
        },
        'image/png'
      );
    } catch (error) {
      reject(error);
    }
  });
}
