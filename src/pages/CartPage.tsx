import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Minus,
  Plus,
  Trash2,
  ShieldCheck,
  CreditCard,
  Lock,
  ShoppingBag,
} from 'lucide-react';
import { useCart } from '../lib/CartContext';
import { useSeo } from '../hooks/useSeo';

function formatPrice(amount: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

const trustItems = [
  { icon: ShieldCheck, label: 'Paiement 100% sécurisé' },
  { icon: CreditCard, label: 'CB, PayPal, Apple Pay, 3x sans frais' },
  { icon: Lock, label: 'Données chiffrées, jamais partagées' },
];

export function CartPage() {
  useSeo({
    title: 'Votre panier — GlowSkin Accessoires',
    description: 'Vérifiez votre panier avant de passer commande.',
  });

  const {
    items,
    updateQuantity,
    removeItem,
    subtotal,
    freeShippingThreshold,
    hasFreeShipping,
    promoCode,
    applyPromoCode,
    discount,
    discountedSubtotal,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState(false);

  function handleApplyPromo(e: React.FormEvent) {
    e.preventDefault();
    const isValid = applyPromoCode(promoInput);
    setPromoError(!isValid);
  }

  const estimatedShippingLabel = hasFreeShipping
    ? 'Offerte'
    : `à partir de ${formatPrice(3.5)}`;

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
        <ShoppingBag size={32} strokeWidth={1} className="text-brun/30" />
        <h1 className="mt-4 font-heading text-2xl font-light tracking-title text-brun">
          Votre panier est vide
        </h1>
        <p className="mt-2 text-sm text-brun/60">
          Découvrez nos accessoires et commencez votre rituel.
        </p>
        <Link
          to="/boutique"
          className="mt-8 rounded-full bg-sauge px-8 py-3.5 text-sm font-medium tracking-wide text-brun transition-opacity hover:opacity-90"
        >
          Découvrir la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <h1 className="font-heading text-3xl font-light tracking-title text-brun sm:text-4xl">
        Votre panier
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
        {/* Tableau détaillé */}
        <div>
          <div className="hidden border-b border-dore/20 pb-3 text-xs uppercase tracking-widest text-brun/45 sm:grid sm:grid-cols-[1fr_100px_100px_40px]">
            <span>Produit</span>
            <span className="text-center">Quantité</span>
            <span className="text-right">Sous-total</span>
            <span />
          </div>

          <ul>
            {items.map((item) => (
              <li
                key={item.lineId}
                className="grid grid-cols-1 items-center gap-4 border-b border-dore/20 py-6 sm:grid-cols-[1fr_100px_100px_40px]"
              >
                <div className="flex items-center gap-4">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-card object-cover"
                  />
                  <div>
                    <p className="text-sm text-brun">{item.name}</p>
                    {item.variantLabel && (
                      <p className="mt-0.5 text-xs text-brun/50">
                        {item.variantLabel}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-brun/50">
                      {formatPrice(item.price)} / unité
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-full border border-brun/15 px-2 py-1 sm:justify-self-center">
                  <button
                    type="button"
                    aria-label="Diminuer la quantité"
                    onClick={() =>
                      updateQuantity(item.lineId, item.quantity - 1)
                    }
                    className="text-brun/60 hover:text-brun"
                  >
                    <Minus size={12} strokeWidth={1.5} />
                  </button>
                  <span className="w-4 text-center text-xs text-brun">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Augmenter la quantité"
                    onClick={() =>
                      updateQuantity(item.lineId, item.quantity + 1)
                    }
                    className="text-brun/60 hover:text-brun"
                  >
                    <Plus size={12} strokeWidth={1.5} />
                  </button>
                </div>

                <p className="text-sm font-medium text-brun sm:text-right">
                  {formatPrice(item.price * item.quantity)}
                </p>

                <button
                  type="button"
                  aria-label={`Retirer ${item.name}`}
                  onClick={() => removeItem(item.lineId)}
                  className="text-brun/40 transition-colors hover:text-terracotta-ink sm:justify-self-center"
                >
                  <Trash2 size={16} strokeWidth={1.5} />
                </button>
              </li>
            ))}
          </ul>

          {/* Code promo */}
          <form
            onSubmit={handleApplyPromo}
            className="mt-8 flex max-w-sm items-center gap-2"
          >
            <input
              type="text"
              value={promoInput}
              onChange={(e) => {
                setPromoInput(e.target.value);
                setPromoError(false);
              }}
              placeholder="Code promo"
              className="flex-1 rounded-full border border-brun/15 bg-ivoire px-4 py-2.5 text-sm text-brun placeholder:text-brun/40 focus:border-terracotta focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full border border-brun/15 px-5 py-2.5 text-sm text-brun transition-colors hover:border-brun"
            >
              Appliquer
            </button>
          </form>
          {promoCode && (
            <p className="mt-2 text-xs text-sauge-ink">
              Code « {promoCode} » appliqué — 10% de réduction.
            </p>
          )}
          {promoError && (
            <p className="mt-2 text-xs text-terracotta-ink">
              Ce code n’est pas valide.
            </p>
          )}
        </div>

        {/* Récapitulatif sticky */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-card border border-dore/20 bg-ivoire p-6">
            <h2 className="font-heading text-lg font-normal text-brun">
              Récapitulatif
            </h2>

            <div className="mt-5 flex flex-col gap-2.5 text-sm">
              <div className="flex justify-between text-brun/70">
                <span>Sous-total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {promoCode && (
                <div className="flex justify-between text-sauge-ink">
                  <span>Réduction (10%)</span>
                  <span>-{formatPrice(discount)}</span>
                </div>
              )}
              <div className="flex justify-between text-brun/70">
                <span>Livraison estimée</span>
                <span>{estimatedShippingLabel}</span>
              </div>
            </div>

            {!hasFreeShipping && (
              <p className="mt-3 text-xs text-brun/50">
                Ajoutez{' '}
                {formatPrice(freeShippingThreshold - subtotal)} pour la
                livraison offerte.
              </p>
            )}

            <div className="mt-5 flex items-center justify-between border-t border-dore/20 pt-4 text-base">
              <span className="font-medium text-brun">Total estimé</span>
              <span className="font-medium text-brun">
                {formatPrice(discountedSubtotal)}
              </span>
            </div>

            <Link
              to="/commande"
              className="mt-6 block w-full rounded-full bg-brun py-3.5 text-center text-sm font-medium tracking-wide text-ivoire transition-opacity hover:opacity-90"
            >
              Passer la commande
            </Link>
          </div>

          {/* Réassurance paiement */}
          <ul className="mt-6 flex flex-col gap-3">
            {trustItems.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-xs text-brun/60"
              >
                <Icon size={16} strokeWidth={1.5} className="text-sauge-ink" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
