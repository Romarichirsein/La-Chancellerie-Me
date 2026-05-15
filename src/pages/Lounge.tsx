import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';
import { Wine, Cigarette, Music, Users } from 'lucide-react';
import { cn } from '../lib/utils';

export const Lounge = () => {
  return (
    <main>
      <PageHeader 
        title="L'Espace Feutré" 
        subtitle="Chicha & Cigar Lounge" 
        image="/images/dea6a43d055fabdc38ca5d2da0e5f4bb.jpg"
      />
      
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-32">
            <div className="space-y-10">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Atmosphère Chicha</span>
              <h2 className="text-5xl md:text-7xl font-serif leading-none">Volutes de <br/><span className="italic luxury-text-gradient">Sérénité</span></h2>
              <p className="text-muted-foreground text-xl font-light leading-relaxed">
                Notre espace Chicha offre une sélection de tabacs premiums et de mélanges exclusifs, servis dans des narguilés de haute facture pour une fumée dense et parfumée.
              </p>
              <div className="grid grid-cols-2 gap-8 text-center pt-6">
                <div className="p-8 border border-border rounded-2xl bg-muted/20">
                  <span className="block text-3xl font-serif text-gold mb-2">50+</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Saveurs Mondiales</span>
                </div>
                <div className="p-8 border border-border rounded-2xl bg-muted/20">
                  <span className="block text-3xl font-serif text-gold mb-2">Premium</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Équipement Russe</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/a1179fb481af36afd78d7209e1a78f5f.jpg" 
                alt="Chicha Experience" 
                className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-1/2 -left-10 -translate-y-1/2 bg-black text-white p-10 border border-gold/30 rounded-full hidden lg:flex flex-col items-center justify-center text-center w-40 h-40">
                 <Music size={24} className="text-gold mb-2" />
                 <span className="text-[10px] uppercase font-bold tracking-widest">Ambiance Playlist</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="/images/dea6a43d055fabdc38ca5d2da0e5f4bb.jpg" 
                alt="Cigar Lounge" 
                className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="space-y-10 order-1 lg:order-2">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Cigar Social Club</span>
              <h2 className="text-5xl md:text-7xl font-serif leading-none">Le Temps des <br/><span className="italic luxury-text-gradient">Connaisseurs</span></h2>
              <p className="text-muted-foreground text-xl font-light leading-relaxed">
                Une invitation au gentleman's club. Découvrez une cave à cigares (Humidor) regorgeant de pépites de Cuba, du Nicaragua et de la République Dominicaine.
              </p>
              <ul className="space-y-6">
                {[
                  { icon: <Cigarette />, title: 'Cave à Cigares Tempérée', desc: 'Conservation optimale à 70% d\'humidité.' },
                  { icon: <Wine />, title: 'Accords Mets & Cigaares', desc: 'Conseillés par nos experts pour maximiser les arômes.' },
                  { icon: <Users />, title: 'Espace Privé', desc: 'Possibilité de privatiser pour vos réunions d\'affaires discrètes.' },
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-xl mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm font-light">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers Section (Modern Layout) */}
      <section className="py-32 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-5xl font-serif lowercase tracking-tighter">Nos Formules <span className="luxury-text-gradient uppercase tracking-normal">Privilège</span></h2>
             <p className="text-muted-foreground max-w-sm mx-auto">Accédez à des avantages exclusifs et des espaces réservés à nos membres fidèles.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: 'Silver', price: 'Sur mesure', features: ['Accès lounge prioritaire', 'Invitations événements', 'Menu dégustation mensuel'] },
              { type: 'Gold', price: 'Élite', features: ['Conciergerie privée', 'Accès cave à cigares rare', 'Table réservée en permanence', 'Événements privés'] },
              { type: 'Platinum', price: 'V.I.P', features: ['Privatisation totale possible', 'Accompagnement sommelier', 'Parking réservé', 'Dégustations offertes'] }
            ].map((tier, idx) => (
              <div key={tier.type} className={cn(
                "p-12 border border-border rounded-[2.5rem] bg-card text-center space-y-10 group hover:border-gold/50 transition-all duration-500",
                idx === 1 && "scale-110 shadow-2xl z-10 border-gold/30 bg-black text-white"
              )}>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold">Membership</span>
                  <h3 className="text-4xl font-serif">{tier.type}</h3>
                </div>
                <div className="w-12 h-1 luxury-gradient mx-auto" />
                <ul className="space-y-4 text-sm font-light opacity-80">
                  {tier.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <div className="pt-4">
                   <button className={cn(
                     "w-full py-4 uppercase tracking-widest text-xs font-bold border rounded-full transition-all",
                     idx === 1 ? "bg-gold text-black border-gold hover:bg-white" : "border-gold text-gold hover:bg-gold hover:text-white"
                   )}>
                     Se renseigner
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
