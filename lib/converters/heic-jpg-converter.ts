// Enhanced HEIC to JPG converter with better error handling and fallback options

export interface HeicToJpgOptions {
  quality: number;
  width?: number;
  height?: number;
}

// Enhanced browser support detection
const getBrowserSupport = () => {
  const userAgent = navigator.userAgent;
  const isChrome = userAgent.includes('Chrome');
  const isSafari = userAgent.includes('Safari') && !isChrome;
  const isFirefox = userAgent.includes('Firefox');
  const isEdge = userAgent.includes('Edge');
  
  return {
    heicSupport: isSafari, // Safari has native HEIC support
    canvasSupport: true,
    browser: isChrome ? 'Chrome' : isSafari ? 'Safari' : isFirefox ? 'Firefox' : isEdge ? 'Edge' : 'Unknown'
  };
};

// Check if file is HEIC/HEIF format
const isHeicFile = (file: File): boolean => {
  const heicTypes = ['image/heic', 'image/heif'];
  const heicExtensions = ['.heic', '.heif'];
  
  return heicTypes.includes(file.type.toLowerCase()) || 
         heicExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
};

// Convert any image format to JPG using canvas
const convertImageToJpg = (
  img: HTMLImageElement,
  options: HeicToJpgOptions,
  onProgress?: (progress: number) => void
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { 
        alpha: false,
        desynchronized: false,
        colorSpace: 'srgb'
      });
      
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

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

      // Fill with white background for JPG
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      onProgress?.(50);

      // Draw image with high quality settings
      ctx.drawImage(img, 0, 0, width, height);

      onProgress?.(75);

      // Convert to JPG with proper quality
      canvas.toBlob(
        (blob) => {
          if (blob) {
            onProgress?.(100);
            resolve(blob);
          } else {
            reject(new Error('Failed to convert image to JPG'));
          }
        },
        'image/jpeg',
        Math.max(0.1, Math.min(1.0, options.quality / 100))
      );
    } catch (error) {
      reject(error);
    }
  });
};

export async function convertHeicToJpg(
  file: File,
  options: HeicToJpgOptions,
  onProgress?: (progress: number) => void
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    let objectUrl: string;

    const cleanup = () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
        objectUrl = '';
      }
    };

    img.onload = async () => {
      try {
        const result = await convertImageToJpg(img, options, onProgress);
        cleanup();
        resolve(result);
      } catch (error) {
        cleanup();
        reject(error);
      }
    };

    img.onerror = () => {
      cleanup();
      
      const browserSupport = getBrowserSupport();
      
      // Enhanced error handling for HEIC files
      if (isHeicFile(file)) {
        if (!browserSupport.heicSupport) {
          const errorMessage = `HEIC format is not natively supported in ${browserSupport.browser}. ` +
            'For best results, please use Safari on iOS/macOS, or try converting with a different tool first. ' +
            'Alternatively, you can convert HEIC files to JPG using your device\'s built-in photo app first.';
          reject(new Error(errorMessage));
          return;
        }
      }
      
      // Generic error for other formats
      reject(new Error(
        `Failed to load image file: ${file.name}. ` +
        'Please ensure the file is a valid image format and not corrupted. ' +
        'Supported formats include JPG, PNG, WebP, GIF, BMP, TIFF, and HEIC (Safari only).'
      ));
    };

    // Try to load the file
    try {
      objectUrl = URL.createObjectURL(file);
      img.src = objectUrl;
      
      // Set a timeout for loading with progress feedback
      const timeoutDuration = isHeicFile(file) ? 45000 : 30000; // Longer timeout for HEIC files
      const timeoutId = setTimeout(() => {
        if (!img.complete) {
          cleanup();
          const message = isHeicFile(file) 
            ? 'HEIC file loading timeout. Large HEIC files may take longer to process. Please try a smaller file or use Safari browser.'
            : 'Image loading timeout. The file may be corrupted, too large, or in an unsupported format.';
          reject(new Error(message));
        }
      }, timeoutDuration);
      
      // Clear timeout on successful load
      const originalOnLoad = img.onload;
      img.onload = function(event) {
        clearTimeout(timeoutId);
        if (originalOnLoad) originalOnLoad.call(this, event);
      };
      
      const originalOnError = img.onerror;
      img.onerror = function(event) {
        clearTimeout(timeoutId);
        if (originalOnError) originalOnError.call(this, event);
      };
      
    } catch (error) {
      cleanup();
      reject(new Error(`Failed to process file: ${error instanceof Error ? error.message : 'Unknown error'}`));
    }
  });
}
