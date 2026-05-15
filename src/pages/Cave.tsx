import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';
import { Search, Filter, Wine } from 'lucide-react';

const wines = [
  { name: 'Pétrus 2010', region: 'Pomerol, Bordeaux', year: '2010', type: 'Rouge', price: 'Prestige' },
  { name: 'Crystal Roederer', region: 'Champagne', year: '2014', type: 'Effervescent', price: 'Luxe' },
  { name: 'Corton-Charlemagne', region: 'Bourgogne', year: '2018', type: 'Blanc', price: 'Rare' },
  { name: 'Sassicaia', region: 'Toscane, Italie', year: '2016', type: 'Rouge', price: "D'Élite" },
  { name: "Château d'Yquem", region: 'Sauternes', year: '2005', type: 'Moelleux', price: 'Icône' },
  { name: 'Opus One', region: 'Napa Valley, USA', year: '2017', type: 'Rouge', price: 'Moderne' },
];

export const Cave = () => {
  return (
    <main>
      <PageHeader 
        title="La Cave de Prestige" 
        subtitle="Sélection de Sommelier" 
        image="/images/82049710b6d48decc7269416343331d1.jpg"
      />
      
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
             <div className="relative w-full md:w-96 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-gold transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Rechercher un millésime..." 
                  className="w-full pl-12 pr-4 py-4 bg-muted/30 border border-border rounded-full focus:outline-none focus:border-gold/50 font-light text-sm"
                />
             </div>
             
             <div className="flex gap-4">
               {['Tout', 'Rouge', 'Blanc', 'Champagne', 'Rare'].map(filter => (
                 <button key={filter} className="px-6 py-2 rounded-full border border-border text-xs uppercase tracking-widest font-bold hover:border-gold hover:text-gold transition-all">
                   {filter}
                 </button>
               ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {wines.map((wine, idx) => (
              <motion.div
                key={wine.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 border border-border rounded-[2rem] hover:border-gold/30 hover:bg-gold/5 transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                  <Wine size={32} strokeWidth={1} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-2">{wine.region}</span>
                <h3 className="text-2xl font-serif mb-1">{wine.name}</h3>
                <p className="text-muted-foreground text-sm font-light mb-8">{wine.year} • {wine.type}</p>
                <div className="w-full pt-6 border-t border-border flex justify-between items-center mt-auto">
                  <span className="text-xs uppercase tracking-widest font-black italic">{wine.price}</span>
                  <button className="text-xs uppercase tracking-widest font-bold border-b border-gold text-gold hover:opacity-70">Détails</button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 p-12 lg:p-20 bg-black text-white rounded-[3rem] relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img src="/images/82049710b6d48decc7269416343331d1.jpg" className="w-full h-full object-cover" alt="bg" referrerPolicy="no-referrer" />
             </div>
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                  <h2 className="text-5xl font-serif">Dégustation <br/><span className="luxury-text-gradient italic">Privée</span></h2>
                  <p className="text-gray-400 text-lg font-light leading-relaxed">
                    Organisez une séance de dégustation pour vos amis ou collaborateurs. Nos sommeliers vous guideront à travers les terroirs les plus prestigieux.
                  </p>
                  <button className="px-10 py-4 bg-gold text-black uppercase tracking-widest font-bold text-xs hover:bg-white transition-all">
                    Demander un devis
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center p-6">
                      <span className="text-3xl font-serif text-gold leading-none mb-2">12</span>
                      <span className="text-[10px] uppercase tracking-tighter text-gray-500">Pers / Max</span>
                   </div>
                   <div className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center p-6">
                      <span className="text-3xl font-serif text-gold leading-none mb-2">300+</span>
                      <span className="text-[10px] uppercase tracking-tighter text-gray-500">Références</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
};
