import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { products } from '../data/products';
import { useWishlist } from '../lib/WishlistContext';
import { ProductGrid } from '../components/boutique/ProductGrid';
import { useSeo } from '../hooks/useSeo';

export function WishlistPage() {
  useSeo({
    title: 'Votre liste de souhaits — GlowSkin Accessoires',
    description: 'Retrouvez les accessoires que vous avez mis de côté.',
  });

  const { ids } = useWishlist();
  const wishedProducts = products.filter((p) => ids.includes(p.id));

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-light tracking-title text-brun sm:text-5xl">
          Votre liste de souhaits
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-body text-brun/60">
          Les objets mis de côté pour plus tard, conservés sur cet appareil.
        </p>
      </div>

      {wishedProducts.length === 0 ? (
        <div className="mx-auto mt-14 flex max-w-sm flex-col items-center text-center">
          <Heart size={32} strokeWidth={1} className="text-brun/30" />
          <p className="mt-4 text-sm text-brun/60">
            Aucun produit dans votre liste pour l’instant.
          </p>
          <Link
            to="/boutique"
            className="mt-8 rounded-full bg-sauge px-8 py-3.5 text-sm font-medium tracking-wide text-brun transition-opacity hover:opacity-90"
          >
            Découvrir la boutique
          </Link>
        </div>
      ) : (
        <div className="mt-14">
          <ProductGrid products={wishedProducts} />
        </div>
      )}
    </div>
  );
}
