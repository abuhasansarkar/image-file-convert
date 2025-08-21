'use client';

import { ConversionPageTemplate } from '@/components/conversion-page-template';
import { useConversionStore } from '@/lib/store/conversion-store';
import { convertRawToTiff } from '@/lib/converters/raw-tiff-converter';

export default function RawToTiffPage() {
  const { files, updateFileStatus, setFileOutput, options } = useConversionStore();

  const handleConvert = async () => {
    const queuedFiles = files.filter(f => f.status === 'queued');
    
    for (const file of queuedFiles) {
      try {
        updateFileStatus(file.id, 'processing', 0);
        
        const result = await convertRawToTiff(file.file, {
          demosaicQuality: options.demosaicQuality || 'balanced',
          bitDepth: options.bitDepth || 8,
          whiteBalance: options.whiteBalance || 'auto',
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
      title="RAW to TIFF Converter"
      description="Process camera RAW files into high-quality TIFF images with professional demosaicing and color correction."
      conversionType="raw-tiff"
      outputFormat="tiff"
      onConvert={handleConvert}
    />
  );
}
