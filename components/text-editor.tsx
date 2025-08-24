'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Copy, RotateCcw, Save, Edit3, Eye } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface TextEditorProps {
  initialText: string;
  filename: string;
  language: string;
  confidence?: number;
  onSave?: (editedText: string) => void;
  className?: string;
}

export function TextEditor({ 
  initialText, 
  filename, 
  language, 
  confidence, 
  onSave,
  className 
}: TextEditorProps) {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setText(initialText);
    setHasChanges(false);
  }, [initialText]);

  const handleTextChange = (value: string) => {
    setText(value);
    setHasChanges(value !== initialText);
  };

  const handleSave = () => {
    onSave?.(text);
    setHasChanges(false);
    setIsEditing(false);
  };

  const handleReset = () => {
    setText(initialText);
    setHasChanges(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      // Could add toast notification here
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename.replace(/\.[^/.]+$/, '') + '_edited.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
  const charCount = text.length;
  const lineCount = text.split('\n').length;

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Extracted Text</CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2"
            >
              {isEditing ? <Eye className="h-4 w-4" /> : <Edit3 className="h-4 w-4" />}
              {isEditing ? 'Preview' : 'Edit'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copy
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
        
        {/* Metadata */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>Language: <strong>{language}</strong></span>
          {confidence && (
            <span>Confidence: <strong>{confidence}%</strong></span>
          )}
          <span>Words: <strong>{wordCount}</strong></span>
          <span>Characters: <strong>{charCount}</strong></span>
          <span>Lines: <strong>{lineCount}</strong></span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {isEditing ? (
          <div className="space-y-3">
            <Textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => handleTextChange(e.target.value)}
              placeholder="Edit your extracted text here..."
              className="min-h-[300px] font-mono text-sm resize-y text-black"
              style={{ 
                lineHeight: '1.6',
                fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'
              }}
            />
            
            {hasChanges && (
              <div className="flex items-center gap-2 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                <div className="flex-1 text-sm text-amber-800 dark:text-amber-200">
                  You have unsaved changes
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleReset}
                    className="flex items-center gap-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleSave}
                    className="flex items-center gap-2"
                  >
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div 
            className="min-h-[300px] p-4 bg-muted/30 rounded-lg border font-mono text-sm whitespace-pre-wrap overflow-auto"
            style={{ 
              lineHeight: '1.6',
              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'
            }}
          >
            {text || 'No text extracted from the image.'}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
