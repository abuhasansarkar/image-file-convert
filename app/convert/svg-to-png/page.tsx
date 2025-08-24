'use client';

import { ConversionPageTemplate } from '@/components/conversion-page-template';
import { useConversionStore } from '@/lib/store/conversion-store';
import { convertSvgToPng } from '@/lib/converters/svg-png-converter';

export default function SvgToPngPage() {
  const { files, updateFileStatus, setFileOutput, options } = useConversionStore();

  const handleConvert = async () => {
    const queuedFiles = files.filter(f => f.status === 'queued');
    
    for (const file of queuedFiles) {
      try {
        updateFileStatus(file.id, 'processing', 0);
        
        const result = await convertSvgToPng(file.file, {
          scale: options.scale || 1,
          backgroundColor: options.backgroundColor || '#ffffff',
          dpi: options.dpi || 150,
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
      title="SVG to PNG Converter"
      description="Convert scalable vector graphics to raster PNG images with customizable scale and background settings."
      conversionType="svg-png"
      outputFormat="png"
      onConvert={handleConvert}
    />
  );
}
