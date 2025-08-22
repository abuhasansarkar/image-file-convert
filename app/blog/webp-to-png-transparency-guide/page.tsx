import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'WebP to PNG Converter: Preserve Transparency & Quality | Free Online Tool',
  description: 'Convert WebP images to PNG format while preserving transparency and quality. Fast, free, and secure WebP to PNG converter for web developers and designers.',
  keywords: 'WebP to PNG, convert WebP, image transparency, web image conversion, PNG converter, modern image formats',
  openGraph: {
    title: 'WebP to PNG Converter: Preserve Transparency & Quality',
    description: 'Convert WebP images to PNG format while preserving transparency and quality.',
    type: 'article',
  },
};

export default function WebpToPngGuidePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="prose prose-lg max-w-none">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
            WebP to PNG Converter: Preserve Transparency & Quality
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Convert modern WebP images to universally compatible PNG format while maintaining 
            transparency, quality, and all visual details.
          </p>
          <div className="flex justify-center mt-8">
            <Link href="/convert/webp-png" className="btn-primary inline-flex items-center">
              Convert WebP to PNG Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Convert WebP to PNG?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-600">Universal Compatibility</h3>
              <p className="mb-4">
                While WebP offers excellent compression, PNG is supported by every browser, 
                device, and application. Converting ensures your images work everywhere.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Legacy browser support</li>
                <li>Email client compatibility</li>
                <li>Design software integration</li>
                <li>Print and offline use</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Transparency Preservation</h3>
              <p className="mb-4">
                PNG's lossless transparency support makes it perfect for logos, icons, 
                and graphics that need to blend seamlessly with any background.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Alpha channel support</li>
                <li>Crisp transparent edges</li>
                <li>No compression artifacts</li>
                <li>Perfect for overlays</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">WebP vs PNG: Technical Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Feature</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">WebP</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">PNG</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">File Size</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">25-35% smaller</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Larger but lossless</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Browser Support</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Modern browsers only</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Universal support</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Transparency</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Yes (lossy/lossless)</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Yes (lossless)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Quality</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Excellent with compression</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Perfect lossless quality</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Use Cases for WebP to PNG Conversion</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">🎨 Design & Graphics</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Logo files for brand guidelines</li>
                  <li>Icons for desktop applications</li>
                  <li>Transparent graphics for presentations</li>
                  <li>Print-ready artwork</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">📧 Marketing & Communication</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Email newsletter graphics</li>
                  <li>Social media assets</li>
                  <li>Banner advertisements</li>
                  <li>Product catalog images</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">💻 Development & Web</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Fallback images for older browsers</li>
                  <li>App store screenshots</li>
                  <li>Documentation images</li>
                  <li>UI mockups and wireframes</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">📄 Documentation & Archive</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Long-term image storage</li>
                  <li>Cross-platform compatibility</li>
                  <li>Legacy system integration</li>
                  <li>Backup and archival purposes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Conversion Process & Quality Tips</h2>
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Step-by-Step Guide:</h3>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Upload WebP Files:</strong> Select single or multiple WebP images</li>
              <li><strong>Automatic Processing:</strong> Our converter preserves all transparency and quality</li>
              <li><strong>Preview Results:</strong> Check the converted PNG before downloading</li>
              <li><strong>Download:</strong> Get individual files or batch download as ZIP</li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Quality Preservation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lossless conversion maintains original quality</li>
                <li>Transparency channels fully preserved</li>
                <li>Color profiles maintained</li>
                <li>No compression artifacts added</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">File Size Considerations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>PNG files will be larger than WebP</li>
                <li>Transparency increases file size</li>
                <li>Complex images create larger files</li>
                <li>Consider optimization for web use</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Browser Compatibility & Fallback Strategies</h2>
          <div className="card p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">WebP Browser Support</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded">
                <div className="font-semibold text-green-600">Chrome</div>
                <div className="text-sm">Full Support</div>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded">
                <div className="font-semibold text-green-600">Firefox</div>
                <div className="text-sm">Full Support</div>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded">
                <div className="font-semibold text-green-600">Safari</div>
                <div className="text-sm">iOS 14+, macOS 11+</div>
              </div>
              <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded">
                <div className="font-semibold text-red-600">IE/Old Browsers</div>
                <div className="text-sm">No Support</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">💡 Pro Tip: Progressive Enhancement</h3>
            <p className="mb-3">Use both formats for optimal performance:</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.png" alt="Description">
</picture>`}
            </pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Will converting WebP to PNG reduce quality?</h3>
              <p>No, our converter performs lossless conversion. The PNG will maintain the same visual quality as the original WebP, though file sizes will be larger.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Are transparent WebP images supported?</h3>
              <p>Yes, we fully support WebP images with transparency and preserve all alpha channel information in the converted PNG.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Can I convert animated WebP files?</h3>
              <p>Our converter extracts the first frame of animated WebP files. For full animation support, consider converting to GIF format instead.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">What's the maximum file size limit?</h3>
              <p>You can convert WebP files up to 200MB each. Most web images are well under this limit.</p>
            </div>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Convert WebP to PNG Now</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your modern WebP images to universally compatible PNG format 
            while preserving quality and transparency.
          </p>
          <Link href="/convert/webp-png" className="btn-primary inline-flex items-center text-lg px-8 py-3">
            Start Converting
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </section>
      </article>
    </div>
  );
}
