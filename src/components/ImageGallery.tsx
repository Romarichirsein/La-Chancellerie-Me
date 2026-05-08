import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryImage {
  url: string;
  caption: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-muted shadow-lg"
            onClick={() => openLightbox(i)}
          >
            <img 
              src={img.url} 
              alt={img.caption} 
              className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <Maximize2 className="text-gold mb-3 scale-75 group-hover:scale-100 transition-transform duration-500" size={32} />
                <span className="text-xs text-white uppercase tracking-[0.2em] font-bold leading-relaxed">{img.caption}</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-10 right-10 text-white/50 hover:text-gold transition-colors p-2"
              onClick={closeLightbox}
            >
              <X size={40} strokeWidth={1} />
            </button>

            <button 
              className="absolute left-4 md:left-10 text-white/50 hover:text-gold transition-colors p-2"
              onClick={showPrev}
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button 
              className="absolute right-4 md:right-10 text-white/50 hover:text-gold transition-colors p-2"
              onClick={showNext}
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[selectedIndex].url} 
                alt={images[selectedIndex].caption} 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-gold/10"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute bottom-[-60px] left-0 right-0 text-center space-y-2">
                <span className="block text-gold font-serif text-2xl tracking-widest italic">
                  {images[selectedIndex].caption}
                </span>
                <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">
                  Souvenir d'Exception {selectedIndex + 1} / {images.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
