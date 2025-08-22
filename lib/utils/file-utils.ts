export const MAX_FILE_SIZE = 200 * 1024 * 1024; // 200MB

export const SUPPORTED_FORMATS = {
  'jpg-webp': ['image/jpeg', 'image/jpg'],
  'png-webp': ['image/png'],
  'webp-png': ['image/webp'],
  'tiff-jpg': ['image/tiff', 'image/tif'],
  'gif-png': ['image/gif'],
  'ico-png': ['image/x-icon', 'image/vnd.microsoft.icon'],
  'images-pdf': ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'],
  'pdf-jpg': ['application/pdf'],
  'heic-jpg': ['image/heic', 'image/heif'],
  'svg-png': ['image/svg+xml'],
  'raw-tiff': ['image/x-canon-cr2', 'image/x-canon-crw', 'image/x-nikon-nef', 'image/x-sony-arw', 'image/x-adobe-dng'],
  'bmp-png': ['image/bmp'],
  'image-text': ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif', 'image/bmp', 'image/tiff'],
  'avif-jpg': ['image/avif'],
  'avif-png': ['image/avif'],
  'avif-jpeg': ['image/avif'],
  'image-avif': ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/bmp', 'image/gif', 'image/tiff', 'image/svg+xml'],
} as const;

export type ConversionType = keyof typeof SUPPORTED_FORMATS;

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function getFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() || '';
}

export function isValidFileType(file: File, conversionType: ConversionType): boolean {
  const supportedTypes = SUPPORTED_FORMATS[conversionType];
  
  // Check MIME type first
  if (supportedTypes.some(type => type === file.type)) {
    return true;
  }
  
  // Fallback: check file extension for better compatibility
  const extension = getFileExtension(file.name);
  const extensionMap: Record<string, string[]> = {
    'jpg': ['image/jpeg', 'image/jpg'],
    'jpeg': ['image/jpeg', 'image/jpg'],
    'png': ['image/png'],
    'webp': ['image/webp'],
    'gif': ['image/gif'],
    'bmp': ['image/bmp'],
    'tiff': ['image/tiff', 'image/tif'],
    'tif': ['image/tiff', 'image/tif'],
    'svg': ['image/svg+xml'],
    'heic': ['image/heic', 'image/heif'],
    'heif': ['image/heic', 'image/heif'],
    'ico': ['image/x-icon', 'image/vnd.microsoft.icon'],
    'pdf': ['application/pdf'],
    'cr2': ['image/x-canon-cr2'],
    'nef': ['image/x-nikon-nef'],
    'arw': ['image/x-sony-arw'],
    'dng': ['image/x-adobe-dng'],
    'avif': ['image/avif']
  };
  
  const mimeTypesForExtension = extensionMap[extension];
  if (mimeTypesForExtension) {
    return supportedTypes.some(type => mimeTypesForExtension.includes(type));
  }
  
  return false;
}

export function isValidFileSize(file: File): boolean {
  return file.size <= MAX_FILE_SIZE;
}

export function validateFiles(files: File[], conversionType: ConversionType): {
  valid: File[];
  invalid: { file: File; reason: string }[];
} {
  const valid: File[] = [];
  const invalid: { file: File; reason: string }[] = [];

  files.forEach(file => {
    if (!isValidFileSize(file)) {
      invalid.push({ file, reason: `File size exceeds ${formatFileSize(MAX_FILE_SIZE)} limit` });
    } else if (!isValidFileType(file, conversionType)) {
      invalid.push({ file, reason: 'Unsupported file type for this conversion' });
    } else {
      valid.push(file);
    }
  });

  return { valid, invalid };
}

export function createDownloadLink(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function getOutputFilename(inputFilename: string, outputFormat: string): string {
  const nameWithoutExt = inputFilename.replace(/\.[^/.]+$/, '');
  
  // Map conversion types to proper file extensions
  const formatExtensionMap: Record<string, string> = {
    'webp': 'webp',
    'pdf': 'pdf', 
    'jpg': 'jpg',
    'jpeg': 'jpg',
    'png': 'png',
    'tiff': 'tiff',
    'tif': 'tiff',
    'txt': 'txt',
    'json': 'json',
    'avif': 'avif'
  };
  
  const extension = formatExtensionMap[outputFormat.toLowerCase()] || outputFormat.toLowerCase();
  return `${nameWithoutExt}.${extension}`;
}

export function sanitizeSVG(svgContent: string): string {
  // Remove script tags and event handlers for security
  return svgContent
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '')
    .replace(/javascript:/gi, '');
}

export async function readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

export async function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}
