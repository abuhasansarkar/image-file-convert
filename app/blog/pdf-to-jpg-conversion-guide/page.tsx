import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PDF to JPG Converter: Extract Pages as High-Quality Images | Free Tool',
  description: 'Convert PDF pages to JPG images with high quality. Extract all pages or specific pages from PDF documents. Free online PDF to JPG converter with batch processing.',
  keywords: 'PDF to JPG, convert PDF pages, extract PDF images, PDF converter, document to image, page extraction',
  openGraph: {
    title: 'PDF to JPG Converter: Extract Pages as High-Quality Images',
    description: 'Convert PDF pages to JPG images with high quality and batch processing.',
    type: 'article',
  },
};

export default function PdfToJpgGuidePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="prose prose-lg max-w-none">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6">
            PDF to JPG Converter: Extract Pages as High-Quality Images
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Convert PDF documents to JPG images with precision. Extract individual pages or entire documents 
            as high-resolution images perfect for sharing, editing, or archiving.
          </p>
          <div className="flex justify-center mt-8">
            <Link href="/convert/pdf-jpg" className="btn-primary inline-flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Convert PDF to JPG Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Convert PDF to JPG?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Universal Compatibility</h3>
              <p className="mb-4">
                JPG images can be viewed on any device, shared easily, and embedded in presentations, 
                websites, or documents without requiring PDF viewers.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>View on any device or platform</li>
                <li>Easy sharing via email or messaging</li>
                <li>Embed in websites and presentations</li>
                <li>Compatible with all image editors</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Practical Applications</h3>
              <p className="mb-4">
                Perfect for creating thumbnails, extracting specific pages, archiving documents, 
                or preparing content for social media and marketing materials.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create document thumbnails</li>
                <li>Extract important pages</li>
                <li>Archive physical documents</li>
                <li>Prepare social media content</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">📄 Business Documents</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Convert reports for presentations</li>
                  <li>Extract charts and graphs</li>
                  <li>Create document previews</li>
                  <li>Share specific pages via email</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">🎓 Education & Research</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Extract textbook pages</li>
                  <li>Create study materials</li>
                  <li>Share research findings</li>
                  <li>Prepare lecture slides</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">🏢 Marketing & Design</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Convert brochures to images</li>
                  <li>Extract product catalog pages</li>
                  <li>Create social media posts</li>
                  <li>Prepare web content</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">📋 Legal & Administrative</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Extract contract pages</li>
                  <li>Create document evidence</li>
                  <li>Share legal documents</li>
                  <li>Archive important papers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Quality Settings & Resolution Guide</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">DPI Settings for Different Uses</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                  <h4 className="font-semibold text-blue-600">72-96 DPI</h4>
                  <p className="text-sm mb-2">Web & Screen Display</p>
                  <ul className="text-xs space-y-1">
                    <li>• Website thumbnails</li>
                    <li>• Social media posts</li>
                    <li>• Email attachments</li>
                    <li>• Digital presentations</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                  <h4 className="font-semibold text-green-600">150-200 DPI</h4>
                  <p className="text-sm mb-2">High-Quality Digital</p>
                  <ul className="text-xs space-y-1">
                    <li>• Professional presentations</li>
                    <li>• Digital archives</li>
                    <li>• Detailed viewing</li>
                    <li>• Image editing</li>
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                  <h4 className="font-semibold text-purple-600">300+ DPI</h4>
                  <p className="text-sm mb-2">Print Quality</p>
                  <ul className="text-xs space-y-1">
                    <li>• Professional printing</li>
                    <li>• Marketing materials</li>
                    <li>• High-res archives</li>
                    <li>• Detailed analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">JPG Quality Levels</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
                  <h4 className="font-semibold text-yellow-600">70-80% Quality</h4>
                  <p className="text-sm">Good for web thumbnails and previews</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                  <h4 className="font-semibold text-green-600">85-95% Quality</h4>
                  <p className="text-sm">Balanced quality for most uses</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                  <h4 className="font-semibold text-blue-600">95-100% Quality</h4>
                  <p className="text-sm">Maximum quality for archival</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Step-by-Step Conversion Process</h2>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-lg">
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Upload PDF Document:</strong> Select your PDF file (up to 200MB supported)
              </li>
              <li>
                <strong>Configure Settings:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Choose DPI (72-300+ based on intended use)</li>
                  <li>Set JPG quality (70-100%)</li>
                  <li>Select page range (all pages or specific pages)</li>
                </ul>
              </li>
              <li>
                <strong>Process & Preview:</strong> Review the converted images before downloading
              </li>
              <li>
                <strong>Download Results:</strong> Get individual images or batch download as ZIP
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Advanced Features & Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Page Selection</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>All Pages:</strong> Convert entire document</li>
                <li><strong>Page Range:</strong> Specify pages (e.g., 1-5, 10-15)</li>
                <li><strong>Individual Pages:</strong> Select specific pages only</li>
                <li><strong>Even/Odd Pages:</strong> Extract alternating pages</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Output Customization</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>File Naming:</strong> Automatic sequential naming</li>
                <li><strong>Image Size:</strong> Custom width/height options</li>
                <li><strong>Color Mode:</strong> RGB for digital, CMYK for print</li>
                <li><strong>Background:</strong> White or transparent options</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">File Size & Performance Considerations</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">DPI</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Quality</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Typical Size</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">72 DPI</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">80%</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">50-100 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Web thumbnails</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3">150 DPI</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">90%</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">200-400 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Digital sharing</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">300 DPI</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">95%</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">800KB-2MB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Print quality</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">⚡ Performance Tips</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use lower DPI for web use to reduce file sizes</li>
              <li>Batch process multiple pages for efficiency</li>
              <li>Consider page range selection for large documents</li>
              <li>Balance quality vs file size based on intended use</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Troubleshooting Common Issues</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">PDF Won't Convert?</h3>
              <p className="mb-2">Check these common issues:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Ensure PDF is not password-protected</li>
                <li>Verify file size is under 200MB limit</li>
                <li>Check if PDF contains only images vs text</li>
                <li>Try a different PDF if file appears corrupted</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Images Look Blurry?</h3>
              <p className="mb-2">Improve image quality by:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Increasing DPI to 150 or higher</li>
                <li>Setting JPG quality to 90% or above</li>
                <li>Ensuring source PDF has good resolution</li>
                <li>Using appropriate settings for intended use</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">File Sizes Too Large?</h3>
              <p className="mb-2">Reduce file sizes by:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Lowering DPI to 72-96 for web use</li>
                <li>Reducing JPG quality to 80-85%</li>
                <li>Converting only necessary pages</li>
                <li>Using appropriate resolution for purpose</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Can I convert password-protected PDFs?</h3>
              <p>No, password-protected PDFs cannot be converted for security reasons. You'll need to remove the password protection first using the original password.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">What's the maximum PDF file size supported?</h3>
              <p>Our converter supports PDF files up to 200MB in size. For larger files, consider splitting the PDF into smaller sections first.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Can I select specific pages to convert?</h3>
              <p>Yes, you can specify page ranges (e.g., 1-5, 10-15) or individual pages. This is useful for large documents where you only need certain pages.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Will text in the PDF remain searchable in JPG?</h3>
              <p>No, JPG images don't contain searchable text. If you need searchable text, consider using OCR tools after conversion or keeping the original PDF.</p>
            </div>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Convert Your PDF to JPG Images</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Extract high-quality images from your PDF documents with customizable resolution 
            and quality settings. Perfect for sharing, archiving, and web use.
          </p>
          <Link href="/convert/pdf-jpg" className="btn-primary inline-flex items-center text-lg px-8 py-3">
            <FileText className="w-5 h-5 mr-2" />
            Convert PDF to JPG
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </section>
      </article>
    </div>
  );
}
