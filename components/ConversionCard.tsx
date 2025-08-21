import Link from "next/link";
import {
  ArrowRight,
  ImageIcon,
  FileText,
  Smartphone,
  Palette,
  Camera,
  FileImage,
  Type,
  Image,
  Layers,
} from "lucide-react";

const conversions = [
  {
    name: "Any Image → WebP",
    href: "/",
    description:
      "Convert any image to modern WebP format for better compression",
    icon: ImageIcon,
    color: "from-green-500 to-cyan-500",
  },
  {
    name: "JPG → WebP",
    href: "/convert/jpg-webp",
    description:
      "Convert JPEG images to modern WebP format for better compression",
    icon: ImageIcon,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "PNG → WebP",
    href: "/convert/png-webp",
    description: "Convert PNG images to WebP while preserving transparency",
    icon: Palette,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Images → PDF",
    href: "/convert/images-pdf",
    description: "Combine multiple images into a single PDF document",
    icon: FileText,
    color: "from-red-500 to-pink-500",
  },
  {
    name: "PDF → JPG",
    href: "/convert/pdf-jpg",
    description: "Extract pages from PDF files as high-quality JPG images",
    icon: FileImage,
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "HEIC → JPG",
    href: "/convert/heic-jpg",
    description: "Convert iPhone HEIC photos to universal JPG format",
    icon: Smartphone,
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "SVG → PNG",
    href: "/convert/svg-png",
    description: "Convert scalable vector graphics to raster PNG images",
    icon: Palette,
    color: "from-teal-500 to-blue-500",
  },
  {
    name: "RAW → TIFF",
    href: "/convert/raw-tiff",
    description: "Process camera RAW files into high-quality TIFF images",
    icon: Camera,
    color: "from-gray-500 to-slate-500",
  },
  {
    name: "BMP → PNG",
    href: "/convert/bmp-png",
    description: "Convert bitmap images to compressed PNG format",
    icon: FileImage,
    color: "from-rose-500 to-red-500",
  },
  {
    name: "Image → Text",
    href: "/convert/image-text",
    description: "Extract text from images using OCR technology",
    icon: Type,
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "WebP → PNG",
    href: "/convert/webp-png",
    description: "Convert WebP images to PNG format with transparency",
    icon: Image,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "TIFF → JPG",
    href: "/convert/tiff-jpg",
    description: "Convert TIFF images to compressed JPG format",
    icon: FileImage,
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "GIF → PNG",
    href: "/convert/gif-png",
    description: "Convert animated GIF to static PNG image",
    icon: Layers,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "ICO → PNG",
    href: "/convert/ico-png",
    description: "Convert icon files to PNG format",
    icon: Palette,
    color: "from-indigo-500 to-blue-500",
  },
];

const ConversionCard = () => {
  return (
    <>
      {/* Conversion Grid */}
      <section className="space-y-10 py-10">
        <div className="text-center space-y-2">
          <h2 className="text-5xl font-bold">Choose Your Conversion</h2>
          <p className="text-muted-foreground">
            Select the format conversion you need from the options below
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {conversions.map((conversion) => {
            const Icon = conversion.icon;
            return (
              <Link
                key={conversion.href}
                href={conversion.href}
                className="group card p-6 hover:shadow-soft-xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:rotate-1"
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${conversion.color} p-2.5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                  >
                    <Icon className="w-full h-full text-white transition-transform group-hover:scale-110" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {conversion.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {conversion.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ConversionCard;
