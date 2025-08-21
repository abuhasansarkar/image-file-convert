'use client';

import { useState, useEffect } from 'react';
import { X, Download, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import { motion } from 'framer-motion';

interface PdfPreviewProps {
  pdfUrl: string;
  filename: string;
  onClose: () => void;
  onDownload: () => void;
}

export function PdfPreview({ pdfUrl, filename, onClose, onDownload }: PdfPreviewProps) {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleRotate = () => setRotation(prev => (prev + 90) % 360);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-') handleZoomOut();
      if (e.key === 'r' || e.key === 'R') handleRotate();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="card max-w-6xl max-h-[95vh] w-full flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between bg-background rounded-t-lg">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-semibold truncate">{filename}</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleZoomOut}
                className="btn-ghost p-2 h-auto"
                title="Zoom out (-)"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="text-sm text-muted-foreground min-w-[60px] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="btn-ghost p-2 h-auto"
                title="Zoom in (+)"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <button
                onClick={handleRotate}
                className="btn-ghost p-2 h-auto"
                title="Rotate (R)"
              >
                <RotateCw className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={onDownload}
              className="btn-primary"
              title="Download PDF"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </button>
            <button
              onClick={onClose}
              className="btn-ghost p-2 h-auto"
              title="Close (Esc)"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-900 p-4">
          <div className="flex justify-center">
            <div 
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg)`,
                transformOrigin: 'center',
                transition: 'transform 0.2s ease'
              }}
            >
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                className="border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg"
                style={{
                  width: '800px',
                  height: '600px',
                  minHeight: '400px'
                }}
                title={`PDF Preview: ${filename}`}
              />
            </div>
          </div>
        </div>

        {/* Footer with shortcuts */}
        <div className="p-3 border-t bg-muted/50 rounded-b-lg">
          <div className="flex justify-center space-x-6 text-xs text-muted-foreground">
            <span><kbd className="px-1.5 py-0.5 bg-background rounded">Esc</kbd> Close</span>
            <span><kbd className="px-1.5 py-0.5 bg-background rounded">+/-</kbd> Zoom</span>
            <span><kbd className="px-1.5 py-0.5 bg-background rounded">R</kbd> Rotate</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
