import { ConversionType } from './file-utils';

export interface ConversionQualityOptions {
  enableHighDPI: boolean;
  imageSmoothingQuality: 'low' | 'medium' | 'high';
  preserveColorProfile: boolean;
  maxDimension?: number;
}

export const DEFAULT_QUALITY_OPTIONS: ConversionQualityOptions = {
  enableHighDPI: true,
  imageSmoothingQuality: 'high',
  preserveColorProfile: true,
  maxDimension: 4096,
};

export function setupHighQualityCanvas(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  options: ConversionQualityOptions = DEFAULT_QUALITY_OPTIONS
): CanvasRenderingContext2D {
  const ctx = canvas.getContext('2d', {
    alpha: true,
    desynchronized: false,
    colorSpace: options.preserveColorProfile ? 'srgb' : 'srgb',
  });

  if (!ctx) {
    throw new Error('Could not get canvas context');
  }

  // Apply device pixel ratio for high DPI displays
  const devicePixelRatio = options.enableHighDPI ? (window.devicePixelRatio || 1) : 1;
  
  // Limit maximum dimensions to prevent memory issues
  const maxDim = options.maxDimension || 4096;
  const scale = Math.min(1, maxDim / Math.max(width, height));
  const finalWidth = width * scale;
  const finalHeight = height * scale;

  canvas.width = finalWidth * devicePixelRatio;
  canvas.height = finalHeight * devicePixelRatio;
  canvas.style.width = finalWidth + 'px';
  canvas.style.height = finalHeight + 'px';

  // Scale context for high DPI displays
  ctx.scale(devicePixelRatio, devicePixelRatio);

  // Set high quality rendering options
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = options.imageSmoothingQuality;

  return ctx;
}

export function validateImageDimensions(width: number, height: number): boolean {
  const MAX_CANVAS_SIZE = 32767; // Maximum canvas size in most browsers
  const MAX_PIXELS = 268435456; // 16384 * 16384 - reasonable limit for memory

  return (
    width > 0 &&
    height > 0 &&
    width <= MAX_CANVAS_SIZE &&
    height <= MAX_CANVAS_SIZE &&
    width * height <= MAX_PIXELS
  );
}

export function calculateOptimalDimensions(
  originalWidth: number,
  originalHeight: number,
  targetWidth?: number,
  targetHeight?: number,
  maxDimension: number = 4096
): { width: number; height: number } {
  let width = originalWidth;
  let height = originalHeight;

  // Apply user-specified dimensions
  if (targetWidth || targetHeight) {
    const aspectRatio = originalWidth / originalHeight;
    if (targetWidth && targetHeight) {
      width = targetWidth;
      height = targetHeight;
    } else if (targetWidth) {
      width = targetWidth;
      height = targetWidth / aspectRatio;
    } else if (targetHeight) {
      height = targetHeight;
      width = targetHeight * aspectRatio;
    }
  }

  // Apply maximum dimension limit
  const scale = Math.min(1, maxDimension / Math.max(width, height));
  width *= scale;
  height *= scale;

  // Ensure dimensions are valid
  if (!validateImageDimensions(width, height)) {
    throw new Error('Invalid image dimensions calculated');
  }

  return { width: Math.round(width), height: Math.round(height) };
}

export async function createImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    let objectUrl = '';

    const cleanup = () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };

    img.onload = () => {
      cleanup();
      resolve(img);
    };

    img.onerror = () => {
      cleanup();
      reject(new Error(`Failed to load image: ${file.name}`));
    };

    objectUrl = URL.createObjectURL(file);
    img.src = objectUrl;
  });
}

export function clampQuality(quality: number): number {
  return Math.max(0.1, Math.min(1.0, quality / 100));
}

export function getOptimalFormat(conversionType: ConversionType): {
  mimeType: string;
  extension: string;
  supportsTransparency: boolean;
} {
  const formatMap = {
    'jpg-webp': { mimeType: 'image/webp', extension: 'webp', supportsTransparency: true },
    'png-webp': { mimeType: 'image/webp', extension: 'webp', supportsTransparency: true },
    'images-pdf': { mimeType: 'application/pdf', extension: 'pdf', supportsTransparency: false },
    'pdf-jpg': { mimeType: 'image/jpeg', extension: 'jpg', supportsTransparency: false },
    'heic-jpg': { mimeType: 'image/jpeg', extension: 'jpg', supportsTransparency: false },
    'svg-png': { mimeType: 'image/png', extension: 'png', supportsTransparency: true },
    'raw-tiff': { mimeType: 'image/tiff', extension: 'tiff', supportsTransparency: false },
    'bmp-png': { mimeType: 'image/png', extension: 'png', supportsTransparency: true },
  };

  return formatMap[conversionType];
}

export async function convertBlobToHighQuality(
  canvas: HTMLCanvasElement,
  mimeType: string,
  quality?: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const callback = (blob: Blob | null) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error('Failed to convert canvas to blob'));
      }
    };

    if (mimeType === 'image/png') {
      canvas.toBlob(callback, mimeType);
    } else {
      canvas.toBlob(callback, mimeType, quality);
    }
  });
}
