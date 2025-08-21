'use client';

import { ConversionPageTemplate } from '@/components/conversion-page-template';
import { useConversionStore } from '@/lib/store/conversion-store';
import { convertImagesToPdf } from '@/lib/converters/images-pdf-converter';

export default function ImagesToPdfPage() {
  const { files, updateFileStatus, setFileOutput, options } = useConversionStore();

  const handleConvert = async () => {
    const queuedFiles = files.filter(f => f.status === 'queued');
    
    if (queuedFiles.length === 0) return;

    try {
      // Mark all files as processing
      queuedFiles.forEach(file => {
        updateFileStatus(file.id, 'processing', 0);
      });

      const result = await convertImagesToPdf(queuedFiles.map(f => f.file), {
        pageSize: options.pageSize || 'A4',
        dpi: options.dpi || 150,
        compression: options.compression || false,
      }, (progress) => {
        queuedFiles.forEach(file => {
          updateFileStatus(file.id, 'processing', progress);
        });
      });

      const url = URL.createObjectURL(result);
      
      // Mark all files as completed with the same PDF output
      queuedFiles.forEach(file => {
        setFileOutput(file.id, result, url);
      });
    } catch (error) {
      console.error('Conversion error:', error);
      queuedFiles.forEach(file => {
        updateFileStatus(file.id, 'error', 0, error instanceof Error ? error.message : 'Conversion failed');
      });
    }
  };

  return (
    <ConversionPageTemplate
      title="Images to PDF Converter"
      description="Combine multiple images into a single PDF document with customizable page size and quality settings."
      conversionType="images-pdf"
      outputFormat="pdf"
      onConvert={handleConvert}
    />
  );
}
