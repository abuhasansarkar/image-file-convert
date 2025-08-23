import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Image Converter - Free Online Image Conversion Tool',
    short_name: 'Image Converter',
    description: 'Convert images between all major formats instantly. Free, secure, and private image conversion tool.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    categories: ['productivity', 'utilities', 'photo'],
    lang: 'en',
    orientation: 'portrait-primary',
    scope: '/',
  }
}
