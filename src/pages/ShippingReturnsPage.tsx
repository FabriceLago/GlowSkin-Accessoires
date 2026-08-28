import { Link } from 'react-router-dom';
import { Truck, RotateCcw, PackageCheck } from 'lucide-react';
import { shippingOptions } from '../lib/CheckoutContext';
import { useSeo } from '../hooks/useSeo';

function formatPrice(amount: number) {
  return amount === 0
    ? 'Offerte'
    : new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
      }).format(amount);
}

export function ShippingReturnsPage() {
  useSeo({
    title: 'Livraison & retours — GlowSkin Accessoires',
    description:
      'Nos options de livraison, délais et frais, ainsi que notre politique de retour sous 30 jours.',
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-light tracking-title text-brun sm:text-5xl">
          Livraison & retours
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-body text-brun/60">
          Ce qu’il faut savoir avant de commander, et comment procéder si un
          objet ne vous convient pas.
        </p>
      </div>

      {/* Livraison */}
      <section className="mt-14">
        <div className="flex items-center gap-2.5">
          <Truck size={18} strokeWidth={1.5} className="text-sauge-ink" />
          <h2 className="font-heading text-xl font-normal text-brun">
            Livraison
          </h2>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {shippingOptions.map((option) => (
            <div
              key={option.id}
              className="flex items-center justify-between rounded-card border border-dore/20 bg-ivoire px-5 py-4"
            >
              <div>
                <p className="text-sm text-brun">{option.label}</p>
                <p className="mt-0.5 text-xs text-brun/50">{option.detail}</p>
              </div>
              <p className="text-sm font-medium text-brun">
                {formatPrice(option.price)}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm leading-body text-brun/60">
          Nous livrons actuellement en France métropolitaine. Chaque
          commande est expédiée sous 24 à 48h ouvrées, avec un numéro de
          suivi envoyé par e-mail.
        </p>
      </section>

      {/* Retours */}
      <section className="mt-14">
        <div className="flex items-center gap-2.5">
          <RotateCcw size={18} strokeWidth={1.5} className="text-sauge-ink" />
          <h2 className="font-heading text-xl font-normal text-brun">
            Retours & échanges
          </h2>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-sm leading-body text-brun/70">
          <p>
            Vous disposez de <strong className="text-brun">30 jours</strong>{' '}
            après réception pour nous retourner un produit non utilisé,
            dans son emballage d’origine et accompagné de sa facture.
          </p>
          <p>
            Pour initier un retour, écrivez-nous depuis la page{' '}
            <Link
              to="/contact"
              className="text-terracotta-ink underline underline-offset-4"
            >
              Contact
            </Link>{' '}
            en précisant votre numéro de commande. Nous vous répondons avec
            une étiquette de retour et la marche à suivre.
          </p>
          <p>
            Une fois le colis reçu et vérifié, le remboursement est effectué
            sous 5 à 10 jours ouvrés sur votre moyen de paiement initial. Le
            retour est offert en cas d’erreur de notre part ; pour un simple
            changement d’avis, les frais de retour restent à votre charge.
          </p>
        </div>
      </section>

      {/* Réassurance */}
      <div className="mt-14 flex items-start gap-3 rounded-card border border-dore/20 bg-sable/50 p-6">
        <PackageCheck
          size={20}
          strokeWidth={1.5}
          className="mt-0.5 shrink-0 text-sauge-ink"
        />
        <p className="text-sm leading-body text-brun/70">
          Chaque commande est préparée à la main et emballée avec soin, dans
          des matériaux recyclés ou compostables.
        </p>
      </div>
    </div>
  );
}
