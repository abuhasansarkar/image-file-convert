import { Metadata } from 'next';
import Link from 'next/link';
import { BlogCardsFooter } from '@/components/blog-cards-footer';
import { ArrowRight, CheckCircle, FileText, Image, Briefcase, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Images to PDF Converter: Create Professional Documents Instantly',
  description: 'Convert multiple images to PDF documents. Perfect for creating portfolios, reports, and professional presentations. Free online tool with batch processing.',
  keywords: 'images to PDF converter, merge images PDF, create PDF from photos, combine images PDF, portfolio PDF, document creation',
  openGraph: {
    title: 'Images to PDF: Create Professional Documents from Photos',
    description: 'Transform your images into polished PDF documents for business and personal use.',
    type: 'article',
  },
};

export default function ImagesToPdfGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
          <FileText className="w-4 h-4" />
          <span>Professional Documents</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Images to PDF: Create Professional Documents
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform scattered images into polished PDF documents. Perfect for portfolios, 
          reports, presentations, and professional documentation that impresses clients.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/convert/images-pdf" className="btn-primary">
            Create PDF from Images
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/blog" className="btn-ghost">
            More PDF Guides
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Why Scattered Images Hold You Back</h2>
        
        <div className="card p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
          <div className="flex items-start gap-4">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image className="w-8 h-8 text-red-500 mt-1" />
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">The Scattered Images Problem</h3>
              <p className="text-muted-foreground">
                Having important visual content spread across multiple image files creates chaos in professional 
                settings. Clients, colleagues, and stakeholders expect organized, easily shareable documents.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-red-600">Professional Challenges</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Unprofessional presentation</strong> - Sending 20+ separate image files</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Email attachment limits</strong> - Can&apos;t send large image collections</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Difficult organization</strong> - Images get lost or viewed out of order</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Poor client experience</strong> - Clients struggle to view your work</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Version control issues</strong> - Hard to track document updates</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-600">PDF Document Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Professional appearance</strong> - Single, polished document</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Easy sharing</strong> - One file to send and store</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Preserved order</strong> - Images stay in your intended sequence</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Universal compatibility</strong> - Opens on any device or platform</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Print-ready format</strong> - Perfect for physical presentations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Who Benefits from Images to PDF Conversion?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Business Professionals</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Create project reports with screenshots and charts</li>
              <li>• Compile product catalogs and brochures</li>
              <li>• Document processes with step-by-step images</li>
              <li>• Present before/after comparisons professionally</li>
              <li>• Submit visual proposals to clients</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold">Creative Professionals</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Build design portfolios and lookbooks</li>
              <li>• Create client presentation decks</li>
              <li>• Compile photography collections</li>
              <li>• Document creative processes and concepts</li>
              <li>• Share mood boards and inspiration</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold">Educators & Students</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Create visual study guides and notes</li>
              <li>• Submit assignment portfolios</li>
              <li>• Document field work and experiments</li>
              <li>• Compile research image collections</li>
              <li>• Create presentation handouts</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <Shield className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold">Personal & Legal Use</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Document insurance claims with photos</li>
              <li>• Create family photo albums</li>
              <li>• Compile travel journals and memories</li>
              <li>• Organize important document scans</li>
              <li>• Submit visual evidence for legal cases</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Convert */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">How to Convert Images to PDF: Step-by-Step</h2>
        
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 font-bold">
                1
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Select Your Images</h3>
                <p className="text-muted-foreground">
                  Choose all the images you want to include in your PDF document. Our converter supports JPG, PNG, 
                  WebP, BMP, and other common formats. You can upload multiple images at once for batch processing.
                </p>
                <Link href="/convert/images-pdf" className="inline-flex items-center gap-2 text-green-600 hover:underline">
                  Open Images to PDF Converter
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 font-bold">
                2
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Arrange Image Order</h3>
                <p className="text-muted-foreground">
                  Drag and drop images to arrange them in your preferred order. The sequence you set here will be 
                  the order they appear in your final PDF document.
                </p>
                <div className="text-sm text-muted-foreground bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <strong>Pro Tip:</strong> Plan your image sequence beforehand - start with overview shots, then details, 
                  and end with summary or contact information.
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 font-bold">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Configure PDF Settings</h3>
                <p className="text-muted-foreground">
                  Choose your PDF layout and quality settings:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• <strong>Page Size:</strong> A4, Letter, or Custom dimensions</li>
                  <li>• <strong>Orientation:</strong> Portrait or Landscape</li>
                  <li>• <strong>Image Fit:</strong> Fill page, fit to page, or original size</li>
                  <li>• <strong>Quality:</strong> High (print), Medium (screen), or Compressed (email)</li>
                  <li>• <strong>Margins:</strong> Add borders around images if needed</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 font-bold">
                4
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Generate and Download PDF</h3>
                <p className="text-muted-foreground">
                  Click &quot;Create PDF&quot; to generate your document. The process is instant and happens locally in your 
                  browser. Download your professional PDF document and share it with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Professional PDF Creation Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Document Control</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Custom page layouts</strong> - Multiple images per page or one image per page</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Image optimization</strong> - Automatic compression without quality loss</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Metadata preservation</strong> - Keeps important image information</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Batch processing</strong> - Handle hundreds of images efficiently</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Professional Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Print optimization</strong> - Perfect quality for physical printing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>File size control</strong> - Balance quality and file size for sharing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Privacy protection</strong> - All processing happens locally</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Cross-platform compatibility</strong> - Works on any device</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Best Practices for Professional PDFs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">Image Preparation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use consistent image dimensions when possible</li>
              <li>• Ensure high resolution for print documents (300 DPI)</li>
              <li>• Crop images to remove unnecessary elements</li>
              <li>• Use descriptive filenames for easy organization</li>
              <li>• Consider image orientation and layout flow</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-green-600">Document Structure</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Start with a title page or overview image</li>
              <li>• Group related images together</li>
              <li>• Use logical progression (overview → details)</li>
              <li>• End with contact info or call-to-action</li>
              <li>• Keep file size reasonable for easy sharing</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-purple-600">Professional Tips</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use consistent margins and spacing</li>
              <li>• Choose appropriate page orientation</li>
              <li>• Test PDF on different devices before sharing</li>
              <li>• Consider adding page numbers for longer documents</li>
              <li>• Use meaningful document filenames</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-orange-600">Sharing Strategy</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Optimize file size for email if needed</li>
              <li>• Use cloud storage for large documents</li>
              <li>• Include brief description when sharing</li>
              <li>• Consider password protection for sensitive content</li>
              <li>• Keep backup copies of original images</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl">
        <h2 className="text-3xl font-bold">Transform Images into Professional Documents</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Stop sending scattered image files. Create polished, professional PDF documents that 
          impress clients and colleagues. Free, fast, and completely private.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/convert/images-pdf" className="btn-primary">
            Create PDF from Images
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/blog" className="btn-ghost">
            More Professional Tips
          </Link>
        </div>
      </section>
      {/* Related Blog Posts */}
      <BlogCardsFooter currentSlug="images-to-pdf-merger" title="More Business & Document Guides" />
    </div>
  );
}
