'use client';

import { ConversionPageTemplate } from '@/components/conversion-page-template';
import { useConversionStore } from '@/lib/store/conversion-store';
import { convertAvifToJpeg } from '@/lib/converters/avif-converter';

export default function AvifToJpegPage() {
  const { files, updateFileStatus, setFileOutput, options } = useConversionStore();

  const handleConvert = async () => {
    const queuedFiles = files.filter(f => f.status === 'queued');
    
    for (const file of queuedFiles) {
      try {
        updateFileStatus(file.id, 'processing', 0);
        
        const result = await convertAvifToJpeg(file.file, {
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
      title="AVIF to JPEG Converter"
      description="Convert modern AVIF images to JPEG format with customizable quality settings for optimal file size."
      conversionType="avif-jpeg"
      outputFormat="jpeg"
      onConvert={handleConvert}
    />
  );
}
