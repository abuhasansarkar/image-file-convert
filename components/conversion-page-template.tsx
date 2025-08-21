'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Play, RotateCcw } from 'lucide-react';
import { Dropzone } from './dropzone';
import { FileQueue } from './file-queue';
import { OptionsPanel } from './options-panel';
import { useConversionStore } from '@/lib/store/conversion-store';
import { createZipFromBlobs, generateBatchFilename } from '@/lib/utils/zip-utils';
import { createDownloadLink, getOutputFilename } from '@/lib/utils/file-utils';
import { toast } from './toaster';
import type { ConversionType } from '@/lib/utils/file-utils';

interface ConversionPageTemplateProps {
  title: string;
  description: string;
  conversionType: ConversionType;
  outputFormat: string;
  onConvert: () => Promise<void>;
}

export function ConversionPageTemplate({
  title,
  description,
  conversionType,
  outputFormat,
  onConvert,
}: ConversionPageTemplateProps) {
  const { 
    files, 
    addFiles, 
    clearFiles, 
    isProcessing, 
    setProcessing 
  } = useConversionStore();

  const completedFiles = files.filter(f => f.status === 'completed');
  const hasFiles = files.length > 0;
  const canConvert = files.some(f => f.status === 'queued') && !isProcessing;

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'o':
            e.preventDefault();
            document.getElementById('file-input')?.click();
            break;
          case 'Enter':
            if (canConvert) {
              e.preventDefault();
              handleConvert();
            }
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canConvert]);

  const handleConvert = async () => {
    if (!canConvert) return;

    try {
      setProcessing(true);
      await onConvert();
      toast.success('Conversion completed!', 'All files have been processed successfully.');
    } catch (error) {
      console.error('Conversion error:', error);
      toast.error('Conversion failed', 'An error occurred during conversion. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  const handleDownloadAll = async () => {
    if (completedFiles.length === 0) return;

    try {
      const filesToZip = completedFiles
        .filter(f => f.outputBlob)
        .map(f => ({
          blob: f.outputBlob!,
          filename: getOutputFilename(f.name, outputFormat),
        }));

      if (filesToZip.length === 0) return;

      const zipBlob = await createZipFromBlobs(filesToZip);
      const filename = generateBatchFilename(conversionType, filesToZip.length);
      createDownloadLink(zipBlob, filename);
      
      toast.success('Download started', `Downloading ${filesToZip.length} converted files as ZIP.`);
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Download failed', 'Could not create ZIP file. Please try downloading files individually.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Upload & Options */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Dropzone
              onFilesAccepted={addFiles}
              conversionType={conversionType}
              maxFiles={20}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <OptionsPanel conversionType={conversionType} />
          </motion.div>
        </div>

        {/* Right Column - Controls */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="card p-6 space-y-4"
          >
            <h3 className="text-lg font-semibold">Actions</h3>
            
            <div className="space-y-3">
              <button
                onClick={handleConvert}
                disabled={!canConvert}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Play className="w-4 h-4 mr-2" />
                {isProcessing ? 'Converting...' : 'Start Conversion'}
              </button>

              {completedFiles.length > 1 && (
                <button
                  onClick={handleDownloadAll}
                  className="btn-secondary w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download All ({completedFiles.length})
                </button>
              )}

              {hasFiles && (
                <button
                  onClick={clearFiles}
                  disabled={isProcessing}
                  className="btn-ghost w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Clear All
                </button>
              )}
            </div>

            <div className="text-xs text-muted-foreground space-y-1">
              <p><kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">Ctrl+O</kbd> Open files</p>
              <p><kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">Ctrl+Enter</kbd> Start conversion</p>
            </div>
          </motion.div>

          {/* Stats */}
          {hasFiles && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="card p-6 space-y-4"
            >
              <h3 className="text-lg font-semibold">Statistics</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total files:</span>
                  <span className="font-medium">{files.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Completed:</span>
                  <span className="font-medium text-green-600">{completedFiles.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing:</span>
                  <span className="font-medium text-blue-600">
                    {files.filter(f => f.status === 'processing').length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Queued:</span>
                  <span className="font-medium text-gray-600">
                    {files.filter(f => f.status === 'queued').length}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* File Queue */}
      {hasFiles && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <FileQueue outputFormat={outputFormat} />
        </motion.div>
      )}

      {/* Hidden file input for keyboard shortcut */}
      <input
        id="file-input"
        type="file"
        multiple
        className="hidden"
        onChange={(e) => {
          const files = Array.from(e.target.files || []);
          if (files.length > 0) {
            addFiles(files);
          }
          e.target.value = '';
        }}
      />
    </div>
  );
}
