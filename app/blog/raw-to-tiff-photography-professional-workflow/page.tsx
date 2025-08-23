import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Camera, Image, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'RAW to TIFF Converter: Professional Photography Workflow',
  description: 'Convert RAW camera files to TIFF format for professional editing and archival. Maintain maximum image quality for photography workflows.',
  keywords: 'RAW to TIFF converter, photography workflow, camera RAW files, professional image editing, TIFF format, photo processing',
  openGraph: {
    title: 'RAW to TIFF: Professional Photography Conversion',
    description: 'Transform RAW camera files into professional TIFF format for editing and archival.',
    type: 'article',
  },
};

export default function RawToTiffGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
          <Camera className="w-4 h-4" />
          <span>Professional Photography</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          RAW to TIFF: Professional Photography Workflow
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform your RAW camera files into professional TIFF format. Maintain maximum image quality 
          while creating files compatible with professional editing software and archival systems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/convert/raw-tiff" className="btn-primary">
            Convert RAW to TIFF
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/blog" className="btn-ghost">
            More Photography Guides
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Why RAW Files Need Professional Conversion</h2>
        
        <div className="card p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
          <div className="flex items-start gap-4">
            <Camera className="w-8 h-8 text-amber-500 mt-1" />
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">The RAW File Challenge</h3>
              <p className="text-muted-foreground">
                RAW files contain unprocessed sensor data that requires specialized software to view and edit. 
                While they offer maximum quality and flexibility, they create workflow challenges in professional environments.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-red-600">RAW File Limitations</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Limited software support</strong> - Requires specialized RAW processors</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Proprietary formats</strong> - Each camera brand uses different RAW formats</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Large file sizes</strong> - Consume significant storage space</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Slow processing</strong> - Require powerful hardware for editing</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Client compatibility</strong> - Clients can&apos;t view RAW files easily</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-600">TIFF Professional Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Universal compatibility</strong> - Opens in any professional software</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Lossless compression</strong> - Maintains full image quality</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Industry standard</strong> - Accepted by all professional workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Archival quality</strong> - Perfect for long-term storage</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Client friendly</strong> - Easy to share and review</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Professional Use Cases */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Professional RAW to TIFF Workflows</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Camera className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Commercial Photography</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Product photography for e-commerce</li>
              <li>• Fashion and portrait photography</li>
              <li>• Architectural and real estate photography</li>
              <li>• Event and wedding photography</li>
              <li>• Stock photography submissions</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Image className="w-6 h-6 text-green-600" aria-label="RAW to TIFF conversion icon" />
            </div>
            <h3 className="text-lg font-semibold">Print and Publishing</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Magazine and newspaper publishing</li>
              <li>• Book and catalog photography</li>
              <li>• Fine art printing and exhibitions</li>
              <li>• Marketing and advertising materials</li>
              <li>• Large format printing projects</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold">Archive and Preservation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Museum and cultural institution archives</li>
              <li>• Historical documentation projects</li>
              <li>• Scientific and research photography</li>
              <li>• Legal and forensic photography</li>
              <li>• Corporate and institutional archives</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold">Professional Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Photo editing and retouching services</li>
              <li>• Color correction and grading</li>
              <li>• Batch processing for studios</li>
              <li>• Client delivery and proofing</li>
              <li>• Cross-platform collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conversion Process */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Professional RAW to TIFF Conversion Process</h2>
        
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-bold">
                1
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Upload RAW Files</h3>
                <p className="text-muted-foreground">
                  Select your RAW camera files from Canon (.CR2, .CR3), Nikon (.NEF), Sony (.ARW), 
                  Fujifilm (.RAF), or other supported formats. Our converter handles all major camera brands.
                </p>
                <Link href="/convert/raw-tiff" className="inline-flex items-center gap-2 text-indigo-600 hover:underline">
                  Open RAW to TIFF Converter
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-bold">
                2
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Configure Processing Settings</h3>
                <p className="text-muted-foreground">
                  professional photographers who don&apos;t want to compromise on image quality.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• <strong>Color Space:</strong> sRGB, Adobe RGB, or ProPhoto RGB</li>
                  <li>• <strong>Bit Depth:</strong> 8-bit, 16-bit, or 32-bit per channel</li>
                  <li>• <strong>White Balance:</strong> As shot, daylight, or custom temperature</li>
                  <li>• <strong>Exposure:</strong> Automatic or manual exposure adjustment</li>
                  <li>• <strong>Compression:</strong> None, LZW, or ZIP compression</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-bold">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Quality and Output Options</h3>
                <p className="text-muted-foreground">
                  Choose settings based on your intended use:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• <strong>Print Quality:</strong> 16-bit, Adobe RGB, no compression</li>
                  <li>• <strong>Web/Screen:</strong> 8-bit, sRGB, LZW compression</li>
                  <li>• <strong>Archive:</strong> 16-bit, ProPhoto RGB, lossless compression</li>
                  <li>• <strong>Editing:</strong> 16-bit, working color space, no compression</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-bold">
                4
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Process and Download</h3>
                <p className="text-muted-foreground">
                  Convert your RAW files to professional TIFF format. Download individual files or 
                  get all converted images in a ZIP archive for efficient workflow management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Technical Advantages of TIFF Format</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Image Quality</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Lossless compression</strong> - No quality degradation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>High bit depth support</strong> - Up to 32-bit per channel</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Wide color gamut</strong> - Supports professional color spaces</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Transparency support</strong> - Alpha channel preservation</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Professional Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Metadata preservation</strong> - EXIF, IPTC, and XMP data</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Layer support</strong> - Multiple image layers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Color profile embedding</strong> - ICC profile support</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Cross-platform compatibility</strong> - Works everywhere</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Professional Conversion Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">Color Management</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use appropriate color space for intended output</li>
              <li>• Embed ICC profiles for accurate color reproduction</li>
              <li>• Maintain consistent white balance across series</li>
              <li>• Consider monitor calibration for accurate preview</li>
              <li>• Test color accuracy on target output devices</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-green-600">File Management</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use descriptive filenames for organization</li>
              <li>• Maintain folder structure for projects</li>
              <li>• Keep RAW originals as master files</li>
              <li>• Create different TIFF versions for different uses</li>
              <li>• Implement backup strategies for valuable work</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-purple-600">Quality Control</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Check exposure and highlight/shadow detail</li>
              <li>• Verify color accuracy and saturation</li>
              <li>• Inspect for noise and artifacts</li>
              <li>• Ensure proper sharpening for output</li>
              <li>• Test files in target applications</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-orange-600">Workflow Efficiency</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Batch process similar images together</li>
              <li>• Create presets for common scenarios</li>
              <li>• Use appropriate compression for file size</li>
              <li>• Optimize settings for specific output needs</li>
              <li>• Document processing decisions for consistency</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl">
        <h2 className="text-3xl font-bold">Elevate Your Photography Workflow</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Transform your RAW camera files into professional TIFF format. Maintain maximum quality 
          while ensuring compatibility with all professional editing and archival systems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/convert/raw-tiff" className="btn-primary">
            Convert RAW to TIFF Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/blog" className="btn-ghost">
            More Photography Tips
          </Link>
        </div>
      </section>
    </div>
  );
}
