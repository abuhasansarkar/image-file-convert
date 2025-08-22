import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Image Format Comparison 2024: JPG vs PNG vs WebP vs HEIC | Complete Guide',
  description: 'Complete comparison of image formats: JPG, PNG, WebP, HEIC, SVG, and more. Learn which format to use for web, print, and mobile. File size, quality, and compatibility guide.',
  keywords: 'image formats, JPG vs PNG, WebP vs JPG, HEIC comparison, image compression, web optimization, file formats',
  openGraph: {
    title: 'Image Format Comparison 2024: JPG vs PNG vs WebP vs HEIC',
    description: 'Complete comparison of image formats with file size, quality, and compatibility analysis.',
    type: 'article',
  },
};

export default function ImageFormatComparisonPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="prose prose-lg max-w-none">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Image Format Comparison 2024: Complete Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive comparison of modern image formats including JPG, PNG, WebP, HEIC, and SVG. 
            Learn which format to choose for web, mobile, and print applications.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Quick Format Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">JPG/JPEG</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Compression:</span>
                  <span className="font-medium">Lossy</span>
                </div>
                <div className="flex justify-between">
                  <span>Transparency:</span>
                  <span className="font-medium">No</span>
                </div>
                <div className="flex justify-between">
                  <span>Best for:</span>
                  <span className="font-medium">Photos</span>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-600">PNG</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Compression:</span>
                  <span className="font-medium">Lossless</span>
                </div>
                <div className="flex justify-between">
                  <span>Transparency:</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span>Best for:</span>
                  <span className="font-medium">Graphics</span>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">WebP</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Compression:</span>
                  <span className="font-medium">Both</span>
                </div>
                <div className="flex justify-between">
                  <span>Transparency:</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span>Best for:</span>
                  <span className="font-medium">Web</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Detailed Format Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Format</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">File Size</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Quality</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Transparency</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Browser Support</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">JPG</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Small</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Good (lossy)</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">No</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Universal</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">PNG</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Large</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Excellent (lossless)</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Yes</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Universal</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">WebP</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Very Small</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Excellent</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Yes</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Modern browsers</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">HEIC</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Very Small</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Excellent</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Yes</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Safari only</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">SVG</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Very Small</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Scalable</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Yes</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Modern browsers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">File Size Comparison Examples</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Sample Image: 1920x1080 Photo</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded">
                <div className="text-2xl font-bold text-blue-600">850 KB</div>
                <div className="text-sm">JPG (90% quality)</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded">
                <div className="text-2xl font-bold text-green-600">2.1 MB</div>
                <div className="text-sm">PNG</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded">
                <div className="text-2xl font-bold text-purple-600">580 KB</div>
                <div className="text-sm">WebP (90% quality)</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded">
                <div className="text-2xl font-bold text-orange-600">520 KB</div>
                <div className="text-sm">HEIC</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">When to Use Each Format</h2>
          <div className="space-y-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">JPG/JPEG - The Universal Standard</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">✅ Best For:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Photographs and complex images</li>
                    <li>Social media uploads</li>
                    <li>Email attachments</li>
                    <li>Web images without transparency</li>
                    <li>Print photography</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-600">❌ Avoid For:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Images requiring transparency</li>
                    <li>Simple graphics with few colors</li>
                    <li>Images that will be edited multiple times</li>
                    <li>Screenshots with text</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">PNG - The Quality Champion</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">✅ Best For:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Logos and branding materials</li>
                    <li>Screenshots and UI elements</li>
                    <li>Images with transparency</li>
                    <li>Simple graphics and illustrations</li>
                    <li>Images requiring perfect quality</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-600">❌ Avoid For:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Large photographs (file size)</li>
                    <li>Web images where speed matters</li>
                    <li>Mobile app backgrounds</li>
                    <li>Bulk photo storage</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">WebP - The Modern Web Format</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">✅ Best For:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Modern website optimization</li>
                    <li>Progressive web apps</li>
                    <li>E-commerce product images</li>
                    <li>Blog and article images</li>
                    <li>Mobile-first designs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-600">❌ Avoid For:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Legacy browser support needed</li>
                    <li>Email marketing images</li>
                    <li>Print materials</li>
                    <li>Long-term archival</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Browser Support Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Format</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Chrome</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Firefox</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Safari</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Edge</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Mobile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">JPG</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">PNG</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">WebP</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅*</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅*</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">HEIC</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">iOS only</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-muted-foreground mt-2">* Requires iOS 14+ / macOS 11+ for Safari</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Performance Impact Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Loading Speed Comparison</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>WebP</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-green-200 h-2 rounded mr-2">
                      <div className="w-full bg-green-500 h-2 rounded"></div>
                    </div>
                    <span className="text-sm">Fastest</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>JPG</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-blue-200 h-2 rounded mr-2">
                      <div className="w-4/5 bg-blue-500 h-2 rounded"></div>
                    </div>
                    <span className="text-sm">Fast</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>PNG</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-yellow-200 h-2 rounded mr-2">
                      <div className="w-1/2 bg-yellow-500 h-2 rounded"></div>
                    </div>
                    <span className="text-sm">Slower</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">SEO Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>WebP:</strong> Best for Core Web Vitals, Google recommends
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>JPG:</strong> Good performance, universal compatibility
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>PNG:</strong> Can slow page speed if overused
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Conversion Recommendations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">🌐 For Web Optimization</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Convert JPG photos to WebP (30% smaller)</li>
                <li>Convert PNG graphics to WebP (50% smaller)</li>
                <li>Keep PNG fallbacks for older browsers</li>
                <li>Use progressive enhancement techniques</li>
              </ol>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">📱 For Mobile Apps</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Convert HEIC to JPG for Android compatibility</li>
                <li>Use WebP for modern app development</li>
                <li>Optimize PNG icons for different screen densities</li>
                <li>Consider SVG for scalable graphics</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Future-Proofing Your Images</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Emerging Formats to Watch</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">AVIF (AV1 Image Format)</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Even better compression than WebP</li>
                  <li>Growing browser support</li>
                  <li>Excellent for next-gen web apps</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">JPEG XL</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Backwards compatible with JPEG</li>
                  <li>Superior compression and quality</li>
                  <li>Still in development phase</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Convert Between Any Image Format</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Use our free image converter to transform between JPG, PNG, WebP, HEIC, and other formats 
            with optimal quality and compression settings.
          </p>
          <Link href="/" className="btn-primary inline-flex items-center text-lg px-8 py-3">
            Start Converting Images
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </section>
      </article>
    </div>
  );
}
