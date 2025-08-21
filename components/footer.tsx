'use client';

import { Heart, Shield, Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          {/* Supported Formats */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Supported Formats</h3>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">Input: JPG, PNG, PDF, HEIC, SVG, RAW, BMP</p>
              <p>Output: WebP, PDF, JPG, PNG, TIFF</p>
            </div>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-sm text-muted-foreground">
              A modern, privacy-focused image conversion tool that processes everything locally in your browser. 
              No uploads, no tracking, just fast and secure conversions.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            Made with <Heart className="inline h-4 w-4 text-red-500" /> for privacy and performance
          </p>
        </div>
      </div>
    </footer>
  );
}
