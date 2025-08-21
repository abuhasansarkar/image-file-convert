'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export function NavigationLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 30;
      });
    }, 100);

    // Complete loading after a short delay
    const loadingTimeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 200);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(loadingTimeout);
    };
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center">
      {/* Progress Bar at Top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading Content */}
      <div className="text-center space-y-4 animate-in fade-in duration-300">
        <div className="relative">
          <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/30 rounded-full animate-ping" />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Loading...</p>
          <div className="flex justify-center space-x-1">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
