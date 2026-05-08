import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface TranslationSchema {
  nav: {
    home: string;
    restaurant: string;
    lounge: string;
    cave: string;
    events: string;
    reservations: string;
    contact: string;
  };
  hero: {
    welcome: string;
    title: string;
    subtitle: string;
    desc: string;
    cta_reserve: string;
    cta_menu: string;
  };
  restaurant: {
    menu_jour: string;
    today_specials: string;
  };
}

const translations: Record<Language, any> = {
  fr: {
    nav: {
      home: 'Accueil',
      restaurant: 'Restaurant',
      lounge: 'Lounge',
      cave: 'Cave à Vin',
      events: 'Événements',
      reservations: 'Réservations',
      contact: 'Contact',
    },
    hero: {
      welcome: 'Bienvenue à Bastos',
      title: "L'excellence Raffinée",
      subtitle: 'Raffinée',
      desc: "Un espace d'exception où se mêlent gastronomie, lounge feutré et cave de prestige pour une expérience hors du commun.",
      cta_reserve: 'Réserver une table',
      cta_menu: 'Découvrir le menu',
    },
    restaurant: {
      menu_jour: 'Menu du Jour',
      today_specials: 'Suggestions du Chef',
    }
  },
  en: {
    nav: {
      home: 'Home',
      restaurant: 'Restaurant',
      lounge: 'Lounge',
      cave: 'Wine Cellar',
      events: 'Events',
      reservations: 'Bookings',
      contact: 'Contact',
    },
    hero: {
      welcome: 'Welcome to Bastos',
      title: "Refined Excellence",
      subtitle: 'Refined',
      desc: "An exceptional space where gastronomy, a cozy lounge, and a prestige cellar meet for an extraordinary experience.",
      cta_reserve: 'Book a Table',
      cta_menu: 'Discover the Menu',
    },
    restaurant: {
      menu_jour: 'Menu of the Day',
      today_specials: "Chef's Specials",
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      return saved || 'fr';
    }
    return 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value) value = value[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
