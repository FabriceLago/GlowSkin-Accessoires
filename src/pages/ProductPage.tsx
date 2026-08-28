import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronRight, Heart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../lib/CartContext';
import { useWishlist } from '../lib/WishlistContext';
import {
  getCare,
  getDescription,
  getGallery,
  getGesture,
  getReviews,
  getReviewSummary,
  getShipping,
  getTagline,
  getVariants,
} from '../lib/productContent';
import { ProductGallery } from '../components/product/ProductGallery';
import { VariantSelector } from '../components/product/VariantSelector';
import { QuantitySelector } from '../components/product/QuantitySelector';
import { TrustBadges } from '../components/product/TrustBadges';
import { ProductTabs } from '../components/product/ProductTabs';
import { ReviewsSection } from '../components/product/ReviewsSection';
import { RelatedProducts } from '../components/product/RelatedProducts';
import { useSeo } from '../hooks/useSeo';

function formatPrice(amount: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.round(rating);
        return (
          <svg
            key={i}
            width={14}
            height={14}
            viewBox="0 0 24 24"
            className={filled ? 'fill-dore text-dore' : 'fill-none text-brun/20'}
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8-6.1-3.6-6.1 3.6 1.5-6.8-5.2-4.7 6.9-.7z" />
          </svg>
        );
      })}
    </div>
  );
}

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  const [selectedVariantId, setSelectedVariantId] = useState(id ?? '');
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCart();
  const { toggle: toggleWishlist, has: hasWishlist } = useWishlist();

  const related = useMemo(() => {
    if (!product) return { ritual: [], alsoLike: [] };
    const others = products.filter((p) => p.id !== product.id);
    const ritual = others
      .filter((p) => p.category !== product.category)
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 3);
    const ritualIds = new Set(ritual.map((p) => p.id));
    const alsoLike = others
      .filter((p) => !ritualIds.has(p.id))
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 4);
    return { ritual, alsoLike };
  }, [product]);

  useSeo({
    title: product
      ? `${product.name} — GlowSkin Accessoires`
      : 'Produit introuvable — GlowSkin Accessoires',
    description: product
      ? getTagline(product)
      : 'Ce produit n’existe pas ou plus.',
    image: product?.resting,
  });

  if (!product) {
    return <Navigate to="/boutique" replace />;
  }

  const gallery = getGallery(product);
  const variants = getVariants(product);
  const activeVariantId = variants.some((v) => v.id === selectedVariantId)
    ? selectedVariantId
    : variants[0].id;
  const isWished = hasWishlist(product.id);

  function handleAddToCart() {
    const activeVariant = variants.find((v) => v.id === activeVariantId);
    addItem(
      {
        productId: product!.id,
        name: product!.name,
        price: product!.price,
        image: product!.resting,
        variantLabel:
          variants.length > 1 ? activeVariant?.label : undefined,
      },
      quantity,
    );
  }

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        {/* Fil d'Ariane */}
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs text-brun/50">
          <Link to="/" className="hover:text-brun">
            Accueil
          </Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/boutique" className="hover:text-brun">
            Boutique
          </Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-brun/70">{product.name}</span>
        </nav>

        {/* Contenu principal */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={gallery} productName={product.name} />

          <div className="lg:sticky lg:top-28 lg:h-fit">
            <h1 className="font-heading text-3xl font-light tracking-title text-brun sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-2">
              <StarRow rating={product.rating} />
              <span className="text-sm text-brun/50">
                {product.rating.toFixed(1)} · {getReviewSummary(product).total} avis
              </span>
            </div>

            <p className="mt-5 text-2xl text-terracotta-ink">
              {formatPrice(product.price)}
            </p>

            <p className="mt-4 max-w-md text-sm leading-body text-brun/70">
              {getTagline(product)}
            </p>

            <div className="mt-6">
              <VariantSelector
                variants={variants}
                selectedId={activeVariantId}
                onSelect={setSelectedVariantId}
              />
            </div>

            <div className="mt-6 flex items-center gap-4">
              <QuantitySelector value={quantity} onChange={setQuantity} />

              <button
                type="button"
                disabled={!product.inStock}
                onClick={handleAddToCart}
                className="flex-1 rounded-full bg-sauge py-3.5 text-sm font-medium tracking-wide text-brun transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {product.inStock ? 'Ajouter au panier' : 'Épuisé'}
              </button>

              <button
                type="button"
                aria-label={
                  isWished
                    ? 'Retirer de la liste de souhaits'
                    : 'Ajouter à la liste de souhaits'
                }
                aria-pressed={isWished}
                onClick={() => toggleWishlist(product.id)}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brun/15 text-brun transition-colors hover:border-terracotta hover:text-terracotta-ink"
              >
                <Heart
                  size={18}
                  strokeWidth={1.5}
                  className={isWished ? 'fill-terracotta text-terracotta-ink' : ''}
                />
              </button>
            </div>

            <p className="mt-4 flex items-center gap-2 text-xs text-brun/60">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  product.inStock ? 'bg-sauge' : 'bg-brun/30'
                }`}
              />
              {product.inStock ? 'En stock — expédié sous 24 à 48h' : 'Actuellement épuisé'}
            </p>

            <div className="mt-6">
              <TrustBadges />
            </div>
          </div>
        </div>

        {/* Onglets */}
        <div className="mt-16 lg:mt-24">
          <ProductTabs
            description={getDescription(product)}
            gesture={getGesture(product)}
            care={getCare(product)}
            shipping={getShipping(product)}
          />
        </div>

        {/* Le rituel complet */}
        {related.ritual.length > 0 && (
          <div className="mt-16 border-t border-dore/20 pt-16 lg:mt-24 lg:pt-24">
            <RelatedProducts
              title="Le rituel complet"
              subtitle="Trois objets qui s’accordent naturellement avec celui-ci."
              products={related.ritual}
              columns={3}
            />
          </div>
        )}

        {/* Avis */}
        <div className="mt-16 border-t border-dore/20 pt-16 lg:mt-24 lg:pt-24">
          <ReviewsSection
            summary={getReviewSummary(product)}
            reviews={getReviews(product)}
          />
        </div>

        {/* Vous aimerez aussi */}
        {related.alsoLike.length > 0 && (
          <div className="mt-16 border-t border-dore/20 pt-16 lg:mt-24 lg:pt-24">
            <RelatedProducts
              title="Vous aimerez aussi"
              products={related.alsoLike}
              columns={4}
            />
          </div>
        )}
      </div>
    </div>
  );
}
