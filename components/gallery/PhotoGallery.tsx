"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
}

export default function PhotoGallery({
  images,
  title = "Our Journey Together 📸",
  subtitle = "Captured moments, shared laughter, and unforgettable memories with amazing travelers!"
}: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = images.findIndex((img) => img.id === selectedImage.id);

      switch (e.key) {
        case "Escape":
          setSelectedImage(null);
          break;
        case "ArrowLeft":
          if (currentIndex > 0) {
            setSelectedImage(images[currentIndex - 1]);
          }
          break;
        case "ArrowRight":
          if (currentIndex < images.length - 1) {
            setSelectedImage(images[currentIndex + 1]);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, images]);

  return (
    <>
      {/* Classic Gallery View */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-white via-brand-50/30 to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.3]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          {/* Premium Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-brand-100 to-blue-100 border border-brand-200/50">
              <Camera className="w-5 h-5 text-brand-600" />
              <span className="text-sm font-semibold text-brand-700 uppercase tracking-wider">
                Gallery
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-blue-500 mx-auto mt-8 rounded-full" />
          </motion.div>

          {/* Professional Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-100 to-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {image.caption && (
                      <p className="text-white font-semibold text-base mb-2 drop-shadow-lg">
                        {image.caption}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <div className="w-8 h-0.5 bg-white/50 rounded-full" />
                      <span className="text-xs font-medium">View Full Image</span>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Photo Number Badge */}
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-xs font-semibold">#{index + 1}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gallery Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50">
              <Camera className="w-5 h-5 text-brand-600" />
              <span className="text-gray-700 font-medium">
                {images.length} precious moments captured
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Top Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 bg-gradient-to-b from-black/50 to-transparent z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Photo Gallery</p>
                  <p className="text-white/60 text-xs">
                    {images.findIndex((img) => img.id === selectedImage.id) + 1} of {images.length}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>
            </motion.div>

            {/* Previous Button */}
            {images.findIndex((img) => img.id === selectedImage.id) > 0 && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all z-10 group"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
                  if (currentIndex > 0) {
                    setSelectedImage(images[currentIndex - 1]);
                  }
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
              </motion.button>
            )}

            {/* Next Button */}
            {images.findIndex((img) => img.id === selectedImage.id) < images.length - 1 && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all z-10 group"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
                  if (currentIndex < images.length - 1) {
                    setSelectedImage(images[currentIndex + 1]);
                  }
                }}
                aria-label="Next image"
              >
                <ChevronRight className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
              </motion.button>
            )}

            {/* Image Container */}
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative max-w-7xl w-full mx-4 md:mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image */}
              <div className="relative w-full h-[60vh] md:h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  quality={100}
                  priority
                />
              </div>

              {/* Caption */}
              {selectedImage.caption && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 text-center"
                >
                  <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                    <p className="text-white text-lg font-semibold">{selectedImage.caption}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Bottom Bar - Keyboard Hints */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6"
            >
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <div className="px-2.5 py-1.5 rounded bg-white/10 backdrop-blur-md border border-white/20 font-mono text-xs">
                  ESC
                </div>
                <span>Close</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <div className="px-2.5 py-1.5 rounded bg-white/10 backdrop-blur-md border border-white/20 font-mono text-xs">
                  ← →
                </div>
                <span>Navigate</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
