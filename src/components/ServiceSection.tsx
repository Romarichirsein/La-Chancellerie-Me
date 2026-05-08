import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServiceSection = () => {
  return (
    <section className="py-32 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Nos Univers</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-none">Une Expérience <br/><span className="italic luxury-text-gradient">Multi-Sensorielle</span></h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg font-light leading-relaxed">
            De la finesse de nos plats à l'arôme de nos cigares, chaque détail est pensé pour votre plaisir absolu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted rounded-2xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-serif text-white mb-2">{service.title}</h3>
                  <p className="text-white/70 text-sm font-light mb-6 line-clamp-2 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold group-hover:gap-4 transition-all duration-300"
                  >
                    Découvrir <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
