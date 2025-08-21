import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Eye, Lock, Server, Globe, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - Free Image Converter',
  description: 'Our privacy policy explains how we protect your data. All image processing happens locally in your browser - your files never leave your device.',
  keywords: 'privacy policy, data protection, local processing, secure image conversion',
  openGraph: {
    title: 'Privacy Policy - Free Image Converter',
    description: 'Learn how we protect your privacy with local image processing.',
    type: 'website',
  },
};

const privacyPrinciples = [
  {
    icon: Shield,
    title: 'No Data Collection',
    description: 'We do not collect, store, or process any of your personal files or data.',
  },
  {
    icon: Lock,
    title: 'Local Processing',
    description: 'All image conversion happens entirely in your browser using client-side technology.',
  },
  {
    icon: Server,
    title: 'No Server Storage',
    description: 'Your files never touch our servers or leave your device during conversion.',
  },
  {
    icon: Eye,
    title: 'No Tracking',
    description: 'We do not use analytics, tracking pixels, or third-party monitoring tools.',
  },
  {
    icon: Globe,
    title: 'Open Source',
    description: 'Our code is transparent and can be audited by security professionals.',
  },
  {
    icon: Clock,
    title: 'No Retention',
    description: 'Since we never receive your files, there is nothing to retain or delete.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your privacy is our priority. Learn how we protect your data with our privacy-by-design approach.
        </p>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </section>

      {/* Quick Summary */}
      <section className="card p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
        <h2 className="text-2xl font-bold mb-4 text-center">Privacy Summary</h2>
        <div className="text-center space-y-4">
          <p className="text-lg">
            <strong>Your files never leave your device.</strong> All image conversion happens locally in your browser.
          </p>
          <p className="text-muted-foreground">
            This means we cannot see, access, store, or share your files because we never receive them in the first place.
          </p>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Privacy Principles</h2>
          <p className="text-muted-foreground">
            Built on a foundation of privacy-by-design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {privacyPrinciples.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div key={index} className="card p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Detailed Privacy Policy</h2>

        <div className="space-y-8">
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">1. Information We Do NOT Collect</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>• <strong>Your files:</strong> Images you convert never leave your browser</p>
              <p>• <strong>Personal information:</strong> No names, emails, or contact details required</p>
              <p>• <strong>Usage analytics:</strong> No tracking of how you use our service</p>
              <p>• <strong>Device information:</strong> No fingerprinting or device identification</p>
              <p>• <strong>Location data:</strong> No geographic tracking or IP logging</p>
              <p>• <strong>Browsing history:</strong> No tracking across websites</p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">2. How Our Technology Works</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Our image converter uses modern web technologies including WebAssembly, Canvas API, and 
                client-side JavaScript to process images entirely within your browser.
              </p>
              <p>
                When you select files for conversion, they are loaded into your browser&apos;s memory and 
                processed locally. The converted files are then made available for download directly 
                from your browser.
              </p>
              <p>
                At no point in this process do your files travel over the internet or reach our servers.
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">3. Website Functionality</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong>Essential cookies:</strong> We may use minimal technical cookies required for 
                the website to function properly (such as theme preferences).
              </p>
              <p>
                <strong>Local storage:</strong> Your browser may store conversion settings and preferences 
                locally on your device for a better user experience.
              </p>
              <p>
                <strong>Progressive Web App:</strong> If you install our PWA, it stores the application 
                files locally for offline use.
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">4. Third-Party Services</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Our website is designed to work without third-party services that could compromise your privacy:
              </p>
              <p>• <strong>No analytics:</strong> We don&apos;t use Google Analytics or similar services</p>
              <p>• <strong>No CDNs for tracking:</strong> All resources are served directly</p>
              <p>• <strong>No social media widgets:</strong> No embedded tracking from social platforms</p>
              <p>• <strong>No advertising:</strong> No ad networks or tracking pixels</p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">5. Data Security</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Since your files never leave your device, they are as secure as your own computer. 
                We recommend:
              </p>
              <p>• Keep your browser updated for the latest security features</p>
              <p>• Use HTTPS (which our site enforces) for secure communication</p>
              <p>• Be cautious when using public computers or networks</p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">6. Your Rights</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Since we don&apos;t collect your personal data, traditional data protection rights 
                (access, deletion, portability) don&apos;t apply in the usual sense.
              </p>
              <p>
                However, you have complete control over:
              </p>
              <p>• Your files (they never leave your device)</p>
              <p>• Your browser settings and local storage</p>
              <p>• Whether to use our service at all</p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">7. Children&apos;s Privacy</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Our service is safe for users of all ages because we don&apos;t collect any personal information. 
                Parents can be confident that their children&apos;s files and data remain private when using our converter.
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">8. Changes to This Policy</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                If we ever change our privacy practices, we will update this policy and clearly 
                indicate the changes. However, our core commitment to local processing and privacy 
                will remain unchanged.
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">9. Contact Us</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                If you have questions about this privacy policy or our practices, please contact us:
              </p>
              <p>• Email: privacy@imageconverter.app</p>
              <p>• Contact form: <a href="/contact" className="text-primary hover:underline">Contact page</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Verify Our Claims</h2>
          <p className="text-muted-foreground">
            Don&apos;t just take our word for it—verify our privacy claims yourself
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold">Technical Verification</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Open your browser&apos;s developer tools (F12)</li>
              <li>• Check the Network tab while converting files</li>
              <li>• You&apos;ll see no file uploads to any server</li>
              <li>• All processing happens in the browser</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold">Offline Test</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Load our website once</li>
              <li>• Disconnect from the internet</li>
              <li>• Try converting images</li>
              <li>• It works because everything is local</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl">
        <h2 className="text-3xl font-bold">Questions About Privacy?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We&apos;re committed to transparency. If you have any questions about our privacy practices, 
          don&apos;t hesitate to reach out.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
          <Link href="/" className="btn-ghost">
            Start Converting
          </Link>
        </div>
      </section>
    </div>
  );
}
