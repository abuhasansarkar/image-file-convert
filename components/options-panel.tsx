'use client';

import { motion } from 'framer-motion';
import { Settings, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useConversionStore, type ConversionOptions } from '@/lib/store/conversion-store';
import { cn } from '@/lib/utils/cn';
import type { ConversionType } from '@/lib/utils/file-utils';

interface OptionsPanelProps {
  conversionType: ConversionType;
  className?: string;
}

export function OptionsPanel({ conversionType, className }: OptionsPanelProps) {
  const { options, updateOptions } = useConversionStore();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOptionChange = (key: keyof ConversionOptions, value: unknown) => {
    updateOptions({ [key]: value });
  };

  const renderOptions = () => {
    switch (conversionType) {
      case 'jpg-webp':
      case 'png-webp':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Quality</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={options.quality || 80}
                  onChange={(e) => handleOptionChange('quality', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>{options.quality || 80}%</span>
                  <span>100</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Resize (optional)</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Width"
                  value={options.width || ''}
                  onChange={(e) => handleOptionChange('width', e.target.value ? parseInt(e.target.value) : undefined)}
                  className="input flex-1"
                />
                <input
                  type="number"
                  placeholder="Height"
                  value={options.height || ''}
                  onChange={(e) => handleOptionChange('height', e.target.value ? parseInt(e.target.value) : undefined)}
                  className="input flex-1"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="stripMetadata"
                checked={options.stripMetadata || false}
                onChange={(e) => handleOptionChange('stripMetadata', e.target.checked)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="stripMetadata" className="text-sm font-medium">
                Strip metadata
              </label>
            </div>
          </div>
        );

      case 'images-pdf':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Page Size</label>
              <select
                value={options.pageSize || 'A4'}
                onChange={(e) => handleOptionChange('pageSize', e.target.value as 'A4' | 'Letter' | 'Legal')}
                className="input"
              >
                <option value="A4">A4</option>
                <option value="Letter">Letter</option>
                <option value="Legal">Legal</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">DPI</label>
              <select
                value={options.dpi || 150}
                onChange={(e) => handleOptionChange('dpi', parseInt(e.target.value))}
                className="input"
              >
                <option value="72">72 DPI</option>
                <option value="150">150 DPI</option>
                <option value="300">300 DPI</option>
                <option value="600">600 DPI</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="compression"
                checked={options.compression || false}
                onChange={(e) => handleOptionChange('compression', e.target.checked)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="compression" className="text-sm font-medium">
                Enable compression
              </label>
            </div>
          </div>
        );

      case 'pdf-jpg':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Page Range</label>
              <input
                type="text"
                placeholder="e.g., 1-5, 8, 10-12"
                value={options.pageRange || ''}
                onChange={(e) => handleOptionChange('pageRange', e.target.value)}
                className="input"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Leave empty to convert all pages
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Resolution (DPI)</label>
              <select
                value={options.dpi || 150}
                onChange={(e) => handleOptionChange('dpi', parseInt(e.target.value))}
                className="input"
              >
                <option value="72">72 DPI</option>
                <option value="150">150 DPI</option>
                <option value="300">300 DPI</option>
                <option value="600">600 DPI</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Quality</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={options.quality || 80}
                  onChange={(e) => handleOptionChange('quality', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>{options.quality || 80}%</span>
                  <span>100</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'heic-jpg':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Quality</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={options.quality || 80}
                  onChange={(e) => handleOptionChange('quality', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>{options.quality || 80}%</span>
                  <span>100</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Resize (optional)</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Width"
                  value={options.width || ''}
                  onChange={(e) => handleOptionChange('width', e.target.value ? parseInt(e.target.value) : undefined)}
                  className="input flex-1"
                />
                <input
                  type="number"
                  placeholder="Height"
                  value={options.height || ''}
                  onChange={(e) => handleOptionChange('height', e.target.value ? parseInt(e.target.value) : undefined)}
                  className="input flex-1"
                />
              </div>
            </div>
          </div>
        );

      case 'svg-png':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Scale</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0.1"
                  max="5"
                  step="0.1"
                  value={options.scale || 1}
                  onChange={(e) => handleOptionChange('scale', parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0.1x</span>
                  <span>{options.scale || 1}x</span>
                  <span>5x</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Background Color</label>
              <input
                type="color"
                value={options.backgroundColor || '#ffffff'}
                onChange={(e) => handleOptionChange('backgroundColor', e.target.value)}
                className="w-full h-10 rounded-md border border-input cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">DPI</label>
              <select
                value={options.dpi || 150}
                onChange={(e) => handleOptionChange('dpi', parseInt(e.target.value))}
                className="input"
              >
                <option value="72">72 DPI</option>
                <option value="150">150 DPI</option>
                <option value="300">300 DPI</option>
                <option value="600">600 DPI</option>
              </select>
            </div>
          </div>
        );

      case 'raw-tiff':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Demosaic Quality</label>
              <select
                value={options.demosaicQuality || 'balanced'}
                onChange={(e) => handleOptionChange('demosaicQuality', e.target.value as 'fast' | 'balanced' | 'high')}
                className="input"
              >
                <option value="fast">Fast</option>
                <option value="balanced">Balanced</option>
                <option value="high">High Quality</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bit Depth</label>
              <select
                value={options.bitDepth || 8}
                onChange={(e) => handleOptionChange('bitDepth', parseInt(e.target.value) as 8 | 16 | 32)}
                className="input"
              >
                <option value="8">8-bit</option>
                <option value="16">16-bit</option>
                <option value="32">32-bit</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">White Balance</label>
              <select
                value={options.whiteBalance || 'auto'}
                onChange={(e) => handleOptionChange('whiteBalance', e.target.value as 'auto' | 'daylight' | 'tungsten' | 'fluorescent')}
                className="input"
              >
                <option value="auto">Auto</option>
                <option value="daylight">Daylight</option>
                <option value="tungsten">Tungsten</option>
                <option value="fluorescent">Fluorescent</option>
              </select>
            </div>
          </div>
        );

      case 'bmp-png':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Resize (optional)</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Width"
                  value={options.width || ''}
                  onChange={(e) => handleOptionChange('width', e.target.value ? parseInt(e.target.value) : undefined)}
                  className="input flex-1"
                />
                <input
                  type="number"
                  placeholder="Height"
                  value={options.height || ''}
                  onChange={(e) => handleOptionChange('height', e.target.value ? parseInt(e.target.value) : undefined)}
                  className="input flex-1"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="stripMetadataBmp"
                checked={options.stripMetadata || false}
                onChange={(e) => handleOptionChange('stripMetadata', e.target.checked)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="stripMetadataBmp" className="text-sm font-medium">
                Strip metadata
              </label>
            </div>
          </div>
        );

      case 'image-text':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Language</label>
              <select
                value={options.language || 'eng'}
                onChange={(e) => handleOptionChange('language', e.target.value)}
                className="input"
              >
                <option value="eng">English</option>
                <option value="spa">Spanish</option>
                <option value="fra">French</option>
                <option value="deu">German</option>
                <option value="ita">Italian</option>
                <option value="por">Portuguese</option>
                <option value="rus">Russian</option>
                <option value="chi_sim">Chinese (Simplified)</option>
                <option value="chi_tra">Chinese (Traditional)</option>
                <option value="jpn">Japanese</option>
                <option value="kor">Korean</option>
                <option value="ara">Arabic</option>
                <option value="hin">Hindi</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Output Format</label>
              <select
                value={options.outputFormat || 'txt'}
                onChange={(e) => handleOptionChange('outputFormat', e.target.value as 'txt' | 'json')}
                className="input"
              >
                <option value="txt">Plain Text (.txt)</option>
                <option value="json">JSON with metadata (.json)</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="confidence"
                checked={options.confidence || false}
                onChange={(e) => handleOptionChange('confidence', e.target.checked)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="confidence" className="text-sm font-medium">
                Include confidence scores
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="preserveFormatting"
                checked={options.preserveFormatting || false}
                onChange={(e) => handleOptionChange('preserveFormatting', e.target.checked)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="preserveFormatting" className="text-sm font-medium">
                Preserve text formatting
              </label>
            </div>
          </div>
        );

      case 'webp-png':
      case 'gif-png':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Quality</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={options.quality || 90}
                  onChange={(e) => handleOptionChange('quality', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>{options.quality || 90}%</span>
                  <span>100</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="preserveTransparency"
                checked={options.preserveTransparency || true}
                onChange={(e) => handleOptionChange('preserveTransparency', e.target.checked)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="preserveTransparency" className="text-sm font-medium">
                Preserve transparency
              </label>
            </div>

            {conversionType === 'gif-png' && (
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="extractFirstFrame"
                  checked={options.extractFirstFrame || true}
                  onChange={(e) => handleOptionChange('extractFirstFrame', e.target.checked)}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="extractFirstFrame" className="text-sm font-medium">
                  Extract first frame only
                </label>
              </div>
            )}
          </div>
        );

      case 'tiff-jpg':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Quality</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={options.quality || 85}
                  onChange={(e) => handleOptionChange('quality', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>{options.quality || 85}%</span>
                  <span>100</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Background Color</label>
              <input
                type="color"
                value={options.backgroundColor || '#ffffff'}
                onChange={(e) => handleOptionChange('backgroundColor', e.target.value)}
                className="w-full h-10 rounded-md border border-input cursor-pointer"
              />
            </div>
          </div>
        );

      case 'ico-png':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Output Size</label>
              <select
                value={options.size || 256}
                onChange={(e) => handleOptionChange('size', parseInt(e.target.value))}
                className="input"
              >
                <option value="16">16×16</option>
                <option value="32">32×32</option>
                <option value="48">48×48</option>
                <option value="64">64×64</option>
                <option value="128">128×128</option>
                <option value="256">256×256</option>
                <option value="512">512×512</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Quality</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={options.quality || 90}
                  onChange={(e) => handleOptionChange('quality', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>{options.quality || 90}%</span>
                  <span>100</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center text-muted-foreground py-4">
            No options available for this conversion type.
          </div>
        );
    }
  };

  return (
    <div className={cn('card', className)}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between text-left hover:bg-accent/50 transition-colors rounded-t-lg"
      >
        <div className="flex items-center space-x-2">
          <Settings className="h-5 w-5" />
          <h3 className="text-lg font-semibold">Conversion Options</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="p-4 border-t">
          {renderOptions()}
        </div>
      </motion.div>
    </div>
  );
}
