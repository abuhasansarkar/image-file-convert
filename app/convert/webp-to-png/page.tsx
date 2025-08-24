'use client';

import { ConversionPageTemplate } from '@/components/conversion-page-template';
import { useConversionStore } from '@/lib/store/conversion-store';
import { convertWebpToPng } from '@/lib/converters/webp-png-converter';

export default function WebpToPngPage() {
  const { files, updateFileStatus, setFileOutput, options } = useConversionStore();

  const handleConvert = async () => {
    const queuedFiles = files.filter(f => f.status === 'queued');
    
    if (queuedFiles.length === 0) return;

    for (const fileData of queuedFiles) {
      try {
        updateFileStatus(fileData.id, 'processing', 0);

        const result = await convertWebpToPng(fileData.file, {
          quality: options.quality || 90,
          preserveTransparency: options.preserveTransparency || true,
        }, (progress) => {
          updateFileStatus(fileData.id, 'processing', progress);
        });

        const url = URL.createObjectURL(result);
        setFileOutput(fileData.id, result, url);
      } catch (error) {
        console.error('WebP to PNG conversion error:', error);
        updateFileStatus(fileData.id, 'error', 0, error instanceof Error ? error.message : 'Conversion failed');
      }
    }
  };

  return (
    <ConversionPageTemplate
      title="WebP to PNG Converter"
      description="Convert WebP images to PNG format while preserving transparency and quality."
      conversionType="webp-png"
      outputFormat="png"
      onConvert={handleConvert}
    />
  );
}
