'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Photo {
  id: number;
  src: string;
  alt: string;
  location: string;
  year: string;
}

const photos: Photo[] = [
  { id: 1, src: '/gallery/trip-1.jpg', alt: 'Sacred journey begins', location: 'Makkah Al-Mukarramah', year: '2024' },
  { id: 2, src: '/gallery/trip-2.jpg', alt: 'Peaceful moments', location: 'Al-Madinah Al-Munawwarah', year: '2024' },
  { id: 3, src: '/gallery/trip-3.jpg', alt: 'Blessed gathering', location: 'Masjid Al-Haram', year: '2024' },
  { id: 4, src: '/gallery/trip-4.jpg', alt: 'Together in faith', location: 'Masjid An-Nabawi', year: '2024' },
  { id: 5, src: '/gallery/trip-5.jpg', alt: 'Spiritual connection', location: 'Mount Arafat', year: '2024' },
  { id: 6, src: '/gallery/trip-6.jpg', alt: 'Memorable experience', location: 'Jeddah Corniche', year: '2024' },
  { id: 7, src: '/gallery/trip-7.jpg', alt: 'Historic moment', location: 'Cave of Hira', year: '2023' },
  { id: 10, src: '/gallery/trip-10.jpg', alt: 'Unity in prayer', location: 'Masjid Quba', year: '2023' },
  { id: 11, src: '/gallery/trip-11.jpg', alt: 'Reflections', location: 'Jannat al-Baqi', year: '2023' },
  { id: 12, src: '/gallery/trip-12.jpg', alt: 'Beautiful sunset', location: 'Taif Mountains', year: '2023' },
];

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;

          // Check if section is in view
          const inView = scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight;
          setIsVisible(inView);

          // Calculate scroll progress
          const scrollStart = sectionTop - windowHeight * 0.5;
          const scrollEnd = sectionTop + sectionHeight - windowHeight * 0.5;
          const scrollRange = scrollEnd - scrollStart;

          const scrollPosition = scrollY - scrollStart;
          const progress = Math.max(0, Math.min(1, scrollPosition / scrollRange));
          setScrollProgress(progress);

          // Calculate horizontal translation with easing
          const trackWidth = track.scrollWidth;
          const viewportWidth = window.innerWidth;
          const maxScroll = trackWidth - viewportWidth;

          // Apply easing for smoother start/end
          const easedProgress = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

          const translateX = -(easedProgress * maxScroll);
          track.style.transform = `translate3d(${translateX}px, 0, 0)`;

          // Parallax effect on images with staggered timing
          const images = track.querySelectorAll('.horizontal-image');
          images.forEach((img, index) => {
            const delay = index * 0.03;
            const imageProgress = Math.max(0, Math.min(1, (progress - delay) * 1.1));
            const parallaxAmount = 80 * (1 - imageProgress);
            const scale = 1 + (0.05 * (1 - imageProgress));
            (img as HTMLElement).style.transform = `translateX(${parallaxAmount}px) scale(${scale})`;
            (img as HTMLElement).style.opacity = `${Math.min(1, imageProgress + 0.3)}`;
          });

          // Text reveal effects
          const textElements = track.querySelectorAll('.horizontal-text-reveal');
          textElements.forEach((text, index) => {
            const textProgress = Math.max(0, Math.min(1, (progress - (0.3 + index * 0.1)) * 2));
            (text as HTMLElement).style.opacity = `${textProgress}`;
            (text as HTMLElement).style.transform = `translateY(${30 * (1 - textProgress)}px)`;
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    // Set initial section height based on track width
    const updateHeight = () => {
      if (!track) return;
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = trackWidth - viewportWidth;
      section.style.height = `${scrollDistance + window.innerHeight * 2.5}px`;
    };

    updateHeight();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateHeight);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-amber-50/50 via-orange-50/30 to-white"
      style={{ height: '400vh' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(217, 119, 6, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Title overlay - fades in/out with scroll */}
        <div
          className="absolute top-20 left-0 right-0 z-20 text-center transition-opacity duration-700"
          style={{ opacity: scrollProgress < 0.2 ? 1 - (scrollProgress * 5) : 0 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
            Sacred Memories
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Scroll to explore our journey
          </p>
          <div className="mt-8 flex justify-center">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-amber-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center">
          {/* Horizontal track */}
          <div
            ref={trackRef}
            className="flex gap-6 md:gap-8 px-6 md:px-12 will-change-transform"
            style={{ transform: 'translate3d(0, 0, 0)' }}
          >
            {/* Gallery items */}
            {photos.map((photo, index) => {
              const isLarge = index % 4 === 0;
              const isMedium = index % 4 === 2;
              const width = isLarge ? '65vw' : isMedium ? '50vw' : '45vw';
              const height = isLarge ? '80vh' : isMedium ? '75vh' : '70vh';

              return (
                <div
                  key={photo.id}
                  className="flex-shrink-0 group"
                  style={{ width }}
                >
                  <div
                    className="relative overflow-hidden shadow-2xl"
                    style={{
                      height,
                      borderRadius: '24px',
                    }}
                  >
                    {/* Image with parallax */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="horizontal-image object-cover transition-all duration-1000 ease-out"
                        style={{
                          transformOrigin: 'center center',
                          opacity: 0,
                        }}
                        sizes="65vw"
                        priority={index < 3}
                      />
                    </div>

                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-transparent" />

                    {/* Info overlay - always visible on larger cards */}
                    <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white ${isLarge ? '' : 'opacity-0 group-hover:opacity-100'} transition-all duration-700`}>
                      <div className="horizontal-text-reveal transform transition-all duration-700">
                        <div className="text-xs md:text-sm font-semibold tracking-widest text-amber-300 mb-2 md:mb-3 uppercase">
                          {photo.location}
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold mb-2 leading-tight">
                          {photo.alt}
                        </h3>
                        <div className="text-sm md:text-base text-amber-200 font-light">
                          {photo.year}
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-amber-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              );
            })}

            {/* Inspirational quote section */}
            <div className="flex-shrink-0 w-[55vw] flex items-center justify-center">
              <div className="text-center max-w-2xl px-8 md:px-16">
                <div className="horizontal-text-reveal">
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8" />
                  <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                    Every journey{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
                      brings us closer
                    </span>{' '}
                    to our faith and to each other
                  </blockquote>
                  <div className="text-lg md:text-xl text-gray-600 font-light italic">
                    – Hija Travels
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8" />
                </div>
              </div>
            </div>

            {/* More photos with variation */}
            {photos.slice(0, 6).map((photo, index) => {
              const width = index % 3 === 0 ? '58vw' : index % 3 === 1 ? '42vw' : '48vw';
              const height = index % 3 === 0 ? '78vh' : '72vh';

              return (
                <div
                  key={`repeat-${photo.id}`}
                  className="flex-shrink-0 group"
                  style={{ width }}
                >
                  <div
                    className="relative overflow-hidden shadow-2xl"
                    style={{
                      height,
                      borderRadius: '24px',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-100">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="horizontal-image object-cover"
                        style={{
                          transformOrigin: 'center center',
                          opacity: 0,
                        }}
                        sizes="58vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="horizontal-text-reveal">
                        <div className="text-xs md:text-sm font-semibold tracking-widest text-amber-300 uppercase">
                          {photo.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* End spacer */}
            <div className="flex-shrink-0 w-12" />
          </div>
        </div>
      </div>

      {/* Enhanced progress indicator */}
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-opacity duration-500"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div className="bg-white/90 backdrop-blur-xl rounded-full px-8 py-4 shadow-2xl border border-amber-200/50">
          <div className="flex items-center gap-4">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Gallery
            </div>
            <div className="w-40 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 transition-all duration-300 ease-out rounded-full"
                style={{
                  width: `${scrollProgress * 100}%`,
                  boxShadow: '0 0 10px rgba(245, 158, 11, 0.5)'
                }}
              />
            </div>
            <span className="text-sm font-bold text-gray-900 tabular-nums min-w-[3ch]">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


