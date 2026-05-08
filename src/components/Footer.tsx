import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Branding */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="La Chancellerie" className="h-12 w-auto object-contain" />
            <span className="font-serif text-2xl tracking-widest luxury-text-gradient font-bold uppercase">
              La Chancellerie
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            L'élégance et le raffinement au cœur de Bastos. Une destination unique pour les amateurs d'excellence.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-gold hover:border-gold transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-gold hover:border-gold transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-gold hover:border-gold transition-all duration-300">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h4 className="font-serif text-xl gold leading-none tracking-widest uppercase text-gold">Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/restaurant" className="hover:text-white transition-colors">Restaurant Gastronomique</Link></li>
            <li><Link to="/lounge" className="hover:text-white transition-colors">Chicha Lounge</Link></li>
            <li><Link to="/lounge" className="hover:text-white transition-colors">Espace Cigare</Link></li>
            <li><Link to="/cave" className="hover:text-white transition-colors">Cave à Vin</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="font-serif text-xl leading-none tracking-widest uppercase text-gold">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-gold shrink-0" />
              <div className="flex flex-col gap-1">
                {CONTACT_INFO.phones.map(p => <span key={p}>{p}</span>)}
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="font-serif text-xl leading-none tracking-widest uppercase text-gold">Horaires</h4>
          <div className="p-6 border border-gold/20 bg-gold/5 rounded-xl space-y-2">
            <p className="text-white font-medium">{CONTACT_INFO.hours}</p>
            <p className="text-xs text-gray-500 uppercase tracking-tighter">Ouvert 7 jours sur 7</p>
          </div>
          <Link 
            to="/reservations" 
            className="block w-full py-3 text-center bg-gold text-black uppercase tracking-widest font-bold text-xs hover:bg-gold-light transition-colors rounded-none"
          >
            Réserver maintenant
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-xs text-gray-600 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} La Chancellerie & Me. Tous droits réservés.
      </div>
    </footer>
  );
};
