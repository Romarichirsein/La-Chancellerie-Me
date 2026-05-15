import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ImageGallery } from '../components/ImageGallery';
import { motion } from 'motion/react';

const allGalleryImages = [
  { url: '/images/lounge_red.jpg', caption: 'Inauguration du Salon VIP' },
  { url: '/images/hero_cave.jpg', caption: 'Dégustation Exclusive Millésimes 1990' },
  { url: '/images/hero_lounge.jpg', caption: 'Concert Jazz Live "Midnight in Bastos"' },
  { url: '/images/hero_restaurant.jpg', caption: 'Cocktail de Charité annuel' },
  { url: '/images/lounge_vip.jpg', caption: 'Événement Élite "Ambassadeur Privé"' },
  { url: '/images/lounge_purple.jpg', caption: 'Nuit Cubaine dans le Lounge' },
  { url: '/images/restaurant_elegant.jpg', caption: 'Dîner aux chandelles de la Saint-Valentin' },
  { url: '/images/bar_neon.jpg', caption: 'Masterclass Mixologie de prestige' },
  { url: '/images/events_stage.jpg', caption: 'Soirée Jazz & Gastronomie' },
  { url: '/images/hero_cigar.jpg', caption: 'Cave à Cigares & Spiritueux' },
  { url: '/images/events_club.jpg', caption: 'Nuit Cubaine & Cigares' },
  { url: '/images/events_pink.jpg', caption: 'Gala de Prestige' },
  { url: '/images/lounge_blue.jpg', caption: 'Espace Lounge Privé' },
  { url: '/images/restaurant_interior.jpg', caption: 'Restaurant Gastronomique' },
  { url: '/images/vip_room.jpg', caption: 'Carré VIP Exclusif' },
  { url: '/images/lounge_green.jpg', caption: 'Ambiance Nocturne' }
];

export const Gallery = () => {
  return (
    <main>
      <PageHeader 
        title="Galerie" 
        subtitle="Souvenirs d'Exception" 
        image="/images/hero_restaurant.jpg"
      />
      
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Archives Photographiques</span>
            <h2 className="text-4xl md:text-6xl font-serif">Chaque instant est <span className="italic luxury-text-gradient">Unique</span></h2>
          </div>

          <ImageGallery images={allGalleryImages} />
          
          <div className="mt-24 text-center">
            <p className="text-muted-foreground italic font-light max-w-2xl mx-auto">
              Retrouvez l'intégralité de nos souvenirs sur nos réseaux sociaux officiels pour rester informé des prochains événements exclusifs à La Chancellerie.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
