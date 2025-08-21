import { Metadata } from 'next';
import { Shield, Zap, Heart, Users, Code, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Free Image Converter',
  description: 'Learn about our mission to provide free, secure, and privacy-focused image conversion tools. All processing happens locally in your browser.',
  keywords: 'about image converter, privacy-focused conversion, local processing, free image tools',
  openGraph: {
    title: 'About Us - Free Image Converter',
    description: 'Learn about our mission to provide free, secure, and privacy-focused image conversion tools.',
    type: 'website',
  },
};

const values = [
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your files never leave your device. All processing happens locally in your browser, ensuring complete privacy and security.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Built with cutting-edge web technologies like WebAssembly for near-native performance in your browser.',
  },
  {
    icon: Heart,
    title: 'User-Centric',
    description: 'Designed with simplicity and ease of use in mind. No registration, no limits, no hassle.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Built for everyone, from casual users to professionals who need reliable image conversion tools.',
  },
  {
    icon: Code,
    title: 'Open Innovation',
    description: 'Leveraging modern web standards and open-source technologies to deliver the best experience.',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Available worldwide, works offline, and accessible to users with different needs and devices.',
  },
];

const features = [
  'Support for 8+ image formats',
  'Batch processing capabilities',
  'High-quality output with customizable settings',
  'Progressive Web App (PWA) support',
  'Dark and light theme options',
  'Keyboard shortcuts for power users',
  'Responsive design for all devices',
  'No file size limitations',
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
          About Our Image Converter
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We believe that powerful image conversion tools should be free, secure, and accessible to everyone. 
          That&apos;s why we built a completely client-side image converter that respects your privacy while 
          delivering professional-grade results.
        </p>
      </section>

      {/* Mission Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            To democratize image conversion by providing free, fast, and secure tools that work entirely in your browser.
          </p>
        </div>

        <div className="card p-8 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20">
          <blockquote className="text-lg italic text-center">
            &ldquo;We envision a world where powerful image processing tools are accessible to everyone, 
            without compromising on privacy, performance, or ease of use.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Values Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Values</h2>
          <p className="text-muted-foreground">
            The principles that guide everything we build
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="card p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technology Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Built with Modern Technology</h2>
          <p className="text-muted-foreground">
            Leveraging the latest web technologies for optimal performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Technical Stack</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span><strong>Next.js 14</strong> &mdash; React framework with App Router</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span><strong>TypeScript</strong> &mdash; Type-safe development</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span><strong>WebAssembly</strong> - Near-native performance</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span><strong>Canvas API</strong> - High-quality image processing</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span><strong>PWA</strong> - Progressive Web App capabilities</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Key Features</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Privacy by Design</h2>
          <p className="text-muted-foreground">
            Your privacy is not an afterthought&mdash;it&apos;s built into our core architecture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold">No Server Processing</h3>
            <p className="text-muted-foreground">
              All image conversion happens locally in your browser. Your files never touch our servers 
              or leave your device, ensuring complete privacy and security.
            </p>
          </div>

          <div className="card p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Offline Capable</h3>
            <p className="text-muted-foreground">
              Once loaded, our app works completely offline. Convert images without an internet 
              connection, ensuring your data stays private even in offline scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Looking Forward</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&rsquo;re constantly working to improve our tools and add new features while maintaining 
            our commitment to privacy and performance.
          </p>
        </div>

        <div className="card p-8 text-center space-y-6 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20">
          <h3 className="text-xl font-semibold">Have suggestions or feedback?</h3>
          <p className="text-muted-foreground">
            We&rsquo;d love to hear from you! Your input helps us build better tools for everyone.
          </p>
          <a 
            href="/contact" 
            className="btn-primary inline-flex items-center gap-2"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
