import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, Plus as PlusCircle } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { getSuggestedProduct } from '../../lib/productContent';

function formatPrice(amount: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    addItem,
    subtotal,
    freeShippingThreshold,
    amountToFreeShipping,
    freeShippingProgress,
    hasFreeShipping,
  } = useCart();

  const suggestion = useMemo(
    () => getSuggestedProduct(items.map((i) => i.productId)),
    [items],
  );

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden={!isOpen}
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-brun/30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Panier"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-ivoire shadow-diffuse transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-dore/20 px-6 py-5">
          <h2 className="font-heading text-xl font-normal tracking-title text-brun">
            Votre panier
          </h2>
          <button
            type="button"
            aria-label="Fermer le panier"
            onClick={closeCart}
            className="text-brun transition-opacity hover:opacity-60"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Livraison offerte */}
        <div className="border-b border-dore/20 px-6 py-5">
          {hasFreeShipping ? (
            <p className="text-sm text-sauge-ink">
              Livraison offerte débloquée — profitez-en.
            </p>
          ) : (
            <p className="text-sm text-brun/70">
              Plus que{' '}
              <span className="font-medium text-terracotta-ink">
                {formatPrice(amountToFreeShipping)}
              </span>{' '}
              pour la livraison offerte.
            </p>
          )}
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-sable">
            <div
              className="h-full rounded-full bg-sauge transition-all duration-500 ease-out"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
          <p className="mt-1 text-right text-xs text-brun/50">
            Livraison offerte dès {formatPrice(freeShippingThreshold)}
          </p>
        </div>

        {/* Contenu */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag
                size={32}
                strokeWidth={1}
                className="text-brun/30"
              />
              <p className="text-sm text-brun/60">
                Votre panier est vide pour le moment.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 text-sm font-medium text-terracotta-ink underline underline-offset-4"
              >
                Découvrir la boutique
              </button>
            </div>
          ) : (
            <>
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={item.lineId} className="flex gap-4">
                    <img
                      loading="lazy"
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-card object-cover"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm text-brun">{item.name}</p>
                          {item.variantLabel && (
                            <p className="mt-0.5 text-xs text-brun/50">
                              {item.variantLabel}
                            </p>
                          )}
                        </div>
                        <button
                          type="button"
                          aria-label={`Retirer ${item.name}`}
                          onClick={() => removeItem(item.lineId)}
                          className="text-brun/40 hover:text-terracotta-ink"
                        >
                          <X size={14} strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 rounded-full border border-brun/15 px-2 py-1">
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
                          <span className="text-xs text-brun">
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
                        <p className="text-sm text-brun">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Complétez votre rituel */}
              {suggestion && (
                <div className="mt-8 border-t border-dore/20 pt-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-brun/50">
                    Complétez votre rituel
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <img
                      loading="lazy"
                      src={suggestion.resting}
                      alt={suggestion.name}
                      className="h-14 w-14 rounded-card object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-brun">{suggestion.name}</p>
                      <p className="text-xs text-terracotta-ink">
                        {formatPrice(suggestion.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Ajouter ${suggestion.name} au panier`}
                      onClick={() =>
                        addItem({
                          productId: suggestion.id,
                          name: suggestion.name,
                          price: suggestion.price,
                          image: suggestion.resting,
                        })
                      }
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brun/15 text-brun transition-colors hover:border-sauge hover:text-sauge-ink"
                    >
                      <PlusCircle size={14} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-dore/20 px-6 py-5">
            <div className="flex items-center justify-between text-base">
              <span className="text-brun/70">Sous-total</span>
              <span className="font-medium text-brun">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-xs text-brun/50">
              Frais de livraison calculés à l’étape suivante.
            </p>
            <Link
              to="/panier"
              onClick={closeCart}
              className="mt-5 block w-full rounded-full bg-brun py-3.5 text-center text-sm font-medium tracking-wide text-ivoire transition-opacity hover:opacity-90"
            >
              Commander
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
