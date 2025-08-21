import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Shield, Users, Globe, AlertTriangle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms and Conditions - Free Image Converter',
  description: 'Terms of service for our free image conversion tool. Learn about usage guidelines, limitations, and your rights.',
  keywords: 'terms of service, terms and conditions, usage guidelines, legal',
  openGraph: {
    title: 'Terms and Conditions - Free Image Converter',
    description: 'Terms of service for our free image conversion tool.',
    type: 'website',
  },
};

const keyTerms = [
  {
    icon: Shield,
    title: 'Free Service',
    description: 'Our image converter is completely free to use with no hidden costs or premium tiers.',
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Available worldwide, but subject to local laws and regulations in your jurisdiction.',
  },
  {
    icon: FileText,
    title: 'No Registration',
    description: 'Use our service without creating accounts or providing personal information.',
  },
  {
    icon: AlertTriangle,
    title: 'Use Responsibly',
    description: 'Respect copyright laws and use only files you have the right to convert.',
  },
  {
    icon: CheckCircle,
    title: 'No Warranties',
    description: 'Service provided "as is" without guarantees, though we strive for reliability.',
  },
  {
    icon: Users,
    title: 'Subject to Change',
    description: 'Terms may be updated periodically with notice to users.',
  },
];

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
          Terms and Conditions
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Please read these terms carefully before using our image conversion service.
        </p>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </section>

      {/* Quick Overview */}
      <section className="card p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <h2 className="text-2xl font-bold mb-4 text-center">Quick Overview</h2>
        <div className="text-center space-y-4">
          <p className="text-lg">
            By using our image converter, you agree to these terms. Our service is free, 
            privacy-focused, and designed to respect your rights.
          </p>
          <p className="text-muted-foreground">
            We keep these terms simple and fair—no hidden clauses or confusing legal language.
          </p>
        </div>
      </section>

      {/* Key Terms */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Key Terms at a Glance</h2>
          <p className="text-muted-foreground">
            The most important points you should know
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyTerms.map((term, index) => {
            const Icon = term.icon;
            return (
              <div key={index} className="card p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold">{term.title}</h3>
                <p className="text-sm text-muted-foreground">{term.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Detailed Terms</h2>

        <div className="space-y-8">
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                By accessing and using our image conversion service, you accept and agree to be bound by 
                these Terms and Conditions. If you do not agree to these terms, please do not use our service.
              </p>
              <p>
                These terms apply to all users of the service, regardless of location or method of access.
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">2. Description of Service</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Our service provides free, browser-based image conversion tools that allow you to convert 
                between various image formats including JPG, PNG, WebP, PDF, HEIC, SVG, RAW, and BMP.
              </p>
              <p>
                All processing occurs locally in your browser—your files are never uploaded to our servers 
                or transmitted over the internet during conversion.
              </p>
              <p>
                The service is provided free of charge and without the need for registration or personal information.
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">3. User Responsibilities</h3>
            <div className="space-y-3 text-muted-foreground">
              <p><strong>Copyright Compliance:</strong> You must only convert files that you own or have 
              the legal right to modify and convert.</p>
              <p><strong>Lawful Use:</strong> You agree to use our service only for lawful purposes and 
              in accordance with all applicable laws and regulations.</p>
              <p><strong>No Harmful Content:</strong> Do not attempt to convert files containing malware, 
              viruses, or other harmful code.</p>
              <p><strong>Reasonable Use:</strong> While we don&apos;t impose strict limits, please use our 
              service reasonably and avoid excessive automated usage.</p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">4. Privacy and Data</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Your privacy is paramount. As detailed in our Privacy Policy, we do not collect, store, or process your personal images or files. All conversional data.
              </p>
              <p>
                All image processing happens locally in your browser, ensuring your files remain 
                private and secure on your device.
              </p>
              <p>
                We may collect minimal technical information necessary for the website to function, 
                such as basic usage statistics, but never personal files or identifying information.
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">5. Service Availability</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                We strive to maintain high availability of our service, but we cannot guarantee 
                uninterrupted access. The service may be temporarily unavailable due to:
              </p>
              <p>• Scheduled maintenance</p>
              <p>• Technical issues or server problems</p>
              <p>• Circumstances beyond our control</p>
              <p>
                We will make reasonable efforts to minimize downtime and provide notice when possible.
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">6. Disclaimers and Limitations</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong>No Warranties:</strong> Our service is provided &quot;as is&quot; without warranties of any kind, 
                either express or implied, including but not limited to merchantability, fitness for a 
                particular purpose, or non-infringement.
              </p>
              <p>
                <strong>Quality:</strong> While we strive for high-quality conversions, we cannot guarantee 
                that converted files will meet your specific requirements or expectations.
              </p>
              <p>
                <strong>Data Loss:</strong> We recommend keeping backups of your original files. We are not 
                responsible for any data loss that may occur.
              </p>
              <p>
                <strong>Browser Compatibility:</strong> Our service requires a modern web browser with 
                JavaScript enabled. Functionality may vary across different browsers and devices.
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">7. Limitation of Liability</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                To the fullest extent permitted by law, we shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <p>• Loss of data or files</p>
              <p>• Loss of profits or business opportunities</p>
              <p>• Service interruptions</p>
              <p>• Any other damages arising from your use of our service</p>
              <p>
                Our total liability for any claim related to our service shall not exceed the amount 
                you paid for the service (which is zero, as our service is free).
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">8. Intellectual Property</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                The design, code, and content of our website and service are protected by copyright 
                and other intellectual property laws.
              </p>
              <p>
                You retain all rights to the files you convert using our service. We claim no ownership 
                or rights to your files.
              </p>
              <p>
                You may not copy, modify, distribute, or create derivative works from our service 
                without explicit permission.
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">9. Termination</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                We reserve the right to terminate or suspend access to our service at any time, 
                with or without notice, for any reason including violation of these terms.
              </p>
              <p>
                You may stop using our service at any time. Since we don&apos;t collect personal data, 
                there are no accounts to delete or data to remove.
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">10. Changes to Terms</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                We may update these terms from time to time. When we do, we will:
              </p>
              <p>• Update the &quot;Last updated&quot; date at the top of this page</p>
              <p>• Provide reasonable notice of significant changes</p>
              <p>• Continue to honor the privacy principles outlined in our Privacy Policy</p>
              <p>
                Your continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">11. Governing Law</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                These terms shall be governed by and construed in accordance with applicable laws, 
                without regard to conflict of law principles.
              </p>
              <p>
                Any disputes arising from these terms or your use of our service shall be resolved 
                through appropriate legal channels in the applicable jurisdiction.
              </p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">12. Contact Information</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                If you have questions about these terms or our service, please contact us:
              </p>
              <p>• Email: <Link href="mailto:abuhasansarkar2@gmail.com" className="text-primary font-semibold hover:underline">abuhasansarkar2@gmail.com</Link></p>
              <p>• Contact form: <Link href="/contact" className="text-primary hover:underline">Contact page</Link></p>
              <p>
                We welcome feedback and will respond to legitimate inquiries promptly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fair Use */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Commitment to Fair Terms</h2>
          <p className="text-muted-foreground">
            We believe in fair, transparent terms that protect both users and our service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold">User-Friendly Approach</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• No hidden clauses or gotchas</li>
              <li>• Plain language instead of complex legalese</li>
              <li>• Fair limitations that make sense</li>
              <li>• Respect for your rights and privacy</li>
            </ul>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-lg font-semibold">Transparent Practices</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Clear explanation of what we do and don&apos;t do</li>
              <li>• Open about our limitations and disclaimers</li>
              <li>• Regular updates with user notification</li>
              <li>• Easy contact for questions or concerns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl">
        <h2 className="text-3xl font-bold">Ready to Start Converting?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Now that you understand our terms, you can use our image converter with confidence. 
          Your privacy and rights are protected.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            Start Converting
          </Link>
          <Link href="/contact" className="btn-ghost">
            Ask Questions
          </Link>
        </div>
      </section>
    </div>
  );
}
