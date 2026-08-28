import { useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useCheckout } from '../../lib/CheckoutContext';
import { useCart } from '../../lib/CartContext';
import { articles } from '../../data/articles';
import { ArticleCard } from '../../components/journal/ArticleCard';

function formatPrice(amount: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

export function ConfirmationPage() {
  const { lastOrder } = useCheckout();
  const { clearCart } = useCart();

  useEffect(() => {
    if (lastOrder) clearCart();
    // Vide le panier une seule fois, après affichage du récapitulatif —
    // le vider avant la navigation ferait se re-déclencher le garde-fou
    // "panier vide" de l'étape paiement pendant le changement de route.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!lastOrder) {
    return <Navigate to="/panier" replace />;
  }

  const suggestedArticles = articles.slice(0, 2);

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 lg:py-24">
      <div className="text-center">
        <CheckCircle2
          size={40}
          strokeWidth={1.25}
          className="mx-auto text-sauge-ink"
        />
        <h1 className="mt-5 font-heading text-3xl font-light tracking-title text-brun sm:text-4xl">
          Merci, {lastOrder.address.firstName || 'et à bientôt'}
        </h1>
        <p className="mt-3 text-sm leading-body text-brun/70">
          Votre commande est confirmée et sera préparée avec soin. Un e-mail
          de confirmation vient de vous être envoyé.
        </p>
        <p className="mt-4 inline-block rounded-full bg-ivoire px-5 py-2 text-sm text-brun">
          Commande <span className="font-medium">{lastOrder.number}</span>
        </p>
      </div>

      <div className="mt-12 rounded-card border border-dore/20 bg-ivoire p-6">
        <h2 className="font-heading text-lg font-normal text-brun">
          Récapitulatif
        </h2>
        <ul className="mt-4 flex flex-col gap-4">
          {lastOrder.items.map((item) => (
            <li key={item.lineId} className="flex items-center gap-3">
              <img
                loading="lazy"
                src={item.image}
                alt={item.name}
                className="h-14 w-14 rounded-card object-cover"
              />
              <div className="flex-1">
                <p className="text-sm text-brun">{item.name}</p>
                {item.variantLabel && (
                  <p className="text-xs text-brun/50">{item.variantLabel}</p>
                )}
                <p className="text-xs text-brun/50">Qté {item.quantity}</p>
              </div>
              <p className="text-sm text-brun">
                {formatPrice(item.price * item.quantity)}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-col gap-1.5 border-t border-dore/20 pt-4 text-sm">
          <div className="flex justify-between text-brun/70">
            <span>Sous-total</span>
            <span>{formatPrice(lastOrder.subtotal)}</span>
          </div>
          {lastOrder.discount > 0 && (
            <div className="flex justify-between text-sauge-ink">
              <span>Réduction</span>
              <span>-{formatPrice(lastOrder.discount)}</span>
            </div>
          )}
          <div className="flex justify-between text-brun/70">
            <span>Livraison ({lastOrder.shipping.label})</span>
            <span>{formatPrice(lastOrder.shipping.price)}</span>
          </div>
          <div className="flex justify-between pt-1 text-base font-medium text-brun">
            <span>Total</span>
            <span>{formatPrice(lastOrder.total)}</span>
          </div>
        </div>

        <p className="mt-4 text-xs text-brun/50">
          Livrée à {lastOrder.address.address}, {lastOrder.address.postalCode}{' '}
          {lastOrder.address.city}
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/boutique"
          className="text-sm font-medium text-terracotta-ink underline underline-offset-4"
        >
          Retour à la boutique
        </Link>
      </div>

      {/* Pendant que vous attendez */}
      <div className="mt-16 border-t border-dore/20 pt-12">
        <h2 className="text-center font-heading text-2xl font-light tracking-title text-brun">
          Pendant que vous attendez
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
          {suggestedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
