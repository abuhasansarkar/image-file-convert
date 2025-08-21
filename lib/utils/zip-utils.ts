import { ZipWriter, BlobWriter, TextReader, BlobReader } from '@zip.js/zip.js';

export async function createZipFromBlobs(
  files: { blob: Blob; filename: string }[]
): Promise<Blob> {
  const zipWriter = new ZipWriter(new BlobWriter('application/zip'));

  for (const { blob, filename } of files) {
    await zipWriter.add(filename, new BlobReader(blob));
  }

  const zipBlob = await zipWriter.close();
  return zipBlob;
}

export async function addTextFileToZip(
  zipWriter: ZipWriter<Blob>,
  content: string,
  filename: string
): Promise<void> {
  await zipWriter.add(filename, new TextReader(content));
}

export function generateBatchFilename(conversionType: string, count: number): string {
  const timestamp = new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-');
  return `converted-${conversionType}-${count}-files-${timestamp}.zip`;
}
