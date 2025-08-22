import { Canvg } from 'canvg';
import { sanitizeSVG } from '@/lib/utils/file-utils';

// Enhanced SVG dimension detection
function getSVGDimensions(svgElement: SVGSVGElement): { width: number; height: number } {
  let width = 300;
  let height = 150;

  // Try viewBox first
  const viewBox = svgElement.getAttribute('viewBox');
  if (viewBox) {
    const [, , vbWidth, vbHeight] = viewBox.split(/\s+/).map(Number);
    if (!isNaN(vbWidth) && !isNaN(vbHeight) && vbWidth > 0 && vbHeight > 0) {
      width = vbWidth;
      height = vbHeight;
      return { width, height };
    }
  }

  // Try width/height attributes
  const svgWidth = svgElement.getAttribute('width');
  const svgHeight = svgElement.getAttribute('height');
  
  if (svgWidth && svgHeight) {
    const parsedWidth = parseFloat(svgWidth.replace(/[^0-9.]/g, ''));
    const parsedHeight = parseFloat(svgHeight.replace(/[^0-9.]/g, ''));
    
    if (!isNaN(parsedWidth) && !isNaN(parsedHeight) && parsedWidth > 0 && parsedHeight > 0) {
      width = parsedWidth;
      height = parsedHeight;
      return { width, height };
    }
  }

  // Try getBBox as fallback (if available)
  try {
    const bbox = svgElement.getBBox();
    if (bbox.width > 0 && bbox.height > 0) {
      width = bbox.width;
      height = bbox.height;
    }
  } catch {
    // getBBox might not be available in all contexts
  }

  return { width, height };
}

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

      // Check for parsing errors
      const parserError = svgDoc.querySelector('parsererror');
      if (parserError) {
        throw new Error('Invalid SVG format: ' + parserError.textContent);
      }

      if (svgElement.tagName.toLowerCase() !== 'svg') {
        throw new Error('File does not contain valid SVG content');
      }

      // Get SVG dimensions with enhanced detection
      const { width, height } = getSVGDimensions(svgElement as unknown as SVGSVGElement);

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
      try {
        const v = Canvg.fromString(ctx, sanitizedSvg, {
          ignoreDimensions: true,
          scaleWidth: finalWidth,
          scaleHeight: finalHeight,
          enableRedraw: false,
          ignoreClear: true,
          offsetX: 0,
          offsetY: 0,
        });

        await v.render();
      } catch (renderError) {
        // Fallback: try rendering without Canvg using native SVG support
        console.warn('Canvg rendering failed, trying fallback method:', renderError);
        
        const svgBlob = new Blob([sanitizedSvg], { type: 'image/svg+xml' });
        const svgUrl = URL.createObjectURL(svgBlob);
        
        try {
          const img = new Image();
          await new Promise((imgResolve, imgReject) => {
            img.onload = () => imgResolve(undefined);
            img.onerror = () => imgReject(new Error('Failed to load SVG as image'));
            img.src = svgUrl;
          });
          
          ctx.drawImage(img, 0, 0, finalWidth, finalHeight);
          URL.revokeObjectURL(svgUrl);
        } catch (fallbackError) {
          URL.revokeObjectURL(svgUrl);
          throw new Error('SVG rendering failed: ' + (fallbackError instanceof Error ? fallbackError.message : 'Unknown error'));
        }
      }

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
