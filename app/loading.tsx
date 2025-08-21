import React from 'react';
import { Loader2, ImageIcon, Zap } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8">
        {/* Main Loading Animation */}
        <div className="relative">
          {/* Outer spinning ring */}
          <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
          
          {/* Inner pulsing circle */}
          <div className="absolute inset-0 w-16 h-16 mx-auto mt-4 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 animate-pulse flex items-center justify-center">
            <ImageIcon className="w-8 h-8 text-primary animate-bounce" />
          </div>
          
          {/* Floating particles */}
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Loading Text with Animation */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Loading...
          </h2>
          
          {/* Animated dots */}
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          
          <p className="text-muted-foreground animate-pulse">
            Preparing your image conversion experience
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto pt-4">
          {[
            { icon: Zap, text: 'Fast' },
            { icon: ImageIcon, text: 'Quality' },
            { icon: Loader2, text: 'Secure' }
          ].map((feature, index) => (
            <div 
              key={feature.text}
              className="flex flex-col items-center space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}