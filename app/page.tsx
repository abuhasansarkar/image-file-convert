import Link from 'next/link';
import { 
  ArrowRight, 
  ImageIcon, 
  FileText, 
  Smartphone, 
  Palette,
  Camera,
  FileImage,
  Zap,
  Shield,
  Download
} from 'lucide-react';

const conversions = [
  {
    name: 'JPG → WebP',
    href: '/convert/jpg-webp',
    description: 'Convert JPEG images to modern WebP format for better compression',
    icon: ImageIcon,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'PNG → WebP',
    href: '/convert/png-webp',
    description: 'Convert PNG images to WebP while preserving transparency',
    icon: Palette,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Images → PDF',
    href: '/convert/images-pdf',
    description: 'Combine multiple images into a single PDF document',
    icon: FileText,
    color: 'from-red-500 to-pink-500',
  },
  {
    name: 'PDF → JPG',
    href: '/convert/pdf-jpg',
    description: 'Extract pages from PDF files as high-quality JPG images',
    icon: FileImage,
    color: 'from-orange-500 to-yellow-500',
  },
  {
    name: 'HEIC → JPG',
    href: '/convert/heic-jpg',
    description: 'Convert iPhone HEIC photos to universal JPG format',
    icon: Smartphone,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    name: 'SVG → PNG',
    href: '/convert/svg-png',
    description: 'Convert scalable vector graphics to raster PNG images',
    icon: Palette,
    color: 'from-teal-500 to-blue-500',
  },
  {
    name: 'RAW → TIFF',
    href: '/convert/raw-tiff',
    description: 'Process camera RAW files into high-quality TIFF images',
    icon: Camera,
    color: 'from-gray-500 to-slate-500',
  },
  {
    name: 'BMP → PNG',
    href: '/convert/bmp-png',
    description: 'Convert bitmap images to compressed PNG format',
    icon: FileImage,
    color: 'from-rose-500 to-red-500',
  },
];

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

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Convert Images Instantly
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fast, secure, and privacy-focused image conversion. All processing happens locally in your browser.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center space-x-2 px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>100% Local Processing</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>WASM Powered</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>No File Uploads</span>
          </div>
        </div>
      </section>

      {/* Conversion Grid */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Choose Your Conversion</h2>
          <p className="text-muted-foreground">
            Select the format conversion you need from the options below
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {conversions.map((conversion) => {
            const Icon = conversion.icon;
            return (
              <Link
                key={conversion.href}
                href={conversion.href}
                className="group card p-6 hover:shadow-soft-lg transition-all duration-300 hover:scale-105"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${conversion.color} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {conversion.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {conversion.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Why Choose Our Converter?</h2>
          <p className="text-muted-foreground">
            Built with privacy, performance, and user experience in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 rounded-2xl">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Ready to Convert?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose any conversion type above to get started. No registration required, 
            no file size limits, and your privacy is guaranteed.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/convert/jpg-webp" className="btn-primary">
            Start Converting
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
