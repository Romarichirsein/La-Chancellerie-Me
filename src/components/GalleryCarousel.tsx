import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface GalleryImage {
  url: string;
  caption: string;
}

interface GalleryCarouselProps {
  images: GalleryImage[];
}

export const GalleryCarousel = ({ images }: GalleryCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (isAutoPlaying && !isLightboxOpen) {
      autoPlayRef.current = setInterval(next, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, currentIndex, isLightboxOpen]);

  return (
    <>
      <div 
        className="relative w-full overflow-hidden rounded-[2.5rem] bg-black aspect-[16/9] md:aspect-[21/9] cursor-zoom-in group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onClick={() => setIsLightboxOpen(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              opacity: { duration: 0.5 } 
            }}
            className="absolute inset-0"
          >
            <img 
              src={images[currentIndex].url} 
              alt={images[currentIndex].caption} 
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-gold/20 backdrop-blur-md p-4 rounded-full border border-gold/30">
                <Maximize2 size={32} className="text-gold" />
              </div>
            </div>

            <div className="absolute bottom-10 left-10 md:left-20 text-white space-y-2 max-w-2xl pointer-events-none">
              <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-black">Archive Prestige</span>
              <h3 className="text-3xl md:text-5xl font-serif italic">{images[currentIndex].caption}</h3>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <button 
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-gold hover:text-black transition-all z-20"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-gold hover:text-black transition-all z-20"
        >
          <ChevronRight size={24} />
        </button>

        {/* Progress Bars */}
        <div className="absolute bottom-8 right-10 md:right-20 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
              className="group py-2 px-1 focus:outline-none"
            >
              <div className={cn(
                "h-1.5 transition-all duration-500 rounded-full",
                currentIndex === i ? "w-12 bg-gold" : "w-6 bg-white/20 group-hover:bg-white/40"
              )} />
            </button>
          ))}
        </div>

        {/* Overlay Counter */}
        <div className="absolute top-10 right-10 text-white/50 font-serif italic text-xl z-20">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="absolute top-10 right-10 text-white/50 hover:text-gold transition-colors p-2 z-[110]"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X size={40} strokeWidth={1} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[currentIndex].url} 
                alt={images[currentIndex].caption} 
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-[0_0_100px_rgba(212,175,55,0.15)]"
                referrerPolicy="no-referrer"
              />
              
              <div className="text-center space-y-4 max-w-3xl">
                <span className="block text-gold font-serif text-3xl md:text-5xl tracking-widest italic decoration-gold/30 underline-offset-8 underline">
                  {images[currentIndex].caption}
                </span>
                <p className="text-white/40 text-xs md:text-sm uppercase tracking-[0.3em] font-bold">
                  Souvenir d'Exception {currentIndex + 1} / {images.length}
                </p>
              </div>

              {/* Lightbox Nav */}
              <div className="flex gap-4 mt-4">
                <button 
                  onClick={prev}
                  className="p-4 rounded-full border border-white/10 text-white hover:bg-gold hover:text-black transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={next}
                  className="p-4 rounded-full border border-white/10 text-white hover:bg-gold hover:text-black transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

