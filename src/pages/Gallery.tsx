import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ImageGallery } from '../components/ImageGallery';
import { motion } from 'motion/react';

const allGalleryImages = [
  { url: '/images/hero_cigar.png', caption: 'Inauguration du Salon de Cigare' },
  { url: '/images/hero_cave.png', caption: 'Dégustation Exclusive Millésimes 1990' },
  { url: '/images/hero_lounge.png', caption: 'Concert Jazz Live "Midnight in Bastos"' },
  { url: '/images/hero_restaurant.png', caption: 'Cocktail de Charité annuel' },
  { url: '/images/hero_restaurant.png', caption: 'Événement Élite "Ambassadeur Privé"' },
  { url: '/images/hero_lounge.png', caption: 'Nuit Cubaine dans le Lounge' },
  { url: '/images/hero_restaurant.png', caption: 'Dîner aux chandelles de la Saint-Valentin' },
  { url: '/images/food_gourmet_1.png', caption: 'Masterclass Mixologie de prestige' },
  { url: '/images/hero_lounge.png', caption: 'Soirée Jazz & Gastronomie' },
  { url: '/images/hero_cave.png', caption: 'Dégustation Millésimes Bordeaux' },
  { url: '/images/hero_cigar.png', caption: 'Nuit Cubaine & Cigares' },
  { url: '/images/food_gourmet_2.png', caption: 'Gala de Prestige' }
];

export const Gallery = () => {
  return (
    <main>
      <PageHeader 
        title="Galerie" 
        subtitle="Souvenirs d'Exception" 
        image="/images/hero_restaurant.png"
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
