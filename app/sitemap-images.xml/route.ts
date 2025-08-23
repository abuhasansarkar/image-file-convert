import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://convertersnap.com'
  
  const imageUrls = [
    // App icons and favicons
    '/favicon.png',
    '/favicon-16x16.png',
    '/favicon-32x32.png',
    '/apple-touch-icon.png',
    
    // Add any other static images you have in your public folder
    // Example format conversion icons or illustrations
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${imageUrls.map(imageUrl => `
  <url>
    <loc>${baseUrl}</loc>
    <image:image>
      <image:loc>${baseUrl}${imageUrl}</image:loc>
      <image:title>Image Converter Tool</image:title>
      <image:caption>Professional image conversion tools for all formats</image:caption>
    </image:image>
  </url>`).join('')}
  
  <!-- Blog post images (if you have featured images) -->
  <url>
    <loc>${baseUrl}/blog</loc>
    <image:image>
      <image:loc>${baseUrl}/favicon.png</image:loc>
      <image:title>Image Conversion Blog</image:title>
      <image:caption>Expert guides and tips for image conversion</image:caption>
    </image:image>
  </url>
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
