'use client';

import { Heart, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {/* Supported Formats */}
             <div className="space-y-4">
            <h3 className="text-lg font-semibold">Supported Formats</h3>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">Input: JPG, PNG, PDF, HEIC, SVG, RAW, BMP</p>
              <p>Output: WebP, PDF, JPG, PNG, TIFF</p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>100% Client-side Processing</span>
              </li>
              <li className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-blue-500" />
                <span>Fast WASM-powered Conversion</span>
              </li>
              <li className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-red-500" />
                <span>No File Size Limits</span>
              </li>
            </ul>
          </div>
          {/* Featured Articles */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Featured Articles</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <Link href="/blog/jpg-to-webp-converter-guide" className="flex items-center space-x-2 underline">
                <Zap className="h-4 w-4 text-green-500" />
                <span>Why You Need a JPG to WebP Converter</span>
              </Link>
              <Link href="/blog/png-to-webp-complete-guide" className="flex items-center space-x-2 underline">
                <Zap className="h-4 w-4 text-green-500" />
                <span>PNG to WebP Conversion: Complete Guide for Designers</span>
              </Link>
              <Link href="/blog/heic-to-jpg-iphone-photos" className="flex items-center space-x-2 underline">
                <Zap className="h-4 w-4 text-green-500" />
                <span>HEIC to JPG: Fix iPhone Photo Compatibility</span>
              </Link>
            </ul>
          </div>

       

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/blog" className="hover:text-foreground transition-colors">Blog & Guides</a>
              </li>
              <li>
                <a href="/about" className="hover:text-foreground transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-foreground transition-colors">Contact</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            Developer by AbuHasan Sarkar <Heart className="inline h-4 w-4 text-red-500" /> for privacy and performance
          </p>
        </div>
      </div>
    </footer>
  );
}
