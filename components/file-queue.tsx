'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileImage, 
  X, 
  RotateCcw, 
  Download, 
  Eye, 
  AlertCircle,
  CheckCircle,
  Clock,
  Loader2
} from 'lucide-react';
import { useConversionStore, type ConversionFile } from '@/lib/store/conversion-store';
import { ProgressBar } from './progress-bar';
import { PdfPreview } from './pdf-preview';
import { TextPreview } from './text-preview';
import { cn } from '@/lib/utils/cn';
import { formatFileSize, createDownloadLink, getOutputFilename } from '@/lib/utils/file-utils';

interface FileQueueProps {
  outputFormat: string;
  className?: string;
}

export function FileQueue({ outputFormat, className }: FileQueueProps) {
  const { files, removeFile, resetFile } = useConversionStore();
  const [previewFile, setPreviewFile] = useState<ConversionFile | null>(null);

  const getStatusIcon = (status: ConversionFile['status']) => {
    switch (status) {
      case 'queued':
        return <Clock className="h-4 w-4 text-muted-foreground" />;
      case 'processing':
        return <Loader2 className="h-4 w-4 text-primary animate-spin" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getStatusColor = (status: ConversionFile['status']) => {
    switch (status) {
      case 'queued':
        return 'border-l-gray-300';
      case 'processing':
        return 'border-l-primary';
      case 'completed':
        return 'border-l-green-500';
      case 'error':
        return 'border-l-red-500';
    }
  };

  const handleDownload = (file: ConversionFile) => {
    if (file.outputBlob) {
      const filename = getOutputFilename(file.name, outputFormat);
      createDownloadLink(file.outputBlob, filename);
    }
  };

  const handlePreview = (file: ConversionFile) => {
    if (file.outputUrl) {
      setPreviewFile(file);
    }
  };

  const isPdfFile = (filename: string) => {
    return filename.toLowerCase().endsWith('.pdf') || outputFormat.toLowerCase() === 'pdf';
  };

  const isTextFile = (filename: string) => {
    const textExtensions = ['.txt', '.json'];
    return textExtensions.some(ext => filename.toLowerCase().endsWith(ext)) || 
           outputFormat.toLowerCase() === 'txt' || 
           outputFormat.toLowerCase() === 'json';
  };

  if (files.length === 0) {
    return null;
  }

  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">File Queue</h3>
        <span className="text-sm text-muted-foreground">
          {files.length} file{files.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="space-y-2">
        <AnimatePresence>
          {files.map((file) => (
            <motion.div
              key={file.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={cn(
                'card p-4 border-l-4 transition-colors',
                getStatusColor(file.status)
              )}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FileImage className="h-8 w-8 text-muted-foreground" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(file.status)}
                    <h4 className="text-sm font-medium truncate">
                      {file.status === 'completed' ? getOutputFilename(file.name, outputFormat) : file.name}
                    </h4>
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-muted-foreground">
                      {formatFileSize(file.outputBlob?.size || file.size)}
                    </span>
                    <span className="text-xs text-muted-foreground capitalize">
                      {file.status}
                    </span>
                    {file.status === 'completed' && (
                      <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                        → {outputFormat.toUpperCase()}
                      </span>
                    )}
                  </div>

                  {file.status === 'processing' && (
                    <div className="mt-2">
                      <ProgressBar 
                        progress={file.progress} 
                        size="sm" 
                        showPercentage 
                      />
                    </div>
                  )}

                  {file.error && (
                    <div className="mt-2 text-xs text-red-500 bg-red-50 dark:bg-red-900/20 p-2 rounded">
                      {file.error}
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  {file.status === 'completed' && file.outputUrl && (
                    <>
                      <button
                        onClick={() => handlePreview(file)}
                        className="btn-ghost p-2 h-auto"
                        aria-label="Preview converted file"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDownload(file)}
                        className="btn-ghost p-2 h-auto"
                        aria-label="Download converted file"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </>
                  )}

                  {(file.status === 'error' || file.status === 'completed') && (
                    <button
                      onClick={() => resetFile(file.id)}
                      className="btn-ghost p-2 h-auto"
                      aria-label="Reset file"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                  )}

                  <button
                    onClick={() => removeFile(file.id)}
                    className="btn-ghost p-2 h-auto text-red-500 hover:text-red-600"
                    aria-label="Remove file"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewFile && (
          isPdfFile(getOutputFilename(previewFile.name, outputFormat)) ? (
            <PdfPreview
              pdfUrl={previewFile.outputUrl!}
              filename={getOutputFilename(previewFile.name, outputFormat)}
              onClose={() => setPreviewFile(null)}
              onDownload={() => handleDownload(previewFile)}
            />
          ) : isTextFile(getOutputFilename(previewFile.name, outputFormat)) ? (
            <TextPreview
              textUrl={previewFile.outputUrl!}
              filename={getOutputFilename(previewFile.name, outputFormat)}
              onClose={() => setPreviewFile(null)}
              onDownload={() => handleDownload(previewFile)}
            />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              onClick={() => setPreviewFile(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="card max-w-4xl max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 border-b flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    {getOutputFilename(previewFile.name, outputFormat)}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDownload(previewFile)}
                      className="btn-ghost p-2 h-auto"
                      title="Download file"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setPreviewFile(null)}
                      className="btn-ghost p-2 h-auto"
                      title="Close preview"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  {previewFile.outputUrl && (
                    <img
                      src={previewFile.outputUrl}
                      alt="Preview"
                      className="max-w-full h-auto rounded-md"
                    />
                  )}
                </div>
              </motion.div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}
