import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Smartphone, Share2, Download, AlertTriangle } from 'lucide-react';
import { BlogCardsFooter } from '@/components/blog-cards-footer';

export const metadata: Metadata = {
  title: 'HEIC to JPG Converter: Fix iPhone Photo Compatibility Issues',
  description: 'Convert iPhone HEIC photos to JPG format for universal compatibility. Free online converter solves sharing and compatibility problems instantly.',
  keywords: 'HEIC to JPG converter, iPhone photo converter, HEIC format, convert iPhone photos, photo compatibility, share iPhone photos',
  openGraph: {
    title: 'HEIC to JPG: Solve iPhone Photo Compatibility Forever',
    description: 'Convert iPhone HEIC photos to universal JPG format and share anywhere.',
    type: 'article',
  },
};

export default function HeicToJpgGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
          <Smartphone className="w-4 h-4" />
          <span>iPhone Users Essential</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          HEIC to JPG: Fix iPhone Photo Compatibility
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Stop struggling with iPhone photo compatibility issues. Convert HEIC to JPG format 
          and share your photos anywhere without restrictions or quality loss.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/convert/heic-jpg" className="btn-primary">
            Convert HEIC to JPG Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/blog" className="btn-ghost">
            More Mobile Guides
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Why Can&apos;t You Share Your iPhone Photos?</h2>
        
        <div className="card p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-red-500 mt-1" />
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">The HEIC Problem</h3>
              <p className="text-muted-foreground">
                Since iOS 11, iPhones save photos in HEIC (High Efficiency Image Container) format by default. 
                While this saves storage space, it creates massive compatibility issues when sharing photos.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-red-600">Common HEIC Frustrations</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Can&apos;t upload to websites</strong> - Most platforms don&apos;t support HEIC</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Email attachments fail</strong> - Recipients can&apos;t open HEIC files</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Social media rejection</strong> - Platforms require JPG/PNG formats</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Work compatibility issues</strong> - Corporate systems don&apos;t recognize HEIC</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span><strong>Android/PC viewing problems</strong> - Non-Apple devices struggle with HEIC</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-600">JPG Solution Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Universal compatibility</strong> - Works on every device and platform</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Easy sharing</strong> - Upload anywhere without restrictions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Professional acceptance</strong> - Standard format for business use</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Maintained quality</strong> - No visible loss in image quality</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Archive-friendly</strong> - Future-proof your photo collection</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Who Needs HEIC to JPG Conversion?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Share2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Social Media Users</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Upload photos to Instagram, Facebook, Twitter without issues</li>
              <li>• Share memories with friends on any platform</li>
              <li>• Create content for blogs and websites</li>
              <li>• Participate in online communities and forums</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Download className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold">Business Professionals</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Submit photos for reports and presentations</li>
              <li>• Share product images with clients and vendors</li>
              <li>• Upload photos to company websites and systems</li>
              <li>• Create marketing materials with iPhone photos</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold">Family & Personal Use</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Email photos to family members with older devices</li>
              <li>• Print photos at local photo services</li>
              <li>• Share vacation photos with non-iPhone users</li>
              <li>• Create photo albums and scrapbooks</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold">Content Creators</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Upload photos to WordPress and other CMS platforms</li>
              <li>• Create thumbnails for YouTube videos</li>
              <li>• Share behind-the-scenes content</li>
              <li>• Build portfolio websites with iPhone photography</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Convert */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">How to Convert HEIC to JPG: Simple Steps</h2>
        
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold">
                1
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Open Our HEIC to JPG Converter</h3>
                <p className="text-muted-foreground">
                  Access our specialized iPhone photo converter. No app downloads or account creation required. 
                  Works directly in your browser for maximum convenience.
                </p>
                <Link href="/convert/heic-jpg" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
                  Open HEIC to JPG Converter
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold">
                2
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Upload Your HEIC Photos</h3>
                <p className="text-muted-foreground">
                  Select HEIC files from your iPhone, iPad, or computer. You can convert multiple photos at once 
                  to save time. Our converter handles all HEIC variants including Live Photos.
                </p>
                <div className="text-sm text-muted-foreground bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <strong>iPhone Tip:</strong> You can directly upload from your Photos app using the share button.
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Choose Quality Settings</h3>
                <p className="text-muted-foreground">
                  Select the JPG quality based on your needs:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• <strong>High (90-95%):</strong> For printing and professional use</li>
                  <li>• <strong>Medium (80-85%):</strong> Perfect for social media and web sharing</li>
                  <li>• <strong>Optimized (70-75%):</strong> Smaller files for email and messaging</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold">
                4
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Download and Share</h3>
                <p className="text-muted-foreground">
                  Get your converted JPG files instantly. Download individual photos or get all converted images 
                  in a convenient ZIP file. Now you can share anywhere without compatibility issues!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Why Choose Our HEIC to JPG Converter</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">iPhone-Optimized Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Perfect HEIC support</strong> - Handles all iPhone photo formats</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Metadata preservation</strong> - Keeps photo dates and location data</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Batch conversion</strong> - Convert entire photo albums quickly</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Mobile-friendly</strong> - Works perfectly on iPhone Safari</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Privacy & Convenience</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>100% private</strong> - Photos never leave your device</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>No app required</strong> - Works in any web browser</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Unlimited conversions</strong> - Convert as many photos as needed</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span><strong>Instant processing</strong> - No waiting or queues</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Common HEIC Questions Answered</h2>
        
        <div className="space-y-4">
          <details className="card p-6 group">
            <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between">
              Why does my iPhone save photos as HEIC?
              <span className="text-primary group-open:rotate-180 transition-transform duration-200">▼</span>
            </summary>
            <p className="mt-4 text-muted-foreground">
              Apple introduced HEIC format to save storage space on iPhones. HEIC files are about 50% smaller than JPG 
              while maintaining the same quality. However, this comes at the cost of compatibility with non-Apple devices and platforms.
            </p>
          </details>

          <details className="card p-6 group">
            <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between">
              Will converting HEIC to JPG reduce photo quality?
              <span className="text-primary group-open:rotate-180 transition-transform duration-200">▼</span>
            </summary>
            <p className="mt-4 text-muted-foreground">
              When using high-quality settings (85%+), the difference is virtually invisible to the human eye. 
              Our converter uses advanced algorithms to maintain maximum quality during the conversion process.
            </p>
          </details>

          <details className="card p-6 group">
            <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between">
              Can I stop my iPhone from taking HEIC photos?
              <span className="text-primary group-open:rotate-180 transition-transform duration-200">▼</span>
            </summary>
            <p className="mt-4 text-muted-foreground">
              Yes! Go to Settings → Camera → Formats and select &quot;Most Compatible&quot; instead of &quot;High Efficiency&quot;. 
              This will make your iPhone save photos as JPG by default, but files will be larger.
            </p>
          </details>

          <details className="card p-6 group">
            <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between">
              Are my photos safe when converting online?
              <span className="text-primary group-open:rotate-180 transition-transform duration-200">▼</span>
            </summary>
            <p className="mt-4 text-muted-foreground">
              Absolutely! Our converter processes everything locally in your browser. Your photos never get uploaded 
              to our servers, ensuring complete privacy and security of your personal images.
            </p>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl">
        <h2 className="text-3xl font-bold">Stop Photo Compatibility Frustrations Today</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Convert your iPhone HEIC photos to universal JPG format and share them anywhere without restrictions. 
          Free, fast, and completely private.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/convert/heic-jpg" className="btn-primary">
            Convert HEIC to JPG Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/blog" className="btn-ghost">
            More iPhone Tips
          </Link>
        </div>
      </section>

      {/* Related Blog Posts */}
      <BlogCardsFooter currentSlug="heic-to-jpg-iphone-photos" title="More Mobile & Compatibility Guides" />
    </div>
  );
}
