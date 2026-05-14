import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { EVENTS } from '../constants';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

import { ImageGallery } from '../components/ImageGallery';
import { GalleryCarousel } from '../components/GalleryCarousel';

const galleryImages = [
  { url: '/images/hero_cigar.png', caption: 'Inauguration du Salon de Cigare' },
  { url: '/images/hero_cave.png', caption: 'Dégustation Exclusive Millésimes 1990' },
  { url: '/images/hero_lounge.png', caption: 'Concert Jazz Live "Midnight in Bastos"' },
  { url: '/images/hero_restaurant.png', caption: 'Cocktail de Charité annuel' },
  { url: '/images/hero_restaurant.png', caption: 'Événement Élite "Ambassadeur Privé"' },
  { url: '/images/hero_lounge.png', caption: 'Nuit Cubaine dans le Lounge' },
  { url: '/images/hero_restaurant.png', caption: 'Dîner aux chandelles de la Saint-Valentin' },
  { url: '/images/food_gourmet_1.png', caption: 'Masterclass Mixologie de prestige' }
];

export const Events = () => {
  return (
    <main>
      <PageHeader 
        title="Événements" 
        subtitle="Expériences Exclusives" 
        image="/images/hero_restaurant.png"
      />
      
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Agenda de Prestige</span>
            <h2 className="text-5xl md:text-7xl font-serif">À Venir à <span className="italic luxury-text-gradient">La Chancellerie</span></h2>
          </div>

          {/* Quick Summary Thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {EVENTS.map((event, idx) => (
              <motion.div 
                key={`summary-${event.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-card/30 border border-border/50 p-4 rounded-2xl hover:bg-card/50 hover:border-gold/30 transition-all group cursor-pointer"
                onClick={() => {
                  const element = document.getElementById(event.id);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-lg border border-white/5">
                  <img src={event.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] text-gold font-black uppercase tracking-[0.2em] mb-1">
                    {format(parseISO(event.date), 'dd MMM', { locale: fr })}
                  </span>
                  <h4 className="text-xs font-serif italic text-white/80 group-hover:text-gold transition-colors truncate">
                    {event.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-12">
            {EVENTS.map((event, idx) => (
              <motion.div
                key={event.id}
                id={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col lg:flex-row gap-8 bg-card border border-border rounded-[2.5rem] overflow-hidden hover:border-gold/30 transition-all duration-500 shadow-xl"
              >
                <div className="lg:w-1/3 aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="px-4 py-1 bg-gold/10 text-gold text-[10px] uppercase tracking-widest font-black rounded-full">
                      {event.category}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest font-bold">
                      <Calendar size={14} className="text-gold" />
                      {format(parseISO(event.date), 'dd MMMM yyyy', { locale: fr })}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest font-bold">
                      <Clock size={14} className="text-gold" />
                      {event.time}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-serif">{event.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed max-w-2xl">
                    {event.description}
                  </p>
                  
                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground italic">
                      <MapPin size={14} className="text-gold" /> Bastos, Yaoundé
                    </div>
                    <Link 
                      to="/reservations" 
                      className="flex items-center gap-2 px-8 py-3 bg-black dark:bg-gold text-white dark:text-black text-xs uppercase tracking-widest font-bold rounded-xl hover:scale-105 transition-all"
                    >
                      Réserver ma place <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Past Events / Memories Section */}
          <div className="mt-32">
            <div className="flex items-center justify-between mb-12">
              <h4 className="text-3xl font-serif italic">Souvenirs d'Exception</h4>
              <div className="h-px flex-grow mx-8 bg-border hidden md:block" />
            </div>
            
            <div className="space-y-12">
              <GalleryCarousel images={galleryImages} />
              <div>
                <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Vue d'ensemble</span>
                <ImageGallery images={galleryImages} />
                <div className="mt-12 text-center">
                  <Link 
                    to="/gallery" 
                    className="inline-flex items-center gap-2 px-10 py-4 border border-gold/50 text-gold text-xs uppercase tracking-[0.3em] font-black rounded-xl hover:bg-gold hover:text-black transition-all group"
                  >
                    Voir toute la galerie <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
