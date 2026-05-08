import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Samuel E.",
    role: "Entrepreneur",
    content: "L'endroit le plus raffiné de Yaoundé. Le service est impeccable et l'ambiance au lounge est incomparable.",
    rating: 5
  },
  {
    name: "Céline M.",
    role: "Sommelier",
    content: "Une cave à vin impressionnante avec des crus qu'on ne trouve nulle part ailleurs au Cameroun. Un vrai régal.",
    rating: 5
  },
  {
    name: "Marc A.",
    role: "Amateur de Cigare",
    content: "Le salon de cigare est un havre de paix. Parfait pour conclure une soirée après un excellent repas au restaurant.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 px-6 bg-black text-white overflow-hidden relative">
      {/* Decorative quotes bg */}
      <Quote className="absolute top-10 left-10 w-64 h-64 text-white/5 -rotate-12" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold font-sans">Avis de nos membres</span>
          <h2 className="text-5xl md:text-6xl font-serif">Témoignages de <span className="italic luxury-text-gradient">Prestige</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -12,
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                boxShadow: '0 20px 40px -20px rgba(212, 175, 55, 0.3)'
              }}
              transition={{ 
                delay: index * 0.2,
                duration: 0.5,
                y: { duration: 0.3, ease: "easeOut" }
              }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] transition-all group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold group-hover:scale-125 transition-transform" />
                ))}
              </div>
              <p className="text-xl font-serif italic mb-8 leading-relaxed text-gray-300 group-hover:text-white transition-colors">
                "{t.content}"
              </p>
              <div className="flex flex-col">
                <span className="font-bold tracking-widest uppercase text-xs text-gold mb-1 group-hover:brightness-125 transition-all">{t.name}</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-tighter group-hover:text-gray-400 transition-colors">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
