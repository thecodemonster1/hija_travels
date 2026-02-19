"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Camera, X } from "lucide-react";
import HorizontalGallery from "./HorizontalGallery";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [viewMode, setViewMode] = useState<"horizontal" | "scroll">("horizontal");

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Premium Horizontal Scroll Gallery */}
      {viewMode === "horizontal" && <HorizontalGallery />}

      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="w-8 h-8 text-brand-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          </motion.div>

          {/* View Mode Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-full p-1 shadow-lg border border-gray-200">
              <button
                onClick={() => setViewMode("horizontal")}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  viewMode === "horizontal"
                    ? "bg-gradient-to-r from-brand-600 to-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Cinematic Scroll
              </button>
              <button
                onClick={() => setViewMode("scroll")}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  viewMode === "scroll"
                    ? "bg-gradient-to-r from-brand-600 to-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Classic View
              </button>
            </div>
          </div>

          {/* Gallery Container */}
          <div className="relative group">
            {/* Left Navigation Button */}
            <AnimatePresence>
              {canScrollLeft && (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-6 h-6 text-brand-600" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Right Navigation Button */}
            <AnimatePresence>
              {canScrollRight && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-6 h-6 text-brand-600" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Gradient Overlays */}
            {canScrollLeft && (
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-50 to-transparent z-[5] pointer-events-none hidden md:block" />
            )}
            {canScrollRight && (
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-50 to-transparent z-[5] pointer-events-none hidden md:block" />
            )}

            {/* Scrollable Gallery */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex-shrink-0 w-[300px] md:w-[400px] group/item cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Image */}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover/item:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        {image.caption && (
                          <p className="text-white text-sm font-medium">{image.caption}</p>
                        )}
                        <p className="text-white/80 text-xs mt-1">Click to view larger</p>
                      </div>
                    </div>

                    {/* Photo Frame Effect */}
                    <div className="absolute inset-0 border-4 border-white/20 rounded-xl pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Scroll Hint */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-6 md:hidden"
          >
            <p className="text-sm text-gray-500">👉 Swipe to see more memories</p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh] md:h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
              {selectedImage.caption && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 text-center"
                >
                  <p className="text-white text-lg font-medium">{selectedImage.caption}</p>
                </motion.div>
              )}
            </motion.div>

            {/* Navigation Hints */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              Click outside to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
