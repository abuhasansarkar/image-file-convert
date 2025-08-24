'use client';

import { ConversionPageTemplate } from '@/components/conversion-page-template';
import { useConversionStore } from '@/lib/store/conversion-store';
import { convertAvifToPng } from '@/lib/converters/avif-converter';

export default function AvifToPngPage() {
  const { files, updateFileStatus, setFileOutput, options } = useConversionStore();

  const handleConvert = async () => {
    const queuedFiles = files.filter(f => f.status === 'queued');
    
    for (const file of queuedFiles) {
      try {
        updateFileStatus(file.id, 'processing', 0);
        
        const result = await convertAvifToPng(file.file, {
          width: options.width,
          height: options.height,
          stripMetadata: options.stripMetadata,
        }, (progress) => {
          updateFileStatus(file.id, 'processing', progress);
        });

        const url = URL.createObjectURL(result);
        setFileOutput(file.id, result, url);
      } catch (error) {
        console.error('Conversion error:', error);
        updateFileStatus(file.id, 'error', 0, error instanceof Error ? error.message : 'Conversion failed');
      }
    }
  };

  return (
    <ConversionPageTemplate
      title="AVIF to PNG Converter"
      description="Convert modern AVIF images to PNG format with transparency support and lossless quality."
      conversionType="avif-png"
      outputFormat="png"
      onConvert={handleConvert}
    />
  );
}
