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
    slug: 'jpg-to-webp-converter-guide',
    title: 'Why You Need a JPG to WebP Converter in 2025',
    description: 'Discover how converting JPG to WebP can reduce image sizes by up to 80% while maintaining quality. Essential for website optimization.',
    category: 'Web Optimization',
    readTime: '5 min read',
    publishDate: '2024-12-20',
    featured: true,
    image: '/blog/jpg-webp-conversion.jpg',
  },
  {
    slug: 'png-to-webp-complete-guide',
    title: 'PNG to WebP Conversion: Complete Guide for Designers',
    description: 'Learn when and how to convert PNG to WebP format. Preserve transparency while dramatically reducing file sizes for better performance.',
    category: 'Design',
    readTime: '6 min read',
    publishDate: '2024-12-19',
    featured: true,
    image: '/blog/png-webp-guide.jpg',
  },
  {
    slug: 'images-to-pdf-converter-business',
    title: 'Images to PDF Converter: Essential Tool for Business',
    description: 'Transform multiple images into professional PDF documents. Perfect for reports, presentations, and document management.',
    category: 'Business',
    readTime: '4 min read',
    publishDate: '2024-12-18',
    featured: false,
    image: '/blog/images-pdf-business.jpg',
  },
  {
    slug: 'pdf-to-jpg-extraction-guide',
    title: 'PDF to JPG: Extract Images Like a Pro',
    description: 'Extract high-quality images from PDF documents with ease. Learn the best practices for maintaining image quality during extraction.',
    category: 'Productivity',
    readTime: '5 min read',
    publishDate: '2024-12-17',
    featured: false,
    image: '/blog/pdf-jpg-extraction.jpg',
  },
  {
    slug: 'heic-to-jpg-iphone-photos',
    title: 'HEIC to JPG: Convert iPhone Photos for Universal Compatibility',
    description: 'Solve iPhone photo compatibility issues by converting HEIC to JPG. Share your photos anywhere without format restrictions.',
    category: 'Mobile',
    readTime: '4 min read',
    publishDate: '2024-12-16',
    featured: true,
    image: '/blog/heic-jpg-iphone.jpg',
  },
  {
    slug: 'svg-to-png-vector-conversion',
    title: 'SVG to PNG: When and How to Convert Vector Graphics',
    description: 'Convert scalable vector graphics to raster images for broader compatibility. Learn the best practices for quality conversion.',
    category: 'Design',
    readTime: '6 min read',
    publishDate: '2024-12-15',
    featured: false,
    image: '/blog/svg-png-conversion.jpg',
  },
  {
    slug: 'raw-to-tiff-photography-workflow',
    title: 'RAW to TIFF: Professional Photography Workflow',
    description: 'Process camera RAW files into high-quality TIFF images. Essential guide for photographers and digital artists.',
    category: 'Photography',
    readTime: '7 min read',
    publishDate: '2024-12-14',
    featured: false,
    image: '/blog/raw-tiff-photography.jpg',
  },
  {
    slug: 'bmp-to-png-optimization',
    title: 'BMP to PNG: Optimize Legacy Images for Modern Web',
    description: 'Convert outdated BMP files to efficient PNG format. Reduce file sizes while maintaining image quality for web use.',
    category: 'Web Optimization',
    readTime: '4 min read',
    publishDate: '2024-12-13',
    featured: false,
    image: '/blog/bmp-png-optimization.jpg',
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
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
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
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
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
