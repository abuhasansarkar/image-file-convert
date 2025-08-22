import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Image Conversion Blog - Tips, Guides & Best Practices',
  description: 'Learn everything about image conversion with our comprehensive guides. Discover why different formats matter, how to optimize images for web, and conversion best practices.',
  keywords: 'image conversion blog, image optimization guides, JPG to WebP, PNG conversion, image formats explained, web image optimization',
  openGraph: {
    title: 'Image Conversion Blog - Expert Tips & Guides',
    description: 'Master image conversion with our expert guides and tips for better web performance.',
    type: 'website',
  },
};

const blogPosts = [
  {
    slug: 'heic-to-jpg-complete-guide',
    title: 'HEIC to JPG Complete Guide: Convert iPhone Photos Easily',
    description: 'Complete guide to converting HEIC to JPG format. Learn about compatibility, quality settings, and best practices for iPhone photo conversion.',
    category: 'Mobile',
    readTime: '8 min read',
    publishDate: 'Read More...',
    featured: true,
    image: '/blog/heic-jpg-guide.jpg',
  },
  {
    slug: 'svg-to-png-vector-conversion',
    title: 'SVG to PNG Vector Conversion: Complete Guide',
    description: 'Master SVG to PNG conversion with our comprehensive guide. Learn about vector vs raster, quality settings, and best practices.',
    category: 'Design',
    readTime: '10 min read',
    publishDate: 'Read More...',
    featured: true,
    image: '/blog/svg-png-vector.jpg',
  },
  {
    slug: 'webp-to-png-transparency-guide',
    title: 'WebP to PNG Transparency Guide: Preserve Image Quality',
    description: 'Convert WebP to PNG while preserving transparency. Learn about format differences, browser support, and optimization techniques.',
    category: 'Web Optimization',
    readTime: '7 min read',
    publishDate: 'Read More...',
    featured: true,
    image: '/blog/webp-png-transparency.jpg',
  },
  {
    slug: 'jpg-to-webp-optimization',
    title: 'JPG to WebP Optimization: Boost Web Performance',
    description: 'Optimize your website with JPG to WebP conversion. Reduce file sizes by up to 80% while maintaining excellent image quality.',
    category: 'Web Optimization',
    readTime: '9 min read',
    publishDate: 'Read More...',
    featured: true,
    image: '/blog/jpg-webp-optimization.jpg',
  },
  {
    slug: 'png-to-webp-compression',
    title: 'PNG to WebP Compression: Modern Image Optimization',
    description: 'Convert PNG to WebP for better compression and transparency support. Essential guide for modern web development.',
    category: 'Web Optimization',
    readTime: '8 min read',
    publishDate: 'Read More...',
    featured: false,
    image: '/blog/png-webp-compression.jpg',
  },
  {
    slug: 'pdf-to-jpg-conversion-guide',
    title: 'PDF to JPG Conversion Guide: Extract Images Perfectly',
    description: 'Convert PDF documents to high-quality JPG images. Learn about resolution settings, batch processing, and quality optimization.',
    category: 'Productivity',
    readTime: '6 min read',
    publishDate: 'Read More...',
    featured: false,
    image: '/blog/pdf-jpg-conversion.jpg',
  },
  {
    slug: 'image-format-comparison-guide',
    title: 'Image Format Comparison: JPG vs PNG vs WebP vs HEIC',
    description: 'Comprehensive comparison of modern image formats. Understand when to use JPG, PNG, WebP, HEIC, and SVG for optimal results.',
    category: 'Education',
    readTime: '12 min read',
    publishDate: 'Read More...',
    featured: true,
    image: '/blog/image-format-comparison.jpg',
  },
  {
    slug: 'web-performance-image-optimization',
    title: 'Web Performance Image Optimization: Core Web Vitals Guide',
    description: 'Master image optimization for Core Web Vitals. Learn compression techniques, lazy loading, and modern format adoption.',
    category: 'Web Performance',
    readTime: '15 min read',
    publishDate: 'Read More...',
    featured: true,
    image: '/blog/web-performance-optimization.jpg',
  },
  {
    slug: 'batch-image-conversion-guide',
    title: 'Batch Image Conversion: Process Hundreds of Images at Once',
    description: 'Save hours with batch image conversion. Learn workflows for processing multiple images simultaneously with consistent quality.',
    category: 'Productivity',
    readTime: '10 min read',
    publishDate: 'Read More...',
    featured: false,
    image: '/blog/batch-conversion-guide.jpg',
  },
  {
    slug: 'mobile-image-formats-guide',
    title: 'Mobile Image Formats Guide: iOS vs Android Compatibility',
    description: 'Navigate mobile image formats across iOS and Android. Understand HEIC, JPG, PNG compatibility for seamless photo sharing.',
    category: 'Mobile',
    readTime: '11 min read',
    publishDate: 'Read More...',
    featured: false,
    image: '/blog/mobile-formats-guide.jpg',
  },
  {
    slug: 'jpg-to-webp-converter-guide',
    title: 'Why You Need a JPG to WebP Converter in 2025',
    description: 'Discover how converting JPG to WebP can reduce image sizes by up to 80% while maintaining quality. Essential for website optimization.',
    category: 'Web Optimization',
    readTime: '5 min read',
    publishDate: 'Read More...',
    featured: false,
    image: '/blog/jpg-webp-conversion.jpg',
  },
  {
    slug: 'png-to-webp-complete-guide',
    title: 'PNG to WebP Conversion: Complete Guide for Designers',
    description: 'Learn when and how to convert PNG to WebP format. Preserve transparency while dramatically reducing file sizes for better performance.',
    category: 'Design',
    readTime: '6 min read',
    publishDate: 'Read More...',
    featured: false,
    image: '/blog/png-webp-guide.jpg',
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
          Image Conversion Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master image conversion with expert guides, tips, and best practices for optimal web performance and compatibility.
        </p>
      </section>

      {/* Featured Posts */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card p-0 overflow-hidden hover:shadow-soft-lg transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 flex items-center justify-center">
                <div className="text-4xl">📸</div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{post.publishDate}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Articles */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">All Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card p-6 hover:shadow-soft-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{post.publishDate}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl">
        <h2 className="text-3xl font-bold">Ready to Convert Your Images?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Put your knowledge into practice with our free, secure, and fast image conversion tools.
        </p>
        <Link href="/" className="btn-primary inline-flex items-center gap-2">
          Try Our Converters
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
