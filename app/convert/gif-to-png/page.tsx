'use client';

import { ConversionPageTemplate } from '@/components/conversion-page-template';
import { useConversionStore } from '@/lib/store/conversion-store';
import { convertGifToPng } from '@/lib/converters/gif-png-converter';

export default function GifToPngPage() {
  const { files, updateFileStatus, setFileOutput, options } = useConversionStore();

  const handleConvert = async () => {
    const queuedFiles = files.filter(f => f.status === 'queued');
    
    if (queuedFiles.length === 0) return;

    for (const fileData of queuedFiles) {
      try {
        updateFileStatus(fileData.id, 'processing', 0);

        const result = await convertGifToPng(fileData.file, {
          quality: options.quality || 90,
          preserveTransparency: options.preserveTransparency || true,
          extractFirstFrame: options.extractFirstFrame || true,
        }, (progress) => {
          updateFileStatus(fileData.id, 'processing', progress);
        });

        const url = URL.createObjectURL(result);
        setFileOutput(fileData.id, result, url);
      } catch (error) {
        console.error('GIF to PNG conversion error:', error);
        updateFileStatus(fileData.id, 'error', 0, error instanceof Error ? error.message : 'Conversion failed');
      }
    }
  };

  return (
    <ConversionPageTemplate
      title="GIF to PNG Converter"
      description="Convert animated GIF files to static PNG images with transparency support."
      conversionType="gif-png"
      outputFormat="png"
      onConvert={handleConvert}
    />
  );
}
