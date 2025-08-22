import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingDown, Globe, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'JPG to WebP Converter: Reduce Image Size by 30% | Web Performance Tool',
  description: 'Convert JPG images to WebP format and reduce file sizes by up to 30% without quality loss. Improve website speed and SEO with our free JPG to WebP converter.',
  keywords: 'JPG to WebP, image optimization, web performance, reduce file size, website speed, SEO optimization',
  openGraph: {
    title: 'JPG to WebP Converter: Reduce Image Size by 30%',
    description: 'Convert JPG images to WebP format and reduce file sizes by up to 30% without quality loss.',
    type: 'article',
  },
};

export default function JpgToWebpGuidePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="prose prose-lg max-w-none">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            JPG to WebP Converter: Boost Website Performance
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Convert JPG images to modern WebP format and reduce file sizes by up to 30% 
            while maintaining excellent quality. Perfect for web optimization and faster loading times.
          </p>
          <div className="flex justify-center mt-8">
            <Link href="/convert/jpg-webp" className="btn-primary inline-flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Convert JPG to WebP Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </header>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="card p-6 text-center">
            <TrendingDown className="w-12 h-12 mx-auto mb-4 text-green-500" />
            <h3 className="text-lg font-semibold mb-2">30% Smaller</h3>
            <p className="text-sm text-muted-foreground">Reduce file sizes significantly</p>
          </div>
          <div className="card p-6 text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-lg font-semibold mb-2">Faster Loading</h3>
            <p className="text-sm text-muted-foreground">Improve page speed</p>
          </div>
          <div className="card p-6 text-center">
            <Globe className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-lg font-semibold mb-2">Better SEO</h3>
            <p className="text-sm text-muted-foreground">Google loves fast sites</p>
          </div>
          <div className="card p-6 text-center">
            <BarChart3 className="w-12 h-12 mx-auto mb-4 text-orange-500" />
            <h3 className="text-lg font-semibold mb-2">Same Quality</h3>
            <p className="text-sm text-muted-foreground">No visual difference</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why WebP is the Future of Web Images</h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-lg mb-8">
            <p className="text-lg mb-4">
              WebP is Google's modern image format that provides superior compression compared to JPG, 
              resulting in smaller file sizes without sacrificing visual quality.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Performance Benefits:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>25-35% smaller file sizes than JPG</li>
                  <li>Faster page loading times</li>
                  <li>Reduced bandwidth usage</li>
                  <li>Better user experience</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">SEO Advantages:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Improved Core Web Vitals scores</li>
                  <li>Higher Google search rankings</li>
                  <li>Better mobile performance</li>
                  <li>Reduced bounce rates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">File Size Comparison: JPG vs WebP</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Image Type</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">JPG Size</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">WebP Size</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Product Photo</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">150 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">105 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">30%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Hero Banner</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">500 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">325 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">35%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Blog Image</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">80 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">56 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">30%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">💡 Real-World Impact</h3>
            <p>A typical e-commerce page with 20 product images could save 900KB+ in total file size, 
            resulting in 2-3 seconds faster loading time on mobile connections.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Browser Support & Implementation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Current Browser Support</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Chrome</span>
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
                <div className="flex justify-between items-center">
                  <span>Edge</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Full Support</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Over 95% of users worldwide can view WebP images
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Implementation Strategy</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4">
                <h4 className="font-semibold mb-2">Progressive Enhancement</h4>
                <pre className="text-sm overflow-x-auto">
{`<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>`}
                </pre>
              </div>
              <p className="text-sm text-muted-foreground">
                This approach serves WebP to supported browsers and falls back to JPG for older ones.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Conversion Best Practices</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Quality Settings Guide</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                  <h4 className="font-semibold text-red-600">60-70% Quality</h4>
                  <p className="text-sm">Maximum compression for thumbnails</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
                  <h4 className="font-semibold text-yellow-600">80-90% Quality</h4>
                  <p className="text-sm">Balanced quality for web images</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                  <h4 className="font-semibold text-green-600">90-100% Quality</h4>
                  <p className="text-sm">High quality for hero images</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Optimization Workflow</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Start with high-quality JPG images</li>
                <li>Convert to WebP with 85-90% quality</li>
                <li>Compare file sizes and visual quality</li>
                <li>Implement with fallback for older browsers</li>
                <li>Test loading performance improvements</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Performance Impact Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">E-commerce Site</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Page Load Time:</span>
                  <span className="text-green-600">-2.3 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span>Bounce Rate:</span>
                  <span className="text-green-600">-15%</span>
                </div>
                <div className="flex justify-between">
                  <span>Conversion Rate:</span>
                  <span className="text-green-600">+8%</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Converting 200+ product images to WebP resulted in significant performance gains
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">News Website</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Bandwidth Saved:</span>
                  <span className="text-green-600">40%</span>
                </div>
                <div className="flex justify-between">
                  <span>Mobile Speed:</span>
                  <span className="text-green-600">+25%</span>
                </div>
                <div className="flex justify-between">
                  <span>SEO Score:</span>
                  <span className="text-green-600">+12 points</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Article images converted to WebP improved overall site performance
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Step-by-Step Conversion Guide</h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-lg">
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Upload JPG Images:</strong> Select single or multiple JPG files from your device
              </li>
              <li>
                <strong>Choose Quality Level:</strong> 
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>85% for general web use</li>
                  <li>90% for important images</li>
                  <li>95% for hero banners</li>
                </ul>
              </li>
              <li>
                <strong>Convert & Preview:</strong> Review the converted WebP images and file size savings
              </li>
              <li>
                <strong>Download Results:</strong> Get individual files or batch download as ZIP
              </li>
              <li>
                <strong>Implement on Website:</strong> Use progressive enhancement with JPG fallback
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Will WebP images look different from JPG?</h3>
              <p>No, when converted with appropriate quality settings (85%+), WebP images are visually identical to the original JPG while being significantly smaller.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Should I replace all JPG images with WebP?</h3>
              <p>Use progressive enhancement to serve WebP to supported browsers while keeping JPG as fallback. This ensures compatibility while maximizing performance benefits.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">How much can WebP improve my website speed?</h3>
              <p>Typical improvements include 20-30% reduction in image payload, leading to 1-3 seconds faster loading times, especially on mobile connections.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Does Google prefer WebP images for SEO?</h3>
              <p>Google recommends WebP for better Core Web Vitals scores. Faster loading pages rank higher in search results, making WebP beneficial for SEO.</p>
            </div>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Optimize Your Website Performance</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start converting your JPG images to WebP format and experience faster loading times, 
            better SEO rankings, and improved user experience.
          </p>
          <Link href="/convert/jpg-webp" className="btn-primary inline-flex items-center text-lg px-8 py-3">
            <Zap className="w-5 h-5 mr-2" />
            Convert JPG to WebP
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </section>
      </article>
    </div>
  );
}
