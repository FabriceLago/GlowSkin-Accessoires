import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { shippingOptions, useCheckout } from '../../lib/CheckoutContext';

function formatPrice(amount: number) {
  return amount === 0
    ? 'Offerte'
    : new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
      }).format(amount);
}

export function ShippingStep() {
  const { items, subtotal, hasFreeShipping } = useCart();
  const { address, shippingOptionId, setShippingOptionId } = useCheckout();
  const navigate = useNavigate();

  useEffect(() => {
    if (!shippingOptionId) {
      setShippingOptionId(hasFreeShipping ? 'offerte' : 'colissimo');
    }
  }, [shippingOptionId, hasFreeShipping, setShippingOptionId]);

  if (items.length === 0) {
    return <Navigate to="/panier" replace />;
  }
  if (!address.email) {
    return <Navigate to="/commande" replace />;
  }

  function handleContinue() {
    navigate('/commande/paiement');
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-12 lg:py-16">
      <h1 className="font-heading text-2xl font-light tracking-title text-brun sm:text-3xl">
        Choisissez votre livraison
      </h1>
      <p className="mt-2 text-sm text-brun/60">
        Sous-total : {formatPrice(subtotal)}
        {!hasFreeShipping &&
          ` — livraison offerte dès 49€ d’achat`}
      </p>

      <div className="mt-8 flex flex-col gap-3">
        {shippingOptions.map((option) => {
          const isFreeOption = option.id === 'offerte';
          const isDisabled = isFreeOption && !hasFreeShipping;
          const isSelected = shippingOptionId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              disabled={isDisabled}
              onClick={() => setShippingOptionId(option.id)}
              className={`flex items-center justify-between rounded-card border px-5 py-4 text-left transition-colors ${
                isDisabled
                  ? 'cursor-not-allowed border-brun/10 opacity-40'
                  : isSelected
                    ? 'border-terracotta bg-ivoire'
                    : 'border-brun/15 bg-ivoire hover:border-brun/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    isSelected
                      ? 'border-terracotta bg-terracotta'
                      : 'border-brun/30'
                  }`}
                >
                  {isSelected && (
                    <Check size={11} strokeWidth={2.5} className="text-brun" />
                  )}
                </span>
                <div>
                  <p className="text-sm text-brun">{option.label}</p>
                  <p className="text-xs text-brun/50">
                    {isDisabled
                      ? 'Disponible dès 49€ d’achat'
                      : option.detail}
                  </p>
                </div>
              </div>
              <p className="text-sm font-medium text-brun">
                {formatPrice(option.price)}
              </p>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={handleContinue}
        className="mt-8 w-full rounded-full bg-brun py-3.5 text-sm font-medium tracking-wide text-ivoire transition-opacity hover:opacity-90"
      >
        Continuer vers le paiement
      </button>
    </div>
  );
}
