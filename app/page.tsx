import Link from 'next/link';
import { 
  ArrowRight, 
  Zap,
  Shield,
  Download
} from 'lucide-react';
import { HeroWebPConverter } from '@/components/hero-webp-converter';
import { BlogCard } from '@/components/blog-card';
import { Toaster } from '@/components/toaster';
import ConversionCard from '@/components/ConversionCard';



const features = [
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'All processing happens locally in your browser. Your files never leave your device.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Powered by WebAssembly for near-native performance in your browser.',
  },
  {
    icon: Download,
    title: 'Batch Processing',
    description: 'Convert multiple files at once and download them as a ZIP archive.',
  },
];

const allBlogs = [
  {
    slug: 'jpg-to-webp-converter-guide',
    title: 'Why You Need a JPG to WebP Converter for a Better Website',
    description: 'Discover how converting JPG to WebP can reduce image sizes by up to 80% while maintaining quality. Essential for website optimization.',
    category: 'Web Optimization',
    readTime: '5 min read',
    publishDate: '2024-12-20',
    featured: true,
    tags: ['WebP', 'Optimization', 'SEO']
  },
  {
    slug: 'png-to-webp-complete-guide',
    title: 'PNG to WebP Conversion: Complete Guide for Designers',
    description: 'Learn when and how to convert PNG to WebP format. Preserve transparency while dramatically reducing file sizes for better performance.',
    category: 'Design',
    readTime: '6 min read',
    publishDate: '2024-12-19',
    featured: true,
    tags: ['PNG', 'WebP', 'Design']
  },
  {
    slug: 'heic-to-jpg-iphone-photos',
    title: 'HEIC to JPG: Convert iPhone Photos for Universal Compatibility',
    description: 'Solve iPhone photo compatibility issues by converting HEIC to JPG. Share your photos anywhere without format restrictions.',
    category: 'Mobile',
    readTime: '4 min read',
    publishDate: '2024-12-16',
    featured: true,
    tags: ['iPhone', 'HEIC', 'Compatibility']
  },
  {
    slug: 'images-to-pdf-merger',
    title: 'Images to PDF Converter: Essential Tool for Business',
    description: 'Transform multiple images into professional PDF documents. Perfect for reports, presentations, and document management.',
    category: 'Business',
    readTime: '4 min read',
    publishDate: '2024-12-18',
    featured: false,
    tags: ['PDF', 'Business', 'Documents']
  },
  {
    slug: 'pdf-to-jpg-extract-images',
    title: 'PDF to JPG: Extract Images Like a Pro',
    description: 'Extract high-quality images from PDF documents with ease. Learn the best practices for maintaining image quality during extraction.',
    category: 'Productivity',
    readTime: '5 min read',
    publishDate: '2024-12-17',
    featured: false,
    tags: ['PDF', 'JPG', 'Extraction']
  },

  {
    slug: 'svg-to-png-converter-guide',
    title: 'SVG to PNG: When and How to Convert Vector Graphics',
    description: 'Convert scalable vector graphics to raster images for broader compatibility. Learn the best practices for quality conversion.',
    category: 'Design',
    readTime: '6 min read',
    publishDate: '2024-12-15',
    featured: false,
    tags: ['SVG', 'PNG', 'Vector']
  },
  {
    slug: 'raw-to-tiff-professional-workflow',
    title: 'RAW to TIFF: Professional Photography Workflow',
    description: 'Process camera RAW files into high-quality TIFF images. Essential guide for photographers and digital artists.',
    category: 'Photography',
    readTime: '7 min read',
    publishDate: '2024-12-14',
    featured: false,
    tags: ['RAW', 'TIFF', 'Photography']
  },
  {
    slug: 'bmp-to-png-optimization',
    title: 'BMP to PNG: Optimize Legacy Images for Modern Web',
    description: 'Convert outdated BMP files to efficient PNG format. Reduce file sizes while maintaining image quality for web use.',
    category: 'Web Optimization',
    readTime: '4 min read',
    publishDate: '2024-12-13',
    featured: false,
    tags: ['BMP', 'PNG', 'Optimization']
  },
  {
    slug: 'raw-to-tiff-photography-professional-workflow',
    title: 'RAW to TIFF: Professional Photography Workflow',
    description: 'Process camera RAW files into high-quality TIFF images. Essential guide for photographers and digital artists.',
    category: 'Photography',
    readTime: '7 min read',
    publishDate: '2024-12-14',
    featured: false,
    tags: ['RAW', 'TIFF', 'Photography']
  }
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero WebP Converter Section */}
      <section>
        <HeroWebPConverter />
      </section>

      {/* Conversion Grid */}
      <ConversionCard/>
   
      {/* Features Section */}
      <section className="space-y-8 py-20">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold">Why Choose Our Converter?</h2>
          <p className="text-muted-foreground">
            Built with privacy, performance, and user experience in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group text-center space-y-4 hover:scale-105 transition-all duration-300 cursor-pointer border p-6 rounded-lg"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Blog Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Expert Guides & Tips</h2>
          <p className="text-muted-foreground">
            Learn best practices and advanced techniques for image conversion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allBlogs.map((blog, index) => (
            <div
              key={blog.slug}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <BlogCard
                title={blog.title}
                description={blog.description}
                slug={blog.slug}
                category={blog.category}
                readTime={blog.readTime}
                featured={blog.featured}
                tags={blog.tags}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog" className="btn-ghost group hover:scale-105 transition-all duration-300">
            View All Guides
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

 
      <Toaster />
    </div>
  );
}
