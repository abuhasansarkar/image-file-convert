import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Layers, Download, Zap, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Batch Image Conversion: Convert 100s of Images at Once | Free Bulk Converter',
  description: 'Convert multiple images simultaneously with our batch image converter. Process hundreds of JPG, PNG, WebP, HEIC files at once. Free bulk image conversion tool.',
  keywords: 'batch image conversion, bulk image converter, convert multiple images, mass image processing, batch photo converter',
  openGraph: {
    title: 'Batch Image Conversion: Convert 100s of Images at Once',
    description: 'Convert multiple images simultaneously with our free batch converter.',
    type: 'article',
  },
};

export default function BatchImageConversionPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article className="prose prose-lg max-w-none">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Batch Image Conversion: Process Hundreds of Images at Once
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Save hours of work with our powerful batch image converter. Convert multiple images 
            simultaneously between any formats with consistent quality and settings.
          </p>
          <div className="flex justify-center mt-8">
            <Link href="/" className="btn-primary inline-flex items-center">
              <Layers className="w-5 h-5 mr-2" />
              Start Batch Conversion
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </header>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="card p-6 text-center">
            <Layers className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
            <h3 className="text-lg font-semibold mb-2">Bulk Processing</h3>
            <p className="text-sm text-muted-foreground">Convert up to 20 files at once</p>
          </div>
          <div className="card p-6 text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-lg font-semibold mb-2">Fast Processing</h3>
            <p className="text-sm text-muted-foreground">Parallel conversion for speed</p>
          </div>
          <div className="card p-6 text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-lg font-semibold mb-2">Time Saving</h3>
            <p className="text-sm text-muted-foreground">Hours of work in minutes</p>
          </div>
          <div className="card p-6 text-center">
            <Download className="w-12 h-12 mx-auto mb-4 text-green-500" />
            <h3 className="text-lg font-semibold mb-2">ZIP Download</h3>
            <p className="text-sm text-muted-foreground">Get all files in one archive</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Perfect Use Cases for Batch Conversion</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">📸 Photography Workflows</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Convert RAW files to web-ready formats</li>
                  <li>Resize wedding photo collections</li>
                  <li>Create thumbnails for galleries</li>
                  <li>Prepare images for client delivery</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">🌐 Web Development</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Convert assets to WebP for performance</li>
                  <li>Generate responsive image sets</li>
                  <li>Optimize existing image libraries</li>
                  <li>Prepare images for CDN deployment</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">🏢 Business Operations</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Process product catalog images</li>
                  <li>Convert marketing materials</li>
                  <li>Standardize document formats</li>
                  <li>Archive digital assets</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3">📱 Mobile App Development</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Generate app icon sets</li>
                  <li>Convert HEIC photos for Android</li>
                  <li>Create splash screen variants</li>
                  <li>Optimize UI assets</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Step-by-Step Batch Conversion Process</h2>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-lg">
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Select Multiple Files:</strong> 
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Drag and drop multiple images at once</li>
                  <li>Use Ctrl/Cmd+Click to select multiple files</li>
                  <li>Support for up to 20 files per batch</li>
                </ul>
              </li>
              <li>
                <strong>Choose Conversion Settings:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Select target format (WebP, JPG, PNG, etc.)</li>
                  <li>Set quality level for all images</li>
                  <li>Configure resize options if needed</li>
                </ul>
              </li>
              <li>
                <strong>Monitor Progress:</strong> Watch real-time conversion progress for each file
              </li>
              <li>
                <strong>Download Results:</strong> Get individual files or download all as ZIP archive
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Time Savings Calculator</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Number of Images</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Manual Conversion</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Batch Conversion</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Time Saved</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">10 images</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">15 minutes</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">2 minutes</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">13 minutes</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3">50 images</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">75 minutes</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">8 minutes</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">67 minutes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">100 images</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">2.5 hours</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">15 minutes</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 font-semibold">2+ hours</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">💰 Cost Savings</h3>
            At $25/hour, converting 100 images manually costs $62.50 in time. 
            Our batch converter saves you over $50 per batch!
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Advanced Batch Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Consistent Quality Settings</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Uniform Compression:</strong> Same quality across all images</li>
                <li><strong>Batch Resize:</strong> Apply consistent dimensions</li>
                <li><strong>Format Optimization:</strong> Best settings for target format</li>
                <li><strong>Metadata Handling:</strong> Strip or preserve EXIF data</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Smart File Management</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Auto Naming:</strong> Intelligent file naming conventions</li>
                <li><strong>Folder Structure:</strong> Maintain original organization</li>
                <li><strong>Duplicate Handling:</strong> Avoid overwriting files</li>
                <li><strong>Progress Tracking:</strong> Monitor each file's status</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Batch Conversion Scenarios</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">📷 Photo Collection Optimization</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Scenario:</h4>
                  <p className="text-sm">Converting 200 vacation photos from HEIC to JPG for sharing</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Upload all HEIC files at once</li>
                    <li>Set JPG quality to 85%</li>
                    <li>Download ZIP with all converted photos</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">🛍️ E-commerce Product Images</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Scenario:</h4>
                  <p className="text-sm">Converting 500 product PNGs to WebP for faster website loading</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Process in batches of 20 files</li>
                    <li>Use lossless WebP for transparency</li>
                    <li>Maintain consistent naming scheme</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">📄 Document Digitization</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Scenario:</h4>
                  <p className="text-sm">Converting scanned documents from PNG to PDF-ready JPG</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Convert to high-quality JPG (95%)</li>
                    <li>Maintain document readability</li>
                    <li>Reduce file sizes for archiving</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices for Batch Conversion</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Before You Start</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Organize files into logical groups</li>
                <li>Test settings on a few sample images first</li>
                <li>Backup original files if needed</li>
                <li>Check available storage space</li>
                <li>Ensure stable internet connection</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Optimization Tips</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Group similar images for consistent settings</li>
                <li>Use appropriate quality levels for intended use</li>
                <li>Consider file naming conventions</li>
                <li>Monitor conversion progress</li>
                <li>Verify results before deleting originals</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Troubleshooting Batch Conversions</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Some Files Failed to Convert?</h3>
              <p className="mb-2">Common causes and solutions:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Check file formats are supported</li>
                <li>Verify files aren't corrupted</li>
                <li>Ensure files are under size limits</li>
                <li>Try converting failed files individually</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Conversion Taking Too Long?</h3>
              <p className="mb-2">Speed up the process:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Reduce batch size (try 10-15 files)</li>
                <li>Lower quality settings if acceptable</li>
                <li>Check internet connection stability</li>
                <li>Close other browser tabs to free memory</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Results Don't Look Right?</h3>
              <p className="mb-2">Quality issues and fixes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Increase quality settings for better results</li>
                <li>Check if source images have sufficient resolution</li>
                <li>Try different format for better compatibility</li>
                <li>Test with a single image first</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Start Your Batch Conversion</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Save hours of manual work and convert multiple images at once with consistent 
            quality and professional results.
          </p>
          <Link href="/" className="btn-primary inline-flex items-center text-lg px-8 py-3">
            <Layers className="w-5 h-5 mr-2" />
            Convert Multiple Images
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </section>
      </article>
    </div>
  );
}
