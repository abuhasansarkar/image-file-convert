'use client';

import { ConversionPageTemplate } from '@/components/conversion-page-template';
import { useConversionStore } from '@/lib/store/conversion-store';
import { convertPdfToJpg } from '@/lib/converters/pdf-jpg-converter';

export default function PdfToJpgPage() {
  const { files, updateFileStatus, setFileOutput, options } = useConversionStore();

  const handleConvert = async () => {
    const queuedFiles = files.filter(f => f.status === 'queued');
    
    for (const file of queuedFiles) {
      try {
        updateFileStatus(file.id, 'processing', 0);
        
        const results = await convertPdfToJpg(file.file, {
          dpi: options.dpi || 150,
          quality: options.quality || 80,
          pageRange: options.pageRange,
        }, (progress) => {
          updateFileStatus(file.id, 'processing', progress);
        });

        // For multiple pages, create a ZIP
        if (results.length > 1) {
          const { createZipFromBlobs } = await import('@/lib/utils/zip-utils');
          const zipBlob = await createZipFromBlobs(
            results.map((blob, index) => ({
              blob,
              filename: `${file.name.replace('.pdf', '')}_page_${index + 1}.jpg`,
            }))
          );
          const url = URL.createObjectURL(zipBlob);
          setFileOutput(file.id, zipBlob, url);
        } else if (results.length === 1) {
          const url = URL.createObjectURL(results[0]);
          setFileOutput(file.id, results[0], url);
        }
      } catch (error) {
        console.error('Conversion error:', error);
        updateFileStatus(file.id, 'error', 0, error instanceof Error ? error.message : 'Conversion failed');
      }
    }
  };

  return (
    <ConversionPageTemplate
      title="PDF to JPG Converter"
      description="Extract pages from PDF files as high-quality JPG images with customizable resolution and quality settings."
      conversionType="pdf-jpg"
      outputFormat="jpg"
      onConvert={handleConvert}
    />
  );
}
