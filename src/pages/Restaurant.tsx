import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { ReservationForm } from '../components/ReservationForm';
import { useLanguage } from '../contexts/LanguageContext';

const menuItems = [
  { category: 'Entrées', items: [
    { name: 'Carpaccio de Saint-Jacques', desc: 'Citron caviar, huile de truffe blanche', price: '12 000 FCFA' },
    { name: 'Foie Gras Poêlé', desc: 'Pain d\'épices maison, compotée de figues', price: '15 000 FCFA' },
    { name: 'Velouté de Homard', desc: 'Crème légère, éclats de noisettes', price: '18 000 FCFA' },
  ]},
  { category: 'Plats Signature', items: [
    { name: 'Filet de Bœuf Wagyu', desc: 'Purée truffée, jus corsé au romarin', price: '45 000 FCFA' },
    { name: 'Bar de Ligne en Papillote', desc: 'Légumes oubliés, émulsion citronnelle', price: '32 000 FCFA' },
    { name: 'Risotto aux Champignons des Bois', desc: 'Parmesan 24 mois, tuile craquante', price: '25 000 FCFA' },
  ]},
  { category: 'Desserts', items: [
    { name: 'Sphère Chocolat Grand Cru', desc: 'Cœur coulant caramel beurre salé', price: '8 000 FCFA' },
    { name: 'Mille-feuille Vanille Bourbon', desc: 'Pâte feuilletée inversée, crème légère', price: '7 500 FCFA' },
  ]}
];

export const Restaurant = () => {
  const { t } = useLanguage();
  return (
    <main>
      <PageHeader 
        title="La Table d'Or" 
        subtitle="Gastronomie Fine" 
        image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop"
      />
      
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8 order-2 lg:order-1">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">L'Excellence Culinaire</span>
              <h2 className="text-5xl font-serif">Une symphonie de <span className="italic luxury-text-gradient">Saveurs</span></h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Notre chef étoilé revisite les classiques avec une touche audacieuse, utilisant uniquement des produits d'une fraîcheur absolue. Chaque assiette est une œuvre d'art visuelle et gustative.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-gold p-4 bg-gold/5 border-l-2 border-gold rounded-r-xl">
                  <ArrowDown size={20} className="-rotate-90" />
                  <span className="text-sm font-bold uppercase tracking-widest">Produits Locaux & Importés de prestige</span>
                </div>
                <div className="flex items-center gap-4 text-gold p-4 bg-gold/5 border-l-2 border-gold rounded-r-xl">
                  <ArrowDown size={20} className="-rotate-90" />
                  <span className="text-sm font-bold uppercase tracking-widest">Service à la Française Irréprochable</span>
                </div>
              </div>
           </div>
           
           <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1550966841-3ee7adac169c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Plat Gastronomique" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 luxury-gradient p-1 rounded-full hidden md:block">
                 <div className="w-full h-full bg-background rounded-full flex flex-col items-center justify-center text-center p-4">
                    <span className="text-3xl font-serif luxury-text-gradient">Chef</span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Signature</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Menu du Jour Section */}
      <section className="py-32 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">{t('restaurant.today_specials')}</span>
                <h2 className="text-5xl md:text-7xl font-serif leading-none">{t('restaurant.menu_jour').split(' ')[0]} {t('restaurant.menu_jour').split(' ').slice(1).join(' ')}</h2>
              </div>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Chaque jour, notre chef sélectionne les meilleurs arrivages pour vous proposer des créations éphémères et savoureuses.
              </p>
              
              <div className="grid gap-8">
                {[
                  { name: 'Carpaccio de Dorade Royale', price: '9 500 FCFA', desc: 'Agrumes de saison et huile de coriandre' },
                  { name: 'Souris d\'Agneau Confite', price: '18 000 FCFA', desc: 'Cuisson basse température (12h), légumes glacés' },
                  { name: 'Tiramisu Exotique', price: '6 500 FCFA', desc: 'Mangue, passion et biscuit amaretto' }
                ].map((item, i) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-start border-b border-border pb-6 group"
                  >
                    <div className="space-y-1">
                      <h4 className="text-xl font-serif group-hover:text-gold transition-colors">{item.name}</h4>
                      <p className="text-sm text-muted-foreground italic font-light">{item.desc}</p>
                    </div>
                    <span className="text-gold font-serif text-lg">{item.price}</span>
                  </motion.div>
                ))}
              </div>
              
              <button 
                className="mt-8 px-10 py-4 bg-black dark:bg-gold text-white dark:text-black uppercase tracking-widest text-xs font-black rounded-full hover:scale-105 transition-all shadow-xl"
              >
                Réserver ma table du jour
              </button>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <motion.div 
                whileHover={{ scale: 0.98 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
               >
                 <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" alt="Food 1" className="w-full h-full object-cover" />
               </motion.div>
               <motion.div 
                whileHover={{ scale: 0.98 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl translate-y-12"
               >
                 <img src="https://images.unsplash.com/photo-1551218808-94e220e0349c?q=80&w=800&auto=format&fit=crop" alt="Food 2" className="w-full h-full object-cover" />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Menu Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">La Carte</span>
            <h2 className="text-5xl md:text-7xl font-serif">Saveurs <span className="italic luxury-text-gradient">Ouvrées</span></h2>
          </div>

          <div className="space-y-20">
            {menuItems.map((cat, idx) => (
              <motion.div 
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div className="flex items-center gap-6">
                  <h3 className="text-3xl font-serif text-gold shrink-0">{cat.category}</h3>
                  <div className="h-px w-full bg-white/10" />
                </div>
                
                <div className="grid gap-12">
                  {cat.items.map(item => (
                    <div key={item.name} className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-xl font-serif transition-colors group-hover:text-gold">{item.name}</h4>
                        <span className="text-gold font-serif italic text-lg">{item.price}</span>
                      </div>
                      <p className="text-gray-500 font-light text-sm italic">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
           <div className="text-center">
             <h3 className="text-4xl font-serif mb-4 italic">Réservez votre table</h3>
             <p className="text-muted-foreground">Une expérience culinaire d'exception vous attend.</p>
           </div>
           <ReservationForm embedded />
        </div>
      </section>
    </main>
  );
};
