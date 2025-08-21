'use client';

import { useCallback, useState } from 'react';
import { Upload, FileImage, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { validateFiles, formatFileSize, type ConversionType } from '@/lib/utils/file-utils';

interface DropzoneProps {
  onFilesAccepted: (files: File[]) => void;
  conversionType: ConversionType;
  maxFiles?: number;
  className?: string;
}

export function Dropzone({ 
  onFilesAccepted, 
  conversionType, 
  maxFiles = 10,
  className 
}: DropzoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const processFiles = useCallback((files: File[]) => {
    setErrors([]);
    
    if (files.length === 0) return;
    
    if (files.length > maxFiles) {
      setErrors([`Maximum ${maxFiles} files allowed`]);
      return;
    }

    const { valid, invalid } = validateFiles(files, conversionType);
    
    if (invalid.length > 0) {
      setErrors(invalid.map(({ file, reason }) => `${file.name}: ${reason}`));
    }
    
    if (valid.length > 0) {
      onFilesAccepted(valid);
    }
  }, [conversionType, maxFiles, onFilesAccepted]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  }, [processFiles]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    processFiles(files);
    // Reset input value to allow selecting the same files again
    e.target.value = '';
  }, [processFiles]);

  const getAcceptedTypes = () => {
    const typeMap = {
      'jpg-webp': '.jpg,.jpeg',
      'png-webp': '.png',
      'images-pdf': '.jpg,.jpeg,.png,.webp,.gif',
      'pdf-jpg': '.pdf',
      'heic-jpg': '.heic,.heif',
      'svg-png': '.svg',
      'raw-tiff': '.cr2,.crw,.nef,.arw,.dng',
      'bmp-png': '.bmp',
    };
    return typeMap[conversionType] || '';
  };

  return (
    <div className={cn('w-full', className)}>
      <motion.div
        className={cn(
          'relative border-2 border-dashed rounded-lg p-8 text-center transition-colors',
          'hover:border-primary hover:bg-primary/5',
          'focus-within:border-primary focus-within:bg-primary/5',
          isDragOver && 'border-primary bg-primary/10 scale-[1.02]',
          'cursor-pointer'
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <input
          type="file"
          multiple
          accept={getAcceptedTypes()}
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer focus-ring"
          aria-label="Upload files"
        />
        
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            animate={isDragOver ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Upload className="h-12 w-12 text-muted-foreground" />
          </motion.div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              {isDragOver ? 'Drop files here' : 'Upload files'}
            </h3>
            <p className="text-sm text-muted-foreground">
              Drag and drop files here, or click to browse
            </p>
            <p className="text-xs text-muted-foreground">
              Max {maxFiles} files, up to {formatFileSize(200 * 1024 * 1024)} each
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <FileImage className="h-4 w-4" />
            <span>Supported: {getAcceptedTypes().replace(/\./g, '').toUpperCase()}</span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {errors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-2"
          >
            {errors.map((error, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-2 text-sm text-destructive bg-destructive/10 p-3 rounded-md"
              >
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{error}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
