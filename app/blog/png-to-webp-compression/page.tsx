import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Palette, TrendingDown, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PNG to WebP Converter: Maintain Transparency with 50% Smaller Files',
  description: 'Convert PNG images to WebP format while preserving transparency. Reduce file sizes by up to 50% without losing quality. Perfect for logos, icons, and graphics.',
  keywords: 'PNG to WebP, transparent images, image compression, web optimization, logo conversion, icon optimization',
  openGraph: {
    title: 'PNG to WebP Converter: Maintain Transparency with 50% Smaller Files',
    description: 'Convert PNG images to WebP format while preserving transparency and reducing file sizes.',
    type: 'article',
  },
};

export default function PngToWebpGuidePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="prose prose-lg max-w-none">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            PNG to WebP: Keep Transparency, Cut File Size in Half
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Convert PNG images to modern WebP format while preserving transparency and alpha channels. 
            Achieve up to 50% smaller file sizes without compromising visual quality.
          </p>
          <div className="flex justify-center mt-8">
            <Link href="/convert/png-webp" className="btn-primary inline-flex items-center">
              <Palette className="w-5 h-5 mr-2" />
              Convert PNG to WebP Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </header>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="card p-6 text-center">
            <TrendingDown className="w-12 h-12 mx-auto mb-4 text-green-500" />
            <h3 className="text-lg font-semibold mb-2">50% Smaller</h3>
            <p className="text-sm text-muted-foreground">Dramatic file size reduction</p>
          </div>
          <div className="card p-6 text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-lg font-semibold mb-2">Transparency Kept</h3>
            <p className="text-sm text-muted-foreground">Alpha channels preserved</p>
          </div>
          <div className="card p-6 text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-lg font-semibold mb-2">Faster Loading</h3>
            <p className="text-sm text-muted-foreground">Better web performance</p>
          </div>
          <div className="card p-6 text-center">
            <Palette className="w-12 h-12 mx-auto mb-4 text-emerald-500" />
            <h3 className="text-lg font-semibold mb-2">Perfect Quality</h3>
            <p className="text-sm text-muted-foreground">No visual difference</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Convert PNG to WebP?</h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-lg mb-8">
            <p className="text-lg mb-6">
              PNG files are excellent for graphics with transparency, but they can be quite large. 
              WebP offers the same transparency support with significantly better compression.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">File Size Benefits</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>40-50% smaller than equivalent PNG</li>
                  <li>Lossless compression available</li>
                  <li>Better bandwidth efficiency</li>
                  <li>Faster page load times</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quality Advantages</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full transparency support</li>
                  <li>No quality loss in lossless mode</li>
                  <li>Better compression algorithms</li>
                  <li>Modern browser optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Perfect Use Cases for PNG to WebP</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  🎨 Design Elements
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Company logos with transparency</li>
                  <li>UI icons and interface elements</li>
                  <li>Watermarks and overlays</li>
                  <li>Product images with transparent backgrounds</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  🌐 Web Graphics
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Navigation icons and buttons</li>
                  <li>Social media icons</li>
                  <li>Badge and award graphics</li>
                  <li>Decorative elements</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  📱 Mobile Apps
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>App icons and splash screens</li>
                  <li>In-app graphics and illustrations</li>
                  <li>Button states and UI elements</li>
                  <li>Achievement badges</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  🛍️ E-commerce
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Product thumbnails</li>
                  <li>Category icons</li>
                  <li>Trust badges and certifications</li>
                  <li>Payment method icons</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Compression Comparison: Real Examples</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Image Type</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">PNG Size</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">WebP Size</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Logo (transparent)</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">45 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">22 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">51%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3">UI Icon Set</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">120 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">65 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">46%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Product Image</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">280 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">140 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">50%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Illustration</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">350 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">180 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">49%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">💡 Performance Impact</h3>
            <p>Converting 50 PNG icons from 2.5MB total to 1.2MB WebP saves 1.3MB per page load, 
            reducing loading time by 3-5 seconds on slower connections.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Lossless vs Lossy WebP Conversion</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Lossless WebP</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span>Quality:</span>
                  <span className="font-semibold">Identical to PNG</span>
                </div>
                <div className="flex justify-between">
                  <span>File Size:</span>
                  <span className="font-semibold">25-35% smaller</span>
                </div>
                <div className="flex justify-between">
                  <span>Transparency:</span>
                  <span className="font-semibold">Fully preserved</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Perfect for logos, icons, and graphics where quality is paramount
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Lossy WebP</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span>Quality:</span>
                  <span className="font-semibold">Near-identical</span>
                </div>
                <div className="flex justify-between">
                  <span>File Size:</span>
                  <span className="font-semibold">50-70% smaller</span>
                </div>
                <div className="flex justify-between">
                  <span>Transparency:</span>
                  <span className="font-semibold">Fully preserved</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Ideal for photographs and complex images where slight quality trade-off is acceptable
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Conversion Settings & Best Practices</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Quality Settings Guide</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                  <h4 className="font-semibold text-blue-600">Lossless Mode</h4>
                  <p className="text-sm mb-2">Perfect quality preservation</p>
                  <ul className="text-xs space-y-1">
                    <li>• Logos and branding</li>
                    <li>• UI elements</li>
                    <li>• Technical diagrams</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                  <h4 className="font-semibold text-green-600">90-95% Quality</h4>
                  <p className="text-sm mb-2">Excellent with smaller files</p>
                  <ul className="text-xs space-y-1">
                    <li>• Product images</li>
                    <li>• Marketing graphics</li>
                    <li>• Hero images</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
                  <h4 className="font-semibold text-yellow-600">80-90% Quality</h4>
                  <p className="text-sm mb-2">Good balance for web</p>
                  <ul className="text-xs space-y-1">
                    <li>• Thumbnails</li>
                    <li>• Background images</li>
                    <li>• Gallery images</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Optimization Workflow</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>Analyze Your PNG:</strong> Check if it has transparency and complexity</li>
                <li><strong>Choose Conversion Mode:</strong> Lossless for graphics, lossy for photos</li>
                <li><strong>Set Quality Level:</strong> Start with 90% and adjust based on results</li>
                <li><strong>Test File Size:</strong> Ensure significant savings (aim for 30%+ reduction)</li>
                <li><strong>Visual Quality Check:</strong> Compare side-by-side before deploying</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Implementation & Browser Support</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Progressive Enhancement</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4">
                <pre className="text-sm overflow-x-auto">
{`<picture>
  <source srcset="logo.webp" type="image/webp">
  <img src="logo.png" alt="Company Logo">
</picture>`}
                </pre>
              </div>
              <p className="text-sm text-muted-foreground">
                This ensures WebP is served to supported browsers while PNG acts as fallback
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Browser Compatibility</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Chrome/Edge</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Full Support</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Firefox</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Full Support</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Safari</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">iOS 14+</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                95%+ global browser support for WebP
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Will transparency be preserved in WebP?</h3>
              <p>Yes, WebP fully supports alpha channels and transparency. The converted images will maintain all transparent areas exactly as in the original PNG.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Should I use lossless or lossy WebP for PNG conversion?</h3>
              <p>Use lossless for graphics, logos, and UI elements where perfect quality is needed. Use lossy (90%+ quality) for photographs and complex images to achieve maximum file size reduction.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">How much smaller will my PNG files become?</h3>
              <p>Typically 40-50% smaller with lossless WebP, and up to 70% smaller with high-quality lossy WebP, while maintaining visual quality and transparency.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Can I batch convert multiple PNG files?</h3>
              <p>Yes, our converter supports batch processing. Upload multiple PNG files and convert them all to WebP format simultaneously, then download as a ZIP file.</p>
            </div>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Optimize Your PNG Images Today</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Convert your PNG images to WebP format and enjoy 50% smaller file sizes while 
            maintaining perfect transparency and visual quality.
          </p>
          <Link href="/convert/png-webp" className="btn-primary inline-flex items-center text-lg px-8 py-3">
            <Palette className="w-5 h-5 mr-2" />
            Convert PNG to WebP
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </section>
      </article>
    </div>
  );
}
