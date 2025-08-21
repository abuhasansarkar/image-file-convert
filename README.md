# Next.js Image Converter

A modern, privacy-focused image conversion web application built with Next.js 15, TypeScript, and TailwindCSS.

## Features

- **8 Conversion Types**: JPG→WebP, PNG→WebP, Images→PDF, PDF→JPG, HEIC→JPG, SVG→PNG, RAW→TIFF, BMP→PNG
- **100% Client-Side Processing**: All conversions happen locally in your browser
- **Privacy First**: No file uploads, no tracking, no data collection
- **Batch Processing**: Convert multiple files at once
- **Progressive Web App**: Works offline with service worker caching
- **Dark Mode**: System-aware theme switching
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Accessibility**: WCAG AA compliant with keyboard shortcuts

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: Zustand
- **Async State**: TanStack Query
- **Animations**: Framer Motion
- **File Processing**: Canvas API, PDF-lib, PDF.js, Canvg
- **PWA**: next-pwa

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Keyboard Shortcuts

- `Ctrl+O` - Open file picker
- `Ctrl+Enter` - Start conversion

## Supported Formats

### Input Formats
- **Images**: JPG, PNG, BMP, SVG, HEIC
- **Documents**: PDF
- **RAW**: CR2, CRW, NEF, ARW, DNG

### Output Formats
- **WebP**: Modern image format with superior compression
- **PDF**: Portable document format
- **JPG**: Universal image format
- **PNG**: Lossless image format with transparency
- **TIFF**: High-quality image format

## Privacy & Security

- All processing happens locally in your browser
- No files are uploaded to any server
- No tracking or analytics
- No data collection
- Files never leave your device

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- WebAssembly-powered conversions for optimal performance
- Web Workers for non-blocking processing
- Memory-efficient with automatic cleanup
- Progressive loading of WASM modules

## Development

### Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── convert/           # Conversion pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
├── lib/                   # Utilities and business logic
│   ├── converters/        # Conversion logic
│   ├── store/            # Zustand stores
│   └── utils/            # Helper functions
└── public/               # Static assets
```

### Adding New Conversions

1. Create converter in `lib/converters/`
2. Add conversion page in `app/convert/`
3. Update supported formats in `lib/utils/file-utils.ts`
4. Add navigation link in `components/header.tsx`

## License

MIT License - see LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Deployment

The app is optimized for deployment on:
- Vercel (recommended)
- Netlify
- Any static hosting service

Build for production:
```bash
npm run build
```

## Support

For issues and feature requests, please use the GitHub issue tracker.
