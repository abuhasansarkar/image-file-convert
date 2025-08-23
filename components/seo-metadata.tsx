import { Metadata } from 'next'

interface SEOMetadataProps {
  title: string
  description: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
}

export function generateSEOMetadata({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/favicon.png',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author = 'Image Converter Team',
  section
}: SEOMetadataProps): Metadata {
  const baseUrl = 'https://your-domain.com'
  const fullUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl

  return {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    creator: 'Image Converter',
    publisher: 'Image Converter',
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
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: fullUrl,
      siteName: 'Image Converter',
      title,
      description,
      images: [
        {
          url: `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}${ogImage}`],
      creator: '@imageconverter',
      site: '@imageconverter',
    },
    other: {
      'article:author': author,
      ...(section && { 'article:section': section }),
      ...(publishedTime && { 'article:published_time': publishedTime }),
      ...(modifiedTime && { 'article:modified_time': modifiedTime }),
    },
  }
}

// Predefined metadata generators for common page types
export const generateConversionPageMetadata = (
  fromFormat: string,
  toFormat: string,
  additionalKeywords?: string
): Metadata => {
  const title = `${fromFormat.toUpperCase()} to ${toFormat.toUpperCase()} Converter - Free Online Tool`
  const description = `Convert ${fromFormat.toUpperCase()} to ${toFormat.toUpperCase()} format instantly. Free, secure, and fast conversion tool that works in your browser. No uploads required.`
  const keywords = `${fromFormat} to ${toFormat} converter, convert ${fromFormat} to ${toFormat} online, ${fromFormat} ${toFormat} conversion, image converter, free image tools${additionalKeywords ? `, ${additionalKeywords}` : ''}`

  return generateSEOMetadata({
    title,
    description,
    keywords,
    canonicalUrl: `/convert/${fromFormat}-${toFormat}`,
  })
}

export const generateBlogPostMetadata = (
  title: string,
  description: string,
  slug: string,
  category: string,
  publishDate: string,
  keywords?: string
): Metadata => {
  return generateSEOMetadata({
    title: `${title} | Image Converter Blog`,
    description,
    keywords: keywords || `${title.toLowerCase()}, image conversion, ${category.toLowerCase()}`,
    canonicalUrl: `/blog/${slug}`,
    ogType: 'article',
    publishedTime: publishDate,
    modifiedTime: publishDate,
    section: category,
  })
}
