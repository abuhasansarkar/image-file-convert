'use client';

import { ConversionPageTemplate } from '@/components/conversion-page-template';
import { useConversionStore } from '@/lib/store/conversion-store';
import { convertHeicToJpg } from '@/lib/converters/heic-jpg-converter';

export default function HeicToJpgPage() {
  const { files, updateFileStatus, setFileOutput, options } = useConversionStore();

  const handleConvert = async () => {
    const queuedFiles = files.filter(f => f.status === 'queued');
    
    for (const file of queuedFiles) {
      try {
        updateFileStatus(file.id, 'processing', 0);
        
        const result = await convertHeicToJpg(file.file, {
          quality: options.quality || 80,
          width: options.width,
          height: options.height,
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
      title="HEIC to JPG Converter"
      description="Convert iPhone HEIC photos to universal JPG format for better compatibility across devices and platforms."
      conversionType="heic-jpg"
      outputFormat="jpg"
      onConvert={handleConvert}
    />
  );
}
