'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Upload, Download, Zap, Shield, Clock, ArrowRight, Settings, Archive, X, Sparkles, Sliders, Eye } from 'lucide-react';
import { convertJpgToWebP } from '@/lib/converters/jpg-webp-converter';
import { convertPngToWebP } from '@/lib/converters/png-webp-converter';
import { convertBmpToPng } from '@/lib/converters/bmp-png-converter';
import { createDownloadLink, getOutputFilename } from '@/lib/utils/file-utils';
import { toast } from './toaster';
import JSZip from 'jszip';

interface HeroWebPConverterProps {
  className?: string;
}

export function HeroWebPConverter({ className }: HeroWebPConverterProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [optimizationMode, setOptimizationMode] = useState<'auto' | 'custom'>('auto');
  const [customQuality, setCustomQuality] = useState(85);
  const [previewModal, setPreviewModal] = useState<{
    isOpen: boolean;
    file: {
      name: string;
      blob: Blob;
      originalSize: number;
      newSize: number;
      preview: string;
      originalFile: File;
      qualityUsed?: number;
    } | null;
  }>({ isOpen: false, file: null });
  const [convertedFiles, setConvertedFiles] = useState<Array<{
    name: string;
    blob: Blob;
    originalSize: number;
    newSize: number;
    preview: string;
    originalFile: File;
    qualityUsed?: number;
  }>>([]);

  const processFiles = useCallback(async (files: File[]) => {
    if (files.length === 0) return;

    setIsConverting(true);
    setConvertedFiles([]);

    const results: Array<{
      name: string;
      blob: Blob;
      originalSize: number;
      newSize: number;
      preview: string;
      originalFile: File;
      qualityUsed?: number;
    }> = [];

    try {
      for (const file of files) {
        // Check if file is a supported image format
        const supportedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/bmp', 'image/webp'];
        if (!supportedTypes.includes(file.type)) {
          toast.error('Unsupported format', `${file.name} is not a supported image format`);
          continue;
        }

        // Create preview URL for original image
        const previewUrl = URL.createObjectURL(file);

        let convertedBlob: Blob;

        // Determine optimal quality based on mode and file characteristics
        let optimalQuality: number;
        if (optimizationMode === 'auto') {
          // Auto mode: intelligent quality based on file size and type
          const fileSizeMB = file.size / (1024 * 1024);
          if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
            // JPEG: Balance quality vs compression
            optimalQuality = fileSizeMB > 5 ? 75 : fileSizeMB > 2 ? 80 : 85;
          } else if (file.type === 'image/png') {
            // PNG: Higher quality for transparency preservation
            optimalQuality = fileSizeMB > 10 ? 80 : fileSizeMB > 5 ? 85 : 90;
          } else {
            optimalQuality = 82; // Default for other formats
          }
        } else {
          // Custom mode: use user-defined quality (1-99%)
          optimalQuality = Math.max(1, Math.min(99, customQuality));
        }

        // Convert based on file type with optimized quality settings
        if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
          convertedBlob = await convertJpgToWebP(file, { 
            quality: optimalQuality, 
            stripMetadata: true
          });
        } else if (file.type === 'image/png') {
          convertedBlob = await convertPngToWebP(file, { 
            quality: optimalQuality, 
            stripMetadata: true
          });
        } else if (file.type === 'image/bmp') {
          // Convert BMP to PNG first, then to WebP
          const pngBlob = await convertBmpToPng(file, { stripMetadata: true });
          const pngFile = new File([pngBlob], file.name.replace(/\.bmp$/i, '.png'), { type: 'image/png' });
          convertedBlob = await convertPngToWebP(pngFile, { 
            quality: optimalQuality, 
            stripMetadata: true
          });
        } else if (file.type === 'image/webp') {
          // Already WebP, re-optimize with optimal quality
          convertedBlob = await convertPngToWebP(file, { 
            quality: optimalQuality, 
            stripMetadata: true
          });
        } else {
          continue;
        }

        results.push({
          name: getOutputFilename(file.name, 'webp'),
          blob: convertedBlob,
          originalSize: file.size,
          newSize: convertedBlob.size,
          preview: previewUrl,
          originalFile: file,
          qualityUsed: optimalQuality
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
  }, [optimizationMode, customQuality]);

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
  }, [processFiles]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    processFiles(files);
  }, [processFiles]);

  const clearFiles = () => {
    setConvertedFiles([]);
    // Clean up preview URLs to prevent memory leaks
    convertedFiles.forEach(file => {
      if (file.preview) {
        URL.revokeObjectURL(file.preview);
      }
    });
    // Close preview modal if open
    setPreviewModal({ isOpen: false, file: null });
  };

  const openPreviewModal = (file: typeof convertedFiles[0]) => {
    setPreviewModal({ isOpen: true, file });
  };

  const closePreviewModal = () => {
    setPreviewModal({ isOpen: false, file: null });
  };

  const downloadFile = (file: { name: string; blob: Blob }) => {
    createDownloadLink(file.blob, file.name);
  };

  const downloadAll = () => {
    if (convertedFiles.length === 1) {
      downloadFile(convertedFiles[0]);
      return;
    }
    
    // Create ZIP file for multiple files
    downloadAsZip();
  };

  const downloadAsZip = async () => {
    try {
      const zip = new JSZip();
      
      // Add all converted files to ZIP
      convertedFiles.forEach(file => {
        zip.file(file.name, file.blob);
      });
      
      // Generate ZIP file
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const zipName = `converted-images-${Date.now()}.zip`;
      
      createDownloadLink(zipBlob, zipName);
      toast.success('ZIP created!', `Downloaded ${convertedFiles.length} files as ZIP`);
    } catch (error) {
      console.error('ZIP creation error:', error);
      toast.error('ZIP creation failed', 'Downloading files individually instead');
      // Fallback to individual downloads
      convertedFiles.forEach(file => {
        createDownloadLink(file.blob, file.name);
      });
    }
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
            Convert & Optimize WebP <span className="text-primary-500">in seconds</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Reduce image file sizes by up to 90% while maintaining quality. Fast, secure, and completely free.
          </p>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-2xl mx-auto"
      >
        {/* Optimization Settings */}
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg space-y-4">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-primary-600" />
            <span className="font-medium text-sm">Optimization Settings</span>
          </div>
          
          {/* Mode Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setOptimizationMode('auto')}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                optimizationMode === 'auto'
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border-2 border-primary-200 dark:border-primary-800'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-600 hover:border-primary-200 dark:hover:border-primary-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Auto Optimize
            </button>
            <button
              onClick={() => setOptimizationMode('custom')}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                optimizationMode === 'custom'
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border-2 border-primary-200 dark:border-primary-800'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-600 hover:border-primary-200 dark:hover:border-primary-800'
              }`}
            >
              <Sliders className="w-4 h-4" />
              Custom
            </button>
          </div>

          {/* Mode Description & Controls */}
          {optimizationMode === 'auto' ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Intelligent Optimization Active</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Automatically selects the best quality settings based on image type and size for optimal compression while preserving visual quality.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-3 text-xs">
                <div className="bg-white dark:bg-gray-700 p-2 rounded border">
                  <div className="font-medium text-blue-600 dark:text-blue-400">JPEG/JPG</div>
                  <div className="text-muted-foreground">75-85% quality</div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-2 rounded border">
                  <div className="font-medium text-purple-600 dark:text-purple-400">PNG</div>
                  <div className="text-muted-foreground">80-90% quality</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Custom Quality</span>
                <span className="text-sm text-muted-foreground">{customQuality}%</span>
              </div>
              <input
                type="range"
                min="1"
                max="99"
                value={customQuality}
                onChange={(e) => setCustomQuality(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 slider"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1% (Maximum Compression)</span>
                <span>99% (Best Quality)</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Lower values create smaller files but may reduce image quality. Higher values preserve quality but create larger files.
              </p>
            </div>
          )}
        </div>

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
                Supports JPG, JPEG, PNG, BMP, WebP formats • Max 200MB per file
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
            className="mt-8 space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Converted Files ({convertedFiles.length})</h3>
              <div className="flex gap-2">
                <button
                  onClick={clearFiles}
                  className="btn-ghost text-sm"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </button>
                <button
                  onClick={downloadAll}
                  className="btn-primary text-sm"
                >
                  {convertedFiles.length > 1 ? (
                    <><Archive className="w-4 h-4 mr-1" />Download ZIP</>
                  ) : (
                    <><Download className="w-4 h-4 mr-1" />Download</>
                  )}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {convertedFiles.map((file, index) => {
                const savings = file.originalSize - file.newSize;
                const percentSaved = Math.round((savings / file.originalSize) * 100);
                
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="card p-4 space-y-3"
                  >
                    {/* Image Preview */}
                    <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={file.preview}
                        alt={file.name}
                        className="w-full h-full object-cover"
                        onLoad={() => {
                          // Optionally handle image load
                        }}
                      />
                      <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                        WebP
                      </div>
                    </div>
                    
                    {/* File Info */}
                    <div className="space-y-2">
                      <h4 className="font-medium truncate text-sm">{file.name}</h4>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{formatFileSize(file.originalSize)} → {formatFileSize(file.newSize)}</span>
                        <span className="text-green-600 font-medium">-{percentSaved}%</span>
                      </div>
                      
                      {/* Progress bar showing compression */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <div 
                          className="bg-green-500 h-1.5 rounded-full transition-all duration-500" 
                          style={{ width: `${percentSaved}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => openPreviewModal(file)}
                        className="flex-1 btn-ghost text-sm py-2"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </button>
                      <button
                        onClick={() => downloadFile(file)}
                        className="flex-1 btn-primary text-sm py-2"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Summary Stats */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-green-600">
                    {convertedFiles.reduce((acc, file) => acc + Math.round(((file.originalSize - file.newSize) / file.originalSize) * 100), 0) / convertedFiles.length}%
                  </div>
                  <div className="text-xs text-muted-foreground">Avg. Reduction</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-600">
                    {formatFileSize(convertedFiles.reduce((acc, file) => acc + (file.originalSize - file.newSize), 0))}
                  </div>
                  <div className="text-xs text-muted-foreground">Space Saved</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-purple-600">
                    {optimizationMode === 'auto' ? 'Auto' : `${customQuality}%`}
                  </div>
                  <div className="text-xs text-muted-foreground">{optimizationMode === 'auto' ? 'Smart Mode' : 'Custom Quality'}</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-orange-600">
                    {convertedFiles.length}
                  </div>
                  <div className="text-xs text-muted-foreground">Files Converted</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Preview Modal */}
      {previewModal.isOpen && previewModal.file && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closePreviewModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut", type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{previewModal.file.name}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{formatFileSize(previewModal.file.originalSize)} → {formatFileSize(previewModal.file.newSize)}</span>
                  <span className="text-green-600 font-medium">
                    -{Math.round(((previewModal.file.originalSize - previewModal.file.newSize) / previewModal.file.originalSize) * 100)}%
                  </span>
                  {previewModal.file.qualityUsed && (
                    <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded text-xs">
                      {previewModal.file.qualityUsed}% Quality
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={closePreviewModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Image Comparison */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Original Image */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">Original</h4>
                    <span className="text-sm text-muted-foreground">
                      {previewModal.file.originalFile.type.split('/')[1].toUpperCase()}
                    </span>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={previewModal.file.preview}
                      alt="Original"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {formatFileSize(previewModal.file.originalSize)}
                    </div>
                  </motion.div>
                </div>

                {/* Converted Image */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">Converted</h4>
                    <span className="text-sm text-green-600 font-medium">WebP</span>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border-2 border-green-200 dark:border-green-800"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={URL.createObjectURL(previewModal.file.blob)}
                      alt="Converted"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-green-600/90 text-white px-2 py-1 rounded text-xs">
                      {formatFileSize(previewModal.file.newSize)}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Optimization Details */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-4"
              >
                <h4 className="font-medium mb-3">Optimization Results</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-3"
                  >
                    <div className="text-lg font-bold text-green-600">
                      -{Math.round(((previewModal.file.originalSize - previewModal.file.newSize) / previewModal.file.originalSize) * 100)}%
                    </div>
                    <div className="text-xs text-muted-foreground">Size Reduction</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-3"
                  >
                    <div className="text-lg font-bold text-blue-600">
                      {formatFileSize(previewModal.file.originalSize - previewModal.file.newSize)}
                    </div>
                    <div className="text-xs text-muted-foreground">Space Saved</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-3"
                  >
                    <div className="text-lg font-bold text-purple-600">
                      {previewModal.file.qualityUsed || 'Auto'}%
                    </div>
                    <div className="text-xs text-muted-foreground">Quality Used</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-3"
                  >
                    <div className="text-lg font-bold text-orange-600">WebP</div>
                    <div className="text-xs text-muted-foreground">Format</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="flex gap-3 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => downloadFile(previewModal.file!)}
                  className="flex-1 btn-primary py-3"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download WebP
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={closePreviewModal}
                  className="px-6 btn-ghost py-3"
                >
                  Close
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mt-5"
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
