import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Code, Image, Globe, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SVG to PNG Converter: Make Vector Graphics Compatible Everywhere',
  description: 'Convert SVG vector graphics to PNG images for universal compatibility. Perfect for websites, presentations, and platforms that don\'t support SVG format.',
  keywords: 'SVG to PNG converter, vector to raster, SVG compatibility, convert vector graphics, SVG to image, web graphics converter',
  openGraph: {
    title: 'SVG to PNG: Universal Vector Graphics Compatibility',
    description: 'Transform SVG vector graphics into widely supported PNG images.',
    type: 'article',
  },
};

export default function SvgToPngGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
          <Code className="w-4 h-4" />
          <span>Vector&apos;s Power</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          SVG to PNG: Universal Graphics Compatibility
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform your SVG vector graphics into widely supported PNG images. 
          Solve compatibility issues and use your graphics anywhere without restrictions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/convert/svg-png" className="btn-primary">
            Convert SVG to PNG
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/blog" className="btn-ghost">
            More Graphics Guides
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Why SVG Compatibility Holds You Back</h2>
        
        <div className="card p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
          <div className="flex items-start gap-4">
            <Code className="w-8 h-8 text-red-500 mt-1" />
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">The SVG Support Problem</h3>
              <p className="text-muted-foreground">
                SVG files are perfect for logos and icons, but they can&apos;t be used everywhere. Many platforms, applications, and older systems 
                don&apos;t support SVG format, limiting where you can use your graphics universally.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-red-600">SVG Compatibility Issues</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Email clients block SVG</strong> - Most email platforms don&apos;t support SVG</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Social media limitations</strong> - Many platforms reject SVG uploads</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Office software issues</strong> - PowerPoint/Word have poor SVG support</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Older browser problems</strong> - Legacy systems can&apos;t display SVG</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Print compatibility</strong> - Many printers struggle with SVG files</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-600">PNG Universal Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Universal support</strong> - Works on every platform and device</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Email friendly</strong> - Perfect for newsletters and signatures</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Social media ready</strong> - Upload anywhere without issues</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Office compatible</strong> - Works perfectly in presentations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Print ready</strong> - High-quality output for physical media</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Who Needs SVG to PNG Conversion?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Web Developers & Designers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Create fallback images for older browsers</li>
              <li>• Generate social media preview images</li>
              <li>• Convert icons for email templates</li>
              <li>• Create print-ready graphics from web assets</li>
              <li>• Generate thumbnails and previews</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Image className="w-6 h-6 text-green-600" aria-label="SVG to PNG conversion icon" />
            </div>
            <h3 className="text-lg font-semibold">Marketing Professionals</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use logos in email campaigns</li>
              <li>• Create social media graphics</li>
              <li>• Generate print materials from digital assets</li>
              <li>• Convert brand assets for presentations</li>
              <li>• Create advertising graphics</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold">App Developers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Generate app icons from SVG designs</li>
              <li>• Create multiple resolution assets</li>
              <li>• Convert UI elements for different platforms</li>
              <li>• Generate splash screens and graphics</li>
              <li>• Create store listing images</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold">Content Creators</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Convert illustrations for blog posts</li>
              <li>• Create YouTube thumbnails from vector art</li>
              <li>• Generate graphics for online courses</li>
              <li>• Convert logos for video content</li>
              <li>• Create print materials from digital designs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Convert */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">How to Convert SVG to PNG: Professional Results</h2>
        
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 font-bold">
                1
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Upload Your SVG File</h3>
                <p className="text-muted-foreground">
                  Create high-resolution PNG versions of your SVG graphics that look crisp on any device.rter handles simple icons, complex illustrations, 
                  and everything in between. Supports SVG files of any size and complexity.
                </p>
                <Link href="/convert/svg-png" className="inline-flex items-center gap-2 text-purple-600 hover:underline">
                  Open SVG to PNG Converter
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 font-bold">
                2
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Set Output Dimensions</h3>
                <p className="text-muted-foreground">
                  Choose the exact dimensions you need - from tiny favicons to billboard-sized graphics.an scale to any size 
                  without quality loss. Common options include:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• <strong>Original Size:</strong> Maintain SVG&apos;s native dimensions</li>
                  <li>• <strong>Web Optimized:</strong> 1200px width for websites</li>
                  <li>• <strong>Social Media:</strong> 1080x1080px for Instagram</li>
                  <li>• <strong>Print Quality:</strong> 300 DPI for physical materials</li>
                  <li>• <strong>Custom Size:</strong> Specify exact width and height</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 font-bold">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Configure Background and Quality</h3>
                <p className="text-muted-foreground">
                  Customize the output to match your needs:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• <strong>Transparent Background:</strong> Keep SVG transparency (default)</li>
                  <li>• <strong>White Background:</strong> Perfect for email and print</li>
                  <li>• <strong>Custom Color:</strong> Choose any background color</li>
                  <li>• <strong>Anti-aliasing:</strong> Smooth edges for crisp graphics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 font-bold">
                4
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Download Your PNG Image</h3>
                <p className="text-muted-foreground">
                  Get your high-quality PNG image instantly. The converted file maintains all the visual quality 
                  of your original SVG while being compatible everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Benefits */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Why Our SVG to PNG Converter Excels</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Vector Rendering Excellence</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Perfect scaling</strong> - Crisp graphics at any resolution</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Color accuracy</strong> - Maintains exact SVG colors and gradients</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Transparency support</strong> - Preserves alpha channels perfectly</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Complex path handling</strong> - Supports advanced SVG features</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Professional Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Batch conversion</strong> - Convert multiple SVG files at once</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Custom dimensions</strong> - Any size from tiny icons to large prints</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Background options</strong> - Transparent, solid, or custom colors</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Privacy protection</strong> - All processing happens locally</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Popular SVG to PNG Conversion Scenarios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">Logo and Brand Assets</h3>
            <p className="text-sm text-muted-foreground">
              Convert brand logos and graphics for use in email signatures, social media profiles, 
              presentations, and print materials where SVG isn&apos;t supported.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Email signature logos</li>
              <li>• Social media profile images</li>
              <li>• Business card graphics</li>
              <li>• Presentation assets</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-green-600">Web Graphics and Icons</h3>
            <p className="text-sm text-muted-foreground">
              Create fallback images for older browsers, generate social media previews, 
              and convert icons for platforms that don&apos;t support SVG format.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Browser fallback images</li>
              <li>• Social media previews</li>
              <li>• App store graphics</li>
              <li>• Email template icons</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-purple-600">Print and Marketing</h3>
            <p className="text-sm text-muted-foreground">
              Convert vector graphics for use in print materials, brochures, flyers, 
              and other marketing materials that require raster image formats.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Print advertisements</li>
              <li>• Marketing brochures</li>
              <li>• Trade show graphics</li>
              <li>• Product packaging</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-orange-600">Content Creation</h3>
            <p className="text-sm text-muted-foreground">
              Transform vector illustrations and graphics for use in blog posts, 
              video thumbnails, course materials, and other content formats.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Blog post illustrations</li>
              <li>• Video thumbnails</li>
              <li>• Course graphics</li>
              <li>• Social media content</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">SVG to PNG Conversion Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">Resolution Planning</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Choose 2x resolution for high-DPI displays</li>
              <li>• Use 300 DPI for print materials</li>
              <li>• Optimize web images to 72-150 DPI</li>
              <li>• Consider multiple sizes for responsive design</li>
              <li>• Test output on target devices</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-green-600">Quality Optimization</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Enable anti-aliasing for smooth edges</li>
              <li>• Use transparent backgrounds when possible</li>
              <li>• Choose appropriate color depth</li>
              <li>• Optimize file size for web use</li>
              <li>• Maintain aspect ratio during scaling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
        <h2 className="text-3xl font-bold">Make Your SVG Graphics Universal</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Stop worrying about SVG compatibility issues. Convert your vector graphics to PNG 
          and use them anywhere with confidence. Free, fast, and professional quality.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/convert/svg-png" className="btn-primary">
            Convert SVG to PNG Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/blog" className="btn-ghost">
            More Graphics Tips
          </Link>
        </div>
      </section>
    </div>
  );
}
