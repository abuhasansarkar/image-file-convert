'use client';

import { ConversionPageTemplate } from '@/components/conversion-page-template';
import { useConversionStore } from '@/lib/store/conversion-store';
import { convertAvifToJpg } from '@/lib/converters/avif-converter';

export default function AvifToJpgPage() {
  const { files, updateFileStatus, setFileOutput, options } = useConversionStore();

  const handleConvert = async () => {
    const queuedFiles = files.filter(f => f.status === 'queued');
    
    for (const file of queuedFiles) {
      try {
        updateFileStatus(file.id, 'processing', 0);
        
        const result = await convertAvifToJpg(file.file, {
          quality: options.quality || 90,
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
      title="AVIF to JPG Converter"
      description="Convert modern AVIF images to universal JPG format for better compatibility across devices and platforms."
      conversionType="avif-jpg"
      outputFormat="jpg"
      onConvert={handleConvert}
    />
  );
}
