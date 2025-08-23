import Script from 'next/script'

interface StructuredDataProps {
  type: 'WebApplication' | 'Article' | 'SoftwareApplication' | 'HowTo'
  data: Record<string, unknown>
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const generateStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    }

    return JSON.stringify(baseData)
  }

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: generateStructuredData() }}
    />
  )
}

// Predefined structured data for common pages
export function WebAppStructuredData() {
  const data = {
    name: 'Image Converter Tool',
    description: 'Free online image converter supporting all major formats including JPG, PNG, WebP, HEIC, AVIF, and more. Convert images instantly in your browser with privacy protection.',
    url: 'https://your-domain.com',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    featureList: [
      'JPG to WebP conversion',
      'PNG to WebP conversion', 
      'HEIC to JPG conversion',
      'Batch image processing',
      'Privacy-first processing',
      'No file size limits'
    ],
    screenshot: 'https://your-domain.com/favicon.png',
    author: {
      '@type': 'Organization',
      name: 'Image Converter Tool'
    }
  }

  return <StructuredData type="WebApplication" data={data} />
}

export function BlogArticleStructuredData({ 
  title, 
  description, 
  slug, 
  publishDate, 
  category,
  readTime 
}: {
  title: string
  description: string
  slug: string
  publishDate: string
  category: string
  readTime: string
}) {
  const data = {
    headline: title,
    description: description,
    url: `https://your-domain.com/blog/${slug}`,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      '@type': 'Organization',
      name: 'Image Converter Tool'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Image Converter Tool',
      logo: {
        '@type': 'ImageObject',
        url: 'https://your-domain.com/favicon.png'
      }
    },
    articleSection: category,
    wordCount: readTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://your-domain.com/blog/${slug}`
    }
  }

  return <StructuredData type="Article" data={data} />
}

export function HowToStructuredData({ 
  name, 
  description, 
  steps 
}: {
  name: string
  description: string
  steps: string[]
}) {
  const data = {
    name: name,
    description: description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step
    })),
    totalTime: 'PT2M',
    tool: {
      '@type': 'HowToTool',
      name: 'Web Browser'
    }
  }

  return <StructuredData type="HowTo" data={data} />
}
