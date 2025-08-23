import Script from 'next/script'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbStructuredDataProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `http://convertersnap.com${item.url}`
    }))
  }

  return (
    <Script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  )
}

// Visual breadcrumb component with microdata
export function VisualBreadcrumbs({ items }: BreadcrumbStructuredDataProps) {
  return (
    <nav 
      className="flex items-center space-x-2 text-sm text-muted-foreground mb-6"
      itemScope 
      itemType="https://schema.org/BreadcrumbList"
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="mx-2">/</span>}
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={(index + 1).toString()} />
            {index === items.length - 1 ? (
              <span 
                itemProp="name" 
                className="text-foreground font-medium"
              >
                {item.name}
              </span>
            ) : (
              <a
                href={item.url}
                itemProp="item"
                className="hover:text-primary transition-colors"
              >
                <span itemProp="name">{item.name}</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </nav>
  )
}
