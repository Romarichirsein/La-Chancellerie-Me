import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ImageGallery } from '../components/ImageGallery';
import { motion } from 'motion/react';

const allGalleryImages = [
  { url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop', caption: 'Inauguration du Salon de Cigare' },
  { url: 'https://images.unsplash.com/photo-1543007630-9710e40e7424?q=80&w=1200&auto=format&fit=crop', caption: 'Dégustation Exclusive Millésimes 1990' },
  { url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop', caption: 'Concert Jazz Live "Midnight in Bastos"' },
  { url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop', caption: 'Cocktail de Charité annuel' },
  { url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop', caption: 'Événement Élite "Ambassadeur Privé"' },
  { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop', caption: 'Nuit Cubaine dans le Lounge' },
  { url: 'https://images.unsplash.com/photo-1496333036606-3bc01955959f?q=80&w=1200&auto=format&fit=crop', caption: 'Dîner aux chandelles de la Saint-Valentin' },
  { url: 'https://images.unsplash.com/photo-1520242739010-44e95bde329e?q=80&w=1200&auto=format&fit=crop', caption: 'Masterclass Mixologie de prestige' },
  { url: 'https://images.unsplash.com/photo-1514525253361-bee8718a340b?q=80&w=1200&auto=format&fit=crop', caption: 'Soirée Jazz & Gastronomie' },
  { url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop', caption: 'Dégustation Millésimes Bordeaux' },
  { url: 'https://images.unsplash.com/photo-1541692641319-981cc79ee10a?q=80&w=1200&auto=format&fit=crop', caption: 'Nuit Cubaine & Cigares' },
  { url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop', caption: 'Gala de Prestige' }
];

export const Gallery = () => {
  return (
    <main>
      <PageHeader 
        title="Galerie" 
        subtitle="Souvenirs d'Exception" 
        image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop"
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
