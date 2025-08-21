'use client';

import { ConversionPageTemplate } from '@/components/conversion-page-template';
import { useConversionStore } from '@/lib/store/conversion-store';
import { convertJpgToWebP } from '@/lib/converters/jpg-webp-converter';

export default function JpgToWebPPage() {
  const { files, updateFileStatus, setFileOutput, options } = useConversionStore();

  const handleConvert = async () => {
    const queuedFiles = files.filter(f => f.status === 'queued');
    
    for (const file of queuedFiles) {
      try {
        updateFileStatus(file.id, 'processing', 0);
        
        const result = await convertJpgToWebP(file.file, {
          quality: options.quality || 80,
          width: options.width,
          height: options.height,
          stripMetadata: options.stripMetadata || false,
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
      title="JPG to WebP Converter"
      description="Convert JPEG images to modern WebP format for better compression and faster web loading times."
      conversionType="jpg-webp"
      outputFormat="webp"
      onConvert={handleConvert}
    />
  );
}
