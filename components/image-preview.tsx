'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Download, Eye, EyeOff } from 'lucide-react';
import { formatFileSize } from '@/lib/utils/file-utils';

interface ImagePreviewProps {
  file: {
    id: string;
    name: string;
    size: number;
    outputBlob?: Blob;
    outputUrl?: string;
    status: 'queued' | 'processing' | 'completed' | 'error';
  };
  originalFile: File;
  onClose: () => void;
  onDownload: () => void;
}

export function ImagePreview({ file, originalFile, onClose, onDownload }: ImagePreviewProps) {
  const [originalUrl, setOriginalUrl] = useState<string>('');
  const [showComparison, setShowComparison] = useState(true);

  useEffect(() => {
    const url = URL.createObjectURL(originalFile);
    setOriginalUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [originalFile]);

  const originalSize = originalFile.size;
  const convertedSize = file.outputBlob?.size || 0;
  const compressionRatio = originalSize > 0 ? Math.round(((originalSize - convertedSize) / originalSize) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-background rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h3 className="text-lg font-semibold truncate">{file.name}</h3>
            <p className="text-sm text-muted-foreground">
              {formatFileSize(originalSize)} → {formatFileSize(convertedSize)}
              {compressionRatio > 0 && (
                <span className="text-green-600 ml-2">(-{compressionRatio}%)</span>
              )}
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="btn-ghost p-2"
              title={showComparison ? 'Hide comparison' : 'Show comparison'}
            >
              {showComparison ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
            
            {file.status === 'completed' && (
              <button
                onClick={onDownload}
                className="btn-primary px-3 py-2"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
            )}
            
            <button
              onClick={onClose}
              className="btn-ghost p-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 overflow-auto max-h-[calc(90vh-120px)]">
          {showComparison && file.status === 'completed' && file.outputUrl ? (
            /* Comparison View */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Original</h4>
                <div className="relative bg-muted rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={originalUrl}
                    alt="Image preview"
                    className="w-full h-auto max-h-96 object-contain"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {formatFileSize(originalSize)}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Converted</h4>
                <div className="relative bg-muted rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={file.outputUrl}
                    alt="Converted image preview"
                    className="w-full h-auto max-h-96 object-contain"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {formatFileSize(convertedSize)}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Single View */
            <div className="flex justify-center">
              <div className="relative bg-muted rounded-lg overflow-hidden max-w-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={file.status === 'completed' && file.outputUrl ? file.outputUrl : originalUrl}
                  alt={file.status === 'completed' ? 'Converted image preview' : 'Original image preview'}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {file.status === 'completed' ? formatFileSize(convertedSize) : formatFileSize(originalSize)}
                </div>
              </div>
            </div>
          )}

          {/* Status */}
          {file.status === 'processing' && (
            <div className="flex items-center justify-center py-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-muted-foreground">Converting...</span>
              </div>
            </div>
          )}

          {file.status === 'error' && (
            <div className="flex items-center justify-center py-8">
              <div className="text-center">
                <p className="text-sm text-red-600">Conversion failed</p>
                <p className="text-xs text-muted-foreground mt-1">Please try again</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
