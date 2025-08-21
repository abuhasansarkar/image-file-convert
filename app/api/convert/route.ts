import { NextRequest, NextResponse } from 'next/server';
import { convertJpgToWebP } from '@/lib/converters/jpg-webp-converter';
import { convertPngToWebP } from '@/lib/converters/png-webp-converter';
import { convertImagesToPdf } from '@/lib/converters/images-pdf-converter';
import { convertPdfToJpg } from '@/lib/converters/pdf-jpg-converter';
import { convertHeicToJpg } from '@/lib/converters/heic-jpg-converter';
import { convertSvgToPng } from '@/lib/converters/svg-png-converter';
import { convertBmpToPng } from '@/lib/converters/bmp-png-converter';
import { validateFiles, ConversionType } from '@/lib/utils/file-utils';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const conversionType = formData.get('conversionType') as ConversionType;
    const files = formData.getAll('files') as File[];
    const options = JSON.parse(formData.get('options') as string || '{}');

    if (!conversionType || files.length === 0) {
      return NextResponse.json(
        { error: 'Missing conversion type or files' },
        { status: 400 }
      );
    }

    // Validate files
    const { valid, invalid } = validateFiles(files, conversionType);
    
    if (invalid.length > 0) {
      return NextResponse.json(
        { 
          error: 'Invalid files detected',
          invalidFiles: invalid.map(({ file, reason }) => ({ 
            name: file.name, 
            reason 
          }))
        },
        { status: 400 }
      );
    }

    const results: { name: string; blob: Blob; success: boolean; error?: string }[] = [];

    // Process each file based on conversion type
    for (const file of valid) {
      try {
        let convertedBlob: Blob | Blob[];

        switch (conversionType) {
          case 'jpg-webp':
            convertedBlob = await convertJpgToWebP(file, options);
            break;
          case 'png-webp':
            convertedBlob = await convertPngToWebP(file, options);
            break;
          case 'images-pdf':
            convertedBlob = await convertImagesToPdf([file], options);
            break;
          case 'pdf-jpg':
            convertedBlob = await convertPdfToJpg(file, options);
            break;
          case 'heic-jpg':
            convertedBlob = await convertHeicToJpg(file, options);
            break;
          case 'svg-png':
            convertedBlob = await convertSvgToPng(file, options);
            break;
          case 'bmp-png':
            convertedBlob = await convertBmpToPng(file, options);
            break;
          case 'raw-tiff':
            throw new Error('RAW to TIFF conversion requires specialized server-side processing');
          default:
            throw new Error(`Unsupported conversion type: ${conversionType}`);
        }

        // Handle single blob or array of blobs
        if (Array.isArray(convertedBlob)) {
          convertedBlob.forEach((blob, index) => {
            results.push({
              name: `${file.name.split('.')[0]}_page_${index + 1}`,
              blob,
              success: true
            });
          });
        } else {
          results.push({
            name: file.name,
            blob: convertedBlob,
            success: true
          });
        }
      } catch (error) {
        results.push({
          name: file.name,
          blob: new Blob(),
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    // Convert blobs to base64 for JSON response
    const responseData = await Promise.all(
      results.map(async (result) => ({
        name: result.name,
        success: result.success,
        error: result.error,
        data: result.success ? await blobToBase64(result.blob) : null,
        size: result.blob.size,
        type: result.blob.type
      }))
    );

    return NextResponse.json({
      success: true,
      results: responseData,
      totalFiles: files.length,
      processedFiles: results.filter(r => r.success).length
    });

  } catch (error) {
    console.error('Conversion API error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(',')[1]); // Remove data:mime;base64, prefix
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export async function GET() {
  return NextResponse.json({
    message: 'Image Conversion API',
    supportedTypes: [
      'jpg-webp',
      'png-webp', 
      'images-pdf',
      'pdf-jpg',
      'heic-jpg',
      'svg-png',
      'bmp-png'
    ],
    note: 'RAW to TIFF conversion requires specialized libraries and is not available via API'
  });
}
