'use client';

import { ConversionPageTemplate } from '@/components/conversion-page-template';
import { useConversionStore } from '@/lib/store/conversion-store';
import { convertIcoToPng } from '@/lib/converters/ico-png-converter';

export default function IcoToPngPage() {
  const { files, updateFileStatus, setFileOutput, options } = useConversionStore();

  const handleConvert = async () => {
    const queuedFiles = files.filter(f => f.status === 'queued');
    
    if (queuedFiles.length === 0) return;

    for (const fileData of queuedFiles) {
      try {
        updateFileStatus(fileData.id, 'processing', 0);

        const result = await convertIcoToPng(fileData.file, {
          size: options.size || 256,
          quality: options.quality || 90,
        }, (progress) => {
          updateFileStatus(fileData.id, 'processing', progress);
        });

        const url = URL.createObjectURL(result);
        setFileOutput(fileData.id, result, url);
      } catch (error) {
        console.error('ICO to PNG conversion error:', error);
        updateFileStatus(fileData.id, 'error', 0, error instanceof Error ? error.message : 'Conversion failed');
      }
    }
  };

  return (
    <ConversionPageTemplate
      title="ICO to PNG Converter"
      description="Convert icon files to PNG format with customizable size and quality settings."
      conversionType="ico-png"
      outputFormat="png"
      onConvert={handleConvert}
    />
  );
}
