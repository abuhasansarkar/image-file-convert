'use client';

import { ConversionPageTemplate } from '@/components/conversion-page-template';
import { useConversionStore } from '@/lib/store/conversion-store';
import { convertImageToAvif } from '@/lib/converters/image-avif-converter';

export default function ImageToAvifPage() {
  const { files, updateFileStatus, setFileOutput, options } = useConversionStore();

  const handleConvert = async () => {
    const queuedFiles = files.filter(f => f.status === 'queued');
    
    for (const file of queuedFiles) {
      try {
        updateFileStatus(file.id, 'processing', 0);
        
        const result = await convertImageToAvif(file.file, {
          quality: options.quality || 80,
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
      title="Any Image to AVIF Converter"
      description="Convert any image format (JPG, PNG, WebP, BMP, GIF) to modern AVIF format for superior compression and quality."
      conversionType="image-avif"
      outputFormat="avif"
      onConvert={handleConvert}
    />
  );
}
