import { products } from '../data/products';
import type { Product, Review, ReviewSummary, Variant } from '../data/products';

/** Un produit à suggérer dans le panier, absent des lignes déjà présentes. */
export function getSuggestedProduct(cartProductIds: string[]): Product | null {
  const candidates = products
    .filter((p) => p.inStock && !cartProductIds.includes(p.id))
    .sort((a, b) => b.popularity - a.popularity);
  return candidates[0] ?? null;
}

const materialSwatches: Record<string, string> = {
  Jade: '#A3B18A',
  'Quartz rose': '#E8C4C4',
  Bambou: '#C9A24D',
  Konjac: '#D9CFC1',
  Silicone: '#C98B6B',
  'Lin lavé': '#E4DACB',
  Céramique: '#EDE7DD',
  Inox: '#B8B4AC',
  'Jade & lin': '#A3B18A',
  Laiton: '#C9A24D',
};

export const DEFAULT_SHIPPING =
  'Livraison offerte dès 49€ d’achat, expédition sous 24 à 48h. Retours et échanges possibles sous 30 jours, produit non utilisé et dans son emballage d’origine. Paiement en 3 fois sans frais disponible dès 30€ d’achat.';

const DEFAULT_CARE =
  'Nettoyez délicatement à l’eau tiède après chaque utilisation et séchez avec un tissu doux. Évitez les chocs et les écarts de température brusques. Rangez-le à l’abri de la poussière, dans sa pochette d’origine si vous en avez une.';

export function getTagline(product: Product): string {
  return (
    product.tagline ??
    `Un objet en ${product.material.toLowerCase()}, choisi pour sa matière et sa constance dans le temps.`
  );
}

export function getGallery(product: Product): string[] {
  if (product.gallery && product.gallery.length > 0) return product.gallery;
  const base = [product.resting, product.hover];
  return Array.from({ length: 5 }, (_, i) => base[i % base.length]);
}

export function getDescription(product: Product): string {
  return (
    product.description ??
    `${product.name} accompagne un rituel simple, sans artifice. Sa matière, ${product.material.toLowerCase()}, se choisit pour sa constance : elle traverse les saisons sans s’altérer, et gagne en caractère à mesure qu’elle est utilisée. On l’adopte pour son geste, pas pour une promesse — juste un moment posé, répété, qui finit par compter. Un objet pensé pour durer, à garder à vue plutôt qu’au fond d’un tiroir.`
  );
}

export function getGesture(product: Product): string[] {
  return (
    product.gesture ?? [
      'Préparez votre peau : nettoyée, légèrement humide ou avec un sérum.',
      `Utilisez ${product.name.split(' « ')[0].toLowerCase()} par mouvements lents, sans forcer.`,
      'Accordez-vous 3 à 5 minutes, matin ou soir selon votre rituel.',
      'Rincez et rangez l’accessoire après chaque usage.',
    ]
  );
}

export function getCare(product: Product): string {
  return product.care ?? DEFAULT_CARE;
}

export function getShipping(product: Product): string {
  return product.shipping ?? DEFAULT_SHIPPING;
}

export function getVariants(product: Product): Variant[] {
  if (product.variants && product.variants.length > 0) return product.variants;
  return [
    {
      id: product.id,
      label: product.material,
      swatch: materialSwatches[product.material] ?? '#A3B18A',
    },
  ];
}

export function getReviewSummary(product: Product): ReviewSummary {
  if (product.reviewSummary) return product.reviewSummary;
  const average = product.rating;
  return {
    average,
    total: Math.round(product.popularity * 1.2),
    distribution: [70, 20, 6, 3, 1],
  };
}

export function getReviews(product: Product): Review[] {
  if (product.reviews && product.reviews.length > 0) return product.reviews;
  const generic: Omit<Review, 'photo'>[] = [
    {
      id: 'g1',
      name: 'Alix',
      city: 'Lille',
      rating: 5,
      date: '9 juillet 2026',
      text: 'Exactement ce que je cherchais, la matière est belle et le geste devient vite une habitude.',
    },
    {
      id: 'g2',
      name: 'Noor',
      city: 'Marseille',
      rating: 4,
      date: '2 juillet 2026',
      text: 'Très satisfaite, un bel objet du quotidien. Livraison rapide en plus.',
    },
    {
      id: 'g3',
      name: 'Salomé',
      city: 'Strasbourg',
      rating: 5,
      date: '20 juin 2026',
      text: 'Simple et efficace, sans promesse exagérée. Ça change, et ça fonctionne.',
    },
    {
      id: 'g4',
      name: 'Yasmine',
      city: 'Toulouse',
      rating: 4,
      date: '11 juin 2026',
      text: 'Beau, agréable en main, et le rituel qu’il installe vaut à lui seul le prix.',
    },
  ];
  return generic.map((r, i) => ({
    ...r,
    photo: `https://picsum.photos/seed/${product.id}-review-${i}/200/200`,
  }));
}
