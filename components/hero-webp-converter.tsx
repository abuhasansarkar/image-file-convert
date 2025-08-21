'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Upload, Download, Zap, Shield, Clock, ArrowRight } from 'lucide-react';
import { convertJpgToWebP } from '@/lib/converters/jpg-webp-converter';
import { convertPngToWebP } from '@/lib/converters/png-webp-converter';
import { convertBmpToPng } from '@/lib/converters/bmp-png-converter';
import { createDownloadLink, getOutputFilename } from '@/lib/utils/file-utils';
import { toast } from './toaster';

interface HeroWebPConverterProps {
  className?: string;
}

export function HeroWebPConverter({ className }: HeroWebPConverterProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [convertedFiles, setConvertedFiles] = useState<Array<{
    name: string;
    blob: Blob;
    originalSize: number;
    newSize: number;
  }>>([]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    processFiles(files);
  }, []);

  const processFiles = async (files: File[]) => {
    if (files.length === 0) return;

    setIsConverting(true);
    setConvertedFiles([]);

    const results: Array<{
      name: string;
      blob: Blob;
      originalSize: number;
      newSize: number;
    }> = [];

    try {
      for (const file of files) {
        // Check if file is a supported image format
        const supportedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/bmp', 'image/webp'];
        if (!supportedTypes.includes(file.type)) {
          toast.error('Unsupported format', `${file.name} is not a supported image format`);
          continue;
        }

        let convertedBlob: Blob;

        // Convert based on file type with optimized quality settings
        if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
          convertedBlob = await convertJpgToWebP(file, { quality: 90, stripMetadata: true });
        } else if (file.type === 'image/png') {
          convertedBlob = await convertPngToWebP(file, { quality: 90, stripMetadata: true });
        } else if (file.type === 'image/bmp') {
          // Convert BMP to PNG first, then to WebP
          const pngBlob = await convertBmpToPng(file, { stripMetadata: true });
          const pngFile = new File([pngBlob], file.name.replace(/\.bmp$/i, '.png'), { type: 'image/png' });
          convertedBlob = await convertPngToWebP(pngFile, { quality: 90, stripMetadata: true });
        } else if (file.type === 'image/webp') {
          // Already WebP, re-optimize with better quality
          convertedBlob = await convertPngToWebP(file, { quality: 90, stripMetadata: true });
        } else {
          continue;
        }

        results.push({
          name: getOutputFilename(file.name, 'webp'),
          blob: convertedBlob,
          originalSize: file.size,
          newSize: convertedBlob.size
        });
      }

      setConvertedFiles(results);
      
      if (results.length > 0) {
        const totalSaved = results.reduce((acc, file) => acc + (file.originalSize - file.newSize), 0);
        const percentSaved = Math.round((totalSaved / results.reduce((acc, file) => acc + file.originalSize, 0)) * 100);
        toast.success('Conversion complete!', `${results.length} files converted. ${percentSaved}% size reduction!`);
      }
    } catch (error) {
      console.error('Conversion error:', error);
      toast.error('Conversion failed', 'Please try again with different files');
    } finally {
      setIsConverting(false);
    }
  };

  const downloadFile = (file: { name: string; blob: Blob }) => {
    createDownloadLink(file.blob, file.name);
  };

  const downloadAll = () => {
    convertedFiles.forEach(file => {
      createDownloadLink(file.blob, file.name);
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  return (
    <div className={className}>
      <div className="text-center space-y-16 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r mt-10 from-green-600 to-purple-600 bg-clip-text text-transparent">
            Convert & Optimize any Images to <br /> WebP <span className="text-primary-500">in seconds</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Reduce image file sizes by up to 80% while maintaining quality. Fast, secure, and completely free.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-500" />
            <span>100% Private</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span>Lightning Fast</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>No Waiting</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-2xl mx-auto"
      >
        <div
          className={`
            relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300
            ${isDragging 
              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' 
              : 'border-gray-300 dark:border-gray-700 hover:border-primary-400'
            }
            ${isConverting ? 'pointer-events-none opacity-50' : ''}
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isConverting}
          />

          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-primary-600" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {isConverting ? 'Converting...' : 'Drop images here or click to select'}
              </h3>
              <p className="text-sm text-muted-foreground">
                Supports JPG, PNG, BMP formats • Max 200MB per file
              </p>
            </div>

            {isConverting && (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-primary-600">Processing images...</span>
              </div>
            )}
          </div>
        </div>

        {convertedFiles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Converted Files</h3>
              {convertedFiles.length > 1 && (
                <button
                  onClick={downloadAll}
                  className="btn-primary text-sm"
                >
                  Download All
                </button>
              )}
            </div>

            <div className="space-y-2">
              {convertedFiles.map((file, index) => {
                const savings = file.originalSize - file.newSize;
                const percentSaved = Math.round((savings / file.originalSize) * 100);
                
                return (
                  <div key={index} className="card p-4 flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{file.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {formatFileSize(file.originalSize)} → {formatFileSize(file.newSize)} 
                        <span className="text-green-600 ml-2">(-{percentSaved}%)</span>
                      </p>
                    </div>
                    <button
                      onClick={() => downloadFile(file)}
                      className="btn-ghost p-2 ml-4"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-12"
      >
        <p className="text-muted-foreground mb-4">
          Need more conversion options?
        </p>
        <a
          href="/convert"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
        >
          Explore all converters
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
}
