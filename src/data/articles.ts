export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string };

export type Article = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  date: string;
  cover: string;
  content: ArticleBlock[];
};

export const articles: Article[] = [
  {
    id: 'routine-soir-7-minutes',
    slug: 'la-routine-du-soir-en-7-minutes',
    title: 'La routine du soir en 7 minutes',
    category: 'Rituel',
    excerpt:
      'Pas besoin de dix étapes pour bien faire. Un déroulé simple, minuté, à répéter sans y penser.',
    readingTime: '4 min',
    date: '18 août 2026',
    cover:
      'https://images.unsplash.com/photo-1775642545477-44baad8a5a29?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'On associe souvent « rituel » à une longue liste d’étapes. Chez nous, c’est l’inverse : moins de gestes, mieux choisis, répétés avec constance. Voici la routine du soir telle qu’on la pratique, en sept minutes montre en main.',
      },
      {
        type: 'heading',
        text: 'Minute 1 à 2 — Démaquiller et nettoyer',
      },
      {
        type: 'paragraph',
        text: 'Un nettoyant doux, de l’eau tiède, et la brosse konjac pour activer le nettoyage sans agresser. C’est le seul moment où l’on va un peu vite : le reste du rituel ralentit tout.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1703022944590-921741825e86?auto=format&fit=crop&w=1000&q=80',
        alt: 'Brosse konjac posée près d’un lavabo, lumière du soir',
      },
      {
        type: 'heading',
        text: 'Minute 3 à 5 — Sculpter avec le gua sha',
      },
      {
        type: 'paragraph',
        text: 'Une à deux gouttes d’huile, puis le gua sha : du menton vers les tempes, du centre vers l’extérieur. On ne cherche pas la performance, juste la régularité. C’est souvent le moment où l’on respire enfin.',
      },
      {
        type: 'heading',
        text: 'Minute 6 à 7 — Sceller et apaiser',
      },
      {
        type: 'paragraph',
        text: 'Un soin de nuit, appliqué en tapotant plutôt qu’en frottant. On termine par quelques respirations, mains posées sur le visage. Rien de plus — et c’est largement suffisant, chaque soir.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1599847987657-881f11b92a75?auto=format&fit=crop&w=1000&q=80',
        alt: 'Mains posées délicatement sur le visage, lumière chaude',
      },
      {
        type: 'paragraph',
        text: 'Le secret n’est pas dans la durée, mais dans la répétition. Sept minutes, tous les soirs, valent mieux qu’une heure une fois par mois.',
      },
    ],
  },
  {
    id: 'choisir-guasha-peau',
    slug: 'choisir-son-gua-sha-selon-sa-peau',
    title: 'Choisir son gua sha selon sa peau',
    category: 'Guide produit',
    excerpt:
      'Quartz rose, jade ou obsidienne : chaque pierre a sa texture et sa température. Un petit guide pour s’y retrouver.',
    readingTime: '5 min',
    date: '9 août 2026',
    cover:
      'https://images.unsplash.com/photo-1643379855889-850035817d24?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'On nous demande souvent quelle pierre choisir. La vérité : il n’y a pas de mauvais choix, seulement des préférences de toucher et de rituel. Voici comment nous les distinguons.',
      },
      {
        type: 'heading',
        text: 'Le quartz rose — pour un geste doux',
      },
      {
        type: 'paragraph',
        text: 'Légèrement plus tendre au toucher, le quartz rose garde la chaleur de la main un peu plus longtemps que le jade. On l’aime pour les routines du matin, quand la peau est encore endormie.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1728234553997-f71b87a44e13?auto=format&fit=crop&w=1000&q=80',
        alt: 'Gros plan sur un gua sha en quartz rose, texture polie',
      },
      {
        type: 'heading',
        text: 'Le jade — pour la fraîcheur',
      },
      {
        type: 'paragraph',
        text: 'Plus dense, le jade reste frais plus longtemps au contact de la peau. C’est notre recommandation pour les soirs d’été, ou pour celles qui aiment sentir immédiatement la différence.',
      },
      {
        type: 'heading',
        text: 'L’obsidienne — pour un rituel plus affirmé',
      },
      {
        type: 'paragraph',
        text: 'Plus sombre, plus dense, l’obsidienne convient à celles qui cherchent un geste plus appuyé. Elle demande un peu plus d’huile pour bien glisser, mais le résultat en main est incomparable.',
      },
      {
        type: 'paragraph',
        text: 'Au fond, la meilleure pierre est celle qu’on a envie de tenir tous les jours. Fiez-vous à ce que vos mains préfèrent.',
      },
    ],
  },
  {
    id: 'entretenir-accessoires-guide',
    slug: 'entretenir-ses-accessoires-le-guide',
    title: 'Entretenir ses accessoires : le guide',
    category: 'Entretien',
    excerpt:
      'Pierre, bois, lin ou céramique : chaque matière demande un entretien différent. De quoi faire durer vos objets, longtemps.',
    readingTime: '3 min',
    date: '2 août 2026',
    cover:
      'https://images.unsplash.com/photo-1679466230939-f5a52131af01?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: 'Un bel objet mal entretenu perd vite son éclat. Voici nos conseils, matière par matière, pour que vos accessoires traversent les années sans faiblir.',
      },
      {
        type: 'heading',
        text: 'Pierres (jade, quartz rose, obsidienne)',
      },
      {
        type: 'paragraph',
        text: 'Rincez à l’eau tiède après chaque usage, séchez avec un tissu doux. Évitez les chocs thermiques : ne passez jamais une pierre chaude sous l’eau froide, ou l’inverse.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1709303014108-5d988f63864f?auto=format&fit=crop&w=1000&q=80',
        alt: 'Accessoires de soin séchant sur un linge en lin',
      },
      {
        type: 'heading',
        text: 'Bois et bambou',
      },
      {
        type: 'paragraph',
        text: 'Nettoyez avec un chiffon légèrement humide, jamais immergé. Une goutte d’huile neutre une fois par mois garde le bois souple et évite qu’il ne se fende.',
      },
      {
        type: 'heading',
        text: 'Lin et textiles',
      },
      {
        type: 'paragraph',
        text: 'Lavage à froid, séchage à l’air libre. Le lin lavé gagne en douceur à chaque lavage — inutile de le brusquer.',
      },
      {
        type: 'paragraph',
        text: 'Le bon entretien, c’est surtout une question d’habitude : quelques secondes après chaque usage suffisent à faire durer un objet des années.',
      },
    ],
  },
];
