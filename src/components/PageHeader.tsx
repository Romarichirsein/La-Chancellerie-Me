import React from 'react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

export const PageHeader = ({ title, subtitle, image }: PageHeaderProps) => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black pt-20">
      <div 
        className="absolute inset-0 z-0 opacity-40 scale-110"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-background z-1" />
      
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="text-gold uppercase tracking-[0.5em] text-xs font-bold font-sans">{subtitle}</span>
          <h1 className="text-5xl md:text-8xl font-serif text-white tracking-widest uppercase">
            {title}
          </h1>
          <div className="w-24 h-1 luxury-gradient mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
};
