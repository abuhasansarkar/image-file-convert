import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Palette, Shield, Download, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PNG to WebP Conversion: Complete Guide for Designers 2025',
  description: 'Convert PNG to WebP while preserving transparency. Reduce file sizes by 70% without quality loss. Essential guide for web designers and developers.',
  keywords: 'PNG to WebP converter, convert PNG to WebP, preserve transparency, image optimization for designers, WebP with alpha channel',
  openGraph: {
    title: 'PNG to WebP: Complete Designer\'s Guide with Transparency',
    description: 'Master PNG to WebP conversion while maintaining transparency and image quality.',
    type: 'article',
  },
};

export default function PngToWebpGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
          <Palette className="w-4 h-4" />
          <span>Designer&apos;s Choice</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          PNG to WebP: Complete Designer&apos;s Guide
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn how to convert PNG images to WebP format while preserving transparency and achieving 
          up to 70% file size reduction. Perfect for modern web design workflows.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/convert/png-webp" className="btn-primary">
            Convert PNG to WebP Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/blog" className="btn-ghost">
            More Design Guides
          </Link>
        </div>
      </section>

      {/* Why PNG to WebP? */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Why Convert PNG to WebP?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-red-600">PNG Challenges for Modern Web</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Massive file sizes</strong> especially for high-resolution images</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Slow loading times</strong> impact user experience</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>High bandwidth consumption</strong> increases hosting costs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Poor mobile performance</strong> on slower connections</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Storage limitations</strong> for image-heavy websites</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-600">WebP Advantages</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>70% smaller files</strong> with identical visual quality</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Full transparency support</strong> maintains alpha channels</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Faster page loads</strong> improve Core Web Vitals</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Better compression</strong> for complex graphics</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Modern browser support</strong> (96%+ compatibility)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
          <h4 className="text-lg font-semibold mb-3">Designer&apos;s Insight</h4>
          <p className="text-muted-foreground">
            A typical design portfolio with 50 PNG images (logos, icons, graphics) can reduce from 25MB to just 7MB 
            by converting to WebP. This means 3x faster portfolio loading and better client experience across all devices.
          </p>
        </div>
      </section>

      {/* Importance for Different Users */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Why PNG to WebP Matters for Your Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Palette className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold">What You&apos;ll Learn</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Maintain design quality while meeting performance budgets</li>
              <li>• Preserve transparency for overlays and complex layouts</li>
              <li>• Deliver faster-loading portfolios and client websites</li>
              <li>• Meet modern web standards and don&apos;t want to compromise on quality or compatibility.</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">E-commerce Businesses</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Faster product image loading increases conversions</li>
              <li>• Reduce hosting costs with smaller image files</li>
              <li>• Improve mobile shopping experience</li>
              <li>• Better SEO rankings with improved page speed</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold">Content Creators</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Optimize graphics for social media platforms</li>
              <li>• Faster blog loading improves reader engagement</li>
              <li>• Maintain image quality for professional presentation</li>
              <li>• Reduce bandwidth usage for video thumbnails</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <Download className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold">App Developers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Reduce app bundle sizes for faster downloads</li>
              <li>• Improve app performance on mobile devices</li>
              <li>• Maintain UI element quality with transparency</li>
              <li>• Meet app store optimization requirements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">How to Convert PNG to WebP: Professional Workflow</h2>
        
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 font-bold">
                1
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Access Our PNG to WebP Converter</h3>
                <p className="text-muted-foreground">
                  Open our professional-grade converter designed specifically for designers and developers. 
                  No software installation or account creation required.
                </p>
                <Link href="/convert/png-webp" className="inline-flex items-center gap-2 text-purple-600 hover:underline">
                  Open PNG to WebP Converter
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
                <h3 className="text-lg font-semibold">Upload PNG Files with Transparency</h3>
                <p className="text-muted-foreground">
                  Drag and drop your PNG images, including those with transparent backgrounds. Our converter 
                  automatically detects and preserves alpha channels during conversion.
                </p>
                <div className="text-sm text-muted-foreground bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <strong>Pro Tip:</strong> Batch upload multiple PNGs to convert your entire design system at once.
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 font-bold">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Configure Quality Settings</h3>
                <p className="text-muted-foreground">
                  Adjust quality settings based on your use case:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• <strong>90-95%:</strong> For high-end portfolios and print materials</li>
                  <li>• <strong>80-85%:</strong> Perfect balance for most web applications</li>
                  <li>• <strong>70-75%:</strong> Maximum compression for mobile optimization</li>
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
                <h3 className="text-lg font-semibold">Preview and Download</h3>
                <p className="text-muted-foreground">
                  Preview the converted WebP images to ensure transparency is preserved and quality meets your standards. 
                  Download individually or get all files in a organized ZIP archive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            Design-First Privacy
          </h4>
          <p className="text-muted-foreground">
            Your design files never leave your device. All conversion happens locally in your browser, 
            protecting your intellectual property and client confidentiality.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Why Choose Our PNG to WebP Converter</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Technical Excellence</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Perfect transparency preservation</strong> maintains alpha channels</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Advanced compression</strong> algorithms for optimal file sizes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Batch processing</strong> for efficient workflow management</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Real-time preview</strong> ensures quality before download</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Designer-Friendly Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>No watermarks</strong> or quality degradation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Unlimited conversions</strong> for professional workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Mobile-responsive</strong> interface for on-the-go work</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Instant processing</strong> saves valuable design time</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">PNG to WebP Best Practices for Designers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-green-600">✅ Do This</h3>
            <ul className="space-y-2 text-sm">
              <li>• Use 80-85% quality for web graphics</li>
              <li>• Convert logos and icons with transparency</li>
              <li>• Test on different backgrounds to verify transparency</li>
              <li>• When you shouldn&apos;t use WebP (and alternatives)</li>
              <li>• Browser support strategies and fallbacks</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-red-600">❌ Avoid This</h3>
            <ul className="space-y-2 text-sm">
              <li>• Don&apos;t use very low quality (&lt;70%) for detailed graphics</li>
              <li>• Avoid converting already compressed images</li>
              <li>• Don&apos;t forget to test transparency in final implementation</li>
              <li>• Don&apos;t batch convert without reviewing each image</li>
              <li>• Don&apos;t use WebP for email graphics (limited support)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
        <h2 className="text-3xl font-bold">Transform Your Design Workflow Today</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Join thousands of designers who have optimized their workflows with our PNG to WebP converter. 
          Maintain quality, preserve transparency, and deliver faster websites.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/convert/png-webp" className="btn-primary">
            Start Converting PNG to WebP
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/blog" className="btn-ghost">
            Read More Guides
          </Link>
        </div>
      </section>
    </div>
  );
}
