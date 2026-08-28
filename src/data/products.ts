/**
 * Catalogue boutique — 12 produits.
 * Images: TEMP placeholders picsum.photos en attendant la sélection
 * Unsplash finale (voir bannerImage plus bas) — à remplacer uniquement ici.
 */

function placeholder(seed: string, w: number, h: number) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

export const categories = [
  'Sculpter',
  'Nettoyer',
  'Masser',
  'Accessoires',
  'Coffrets',
] as const;

export type Category = (typeof categories)[number];

export const materialFilters = [
  'Jade',
  'Quartz rose',
  'Bambou',
  'Konjac',
  'Silicone',
] as const;

export type MaterialFilter = (typeof materialFilters)[number];

export type Variant = {
  id: string;
  label: string;
  swatch: string;
};

export type Review = {
  id: string;
  name: string;
  city: string;
  rating: number;
  date: string;
  text: string;
  photo: string;
};

export type ReviewSummary = {
  average: number;
  total: number;
  /** Pourcentage par note, de 5★ à 1★. */
  distribution: [number, number, number, number, number];
};

export type Product = {
  id: string;
  name: string;
  category: Category;
  material: string;
  materialFilter: MaterialFilter | null;
  price: number;
  rating: number;
  isNew: boolean;
  popularity: number;
  inStock: boolean;
  resting: string;
  hover: string;
  /** Contenu éditorial de la fiche produit — optionnel, avec repli générique. */
  tagline?: string;
  gallery?: string[];
  description?: string;
  gesture?: string[];
  care?: string;
  shipping?: string;
  variants?: Variant[];
  reviewSummary?: ReviewSummary;
  reviews?: Review[];
};

export const bannerImage =
  'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1920&q=80';

