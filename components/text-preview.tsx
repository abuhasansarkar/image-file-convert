'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Download, Copy, Check } from 'lucide-react';

interface TextPreviewProps {
  textUrl: string;
  filename: string;
  onClose: () => void;
  onDownload: () => void;
}

export function TextPreview({ textUrl, filename, onClose, onDownload }: TextPreviewProps) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(textUrl);
        if (!response.ok) {
          throw new Error('Failed to load content');
        }
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [textUrl]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const isJsonFile = filename.toLowerCase().endsWith('.json');

  const formatContent = (text: string) => {
    if (isJsonFile) {
      try {
        const parsed = JSON.parse(text);
        return JSON.stringify(parsed, null, 2);
      } catch {
        return text;
      }
    }
    return text;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="card max-w-4xl max-h-[90vh] w-full flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="text-lg font-semibold truncate">{filename}</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              disabled={loading || error !== null}
              className="btn-ghost p-2 h-auto"
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={onDownload}
              className="btn-ghost p-2 h-auto"
              title="Download file"
            >
              <Download className="h-4 w-4" />
            </button>
            <button
              onClick={onClose}
              className="btn-ghost p-2 h-auto"
              title="Close preview"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading content...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center">
              <p className="text-red-500 mb-4">Error: {error}</p>
              <button onClick={onDownload} className="btn-primary">
                Download File Instead
              </button>
            </div>
          ) : (
            <div className="h-full overflow-auto">
              <pre className={`p-4 text-sm whitespace-pre-wrap break-words ${
                isJsonFile ? 'font-mono' : 'font-sans'
              }`}>
                {formatContent(content)}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-muted/30">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {content.length > 0 && (
                <>
                  {content.split('\n').length} lines • {content.length} characters
                  {isJsonFile && ' • JSON format'}
                </>
              )}
            </span>
            <span>Press Esc to close</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
