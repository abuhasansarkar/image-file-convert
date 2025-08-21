import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageSquare, Github, Heart, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - Free Image Converter',
  description: 'Get in touch with our team. We welcome feedback, suggestions, and questions about our free image conversion tools.',
  keywords: 'contact image converter, feedback, support, suggestions, help',
  openGraph: {
    title: 'Contact Us - Free Image Converter',
    description: 'Get in touch with our team. We welcome feedback, suggestions, and questions.',
    type: 'website',
  },
};

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us your questions, feedback, or suggestions',
    contact: 'abuhasansarkar2@gmail.com',
    action: 'mailto:abuhasansarkar2@gmail.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MessageSquare,
    title: 'Feedback Form',
    description: 'Quick and easy way to share your thoughts',
    contact: 'Built-in feedback form',
    action: '#feedback-form',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Github,
    title: 'GitHub Issues',
    description: 'Report bugs or request features',
    contact: 'github.com/imageconverter/issues',
    action: 'https://github.com/imageconverter/issues',
    color: 'from-purple-500 to-indigo-500',
  },
];

const faqs = [
  {
    question: 'Is this service really free?',
    answer: 'Yes, completely free! All processing happens in your browser, so there are no server costs to pass on to users.',
  },
  {
    question: 'Are my files uploaded to your servers?',
    answer: 'No, never! All conversion happens locally in your browser. Your files never leave your device.',
  },
  {
    question: 'What file formats do you support?',
    answer: 'We support JPG, PNG, WebP, PDF, HEIC, SVG, RAW, and BMP formats with more being added regularly.',
  },
  {
    question: 'Is there a file size limit?',
    answer: 'The only limit is your device\'s available memory. We recommend keeping files under 200MB for optimal performance.',
  },
  {
    question: 'Can I use this offline?',
    answer: 'Yes! Once the app is loaded, it works completely offline thanks to Progressive Web App technology.',
  },
  {
    question: 'How can I contribute or suggest improvements?',
    answer: 'We welcome all feedback! Use any of the contact methods above to share your ideas or report issues.',
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We&rsquo;d love to hear from you! Whether you have questions, feedback, or suggestions, 
          we&rsquo;re here to help make our image converter even better.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">How to Reach Us</h2>
          <p className="text-muted-foreground">
            Choose the method that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.action}
                className="card p-6 text-center space-y-4 hover:shadow-soft-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${method.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground">{method.description}</p>
                <p className="text-sm font-medium text-primary">{method.contact}</p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Feedback Form */}
      <section id="feedback-form" className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Send Us Feedback</h2>
          <p className="text-muted-foreground">
            Your input helps us improve our tools for everyone
          </p>
        </div>

        <div className="card p-8 max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input w-full"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input w-full"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <select id="subject" name="subject" className="input w-full">
                <option value="">Select a topic</option>
                <option value="feedback">General Feedback</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="question">Question</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="input w-full resize-vertical"
                placeholder="Tell us what's on your mind..."
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Quick answers to common questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="card p-6 group">
              <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between">
                {faq.question}
                <span className="text-primary group-open:rotate-180 transition-transform duration-200">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Response Time */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">What to Expect</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold">Quick Response</h3>
            <p className="text-sm text-muted-foreground">
              We typically respond to emails within 24-48 hours
            </p>
          </div>

          <div className="card p-6 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Personal Touch</h3>
            <p className="text-sm text-muted-foreground">
              Every message is read and responded to personally
            </p>
          </div>

          <div className="card p-6 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold">Global Support</h3>
            <p className="text-sm text-muted-foreground">
              We support users from all around the world
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Don&rsquo;t let questions hold you back. Reach out to us and let&rsquo;s make image conversion 
          easier for everyone.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:abuhasansarkar2@gmail.com" className="btn-primary">
            Send Email
          </a>
          <Link href="/" className="btn-ghost">
            Back to Converter
          </Link>
        </div>
      </section>
    </div>
  );
}
