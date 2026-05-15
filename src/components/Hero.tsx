import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const HERO_IMAGES = [
  '/images/hero_restaurant.jpg', // Restaurant
  '/images/hero_lounge.jpg', // Lounge/Chicha
  '/images/hero_cave.jpg', // Wine Cellar
  '/images/hero_cigar.jpg', // Cigar
  '/images/events_stage.jpg', // Events
  '/images/lounge_vip.jpg', // VIP Lounge
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("${HERO_IMAGES[currentImageIndex]}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-1" />
      
      {/* Decorative patterns */}
      <div className="absolute top-20 left-10 w-64 h-64 border-l border-t border-gold/30 rounded-tl-full opacity-20 hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-64 h-64 border-r border-b border-gold/30 rounded-br-full opacity-20 hidden lg:block" />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] tracking-tighter">
            {t('hero.title').split(' ')[0]} <br />
            <span className="luxury-text-gradient italic">{t('hero.subtitle')}</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            {t('hero.desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <Link
              to="/reservations"
              className="px-10 py-4 bg-gold text-black uppercase tracking-[0.2em] font-bold text-xs hover:bg-gold-light transition-all duration-500 shadow-2xl shadow-gold/20"
            >
              {t('hero.cta_reserve')}
            </Link>
            <Link
              to="/restaurant"
              className="px-10 py-4 border border-white/20 text-white uppercase tracking-[0.2em] font-bold text-xs hover:bg-white hover:text-black transition-all duration-500"
            >
              {t('hero.cta_menu')}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1 transition-all duration-500 rounded-full ${
              currentImageIndex === index ? 'w-12 bg-gold' : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold opacity-50 z-20"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};
