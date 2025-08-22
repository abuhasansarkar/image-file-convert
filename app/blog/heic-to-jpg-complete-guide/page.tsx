import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Download, Smartphone, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'HEIC to JPG Converter: Complete Guide to Convert iPhone Photos | 2024',
  description: 'Convert HEIC files to JPG format easily. Complete guide on converting iPhone photos to universal JPG format for better compatibility across all devices and platforms.',
  keywords: 'HEIC to JPG, convert HEIC, iPhone photos, HEIC converter, image conversion, photo format',
  openGraph: {
    title: 'HEIC to JPG Converter: Complete Guide to Convert iPhone Photos',
    description: 'Convert HEIC files to JPG format easily. Complete guide for iPhone photo conversion.',
    type: 'article',
  },
};

export default function HeicToJpgGuidePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="prose prose-lg max-w-none">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            HEIC to JPG Converter: Complete Guide to Convert iPhone Photos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn how to convert HEIC files to JPG format for universal compatibility. 
            Complete guide with step-by-step instructions, tips, and best practices.
          </p>
          <div className="flex justify-center mt-8">
            <Link href="/convert/heic-jpg" className="btn-primary inline-flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              Convert HEIC to JPG Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card p-6 text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-lg font-semibold mb-2">Fast Conversion</h3>
            <p className="text-sm text-muted-foreground">Convert multiple HEIC files to JPG in seconds</p>
          </div>
          <div className="card p-6 text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-green-500" />
            <h3 className="text-lg font-semibold mb-2">Privacy Protected</h3>
            <p className="text-sm text-muted-foreground">All processing happens in your browser</p>
          </div>
          <div className="card p-6 text-center">
            <Download className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-lg font-semibold mb-2">Batch Download</h3>
            <p className="text-sm text-muted-foreground">Download all converted files as ZIP</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What is HEIC Format?</h2>
          <p className="mb-4">
            HEIC (High Efficiency Image Container) is Apple's modern image format introduced with iOS 11. 
            It offers superior compression compared to JPG while maintaining excellent image quality. 
            However, HEIC files aren't universally supported across all devices and platforms.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3">Key Benefits of HEIC:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>50% smaller file sizes compared to JPG</li>
              <li>Better image quality at lower file sizes</li>
              <li>Support for transparency and multiple images</li>
              <li>Advanced features like depth information</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Convert HEIC to JPG?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Universal Compatibility</h3>
              <p className="mb-4">
                JPG is supported by virtually every device, browser, and application. 
                Converting HEIC to JPG ensures your photos can be viewed and shared anywhere.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Easy Sharing</h3>
              <p className="mb-4">
                Share your iPhone photos on social media, email, or websites without compatibility issues. 
                JPG format is accepted everywhere.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Convert HEIC to JPG</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Step-by-Step Guide:</h3>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Upload Your HEIC Files:</strong> Click the upload area or drag and drop your HEIC photos
              </li>
              <li>
                <strong>Adjust Quality Settings:</strong> Choose your preferred JPG quality (80-100% recommended)
              </li>
              <li>
                <strong>Start Conversion:</strong> Click "Convert" to begin the process
              </li>
              <li>
                <strong>Download Results:</strong> Download individual files or all as a ZIP archive
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices for HEIC to JPG Conversion</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">Quality Settings</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>90-100%:</strong> Best for professional photography and printing</li>
                <li><strong>80-90%:</strong> Good balance of quality and file size for web use</li>
                <li><strong>70-80%:</strong> Suitable for social media and email sharing</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">File Organization</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep original HEIC files as backup</li>
                <li>Use descriptive filenames for converted JPGs</li>
                <li>Organize by date or event for easy management</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Is HEIC to JPG conversion free?</h3>
              <p>Yes, our HEIC to JPG converter is completely free with no limits on file size or number of conversions.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Do you store my photos?</h3>
              <p>No, all conversion happens in your browser. Your photos never leave your device, ensuring complete privacy.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">What's the maximum file size?</h3>
              <p>You can convert HEIC files up to 200MB each. Most iPhone photos are well under this limit.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Which browsers support HEIC conversion?</h3>
              <p>Our converter works best in Safari (native HEIC support) but also functions in Chrome, Firefox, and Edge with fallback methods.</p>
            </div>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Convert Your HEIC Photos?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start converting your iPhone HEIC photos to universal JPG format now. 
            Fast, secure, and completely free.
          </p>
          <Link href="/convert/heic-jpg" className="btn-primary inline-flex items-center text-lg px-8 py-3">
            <Smartphone className="w-5 h-5 mr-2" />
            Convert HEIC to JPG
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </section>
      </article>
    </div>
  );
}
