'use client';

import { ConversionPageTemplate } from '@/components/conversion-page-template';
import { useConversionStore } from '@/lib/store/conversion-store';
import { convertImageToText } from '@/lib/converters/image-text-converter';

export default function ImageToTextPage() {
  const { files, updateFileStatus, setFileOutput, options } = useConversionStore();

  const handleConvert = async () => {
    const queuedFiles = files.filter(f => f.status === 'queued');
    
    if (queuedFiles.length === 0) return;

    for (const fileData of queuedFiles) {
      try {
        updateFileStatus(fileData.id, 'processing', 0);

        const result = await convertImageToText(fileData.file, {
          language: options.language || 'eng',
          outputFormat: options.outputFormat || 'txt',
          confidence: options.confidence || false,
          preserveFormatting: options.preserveFormatting || false,
        }, (progress) => {
          updateFileStatus(fileData.id, 'processing', progress);
        });

        const url = URL.createObjectURL(result);
        setFileOutput(fileData.id, result, url);
      } catch (error) {
        console.error('OCR conversion error:', error);
        updateFileStatus(fileData.id, 'error', 0, error instanceof Error ? error.message : 'OCR conversion failed');
      }
    }
  };

  return (
    <ConversionPageTemplate
      title="Image to Text Converter"
      description="Extract text from images using OCR technology. Supports multiple languages and output formats."
      conversionType="image-text"
      outputFormat={options.outputFormat || 'txt'}
      onConvert={handleConvert}
    />
  );
}
