import Link from 'next/link';
import { ArrowLeft, Home, Search, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Animated 404 Icon */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 flex items-center justify-center animate-pulse">
            <FileQuestion className="w-16 h-16 text-primary animate-bounce" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center animate-ping">
            <span className="text-red-600 text-sm font-bold">!</span>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Link 
            href="/" 
            className="btn-primary group hover:scale-105 transition-all duration-300"
          >
            <Home className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
            Back to Home
          </Link>
          <Link 
            href="/blog" 
            className="btn-ghost group hover:scale-105 transition-all duration-300"
          >
            <Search className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
            Browse Guides
          </Link>
        </div>

        {/* Popular Links */}
        <div className="pt-8 border-t border-border animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <h3 className="text-lg font-semibold mb-4">Popular Converters</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: 'JPG → WebP', href: '/convert/jpg-webp' },
              { name: 'PNG → WebP', href: '/convert/png-webp' },
              { name: 'HEIC → JPG', href: '/convert/heic-jpg' },
              { name: 'Images → PDF', href: '/convert/images-pdf' }
            ].map((converter, index) => (
              <Link
                key={converter.href}
                href={converter.href}
                className="group p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  {converter.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Go back to home page
          </Link>
        </div>
      </div>
    </div>
  );
}
