import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, Globe, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Performance: Image Optimization Guide 2024 | Boost Page Speed by 50%',
  description: 'Complete guide to image optimization for web performance. Learn how to reduce image file sizes, improve Core Web Vitals, and boost SEO rankings with modern formats.',
  keywords: 'web performance, image optimization, Core Web Vitals, page speed, SEO, website optimization, image compression',
  openGraph: {
    title: 'Web Performance: Image Optimization Guide 2024',
    description: 'Complete guide to image optimization for web performance and SEO.',
    type: 'article',
  },
};

export default function WebPerformanceImageOptimizationPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="prose prose-lg max-w-none">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            Web Performance: Image Optimization Guide 2024
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master image optimization to boost your website's performance by up to 50%. 
            Complete guide to reducing file sizes, improving Core Web Vitals, and enhancing SEO rankings.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Image Optimization Matters</h2>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-lg mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Performance Impact</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Images account for 50-70% of page weight</li>
                  <li>1-second delay = 7% conversion loss</li>
                  <li>53% of users abandon slow sites</li>
                  <li>Page speed affects search rankings</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Benefits</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Higher conversion rates</li>
                  <li>Better user experience</li>
                  <li>Improved SEO rankings</li>
                  <li>Reduced bandwidth costs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Core Web Vitals & Image Optimization</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Largest Contentful Paint (LCP)</h3>
              <p className="text-sm mb-3">Measures loading performance</p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                <strong>Target:</strong> Under 2.5 seconds
                <br />
                <strong>Image Impact:</strong> Hero images often are LCP elements
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3 text-green-600">First Input Delay (FID)</h3>
              <p className="text-sm mb-3">Measures interactivity</p>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                <strong>Target:</strong> Under 100ms
                <br />
                <strong>Image Impact:</strong> Heavy images can block main thread
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Cumulative Layout Shift (CLS)</h3>
              <p className="text-sm mb-3">Measures visual stability</p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
                <strong>Target:</strong> Under 0.1
                <br />
                <strong>Image Impact:</strong> Images without dimensions cause shifts
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Image Optimization Strategies</h2>
          <div className="space-y-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">1. Choose the Right Format</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                  <h4 className="font-semibold text-blue-600">WebP</h4>
                  <p className="text-sm">25-35% smaller than JPG/PNG</p>
                  <p className="text-xs text-muted-foreground mt-2">Best for modern web</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                  <h4 className="font-semibold text-green-600">JPG</h4>
                  <p className="text-sm">Good for photographs</p>
                  <p className="text-xs text-muted-foreground mt-2">Universal compatibility</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                  <h4 className="font-semibold text-purple-600">PNG</h4>
                  <p className="text-sm">Best for graphics with transparency</p>
                  <p className="text-xs text-muted-foreground mt-2">Larger file sizes</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">2. Implement Responsive Images</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mb-4">
                <pre className="text-sm overflow-x-auto">
{`<picture>
  <source media="(min-width: 800px)" srcset="large.webp" type="image/webp">
  <source media="(min-width: 400px)" srcset="medium.webp" type="image/webp">
  <source srcset="small.webp" type="image/webp">
  <img src="fallback.jpg" alt="Description" loading="lazy">
</picture>`}
                </pre>
              </div>
              <p className="text-sm text-muted-foreground">Serve appropriately sized images for different screen sizes</p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">3. Use Lazy Loading</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Faster initial page load</li>
                    <li>Reduced bandwidth usage</li>
                    <li>Better Core Web Vitals scores</li>
                    <li>Improved user experience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Implementation:</h4>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm">
                    <code>&lt;img src="image.jpg" loading="lazy" alt="..."&gt;</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Compression Techniques</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Lossy Compression</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>JPG Quality 85%:</span>
                  <span className="text-green-600">Good balance</span>
                </div>
                <div className="flex justify-between">
                  <span>JPG Quality 75%:</span>
                  <span className="text-yellow-600">Noticeable quality loss</span>
                </div>
                <div className="flex justify-between">
                  <span>WebP Quality 80%:</span>
                  <span className="text-green-600">Excellent results</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Best for photographs and complex images where small quality loss is acceptable
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Lossless Compression</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>PNG Optimization:</span>
                  <span className="text-blue-600">10-30% reduction</span>
                </div>
                <div className="flex justify-between">
                  <span>WebP Lossless:</span>
                  <span className="text-green-600">25-35% smaller</span>
                </div>
                <div className="flex justify-between">
                  <span>SVG Minification:</span>
                  <span className="text-purple-600">20-50% reduction</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Perfect for logos, icons, and graphics where quality must be preserved
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Performance Optimization Checklist</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">✅ Essential Optimizations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">Convert to WebP format</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">Implement lazy loading</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">Set image dimensions</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">Use responsive images</span>
                  </label>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Optimize alt text for SEO</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Implement image CDN</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Use progressive JPEGs</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Preload critical images</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Real-World Performance Gains</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">E-commerce Case Study</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Page Load Time:</span>
                  <span className="text-green-600">-3.2 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span>LCP Score:</span>
                  <span className="text-green-600">Improved 40%</span>
                </div>
                <div className="flex justify-between">
                  <span>Conversion Rate:</span>
                  <span className="text-green-600">+12%</span>
                </div>
                <div className="flex justify-between">
                  <span>Bounce Rate:</span>
                  <span className="text-green-600">-18%</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Results from converting 500+ product images to WebP and implementing lazy loading
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">News Website Results</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Bandwidth Saved:</span>
                  <span className="text-green-600">45%</span>
                </div>
                <div className="flex justify-between">
                  <span>Mobile Speed:</span>
                  <span className="text-green-600">+60%</span>
                </div>
                <div className="flex justify-between">
                  <span>SEO Score:</span>
                  <span className="text-green-600">+25 points</span>
                </div>
                <div className="flex justify-between">
                  <span>Ad Revenue:</span>
                  <span className="text-green-600">+8%</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Impact of optimizing article images and implementing modern formats
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tools & Automation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">🔧 Optimization Tools</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Our Image Converter:</strong> Batch convert to WebP</li>
                <li><strong>Google PageSpeed Insights:</strong> Performance analysis</li>
                <li><strong>WebP Converter:</strong> Format optimization</li>
                <li><strong>TinyPNG:</strong> PNG/JPG compression</li>
                <li><strong>ImageOptim:</strong> Lossless optimization</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">⚡ Automation Solutions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cloudflare Polish:</strong> Automatic optimization</li>
                <li><strong>Cloudinary:</strong> Real-time image processing</li>
                <li><strong>ImageKit:</strong> CDN with optimization</li>
                <li><strong>Next.js Image:</strong> Built-in optimization</li>
                <li><strong>WordPress Plugins:</strong> Automatic WebP conversion</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Mobile Optimization Strategies</h2>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Mobile-First Approach</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prioritize mobile image sizes</li>
                  <li>Use smaller images for mobile viewports</li>
                  <li>Implement touch-friendly image galleries</li>
                  <li>Consider connection speed variations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Network Considerations</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Detect slow connections</li>
                  <li>Provide low-quality image placeholders</li>
                  <li>Allow users to choose image quality</li>
                  <li>Cache optimized images locally</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Measuring Success</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-lg font-semibold mb-2">Core Web Vitals</h3>
              <p className="text-sm text-muted-foreground">Monitor LCP, FID, and CLS scores</p>
            </div>
            <div className="card p-6 text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-lg font-semibold mb-2">Business Metrics</h3>
              <p className="text-sm text-muted-foreground">Track conversion rates and engagement</p>
            </div>
            <div className="card p-6 text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-lg font-semibold mb-2">SEO Rankings</h3>
              <p className="text-sm text-muted-foreground">Monitor search visibility improvements</p>
            </div>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Start Optimizing Your Images Today</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Convert your images to modern formats and boost your website's performance, 
            SEO rankings, and user experience.
          </p>
          <Link href="/" className="btn-primary inline-flex items-center text-lg px-8 py-3">
            <Zap className="w-5 h-5 mr-2" />
            Optimize Images Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </section>
      </article>
    </div>
  );
}
