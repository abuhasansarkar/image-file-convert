"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSelector } from "@/components/language-selector";
import { TextEditor } from "@/components/text-editor";
import { Dropzone } from "@/components/dropzone";
import { useConversionStore } from "@/lib/store/conversion-store";
import {
  convertImageToText,
  SUPPORTED_OCR_LANGUAGES,
  type SupportedLanguage,
} from "@/lib/converters/image-text-converter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Settings,
  Play,
  Download,
  RotateCcw,
  Eye,
  Languages,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ExtractedTextData {
  text: string;
  confidence?: number;
  filename: string;
  language: string;
}

export default function ImageToTextPage() {
  const {
    files,
    addFiles,
    updateFileStatus,
    setFileOutput,
    clearFiles,
    options,
    setOptions,
  } = useConversionStore();
  const [selectedLanguage, setSelectedLanguage] = useState(
    options.language || "eng"
  );
  const [extractedTexts, setExtractedTexts] = useState<
    Record<string, ExtractedTextData>
  >({});
  const [includeConfidence, setIncludeConfidence] = useState<boolean>(
    options.confidence || true
  );
  const [preserveFormatting, setPreserveFormatting] = useState<boolean>(
    options.preserveFormatting || false
  );
  const [outputFormat, setOutputFormat] = useState<"txt" | "json">(
    (options.outputFormat as "txt" | "json") || "txt"
  );
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setOptions({
      language: selectedLanguage,
      confidence: includeConfidence,
      preserveFormatting,
      outputFormat,
    });
  }, [
    selectedLanguage,
    includeConfidence,
    preserveFormatting,
    outputFormat,
    setOptions,
  ]);

  const handleConvert = useCallback(async () => {
    const queuedFiles = files.filter((f) => f.status === "queued");

    if (queuedFiles.length === 0) return;

    setIsProcessing(true);

    for (const fileData of queuedFiles) {
      try {
        updateFileStatus(fileData.id, "processing", 0);

        const result = await convertImageToText(
          fileData.file,
          {
            language: selectedLanguage,
            outputFormat,
            confidence: includeConfidence,
            preserveFormatting,
          },
          (progress) => {
            updateFileStatus(fileData.id, "processing", progress);
          }
        );

        // Extract text from blob for editing
        const textContent = await result.text();
        let extractedText = "";
        let confidence: number | undefined;

        if (outputFormat === "json") {
          try {
            const jsonData = JSON.parse(textContent);
            extractedText = jsonData.text || "";
            confidence = jsonData.confidence;
          } catch {
            extractedText = textContent;
          }
        } else {
          // Extract text from formatted output
          const lines = textContent.split("\n");
          const textStartIndex = lines.findIndex((line) =>
            line.includes("=".repeat(50))
          );
          extractedText = lines
            .slice(textStartIndex + 2)
            .join("\n")
            .trim();

          // Extract confidence from header if available
          const confidenceLine = lines.find((line) =>
            line.includes("Confidence:")
          );
          if (confidenceLine) {
            const match = confidenceLine.match(/Confidence:\s*(\d+(?:\.\d+)?)/);
            if (match) {
              confidence = parseFloat(match[1]);
            }
          }
        }

        // Store extracted text data for editing
        setExtractedTexts((prev) => ({
          ...prev,
          [fileData.id]: {
            text: extractedText,
            confidence,
            filename: fileData.file.name,
            language:
              SUPPORTED_OCR_LANGUAGES[selectedLanguage as SupportedLanguage] ||
              selectedLanguage,
          },
        }));

        const url = URL.createObjectURL(result);
        setFileOutput(fileData.id, result, url);
      } catch (error) {
        console.error("OCR conversion error:", error);
        updateFileStatus(
          fileData.id,
          "error",
          0,
          error instanceof Error ? error.message : "OCR conversion failed"
        );
      }
    }

    setIsProcessing(false);
  }, [
    files,
    selectedLanguage,
    outputFormat,
    includeConfidence,
    preserveFormatting,
    updateFileStatus,
    setFileOutput,
  ]);

  const handleTextSave = (fileId: string, editedText: string) => {
    // Create new blob with edited text
    const blob = new Blob([editedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    setFileOutput(fileId, blob, url);

    // Update stored text
    setExtractedTexts((prev) => ({
      ...prev,
      [fileId]: {
        ...prev[fileId],
        text: editedText,
      },
    }));
  };

  const completedFiles = files.filter((f) => f.status === "completed");
  const processingFiles = files.filter((f) => f.status === "processing");
  const queuedFiles = files.filter((f) => f.status === "queued");
  const errorFiles = files.filter((f) => f.status === "error");
  const hasFiles = files.length > 0;
  const canConvert = queuedFiles.length > 0 && !isProcessing;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Image to Text
            </h1>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse" />
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your any image into editable text with our advanced OCR
            technology. Supporting more than 100+ languages with professional-grade
            accuracy and real-time editing.
          </p>
          <div className="flex flex-wrap justify-center lg:gap-6 gap-2 text-green-500">
            <Badge
              variant="secondary"
              className="flex items-center gap-2 px-4 py-2 text-sm"
            >
              <Languages className="h-4 w-4" />
              100+ Languages
            </Badge>
            <Badge
              variant="secondary"
              className="flex items-center gap-2 px-4 py-2 text-sm"
            >
              <Eye className="h-4 w-4" />
              Real-time Editing
            </Badge>
            <Badge
              variant="secondary"
              className="flex items-center gap-2 px-4 py-2 text-sm"
            >
              <Sparkles className="h-4 w-4" />
              AI-Powered OCR
            </Badge>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="">
          {/* Left Sidebar - Settings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8 space-y-6"
          >
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
            />

            {/* Enhanced OCR Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-2 border-gradient-to-r from-indigo-200 to-purple-200 shadow-xl bg-gradient-to-br from-white to-indigo-50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Settings className="h-5 w-5 text-indigo-600" />
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">
                      ⚙️ OCR Settings
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="space-y-3">
                    <Label
                      htmlFor="output-format"
                      className="text-sm font-semibold text-slate-700"
                    >
                      📄 Output Format
                    </Label>
                    <Select
                      value={outputFormat}
                      onValueChange={(value) =>
                        setOutputFormat(value as "txt" | "json")
                      }
                    >
                      <SelectTrigger className="border-2 text-black border-indigo-200 focus:border-indigo-400 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 text-white backdrop-blur-lg border-2 border-indigo-200 rounded-xl">
                        <SelectItem value="txt">
                          📝 Plain Text (.txt)
                        </SelectItem>
                        <SelectItem value="json">
                          🔧 JSON with Metadata (.json)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                    <Label
                      htmlFor="confidence"
                      className="text-sm font-semibold text-blue-800"
                    >
                      📊 Include Confidence Scores
                    </Label>
                    <Switch
                      id="confidence"
                      checked={includeConfidence}
                      onCheckedChange={(checked) => setIncludeConfidence(checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <Label
                      htmlFor="formatting"
                      className="text-sm font-semibold text-green-800"
                    >
                      📐 Preserve Original Formatting
                    </Label>
                    <Switch
                      id="formatting"
                      checked={preserveFormatting}
                      onCheckedChange={(checked) => setPreserveFormatting(checked)}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          <div className="my-6">
            {/* Enhanced Processing Stats */}
            {hasFiles && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="border-2 border-green-200 shadow-xl bg-gradient-to-br from-white to-green-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold">
                        📊 Processing Stats
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col items-center p-3 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
                        <span className="text-xs font-medium text-slate-600">
                          📁 Total
                        </span>
                        <Badge variant="outline" className="mt-1 font-bold">
                          {files.length}
                        </Badge>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                        <span className="text-xs font-medium text-green-600">
                          ✅ Done
                        </span>
                        <Badge className="bg-green-500 mt-1 font-bold">
                          {completedFiles.length}
                        </Badge>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                        <span className="text-xs font-medium text-blue-600">
                          ⚡ Active
                        </span>
                        <Badge className="bg-blue-500 mt-1 font-bold">
                          {processingFiles.length}
                        </Badge>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
                        <span className="text-xs font-medium text-yellow-600">
                          ⏳ Queue
                        </span>
                        <Badge variant="secondary" className="mt-1 font-bold">
                          {queuedFiles.length}
                        </Badge>
                      </div>
                    </div>
                    {errorFiles.length > 0 && (
                      <div className="flex justify-center">
                        <div className="flex flex-col items-center p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-xl w-full">
                          <span className="text-xs font-medium text-red-600">
                            ❌ Errors
                          </span>
                          <Badge
                            variant="destructive"
                            className="mt-1 font-bold"
                          >
                            {errorFiles.length}
                          </Badge>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Enhanced File Upload Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 border-gradient-to-r from-blue-200 to-purple-200 shadow-2xl bg-gradient-to-br from-white via-blue-50 to-purple-50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                      🖼️ Image to Text Converter
                    </span>
                    <Badge className="ml-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg">
                      🤖 AI OCR Powered
                    </Badge>
                  </CardTitle>
                
                </CardHeader>
                <CardContent>
                  <Dropzone
                    onFilesAccepted={addFiles}
                    conversionType="images-pdf"
                    maxFiles={10}
                    className="border-2 border-dashed border-blue-300 hover:border-purple-400 transition-all duration-300 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl"
                  />
                  <p className="text-slate-600 mt-2">
                    Upload images and extract text with advanced AI-powered OCR
                    technology
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Action Buttons */}
            {hasFiles && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Button
                  onClick={handleConvert}
                  disabled={!canConvert}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {isProcessing ? "Processing..." : "Extract Text"}
                </Button>

                {completedFiles.length > 0 && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-3 text-lg font-semibold"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download All ({completedFiles.length})
                  </Button>
                )}

                <Button
                  onClick={clearFiles}
                  variant="ghost"
                  size="lg"
                  className="px-8 py-3 text-lg font-semibold"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Clear All
                </Button>
              </motion.div>
            )}

            {/* Processing Progress */}
            {processingFiles.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                {processingFiles.map((file) => (
                  <Card
                    key={file.id}
                    className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="h-4 w-4 text-blue-600 animate-spin" />
                        <span className="font-medium">{file.name}</span>
                        <Badge variant="outline" className="ml-auto">
                          {file.progress}%
                        </Badge>
                      </div>
                      <Progress value={file.progress} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            )}

            {/* Error Display */}
            {errorFiles.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                {errorFiles.map((file) => (
                  <Alert key={file.id} variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>{file.name}</strong>: {file.error}
                    </AlertDescription>
                  </Alert>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Text Editing Section */}
        <AnimatePresence>
          {completedFiles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Extracted Text - Edit & Download
                </h2>
                <p className="text-muted-foreground mt-2">
                  Review, edit, and download your extracted text
                </p>
              </div>

              <div className="grid gap-6">
                {completedFiles.map((file, index) => {
                  const textData = extractedTexts[file.id];
                  if (!textData) return null;

                  return (
                    <motion.div
                      key={file.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <TextEditor
                        initialText={textData.text}
                        filename={textData.filename}
                        language={textData.language}
                        confidence={textData.confidence}
                        onSave={(editedText) =>
                          handleTextSave(file.id, editedText)
                        }
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
