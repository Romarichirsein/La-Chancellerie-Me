import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ReservationForm } from '../components/ReservationForm';
import { Phone, Clock, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Reservations = () => {
  return (
    <main>
      <PageHeader 
        title="Réservations" 
        subtitle="Vivez l'Exception" 
        image="/images/hero_restaurant.png"
      />
      
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-6">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Politique</span>
              <h2 className="text-5xl font-serif">À Savoir <br/><span className="italic luxury-text-gradient">Avant</span></h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Afin de garantir une expérience optimale à tous nos convives, nous vous remercions de prendre connaissance de nos quelques règles de courtoisie.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <ShieldCheck className="text-gold shrink-0" size={24} />
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1">Tenue de Soirée</h4>
                  <p className="text-sm text-muted-foreground font-light">Une tenue correcte est exigée pour accéder à nos espaces.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Clock className="text-gold shrink-0" size={24} />
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1">Ponctualité</h4>
                  <p className="text-sm text-muted-foreground font-light">Votre table est maintenue pendant 20 minutes après l'heure prévue.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone className="text-gold shrink-0" size={24} />
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1">Contact</h4>
                  <p className="text-sm text-muted-foreground font-light">Pour les groupes de plus de 8 personnes, merci de nous contacter au {CONTACT_INFO.phones[0]}.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
             <ReservationForm embedded />
          </div>
        </div>
      </section>
    </main>
  );
};
