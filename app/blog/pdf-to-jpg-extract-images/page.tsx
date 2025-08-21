import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, FileText, Image, Share2, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PDF to JPG Converter: Extract Images from PDF Documents',
  description: 'Convert PDF pages to JPG images instantly. Extract images from PDFs for presentations, social media, and web use. Free online PDF to image converter.',
  keywords: 'PDF to JPG converter, extract images from PDF, PDF to image, convert PDF pages, PDF image extraction, document to image',
  openGraph: {
    title: 'PDF to JPG: Extract Images from Any PDF Document',
    description: 'Transform PDF pages into shareable JPG images for presentations and web use.',
    type: 'article',
  },
};

export default function PdfToJpgGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
          <FileText className="w-4 h-4" />
          <span>Document Liberation</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          PDF to JPG: Extract Images from Documents
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Break free from PDF limitations. Convert PDF pages to JPG images for easy sharing, 
          editing, and use in presentations, social media, and websites.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/convert/pdf-jpg" className="btn-primary">
            Convert PDF to JPG
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/blog" className="btn-ghost">
            More PDF Solutions
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Why PDFs Limit Your Content Freedom</h2>
        
        <div className="card p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
          <div className="flex items-start gap-4">
            <FileText className="w-8 h-8 text-red-500 mt-1" />
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">The PDF Sharing Problem</h3>
              <p className="text-muted-foreground">
                PDFs are great for documents, but terrible for modern content sharing. When you need to use 
                PDF content in presentations, social media, or websites, the PDF format becomes a barrier.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-red-600">PDF Limitations</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Can&apos;t use in presentations</strong> - PowerPoint/Keynote don&apos;t embed PDFs well</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Social media rejection</strong> - Platforms don&apos;t support PDF uploads</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Website integration issues</strong> - PDFs don&apos;t work in image galleries</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Editing restrictions</strong> - Can&apos;t modify PDF content in image editors</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Mobile viewing problems</strong> - PDFs are hard to view on small screens</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-600">JPG Image Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Universal compatibility</strong> - Works everywhere images are supported</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Easy sharing</strong> - Upload to any platform or service</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Presentation ready</strong> - Perfect for slides and displays</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Editable content</strong> - Modify in any image editing software</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Mobile optimized</strong> - Perfect viewing on all devices</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Who Needs PDF to JPG Conversion?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Share2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Content Creators & Marketers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Share infographics and charts on social media</li>
              <li>• Create blog post images from PDF content</li>
              <li>• Extract slides for presentation thumbnails</li>
              <li>• Use PDF graphics in marketing materials</li>
              <li>• Create shareable quotes and statistics</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Image className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold">Educators & Students</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Convert textbook pages for online learning</li>
              <li>• Share specific pages from research papers</li>
              <li>• Create study materials from PDF notes</li>
              <li>• Extract diagrams for presentations</li>
              <li>• Make PDF content mobile-friendly</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Download className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold">Business Professionals</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Extract charts and graphs for reports</li>
              <li>• Share specific pages from proposals</li>
              <li>• Create presentation slides from documents</li>
              <li>• Use PDF content in websites and apps</li>
              <li>• Archive important document pages</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <FileText className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold">Personal & Creative Use</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Convert recipe PDFs for easy mobile viewing</li>
              <li>• Share interesting pages from e-books</li>
              <li>• Extract artwork from digital publications</li>
              <li>• Create image collections from PDF portfolios</li>
              <li>• Make PDF content accessible for editing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Convert */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">How to Convert PDF to JPG: Simple Steps</h2>
        
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 font-bold">
                1
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Upload Your PDF Document</h3>
                <p className="text-muted-foreground">
                  Select the PDF file you want to convert. Our converter handles any PDF size and complexity, 
                  from simple documents to complex layouts with graphics and images.
                </p>
                <Link href="/convert/pdf-jpg" className="inline-flex items-center gap-2 text-red-600 hover:underline">
                  Open PDF to JPG Converter
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 font-bold">
                2
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Choose Pages to Convert</h3>
                <p className="text-muted-foreground">
                  Select which pages you want to convert to JPG images. You can convert all pages, specific pages, 
                  or a range of pages. Preview each page before conversion to ensure you get exactly what you need.
                </p>
                <div className="text-sm text-muted-foreground bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <strong>Pro Tip:</strong> For large PDFs, convert only the pages you actually need to save time and storage space.
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 font-bold">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Set Image Quality and Size</h3>
                <p className="text-muted-foreground">
                  Configure the output settings based on your intended use:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• <strong>High Quality (300 DPI):</strong> For printing and professional use</li>
                  <li>• <strong>Web Quality (150 DPI):</strong> Perfect for websites and presentations</li>
                  <li>• <strong>Social Media (72 DPI):</strong> Optimized for online sharing</li>
                  <li>• <strong>Custom Size:</strong> Set specific dimensions for your needs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 font-bold">
                4
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Download Your JPG Images</h3>
                <p className="text-muted-foreground">
                  Get your converted JPG images instantly. Download individual images or get all pages in a 
                  convenient ZIP file. Your images are ready to use anywhere!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Advanced PDF to JPG Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Conversion Control</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Selective page conversion</strong> - Convert only the pages you need</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Quality optimization</strong> - Balance file size and image quality</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Batch processing</strong> - Convert multiple PDFs simultaneously</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Custom dimensions</strong> - Set specific width and height</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Professional Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>High-resolution output</strong> - Perfect for print and professional use</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Color accuracy</strong> - Maintains original PDF colors and formatting</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Text clarity</strong> - Crisp text rendering in image format</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Privacy protection</strong> - All processing happens locally</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Popular PDF to JPG Use Cases</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">Social Media Sharing</h3>
            <p className="text-sm text-muted-foreground">
              Convert infographics, charts, and visual content from PDFs to share on Instagram, 
              Facebook, Twitter, and LinkedIn. Perfect for making PDF content social media-ready.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Instagram posts and stories</li>
              <li>• LinkedIn article images</li>
              <li>• Twitter visual content</li>
              <li>• Facebook page graphics</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-green-600">Presentation Creation</h3>
            <p className="text-sm text-muted-foreground">
              Extract specific pages or sections from PDFs to use in PowerPoint, Keynote, or Google Slides. 
              Perfect for incorporating existing content into new presentations.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Slide backgrounds and graphics</li>
              <li>• Charts and data visualizations</li>
              <li>• Reference materials</li>
              <li>• Supporting documentation</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-purple-600">Website Integration</h3>
            <p className="text-sm text-muted-foreground">
              Use PDF content in websites, blogs, and online galleries. Convert PDF pages to images 
              for better web performance and mobile compatibility.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Blog post illustrations</li>
              <li>• Website galleries</li>
              <li>• Product documentation</li>
              <li>• Tutorial screenshots</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-orange-600">Content Editing</h3>
            <p className="text-sm text-muted-foreground">
              Convert PDF pages to images for editing in Photoshop, GIMP, or other image editors. 
              Add annotations, highlights, or modifications to PDF content.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Add annotations and highlights</li>
              <li>• Create custom graphics</li>
              <li>• Combine with other images</li>
              <li>• Apply filters and effects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl">
        <h2 className="text-3xl font-bold">Liberate Your PDF Content Today</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Stop being limited by PDF format restrictions. Convert your PDF pages to JPG images 
          and use them anywhere. Free, fast, and completely private.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/convert/pdf-jpg" className="btn-primary">
            Convert PDF to JPG Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/blog" className="btn-ghost">
            More PDF Solutions
          </Link>
        </div>
      </section>
    </div>
  );
}
