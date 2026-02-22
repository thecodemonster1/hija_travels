"use client";
import { useState, useEffect, useCallback } from "react";
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

const ITEMS_PER_PAGE = 12;

export default function PhotoGallery({
  images,
  title = "Our Journey Together",
  subtitle = "Captured moments, shared laughter, and unforgettable memories with amazing travelers!",
}: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [direction, setDirection] = useState(0); // -1 = prev, 1 = next
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const pageImages = images.slice(currentPage * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE);
  const goNext = useCallback(() => setCurrentPage((p) => Math.min(p + 1, totalPages - 1)), [totalPages]);
  const goPrev = useCallback(() => setCurrentPage((p) => Math.max(p - 1, 0)), []);

  const lightboxPrev = useCallback(() => {
    if (!selectedImage) return;
    const i = images.findIndex((img) => img.id === selectedImage.id);
    if (i > 0) { setDirection(-1); setSelectedImage(images[i - 1]); }
  }, [selectedImage, images]);

  const lightboxNext = useCallback(() => {
    if (!selectedImage) return;
    const i = images.findIndex((img) => img.id === selectedImage.id);
    if (i < images.length - 1) { setDirection(1); setSelectedImage(images[i + 1]); }
  }, [selectedImage, images]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedImage, lightboxPrev, lightboxNext]);

  return (
    <>
      <section className="py-20 md:py-28 bg-gradient-to-br from-white via-brand-50/30 to-blue-50/30 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center gap-2 mb-5 px-5 py-2 rounded-full bg-gradient-to-r from-brand-100 to-blue-100 border border-brand-200/50">
              <Camera className="w-4 h-4 text-brand-600" />
              <span className="text-xs font-semibold text-brand-700 uppercase tracking-widest">Gallery</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-500 to-blue-500 mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="relative">
            {/* Left nav button */}
            <AnimatePresence>
              {currentPage > 0 && (
                <motion.button
                  key="prev"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={goPrev}
                  className="absolute -left-5 lg:-left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-200/80 flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white transition-all duration-200"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Right nav button */}
            <AnimatePresence>
              {currentPage < totalPages - 1 && (
                <motion.button
                  key="next"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={goNext}
                  className="absolute -right-5 lg:-right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-200/80 flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white transition-all duration-200"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* 4-column grid, 12 items per page */}
            <AnimatePresence mode="wait">
              <motion.div
                key={"page-" + currentPage}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.32 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
              >
                {pageImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.38, delay: index * 0.035 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      {/* Hover overlay — dark tint only, no blur */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-400" />
                      {/* Caption slides up on hover */}
                      <div className="absolute inset-0 flex flex-col justify-end p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        {image.caption && (
                          <p className="text-white text-[11px] font-semibold leading-tight drop-shadow-md mb-1">
                            {image.caption}
                          </p>
                        )}
                        <div className="flex items-center gap-1.5 text-white/75">
                          <div className="w-4 h-px bg-white/60 rounded-full" />
                          <span className="text-[10px] font-medium tracking-wide">View full</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentPage ? "w-7 h-2.5 bg-brand-600" : "w-2.5 h-2.5 bg-gray-300 hover:bg-brand-400"
                  }`}
                />
              ))}
            </div>
            <div className="inline-flex items-center gap-2.5 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-gray-200/50">
              <Camera className="w-4 h-4 text-brand-600" />
              <span className="text-gray-700 text-sm font-medium">
                Showing {currentPage * ITEMS_PER_PAGE + 1}–
                {Math.min((currentPage + 1) * ITEMS_PER_PAGE, images.length)} of {images.length} memories
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/97 z-50 flex items-center justify-center backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 bg-gradient-to-b from-black/65 to-transparent z-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Camera className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Photo Gallery</p>
                  <p className="text-white/50 text-xs">
                    {images.findIndex((img) => img.id === selectedImage.id) + 1} of {images.length}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Prev */}
            {images.findIndex((img) => img.id === selectedImage.id) > 0 && (
              <button
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 flex items-center justify-center z-20 transition-all duration-200 hover:scale-105 active:scale-95"
                onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
                aria-label="Previous"
              >
                <ChevronLeft className="w-7 h-7 text-white" />
              </button>
            )}

            {/* Next */}
            {images.findIndex((img) => img.id === selectedImage.id) < images.length - 1 && (
              <button
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 flex items-center justify-center z-20 transition-all duration-200 hover:scale-105 active:scale-95"
                onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
                aria-label="Next"
              >
                <ChevronRight className="w-7 h-7 text-white" />
              </button>
            )}

            {/* Image — slides in from left or right */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={selectedImage.id}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d * 80, opacity: 0, scale: 0.97 }),
                  center: { x: 0, opacity: 1, scale: 1 },
                  exit: (d: number) => ({ x: d * -80, opacity: 0, scale: 0.97 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative max-w-6xl w-full mx-4 md:mx-20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-[62vh] md:h-[76vh] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    quality={100}
                    priority
                  />
                </div>
                {selectedImage.caption && (
                  <div className="mt-5 text-center">
                    <div className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                      <p className="text-white text-sm font-semibold">{selectedImage.caption}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
