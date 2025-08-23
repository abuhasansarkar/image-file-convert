import { Metadata } from 'next';
import Link from 'next/link';
import { BlogCardsFooter } from '@/components/blog-cards-footer';
import { ArrowRight, CheckCircle, Zap, Shield, Download, TrendingUp } from 'lucide-react';
import { BlogArticleStructuredData, HowToStructuredData } from '@/components/structured-data';

export const metadata: Metadata = {
  title: 'JPG to WebP Converter: Reduce Image Sizes by 80% in 2025',
  description: 'Convert JPG to WebP format and reduce image file sizes by up to 80% without quality loss. Free online converter with step-by-step guide for website optimization.',
  keywords: 'JPG to WebP converter, convert JPG to WebP online, image optimization, reduce image size, WebP format benefits, website speed optimization',
  openGraph: {
    title: 'JPG to WebP Converter: Ultimate Guide for Website Optimization',
    description: 'Learn how converting JPG to WebP can dramatically improve your website speed and SEO rankings.',
    type: 'article',
  },
};

export default function JpgToWebpGuide() {
  const howToSteps = [
    "Visit our free online JPG to WebP converter",
    "Upload your JPG images by dragging and dropping or clicking to browse",
    "Customize quality settings (optional) - we recommend 85% for best balance",
    "Click Convert and download your optimized WebP files"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <BlogArticleStructuredData
        title="JPG to WebP Converter: Reduce Image Sizes by 80% in 2025"
        description="Convert JPG to WebP format and reduce image file sizes by up to 80% without quality loss. Free online converter with step-by-step guide for website optimization."
        slug="jpg-to-webp-converter-guide"
        publishDate="2024-12-20"
        category="Web Optimization"
        readTime="5 min read"
      />
      <HowToStructuredData
        name="How to Convert JPG to WebP"
        description="Step-by-step guide to convert JPG images to WebP format for better website performance"
        steps={howToSteps}
      />
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
          <TrendingUp className="w-4 h-4" />
          <span>Most Popular Guide</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
          JPG to WebP Converter: Reduce Image Sizes by 80%
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover how converting JPG to WebP format can dramatically improve your website speed, 
          reduce bandwidth costs, and boost your SEO rankings in 2025.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/convert/jpg-webp" className="btn-primary">
            Convert JPG to WebP Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/blog" className="btn-ghost">
            More Guides
          </Link>
        </div>
      </section>

      {/* Why is it needed? */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Why Do You Need a JPG to WebP Converter?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-red-600">The Problem with JPG Files</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Large file sizes</strong> slow down website loading times</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Higher bandwidth costs</strong> for businesses and users</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Poor SEO rankings</strong> due to slow page speed</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Bad user experience</strong> on mobile devices</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Storage limitations</strong> on hosting platforms</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-600">The WebP Solution</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>80% smaller file sizes</strong> with same visual quality</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Faster website loading</strong> improves user engagement</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Better SEO rankings</strong> with improved Core Web Vitals</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Universal browser support</strong> (95%+ compatibility)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Reduced hosting costs</strong> and bandwidth usage</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <h4 className="text-lg font-semibold mb-3">Real-World Impact</h4>
          <p className="text-muted-foreground">
            A typical e-commerce website with 100 product images can reduce total image size from 50MB to just 10MB 
            by converting JPG to WebP. This results in 3-5 second faster page load times and up to 40% improvement 
            in conversion rates.
          </p>
        </div>
      </section>

      {/* Why is it important? */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Why JPG to WebP Conversion is Critical in 2025</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card p-6 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold">Web Designers</h3>
            <p className="text-sm text-muted-foreground">Create faster, more responsive websites that rank higher in search results</p>
          </div>

          <div className="card p-6 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold">Business Owners</h3>
            <p className="text-sm text-muted-foreground">Reduce hosting costs and improve customer experience with faster loading times</p>
          </div>

          <div className="card p-6 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold">Content Creators</h3>
            <p className="text-sm text-muted-foreground">Optimize images for social media and blogs without sacrificing quality</p>
          </div>

          <div className="card p-6 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <Download className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold">Developers</h3>
            <p className="text-sm text-muted-foreground">Meet performance budgets and improve Core Web Vitals scores</p>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">How to Convert JPG to WebP: Step-by-Step Guide</h2>
        
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 font-bold">
                1
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Visit Our JPG to WebP Converter</h3>
                <p className="text-muted-foreground">
                  Navigate to our free online converter at the link below. No registration or software download required.
                </p>
                <Link href="/convert/jpg-webp" className="inline-flex items-center gap-2 text-primary hover:underline">
                  Open JPG to WebP Converter
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 font-bold">
                2
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Upload Your JPG Images</h3>
                <p className="text-muted-foreground">
                  Drag and drop your JPG files into the converter area, or click to browse and select files from your device. 
                  You can convert multiple images at once for faster workflow.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 font-bold">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Customize Quality Settings (Optional)</h3>
                <p className="text-muted-foreground">
                  Adjust the quality slider to balance file size and image quality. We recommend 85% quality for the best 
                  balance between compression and visual fidelity.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 font-bold">
                4
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Convert and Download</h3>
                <p className="text-muted-foreground">
                  Click &ldquo;Convert&rdquo; and watch as your images are processed instantly in your browser. 
                  Download individual files or get all converted images in a ZIP file.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            Privacy & Security
          </h4>
          <p className="text-muted-foreground">
            All conversion happens locally in your browser. Your images never leave your device, 
            ensuring complete privacy and security. No uploads to external servers required.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Benefits of Using Our JPG to WebP Converter</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Performance Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Lightning-fast conversion</strong> powered by WebAssembly technology</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Batch processing</strong> - convert multiple images simultaneously</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>No quality loss</strong> with advanced compression algorithms</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Instant preview</strong> before downloading converted files</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">User Experience</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>100% free</strong> with no hidden costs or premium plans</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>No registration required</strong> - start converting immediately</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Works offline</strong> after initial page load</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Mobile-friendly</strong> interface for all devices</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl">
        <h2 className="text-3xl font-bold">Ready to Optimize Your Images?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Start converting your JPG images to WebP format today and experience the dramatic improvement 
          in website performance and user experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/convert/jpg-webp" className="btn-primary">
            Convert JPG to WebP Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/" className="btn-ghost">
            Explore All Converters
          </Link>
        </div>
      </section>
      {/* Related Blog Posts */}
      <BlogCardsFooter currentSlug="jpg-to-webp-converter-guide" title="More Web Optimization Guides" />
    </div>
  );
}
