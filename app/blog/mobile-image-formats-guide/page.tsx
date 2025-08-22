import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Smartphone, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mobile Image Formats Guide 2024: HEIC, JPG, PNG for iOS & Android',
  description: 'Complete guide to mobile image formats. Learn about HEIC, JPG, PNG compatibility across iOS and Android. Convert photos for universal sharing and storage.',
  keywords: 'mobile image formats, HEIC, iPhone photos, Android compatibility, mobile photography, image conversion',
  openGraph: {
    title: 'Mobile Image Formats Guide 2024: HEIC, JPG, PNG for iOS & Android',
    description: 'Complete guide to mobile image formats and cross-platform compatibility.',
    type: 'article',
  },
};

export default function MobileImageFormatsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="prose prose-lg max-w-none">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Mobile Image Formats Guide: iOS vs Android Compatibility
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigate the complex world of mobile image formats. Understand HEIC, JPG, and PNG 
            compatibility across iOS and Android for seamless photo sharing and storage.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Mobile Image Format Landscape</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">📱 iOS Ecosystem</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Default Format:</span>
                  <span className="font-medium">HEIC (iOS 11+)</span>
                </div>
                <div className="flex justify-between">
                  <span>Fallback:</span>
                  <span className="font-medium">JPG</span>
                </div>
                <div className="flex justify-between">
                  <span>Screenshots:</span>
                  <span className="font-medium">PNG</span>
                </div>
                <div className="flex justify-between">
                  <span>Live Photos:</span>
                  <span className="font-medium">HEIC + MOV</span>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">🤖 Android Ecosystem</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Default Format:</span>
                  <span className="font-medium">JPG</span>
                </div>
                <div className="flex justify-between">
                  <span>High-end devices:</span>
                  <span className="font-medium">HEIC support</span>
                </div>
                <div className="flex justify-between">
                  <span>Screenshots:</span>
                  <span className="font-medium">PNG</span>
                </div>
                <div className="flex justify-between">
                  <span>RAW support:</span>
                  <span className="font-medium">DNG</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">HEIC: The iOS Standard</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">What is HEIC?</h3>
            <p className="mb-6">
              High Efficiency Image Container (HEIC) is Apple's modern image format that provides 
              superior compression while maintaining excellent image quality. Introduced with iOS 11, 
              it's now the default format for iPhone photos.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-600">✅ Advantages</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>50% smaller file sizes than JPG</li>
                  <li>Better image quality at lower sizes</li>
                  <li>Supports transparency and depth</li>
                  <li>Can store multiple images (Live Photos)</li>
                  <li>Advanced metadata support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-red-600">❌ Limitations</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Limited compatibility outside Apple</li>
                  <li>Not supported by many web browsers</li>
                  <li>Issues with older software</li>
                  <li>Email and messaging problems</li>
                  <li>Social media upload issues</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Cross-Platform Compatibility Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Platform/Service</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">HEIC</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">JPG</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">PNG</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">iOS (iPhone/iPad)</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Android</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">⚠️*</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Windows</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">⚠️**</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">macOS</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Web Browsers</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌***</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Social Media</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
                </tr>
              </tbody>
            </table>
            <div className="text-sm text-muted-foreground mt-2 space-y-1">
              <p>* Android 10+ with codec support</p>
              <p>** Windows 10 with HEIF extensions</p>
              <p>*** Safari only, limited support</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Mobile Photo Sharing Issues</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3 text-red-600">🚫 The HEIC Problem</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Common Scenarios:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>iPhone photos won't open on Android</li>
                    <li>Email attachments show as unsupported</li>
                    <li>Social media uploads fail</li>
                    <li>Work computers can't view photos</li>
                    <li>Photo printing services reject files</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quick Solutions:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Convert HEIC to JPG before sharing</li>
                    <li>Change iPhone camera settings</li>
                    <li>Use AirDrop for Apple-to-Apple transfers</li>
                    <li>Upload to cloud storage as JPG</li>
                    <li>Use our HEIC to JPG converter</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">📱 iPhone Settings for Better Compatibility</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <h4 className="font-semibold mb-2">To Change iPhone Photo Format:</h4>
                <ol className="list-decimal pl-6 space-y-1 text-sm">
                  <li>Open Settings app</li>
                  <li>Scroll down and tap "Camera"</li>
                  <li>Tap "Formats"</li>
                  <li>Select "Most Compatible" instead of "High Efficiency"</li>
                  <li>New photos will be saved as JPG</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Mobile Photography Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">For iPhone Users</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Sharing with Non-Apple Users:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Convert HEIC to JPG before sending</li>
                    <li>Use "Most Compatible" camera setting</li>
                    <li>Share via cloud services that auto-convert</li>
                    <li>Use messaging apps that handle conversion</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Storage Optimization:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Keep HEIC for personal storage (smaller files)</li>
                    <li>Convert to JPG for sharing/archiving</li>
                    <li>Use iCloud Photo Library efficiently</li>
                    <li>Regular cleanup of duplicate formats</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">For Android Users</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Receiving iPhone Photos:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Ask iPhone users to convert before sending</li>
                    <li>Use Google Photos for automatic conversion</li>
                    <li>Install HEIC viewer apps if needed</li>
                    <li>Use cloud sharing services</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Camera Settings:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Stick with JPG for maximum compatibility</li>
                    <li>Use RAW+JPG for professional photography</li>
                    <li>Adjust quality settings based on use</li>
                    <li>Consider file size for storage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">File Size Comparison: Mobile Formats</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Photo Type</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">HEIC</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">JPG (High)</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">PNG</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">iPhone 12MP photo</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">1.2 MB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">2.4 MB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">8-12 MB</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Portrait mode</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">1.8 MB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">3.2 MB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">10-15 MB</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Screenshot</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">N/A</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">400 KB</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">1.2 MB</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">💾 Storage Impact</h3>
            <p>For 1000 photos, HEIC saves approximately 1.2GB compared to JPG, 
            and 8-10GB compared to PNG. However, compatibility issues may require conversion.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Conversion Strategies by Use Case</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">👨‍💼 Professional Use</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Business sharing:</strong> Always convert to JPG</li>
                  <li><strong>Presentations:</strong> Use PNG for graphics, JPG for photos</li>
                  <li><strong>Print materials:</strong> High-quality JPG or PNG</li>
                  <li><strong>Web use:</strong> Convert to WebP when possible</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">👨‍👩‍👧‍👦 Personal Use</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Family sharing:</strong> Convert HEIC to JPG</li>
                  <li><strong>Social media:</strong> JPG for photos, PNG for graphics</li>
                  <li><strong>Email:</strong> Always use JPG for compatibility</li>
                  <li><strong>Printing:</strong> High-quality JPG recommended</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">🎨 Creative Work</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Photo editing:</strong> Keep originals, export as needed</li>
                  <li><strong>Design work:</strong> PNG for transparency, JPG for photos</li>
                  <li><strong>Portfolio:</strong> High-quality JPG for web</li>
                  <li><strong>Client delivery:</strong> Multiple formats as requested</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">🌐 Web Development</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Website images:</strong> WebP with JPG fallback</li>
                  <li><strong>App assets:</strong> PNG for UI, JPG for content</li>
                  <li><strong>Performance:</strong> Optimize for mobile loading</li>
                  <li><strong>Responsive:</strong> Multiple sizes and formats</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Future of Mobile Image Formats</h2>
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Emerging Trends</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">AVIF Adoption</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Even better compression than HEIC</li>
                  <li>Growing browser support</li>
                  <li>Potential future mobile standard</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cross-Platform Solutions</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Automatic format conversion in messaging</li>
                  <li>Cloud services handling compatibility</li>
                  <li>Universal codec support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Convert Your Mobile Photos</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ensure your mobile photos work everywhere. Convert between HEIC, JPG, and PNG 
            for perfect compatibility across all devices and platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/convert/heic-jpg" className="btn-primary inline-flex items-center">
              <Camera className="w-5 h-5 mr-2" />
              Convert HEIC to JPG
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/" className="btn-secondary inline-flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              All Converters
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
