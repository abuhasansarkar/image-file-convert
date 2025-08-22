import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { QueryClientProvider } from '@/components/query-client-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/toaster';
import { NavigationLoader } from '@/components/navigation-loader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Free Image Converter - Convert JPG, PNG, WebP, PDF & More Online',
  description: 'Convert images between 10+ formats instantly. 100% free, secure, and private. All processing happens in your browser - no uploads required. Support for JPG, PNG, WebP, PDF, HEIC, SVG, RAW, and BMP.',
  keywords: 'image converter, convert images online, JPG to WebP, PNG to WebP, PDF converter, HEIC converter, free image tools, online image conversion, secure image converter',
  authors: [{ name: 'Image Converter Team' }],
  creator: 'Image Converter',
  publisher: 'Image Converter',
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://imageconverter.app',
    siteName: 'Image Converter',
    title: 'Image Converter - Fast & Secure Image Conversion',
    description: 'Convert images between formats quickly and securely in your browser. All processing happens locally.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Image Converter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Converter - Fast & Secure Image Conversion',
    description: 'Convert images between formats quickly and securely in your browser. All processing happens locally.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <QueryClientProvider>
            <NavigationLoader />
            <div className="min-h-screen flex flex-col bg-background">
              <Header />
              <main className="flex-1 container mx-auto px-4 py-8">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
