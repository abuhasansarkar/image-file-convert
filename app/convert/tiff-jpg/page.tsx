'use client';

import { ConversionPageTemplate } from '@/components/conversion-page-template';
import { useConversionStore } from '@/lib/store/conversion-store';
import { convertTiffToJpg } from '@/lib/converters/tiff-jpg-converter';

export default function TiffToJpgPage() {
  const { files, updateFileStatus, setFileOutput, options } = useConversionStore();

  const handleConvert = async () => {
    const queuedFiles = files.filter(f => f.status === 'queued');
    
    if (queuedFiles.length === 0) return;

    for (const fileData of queuedFiles) {
      try {
        updateFileStatus(fileData.id, 'processing', 0);

        const result = await convertTiffToJpg(fileData.file, {
          quality: options.quality || 85,
          backgroundColor: options.backgroundColor || '#FFFFFF',
        }, (progress) => {
          updateFileStatus(fileData.id, 'processing', progress);
        });

        const url = URL.createObjectURL(result);
        setFileOutput(fileData.id, result, url);
      } catch (error) {
        console.error('TIFF to JPG conversion error:', error);
        updateFileStatus(fileData.id, 'error', 0, error instanceof Error ? error.message : 'Conversion failed');
      }
    }
  };

  return (
    <ConversionPageTemplate
      title="TIFF to JPG Converter"
      description="Convert TIFF images to compressed JPG format with customizable quality settings."
      conversionType="tiff-jpg"
      outputFormat="jpg"
      onConvert={handleConvert}
    />
  );
}
