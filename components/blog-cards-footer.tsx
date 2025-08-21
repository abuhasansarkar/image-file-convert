import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
}

interface BlogCardsFooterProps {
  currentSlug: string;
  title?: string;
}

const allBlogs: BlogPost[] = [
  {
    slug: 'jpg-to-webp-converter-guide',
    title: 'Why You Need a JPG to WebP Converter in 2025',
    description: 'Discover how converting JPG to WebP can reduce image sizes by up to 80% while maintaining quality. Essential for website optimization.',
    category: 'Web Optimization',
    readTime: '5 min read',
    featured: true,
    tags: ['WebP', 'Optimization', 'SEO']
  },
  {
    slug: 'png-to-webp-complete-guide',
    title: 'PNG to WebP Conversion: Complete Guide for Designers',
    description: 'Learn when and how to convert PNG to WebP format. Preserve transparency while dramatically reducing file sizes for better performance.',
    category: 'Design',
    readTime: '6 min read',
    featured: true,
    tags: ['PNG', 'WebP', 'Design']
  },
  {
    slug: 'images-to-pdf-merger',
    title: 'Images to PDF Converter: Essential Tool for Business',
    description: 'Transform multiple images into professional PDF documents. Perfect for reports, presentations, and document management.',
    category: 'Business',
    readTime: '4 min read',
    featured: false,
    tags: ['PDF', 'Business', 'Documents']
  },
  {
    slug: 'pdf-to-jpg-extract-images',
    title: 'PDF to JPG: Extract Images Like a Pro',
    description: 'Extract high-quality images from PDF documents with ease. Learn the best practices for maintaining image quality during extraction.',
    category: 'Productivity',
    readTime: '5 min read',
    featured: false,
    tags: ['PDF', 'JPG', 'Extraction']
  },
  {
    slug: 'heic-to-jpg-iphone-photos',
    title: 'HEIC to JPG: Convert iPhone Photos for Universal Compatibility',
    description: 'Solve iPhone photo compatibility issues by converting HEIC to JPG. Share your photos anywhere without format restrictions.',
    category: 'Mobile',
    readTime: '4 min read',
    featured: true,
    tags: ['iPhone', 'HEIC', 'Compatibility']
  },
  {
    slug: 'svg-to-png-converter-guide',
    title: 'SVG to PNG: When and How to Convert Vector Graphics',
    description: 'Convert scalable vector graphics to raster images for broader compatibility. Learn the best practices for quality conversion.',
    category: 'Design',
    readTime: '6 min read',
    featured: false,
    tags: ['SVG', 'PNG', 'Vector']
  },
  {
    slug: 'raw-to-tiff-professional-workflow',
    title: 'RAW to TIFF: Professional Photography Workflow',
    description: 'Process camera RAW files into high-quality TIFF images. Essential guide for photographers and digital artists.',
    category: 'Photography',
    readTime: '7 min read',
    featured: false,
    tags: ['RAW', 'TIFF', 'Photography']
  },
  {
    slug: 'bmp-to-png-optimization',
    title: 'BMP to PNG: Optimize Legacy Images for Modern Web',
    description: 'Convert outdated BMP files to efficient PNG format. Reduce file sizes while maintaining image quality for web use.',
    category: 'Web Optimization',
    readTime: '4 min read',
    featured: false,
    tags: ['BMP', 'PNG', 'Optimization']
  }
];

export function BlogCardsFooter({ currentSlug, title = "More Image Conversion Guides" }: BlogCardsFooterProps) {
  // Filter out the current blog post and get 3 related posts
  const otherBlogs = allBlogs
    .filter(blog => blog.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
          <p className="text-muted-foreground">
            Discover more expert tips and conversion techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherBlogs.map((blog, index) => (
            <article 
              key={blog.slug} 
              className={`group card p-6 space-y-4 hover:shadow-soft-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${blog.featured ? 'ring-2 ring-primary/20' : ''}`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {blog.featured && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium animate-pulse">
                  <Tag className="w-3 h-3" />
                  <span>Featured</span>
                </div>
              )}
              
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="px-2 py-1 bg-muted rounded text-xs font-medium transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {blog.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {blog.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-muted/50 text-xs rounded transition-all hover:bg-primary/10 hover:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-2">
                <Link 
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium group-hover:gap-3 transition-all"
                >
                  Read Guide
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/blog" 
            className="btn-ghost group hover:scale-105 transition-all duration-300"
          >
            View All Guides
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
