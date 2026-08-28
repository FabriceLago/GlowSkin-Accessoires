import { Navigate, useNavigate } from 'react-router-dom';
import { CreditCard, Wallet, Smartphone, Lock } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import {
  shippingOptions,
  useCheckout,
  type PaymentMethodId,
} from '../../lib/CheckoutContext';

function formatPrice(amount: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

const methods: { id: PaymentMethodId; label: string; icon: typeof CreditCard }[] = [
  { id: 'cb', label: 'Carte bancaire', icon: CreditCard },
  { id: 'paypal', label: 'PayPal', icon: Wallet },
  { id: 'apple-pay', label: 'Apple Pay', icon: Smartphone },
  { id: '3x', label: 'Paiement en 3x', icon: CreditCard },
];

export function PaymentStep() {
  const { items, subtotal, discount, discountedSubtotal, promoCode } =
    useCart();
  const { address, shippingOptionId, paymentMethod, setPaymentMethod, placeOrder } =
    useCheckout();
  const navigate = useNavigate();

  if (items.length === 0) {
    return <Navigate to="/panier" replace />;
  }
  if (!address.email) {
    return <Navigate to="/commande" replace />;
  }

  const shipping =
    shippingOptions.find((o) => o.id === shippingOptionId) ??
    shippingOptions[0];
  const total = discountedSubtotal + shipping.price;

  function handleConfirm(e: React.FormEvent) {
    e.preventDefault();
    placeOrder({ items, subtotal, discount, shipping });
    navigate('/commande/confirmation');
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-12 lg:py-16">
      <h1 className="font-heading text-2xl font-light tracking-title text-brun sm:text-3xl">
        Paiement
      </h1>
      <p className="mt-2 flex items-center gap-1.5 text-sm text-brun/60">
        <Lock size={13} strokeWidth={1.5} />
        Démonstration — aucune donnée bancaire n’est saisie ni conservée.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3">
        {methods.map((method) => {
          const Icon = method.icon;
          const isSelected = paymentMethod === method.id;
          return (
            <button
              key={method.id}
              type="button"
              onClick={() => setPaymentMethod(method.id)}
              className={`flex flex-col items-center gap-2 rounded-card border px-4 py-4 text-center transition-colors ${
                isSelected
                  ? 'border-terracotta bg-ivoire'
                  : 'border-brun/15 bg-ivoire hover:border-brun/30'
              }`}
            >
              <Icon size={18} strokeWidth={1.5} className="text-brun" />
              <span className="text-xs text-brun">{method.label}</span>
            </button>
          );
        })}
      </div>

      <form onSubmit={handleConfirm} className="mt-8">
        {paymentMethod === 'cb' && (
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-medium tracking-wide text-brun/60">
                Numéro de carte
              </label>
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                autoComplete="off"
                className="mt-1.5 w-full rounded-lg border border-brun/15 bg-ivoire px-4 py-2.5 text-sm text-brun placeholder:text-brun/40 focus:border-terracotta focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium tracking-wide text-brun/60">
                  Date d’expiration
                </label>
                <input
                  type="text"
                  placeholder="MM / AA"
                  autoComplete="off"
                  className="mt-1.5 w-full rounded-lg border border-brun/15 bg-ivoire px-4 py-2.5 text-sm text-brun placeholder:text-brun/40 focus:border-terracotta focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-medium tracking-wide text-brun/60">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="123"
                  autoComplete="off"
                  className="mt-1.5 w-full rounded-lg border border-brun/15 bg-ivoire px-4 py-2.5 text-sm text-brun placeholder:text-brun/40 focus:border-terracotta focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {paymentMethod === 'paypal' && (
          <p className="rounded-card border border-brun/15 bg-ivoire px-5 py-4 text-sm text-brun/70">
            Vous serez redirigée vers PayPal pour finaliser votre paiement en
            toute sécurité.
          </p>
        )}

        {paymentMethod === 'apple-pay' && (
          <p className="rounded-card border border-brun/15 bg-ivoire px-5 py-4 text-sm text-brun/70">
            Confirmez avec Face ID ou Touch ID sur votre appareil pour payer
            avec Apple Pay.
          </p>
        )}

        {paymentMethod === '3x' && (
          <div className="rounded-card border border-brun/15 bg-ivoire px-5 py-4 text-sm text-brun/70">
            <p>3 prélèvements sans frais sur votre carte :</p>
            <ul className="mt-2 flex flex-col gap-1">
              <li>Aujourd’hui — {formatPrice(total / 3)}</li>
              <li>Dans 30 jours — {formatPrice(total / 3)}</li>
              <li>Dans 60 jours — {formatPrice(total / 3)}</li>
            </ul>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-2 border-t border-dore/20 pt-5 text-sm">
          <div className="flex justify-between text-brun/70">
            <span>Sous-total</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          {promoCode && (
            <div className="flex justify-between text-sauge-ink">
              <span>Réduction ({promoCode})</span>
              <span>-{formatPrice(discount)}</span>
            </div>
          )}
          <div className="flex justify-between text-brun/70">
            <span>Livraison ({shipping.label})</span>
            <span>{formatPrice(shipping.price)}</span>
          </div>
          <div className="flex items-center justify-between pt-2 text-base">
            <span className="font-medium text-brun">Total à payer</span>
            <span className="font-medium text-brun">{formatPrice(total)}</span>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-sauge py-3.5 text-sm font-medium tracking-wide text-brun transition-opacity hover:opacity-90"
        >
          Confirmer et payer
        </button>
      </form>
    </div>
  );
}
