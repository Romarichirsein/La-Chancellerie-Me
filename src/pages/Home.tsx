import React from 'react';
import { Hero } from '../components/Hero';
import { ServiceSection } from '../components/ServiceSection';
import { Testimonials } from '../components/Testimonials';
import { ReservationForm } from '../components/ReservationForm';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main>
      <Hero />
      
      {/* About Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-gold/20 translate-x-4 translate-y-4 rounded-3xl -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop" 
              alt="L'Art de Vivre" 
              className="w-full aspect-square object-cover rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-10 right-10 bg-black p-8 border border-gold/30 rounded-2xl hidden md:block">
              <span className="block text-4xl font-serif text-white mb-1 tracking-widest luxury-text-gradient">2024</span>
              <span className="block text-xs uppercase tracking-widest text-gold font-bold">Inauguration</span>
            </div>
          </div>
          
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">L'Art de Vivre</span>
              <h2 className="text-5xl md:text-7xl font-serif leading-[1.1]">Une Destinée <br/> <span className="italic luxury-text-gradient">D'Élite</span></h2>
              <p className="text-muted-foreground text-xl font-light leading-relaxed">
                Située dans le quartier résidentiel de Bastos, La Chancellerie & Me est bien plus qu'un établissement. C'est un sanctuaire du goût et de l'élégance où chaque détail raconte une histoire d'excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre équipe d'experts dévoués vous accueille pour des moments suspendus, que ce soit pour une dégustation de vins rares, un repas gastronomique ou la découverte d'un cigare de collection.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="group flex items-center gap-4 text-sm font-black uppercase tracking-widest border-b border-gold pb-2 hover:gap-6 transition-all">
                Notre Histoire <ArrowRight size={18} className="text-gold" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceSection />
      
      <ReservationForm />
      
      {/* Featured Menu Preview */}
      <section className="py-32 px-6 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 space-y-8">
            <h2 className="text-5xl font-serif">La Carte du <br/><span className="luxury-text-gradient">Sommelier</span></h2>
            <p className="text-gray-400 font-light">Découvrez notre sélection exclusive de vins du monde et de champagnes millésimés.</p>
            <Link to="/cave" className="inline-block px-8 py-3 border border-gold text-gold uppercase tracking-widest font-bold text-xs hover:bg-gold hover:text-black transition-all">
              Voir la Cave
            </Link>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 border border-white/10 rounded-2xl hover:border-gold/50 transition-colors bg-white/5 space-y-4">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-xl font-serif text-gold">Château Margaux 2015</h4>
                  <span className="text-[10px] uppercase text-gray-500 tracking-widest">Grand Cru Classé</span>
                </div>
                <span className="text-white font-serif italic">Prestige</span>
              </div>
              <p className="text-sm text-gray-400 font-light">Notes de petits fruits noirs, violette, cèdre et graphite. Une élégance exceptionnelle.</p>
            </div>
            
            <div className="p-8 border border-white/10 rounded-2xl hover:border-gold/50 transition-colors bg-white/5 space-y-4">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-xl font-serif text-gold">Dom Pérignon P2</h4>
                  <span className="text-[10px] uppercase text-gray-500 tracking-widest">Plénitude</span>
                </div>
                <span className="text-white font-serif italic">Millésime</span>
              </div>
              <p className="text-sm text-gray-400 font-light">Une plénitude vibrante, un palais intense et crémeux avec une minéralité fumée.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Map/Contact Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-card border border-border rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="p-12 md:p-20 space-y-8">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Où nous trouver</span>
            <h2 className="text-5xl font-serif lowercase tracking-tighter">Bastos, <span className="luxury-text-gradient uppercase tracking-normal">Yaoundé</span></h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                  <ArrowRight size={18} className="rotate-45" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Localisation Exacte</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">Rue de l'Ambassade, Bastos, à proximité de l'Hôtel de la Chancellerie.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                  <ArrowRight size={18} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Contact Direct</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">+237 696 35 51 70</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] lg:h-auto bg-muted grayscale hover:grayscale-0 transition-all duration-700">
             <iframe 
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.1116664972!2d11.512345!3d3.891234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a1a1a1a1b%3A0x1a1a1a1a1a1a1a1a!2sBastos%2C%20Yaound%C3%A9%2C%20Cameroun!5e0!3m2!1sen!2scm!4v1620000000000!5m2!1sen!2scm" 
                className="w-full h-full border-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
             />
          </div>
        </div>
      </section>
    </main>
  );
};
