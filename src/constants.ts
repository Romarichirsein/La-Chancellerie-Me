export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const SERVICES: Service[] = [
  {
    id: 'chicha',
    title: 'Chicha Lounge',
    description: 'Une sélection premium des meilleurs tabacs et saveurs dans un cadre apaisant.',
    image: '/images/hero_lounge.jpg',
    link: '/services/chicha'
  },
  {
    id: 'restaurant',
    title: 'Restaurant Gastronomique',
    description: 'Une cuisine d\'exception alliant tradition et modernité pour vos palais les plus fins.',
    image: '/images/hero_restaurant.jpg',
    link: '/services/restaurant'
  },
  {
    id: 'cave',
    title: 'Cave à Vin',
    description: 'Des crus prestigieux sélectionnés avec soin par nos experts sommeliers.',
    image: '/images/hero_cave.jpg',
    link: '/services/cave'
  },
  {
    id: 'cigare',
    title: 'Salon de Cigare',
    description: 'L\'élégance du cigare dans un espace dédié aux amateurs et connaisseurs.',
    image: '/images/hero_cigar.jpg',
    link: '/services/cigare'
  }
];

export const CONTACT_INFO = {
  address: 'Bastos, Yaoundé, Cameroun',
  phones: ['+237 696 35 51 70', '+237 695 61 29 53', '+237 696 71 57 58'],
  email: 'contact@lachancellerie.cm',
  hours: 'Lun - Dim: 12:00 - 02:00'
};

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  category: 'Live Music' | 'Themed Night' | 'Tasting';
}

export const EVENTS: EventItem[] = [
  {
    id: 'jazz-night',
    title: 'Soirée Jazz & Gastronomie',
    date: '2026-05-15',
    time: '20:00',
    description: 'Une soirée envoûtante avec le quintet de jazz "Bastos Rhythm" tout en dégustant nos plats signatures.',
    image: '/images/lounge_red.jpg',
    category: 'Live Music'
  },
  {
    id: 'wine-tasting',
    title: 'Dégustation Millésimes Bordeaux',
    date: '2026-05-22',
    time: '18:30',
    description: 'Découvrez 5 crus prestigieux de la région de Bordeaux sélectionnés par notre sommelier en chef.',
    image: '/images/hero_cave.jpg',
    category: 'Tasting'
  },
  {
    id: 'cuban-night',
    title: 'Nuit Cubaine & Cigares',
    date: '2026-05-29',
    time: '21:00',
    description: 'Immersion totale dans l\'ambiance de La Havane avec cocktails exclusifs et sélection de cigares rares.',
    image: '/images/hero_cigar.jpg',
    category: 'Themed Night'
  }
];