export const products: Product[] = [
  {
    id: 'gua-sha-aurore',
    name: 'Gua Sha Quartz Rose « Aurore »',
    category: 'Sculpter',
    material: 'Quartz rose',
    materialFilter: 'Quartz rose',
    price: 34,
    rating: 4.8,
    isNew: true,
    popularity: 95,
    inStock: true,
    resting:
      'https://images.unsplash.com/photo-1643379855889-850035817d24?auto=format&fit=crop&w=800&q=80',
    hover:
      'https://images.unsplash.com/photo-1686828242013-b5107e964a31?auto=format&fit=crop&w=800&q=80',
    tagline:
      'Un galet de quartz rose taillé pour épouser chaque courbe du visage, à passer lentement, sans forcer.',
    gallery: [
      'https://images.unsplash.com/photo-1586220742613-b731f66f7743?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1728234553997-f71b87a44e13?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1775642548888-7183ff686cb6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1642890642179-561427067137?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?auto=format&fit=crop&w=1000&q=80',
    ],
    description:
      'Taillé dans un quartz rose brut poli à la main, ce gua sha épouse les contours du visage pour un geste lent, presque méditatif. Sa fraîcheur naturelle accompagne chaque mouvement, du menton vers les tempes, sans jamais forcer. On l’aime pour son poids juste, sa prise en main évidente et le rituel qu’il installe, chaque matin, avant même d’ouvrir les yeux. Un objet à garder à vue, tant il est beau.',
    gesture: [
      'Nettoyez votre peau et appliquez une huile ou un sérum pour faciliter le glissement.',
      'Partez du centre du visage vers l’extérieur, en légère inclinaison.',
      'Remontez le long de la mâchoire, des joues puis du front, en 3 à 5 passages par zone.',
      'Terminez par le cou, du bas vers le haut, pour accompagner le geste.',
      'Comptez 3 à 5 minutes, matin ou soir, selon votre rituel.',
    ],
    care: 'Rincez le gua sha à l’eau tiède après chaque utilisation et séchez-le avec un tissu doux. Évitez les chocs et les écarts de température brusques, qui peuvent fragiliser la pierre. Rangez-le dans sa pochette en lin pour le protéger de la poussière et des rayures.',
    shipping:
      'Livraison offerte dès 49€ d’achat, expédition sous 24 à 48h. Retours et échanges possibles sous 30 jours, produit non utilisé et dans son emballage d’origine. Paiement en 3 fois sans frais disponible dès 30€ d’achat.',
    variants: [
      { id: 'quartz-rose', label: 'Quartz rose', swatch: '#E8C4C4' },
      { id: 'jade', label: 'Jade', swatch: '#A3B18A' },
      { id: 'obsidienne', label: 'Obsidienne', swatch: '#3B332C' },
    ],
    reviewSummary: {
      average: 4.8,
      total: 128,
      distribution: [78, 15, 4, 2, 1],
    },
    reviews: [
      {
        id: 'r1',
        name: 'Camille',
        city: 'Lyon',
        rating: 5,
        date: '12 juillet 2026',
        text: 'La pierre est fraîche et douce, exactement ce qu’il fallait pour mon rituel du matin. Le poids est parfait, ni trop léger ni trop lourd.',
        photo:
          'https://images.unsplash.com/photo-1496091073051-280ef67ea854?auto=format&fit=crop&w=200&h=200&q=80',
      },
      {
        id: 'r2',
        name: 'Inès',
        city: 'Bordeaux',
        rating: 5,
        date: '3 juillet 2026',
        text: 'Un bel objet qui donne envie de prendre ce moment pour soi. Le quartz est bien poli, aucune arête qui accroche.',
        photo:
          'https://images.unsplash.com/photo-1778536756272-5fcada0705c4?auto=format&fit=crop&w=200&h=200&q=80',
      },
      {
        id: 'r3',
        name: 'Léa',
        city: 'Bruxelles',
        rating: 4,
        date: '28 juin 2026',
        text: 'Très joli, agréable à utiliser. J’aurais aimé une pochette un peu plus épaisse pour le voyage.',
        photo:
          'https://images.unsplash.com/photo-1771334417976-019375d33ac2?auto=format&fit=crop&w=200&h=200&q=80',
      },
      {
        id: 'r4',
        name: 'Margaux',
        city: 'Nantes',
        rating: 5,
        date: '15 juin 2026',
        text: 'Mon geste du soir préféré. Simple, sensoriel, sans chichi. Je recommande sans hésiter.',
        photo: placeholder('glowskin-review-4', 200, 200),
      },
    ],
  },
  {
    id: 'rouleau-jade-rosee',
    name: 'Rouleau de Jade « Rosée »',
    category: 'Sculpter',
    material: 'Jade',
    materialFilter: 'Jade',
    price: 29,
    rating: 4.9,
    isNew: false,
    popularity: 98,
    inStock: true,
    resting:
      'https://images.unsplash.com/photo-1578747763484-51b21a33e4fa?auto=format&fit=crop&w=800&q=80',
    hover:
      'https://images.unsplash.com/photo-1564512480295-86e479d9b87c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'brosse-konjac-nuit-claire',
    name: 'Brosse Konjac Charbon « Nuit Claire »',
    category: 'Nettoyer',
    material: 'Konjac',
    materialFilter: 'Konjac',
    price: 12,
    rating: 4.6,
    isNew: true,
    popularity: 80,
    inStock: true,
    resting:
      'https://images.unsplash.com/photo-1703022944590-921741825e86?auto=format&fit=crop&w=800&q=80',
    hover:
      'https://images.unsplash.com/photo-1678836906961-604f9c940626?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bandeau-spa-cocon',
    name: 'Bandeau Spa Lin « Cocon »',
    category: 'Accessoires',
    material: 'Lin lavé',
    materialFilter: null,
    price: 24,
    rating: 4.9,
    isNew: false,
    popularity: 90,
    inStock: true,
    resting:
      'https://images.unsplash.com/photo-1775642546902-1b9a23f50e54?auto=format&fit=crop&w=800&q=80',
    hover:
      'https://images.unsplash.com/photo-1775642546002-b57c1ae120d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'masque-led-halo',
    name: 'Masque LED « Halo »',
    category: 'Masser',
    material: 'Silicone',
    materialFilter: 'Silicone',
    price: 89,
    rating: 4.7,
    isNew: true,
    popularity: 88,
    inStock: false,
    resting:
      'https://images.unsplash.com/photo-1775642542636-30a577d06996?auto=format&fit=crop&w=800&q=80',
    hover:
      'https://images.unsplash.com/photo-1767978667609-747f729ee074?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pinceaux-bambou-atelier',
    name: 'Set Pinceaux Bambou « Atelier »',
    category: 'Accessoires',
    material: 'Bambou',
    materialFilter: 'Bambou',
    price: 46,
    rating: 4.8,
    isNew: false,
    popularity: 70,
    inStock: true,
    resting:
      'https://images.unsplash.com/photo-1633878353784-8c6182fc93fd?auto=format&fit=crop&w=800&q=80',
    hover:
      'https://images.unsplash.com/photo-1633878353784-8c6182fc93fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'eponge-konjac-petale',
    name: 'Éponge Konjac Rose « Pétale »',
    category: 'Nettoyer',
    material: 'Konjac',
    materialFilter: 'Konjac',
    price: 14,
    rating: 4.7,
    isNew: false,
    popularity: 85,
    inStock: true,
    resting:
      'https://images.unsplash.com/photo-1776903200781-10d4112d834e?auto=format&fit=crop&w=800&q=80',
    hover:
      'https://images.unsplash.com/photo-1776903200781-10d4112d834e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'spatule-ceramique-grain',
    name: 'Spatule Céramique « Grain »',
    category: 'Accessoires',
    material: 'Céramique',
    materialFilter: null,
    price: 16,
    rating: 4.5,
    isNew: false,
    popularity: 60,
    inStock: true,
    resting:
      'https://images.unsplash.com/photo-1572003414130-d1b4632a0d73?auto=format&fit=crop&w=800&q=80',
    hover:
      'https://images.unsplash.com/photo-1523367310297-83064fc42a16?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cuillere-cryo-givre',
    name: 'Cuillère Cryo Inox « Givre »',
    category: 'Masser',
    material: 'Inox',
    materialFilter: null,
    price: 22,
    rating: 4.8,
    isNew: true,
    popularity: 82,
    inStock: true,
    resting: placeholder('glowskin-boutique-cryo-1', 800, 1000),
    hover: placeholder('glowskin-boutique-cryo-2', 800, 1000),
  },
  {
    id: 'coffret-rituel-vepres',
    name: 'Coffret Rituel du Soir « Vêpres »',
    category: 'Coffrets',
    material: 'Jade & lin',
    materialFilter: null,
    price: 68,
    rating: 4.9,
    isNew: false,
    popularity: 92,
    inStock: true,
    resting: placeholder('glowskin-boutique-coffret-1', 800, 1000),
    hover: placeholder('glowskin-boutique-coffret-2', 800, 1000),
  },
  {
    id: 'miroir-laiton-reflet',
    name: 'Miroir Grossissant Laiton « Reflet »',
    category: 'Accessoires',
    material: 'Laiton',
    materialFilter: null,
    price: 52,
    rating: 4.6,
    isNew: false,
    popularity: 55,
    inStock: false,
    resting:
      'https://images.unsplash.com/photo-1762101199040-585bc508dcf1?auto=format&fit=crop&w=800&q=80',
    hover:
      'https://images.unsplash.com/photo-1762101199040-585bc508dcf1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'trousse-lin-voyage',
    name: 'Trousse Lin Lavé « Voyage »',
    category: 'Accessoires',
    material: 'Lin lavé',
    materialFilter: null,
    price: 38,
    rating: 4.7,
    isNew: false,
    popularity: 65,
    inStock: true,
    resting:
      'https://images.unsplash.com/photo-1709303014108-5d988f63864f?auto=format&fit=crop&w=800&q=80',
    hover:
      'https://images.unsplash.com/photo-1709303013212-0f7801f9b41d?auto=format&fit=crop&w=800&q=80',
  },
];
