'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ImageIcon, Menu, X, Wifi, WifiOff } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils/cn';

const conversions = [
  { name: 'JPG → WebP', href: '/convert/jpg-webp' },
  { name: 'PNG → WebP', href: '/convert/png-webp' },
  { name: 'Images → PDF', href: '/convert/images-pdf' },
  { name: 'PDF → JPG', href: '/convert/pdf-jpg' },
  { name: 'HEIC → JPG', href: '/convert/heic-jpg' },
  { name: 'SVG → PNG', href: '/convert/svg-png' },
  { name: 'RAW → TIFF', href: '/convert/raw-tiff' },
  { name: 'BMP → PNG', href: '/convert/bmp-png' },
];

const mainPages = [
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <ImageIcon className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Converter</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 ">
            {conversions.map((conversion) => (
              <Link
                key={conversion.href}
                href={conversion.href}
                className={cn(
                  'px-3 py-2 text-sm font-semibold rounded-md transition-colors hover:bg-accent hover:text-accent-foreground',
                  pathname === conversion.href && 'bg-accent text-accent-foreground'
                )}
              >
                {conversion.name}
              </Link>
            ))}
            <div className="w-px h-6 bg-border mx-2"></div>
            {mainPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className={cn(
                  'px-3 py-2 text-sm font-semibold rounded-md transition-colors hover:bg-accent hover:text-accent-foreground',
                  pathname === page.href && 'bg-accent text-accent-foreground'
                )}
              >
                {page.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Online/Offline Indicator */}
            <div className="flex items-center space-x-2">
              {isOnline ? (
                <Wifi className="h-4 w-4 text-green-500" />
              ) : (
                <WifiOff className="h-4 w-4 text-red-500" />
              )}
              <span className="text-xs text-muted-foreground hidden sm:inline">
                {isOnline ? 'Online' : 'Offline'}
              </span>
            </div>

            {/* Privacy Badge */}
            <div className="hidden sm:flex items-center space-x-1 px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Local Process Only</span>
            </div>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden btn-ghost p-2 h-auto"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t py-4"
            >
              <nav className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {conversions.map((conversion) => (
                    <Link
                      key={conversion.href}
                      href={conversion.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-center',
                        pathname === conversion.href && 'bg-accent text-accent-foreground'
                      )}
                    >
                      {conversion.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t pt-2 mt-4">
                  <div className="grid grid-cols-2 gap-2">
                    {mainPages.map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-center',
                          pathname === page.href && 'bg-accent text-accent-foreground'
                        )}
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
