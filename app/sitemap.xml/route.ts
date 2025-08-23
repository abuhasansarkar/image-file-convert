import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/convert`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Conversion tool pages
  const conversionPages = [
    'jpg-webp',
    'png-webp',
    'webp-png',
    'heic-jpg',
    'avif-jpg',
    'avif-jpeg',
    'avif-png',
    'bmp-png',
    'gif-png',
    'ico-png',
    'svg-png',
    'tiff-jpg',
    'raw-tiff',
    'pdf-jpg',
    'images-pdf',
    'image-avif',
    'image-text'
  ].map(tool => ({
    url: `${baseUrl}/convert/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Blog pages
  const blogPages = [
    'jpg-to-webp-converter-guide',
    'png-to-webp-complete-guide',
    'heic-to-jpg-iphone-photos',
    'images-to-pdf-converter-business',
    'pdf-to-jpg-extract-images',
    'svg-to-png-converter-guide',
    'raw-to-tiff-photography-professional-workflow',
    'bmp-to-png-optimization',
    'batch-image-conversion-guide',
    'heic-to-jpg-complete-guide',
    'image-format-comparison-guide',
    'jpg-to-webp-optimization',
    'mobile-image-formats-guide',
    'pdf-to-jpg-conversion-guide',
    'png-to-webp-compression',
    'svg-to-png-vector-conversion',
    'web-performance-image-optimization',
    'webp-to-png-transparency-guide'
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...conversionPages,
    ...blogPages,
  ]
}
