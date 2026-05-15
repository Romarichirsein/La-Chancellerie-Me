import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ImageGallery } from '../components/ImageGallery';
import { motion } from 'motion/react';

const allGalleryImages = [
  { url: '/images/036e00dfe3a9d41e2bcaf3286d43e32f.jpg', caption: 'Inauguration du Salon VIP' },
  { url: '/images/82049710b6d48decc7269416343331d1.jpg', caption: 'La Cave de Prestige' },
  { url: '/images/a1179fb481af36afd78d7209e1a78f5f.jpg', caption: 'Espace Chicha' },
  { url: '/images/ce8e3441aff26528318e7dfcec7a3132.jpg', caption: 'Restaurant Gastronomique' },
  { url: '/images/51f2b966e38b8ec2856b4d6b54902773.jpg', caption: 'Salon Élite' },
  { url: '/images/a79987ebe2383aff13d8f43b77f3fbaf.jpg', caption: 'Ambiance Lounge' },
  { url: '/images/2f75b4e0f037ca186c1efa418f124544.jpg', caption: 'Table d\'Exception' },
  { url: '/images/17898e8b83abf0d758b396c29e029ca6.jpg', caption: 'Le Bar Néon' },
  { url: '/images/d86a0edcff53eef0edfdab3dbf0bb826.jpg', caption: 'Scène Live' },
  { url: '/images/dea6a43d055fabdc38ca5d2da0e5f4bb.jpg', caption: 'Salon de Cigare' },
  { url: '/images/e1c5daf3b01b906695904c838bbe78b5.jpg', caption: 'Espace Club' },
  { url: '/images/eab8c468e78bb3c3af7b02fb219c8b5d.jpg', caption: 'Vibration Nocturne' },
  { url: '/images/bdedaf6834e6e443489d28cda9efd9a2.jpg', caption: 'Lounge Bleu' },
  { url: '/images/7fd5bb5cdc861b4b044b6e9770d66fb8.jpg', caption: 'Intérieur Restaurant' },
  { url: '/images/9d9ad9d30873a23147cb9c1dae33a4e4.jpg', caption: 'Carré VIP' },
  { url: '/images/c30e15e2619a4a6f59031347ac08e201.jpg', caption: 'Lounge Vert' }
];

export const Gallery = () => {
  return (
    <main>
      <PageHeader 
        title="Galerie" 
        subtitle="Souvenirs d'Exception" 
        image="/images/ce8e3441aff26528318e7dfcec7a3132.jpg"
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
