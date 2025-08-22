import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Palette, Zap, Settings, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SVG to PNG Converter: Convert Vector Graphics to High-Quality Images',
  description: 'Convert SVG files to PNG format with customizable resolution and background. Perfect for web design, print, and digital projects. Free online SVG to PNG converter.',
  keywords: 'SVG to PNG, vector to raster, SVG converter, scalable graphics, PNG conversion, web design',
  openGraph: {
    title: 'SVG to PNG Converter: Convert Vector Graphics to High-Quality Images',
    description: 'Convert SVG files to PNG format with customizable resolution and background.',
    type: 'article',
  },
};

export default function SvgToPngGuidePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="prose prose-lg max-w-none">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-6">
            SVG to PNG Converter: Convert Vector Graphics to High-Quality Images
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your scalable vector graphics (SVG) into high-quality PNG images with customizable 
            resolution, background, and DPI settings for any project.
          </p>
          <div className="flex justify-center mt-8">
            <Link href="/convert/svg-png" className="btn-primary inline-flex items-center">
              <Palette className="w-5 h-5 mr-2" />
              Convert SVG to PNG Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </header>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="card p-6 text-center">
            <Settings className="w-12 h-12 mx-auto mb-4 text-teal-500" />
            <h3 className="text-lg font-semibold mb-2">Custom Resolution</h3>
            <p className="text-sm text-muted-foreground">Set any scale and DPI</p>
          </div>
          <div className="card p-6 text-center">
            <Palette className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-lg font-semibold mb-2">Background Control</h3>
            <p className="text-sm text-muted-foreground">Transparent or custom color</p>
          </div>
          <div className="card p-6 text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-green-500" />
            <h3 className="text-lg font-semibold mb-2">High Quality</h3>
            <p className="text-sm text-muted-foreground">Crisp, professional results</p>
          </div>
          <div className="card p-6 text-center">
            <Download className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-lg font-semibold mb-2">Batch Processing</h3>
            <p className="text-sm text-muted-foreground">Convert multiple files</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding SVG vs PNG</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">SVG (Vector Graphics)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Infinitely scalable without quality loss</li>
                <li>Small file sizes for simple graphics</li>
                <li>Editable with code or design tools</li>
                <li>Perfect for logos and icons</li>
                <li>Limited browser support for some features</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">PNG (Raster Images)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Universal compatibility across all platforms</li>
                <li>Supports transparency</li>
                <li>Fixed resolution and dimensions</li>
                <li>Larger file sizes for complex images</li>
                <li>Ideal for web and print use</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">When to Convert SVG to PNG</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Perfect Use Cases:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email Marketing:</strong> Ensure logos display correctly in all email clients</li>
                <li><strong>Social Media:</strong> Create profile pictures and cover images</li>
                <li><strong>Print Design:</strong> Generate high-DPI images for brochures and flyers</li>
                <li><strong>App Development:</strong> Create app icons and UI elements</li>
                <li><strong>Presentations:</strong> Embed images in PowerPoint or Google Slides</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Benefits of Conversion:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Guaranteed display consistency</li>
                <li>No dependency on SVG support</li>
                <li>Faster loading in some contexts</li>
                <li>Compatible with legacy systems</li>
                <li>Easier to use in design software</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Conversion Settings Guide</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Scale Factor</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold">1x Scale</h4>
                  <p className="text-sm text-muted-foreground">Original SVG dimensions</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold">2x Scale</h4>
                  <p className="text-sm text-muted-foreground">Double size for high-DPI displays</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold">4x Scale</h4>
                  <p className="text-sm text-muted-foreground">Ultra-high resolution for print</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">DPI Settings</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                  <h4 className="font-semibold">72-96 DPI</h4>
                  <p className="text-sm text-muted-foreground">Web and screen display</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                  <h4 className="font-semibold">150-200 DPI</h4>
                  <p className="text-sm text-muted-foreground">High-quality web graphics</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                  <h4 className="font-semibold">300+ DPI</h4>
                  <p className="text-sm text-muted-foreground">Professional print quality</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Background Options</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Transparent:</strong> Maintains SVG transparency for flexible use</li>
                <li><strong>White:</strong> Clean background for documents and presentations</li>
                <li><strong>Custom Color:</strong> Match your brand or design requirements</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Step-by-Step Conversion Process</h2>
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-8 rounded-lg">
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Upload SVG Files:</strong> Drag and drop or click to select your SVG graphics
              </li>
              <li>
                <strong>Configure Settings:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Choose scale factor (1x to 10x)</li>
                  <li>Set DPI (72 to 600)</li>
                  <li>Select background (transparent, white, or custom)</li>
                </ul>
              </li>
              <li>
                <strong>Preview Results:</strong> Check the conversion preview before downloading
              </li>
              <li>
                <strong>Download PNG:</strong> Get individual files or batch download as ZIP
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Optimization Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">For Web Use</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use 2x scale for retina displays</li>
                <li>Keep DPI at 96-150 for faster loading</li>
                <li>Consider transparent backgrounds</li>
                <li>Optimize file size vs quality balance</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">For Print</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use 300+ DPI for professional quality</li>
                <li>Scale up 3x-5x for large formats</li>
                <li>Use white or custom backgrounds</li>
                <li>Test print at actual size first</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Issues and Solutions</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">SVG Not Displaying Correctly?</h3>
              <p className="mb-2">Some complex SVG features may not render perfectly. Try:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Simplifying complex paths and effects</li>
                <li>Converting text to paths in your design software</li>
                <li>Removing unsupported SVG features</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Blurry Results?</h3>
              <p className="mb-2">Increase the scale factor and DPI settings:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use 2x scale minimum for sharp results</li>
                <li>Set DPI to 150+ for better quality</li>
                <li>Ensure your original SVG is well-designed</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Start Converting SVG to PNG</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your vector graphics into high-quality PNG images with full control 
            over resolution, background, and quality settings.
          </p>
          <Link href="/convert/svg-png" className="btn-primary inline-flex items-center text-lg px-8 py-3">
            <Palette className="w-5 h-5 mr-2" />
            Convert SVG to PNG
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </section>
      </article>
    </div>
  );
}
