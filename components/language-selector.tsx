'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Globe, Zap } from 'lucide-react';
import { SUPPORTED_OCR_LANGUAGES, type SupportedLanguage } from '@/lib/converters/image-text-converter';
import { cn } from '@/lib/utils/cn';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  className?: string;
}

export function LanguageSelector({ 
  selectedLanguage, 
  onLanguageChange, 
  className 
}: LanguageSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  // Popular languages for quick access
  const popularLanguages = [
    'auto', 'osd', 'eng', 'spa', 'fra', 'deu', 'ita', 'por', 'rus', 'chi_sim', 
    'chi_tra', 'jpn', 'kor', 'ara', 'hin', 'ben'
  ];

  // Filter languages based on search term
  const filteredLanguages = Object.entries(SUPPORTED_OCR_LANGUAGES).filter(([code, name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayLanguages = showAll ? filteredLanguages : 
    filteredLanguages.filter(([code]) => popularLanguages.includes(code));

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Globe className="h-5 w-5 text-primary" />
          Language Selection
          <Badge variant="secondary" className="ml-auto">
            100+ Languages
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Quick Select for Popular Languages */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Popular Languages</Label>
          <div className="flex flex-wrap gap-2">
            {popularLanguages.slice(0, 8).map((code) => (
              <Button
                key={code}
                variant={selectedLanguage === code ? "default" : "outline"}
                size="sm"
                onClick={() => onLanguageChange(code)}
                className="text-xs"
              >
                {SUPPORTED_OCR_LANGUAGES[code as SupportedLanguage]}
              </Button>
            ))}
          </div>
        </div>

        {/* Search and Advanced Selection */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute top-1/2 transform text-black" />
              <Input
                placeholder="Search languages..."
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm border-2 border-purple-200 focus:border-purple-400 text-slate-800 placeholder:text-slate-500 rounded-xl transition-all duration-200"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAll(!showAll)}
              className="whitespace-nowrap"
            >
              {showAll ? 'Show Popular' : 'Show All'}
            </Button>
          </div>

          {/* Language Dropdown */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              {showAll ? 'All Languages' : 'Popular Languages'}
              <span className="text-muted-foreground ml-1">
                ({displayLanguages.length} available)
              </span>
            </Label>
            <Select value={selectedLanguage} onValueChange={onLanguageChange}>
              <SelectTrigger className="w-full border-2 border-gray-200">
                <SelectValue placeholder="Select a language">
                  {selectedLanguage && SUPPORTED_OCR_LANGUAGES[selectedLanguage as SupportedLanguage]}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="max-h-60 bg-black/95 backdrop-blur-lg border-2 border-gray-200 rounded-xl shadow-xl">
                {displayLanguages.map(([code, name]) => (
                  <SelectItem key={code} value={code}>
                    <div className="flex items-center gap-2">
                      <span>{name}</span>
                      <Badge variant="outline" className="text-xs">
                        {code}
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Auto-detect options */}
        <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-800">
              🚀 Smart Detection
            </span>
          </div>
          <p className="text-xs text-purple-700 mb-3">
            Let AI automatically detect the language for you!
          </p>
          <div className="flex gap-2">
            <Button
              variant={selectedLanguage === 'auto' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onLanguageChange('auto')}
              className={cn(
                "text-xs font-medium transition-all duration-200",
                selectedLanguage === 'auto' 
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg" 
                  : "border-purple-300 text-purple-700 hover:bg-purple-50"
              )}
            >
              🤖 Auto-Detect
            </Button>
            <Button
              variant={selectedLanguage === 'osd' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onLanguageChange('osd')}
              className={cn(
                "text-xs font-medium transition-all duration-200",
                selectedLanguage === 'osd' 
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg" 
                  : "border-blue-300 text-blue-700 hover:bg-blue-50"
              )}
            >
              🔍 Smart OSD
            </Button>
          </div>
        </div>

        {/* Current Selection Info */}
        {selectedLanguage && (
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl">
            <div className="text-sm">
              <span className="font-semibold text-green-800">✅ Selected: </span>
              <span className="text-green-700 font-medium">
                {SUPPORTED_OCR_LANGUAGES[selectedLanguage as SupportedLanguage]}
              </span>
              <span className="text-green-600 text-xs ml-2">({selectedLanguage})</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
