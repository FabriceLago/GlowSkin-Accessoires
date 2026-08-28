import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CheckoutSteps } from './CheckoutSteps';

const stepByPath: Record<string, 1 | 2 | 3> = {
  '/commande': 1,
  '/commande/livraison': 2,
  '/commande/paiement': 3,
};

const backByPath: Record<string, { to: string; label: string }> = {
  '/commande': { to: '/panier', label: 'Retour au panier' },
  '/commande/livraison': { to: '/commande', label: 'Retour' },
  '/commande/paiement': { to: '/commande/livraison', label: 'Retour' },
};

export function CheckoutLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const currentStep = stepByPath[pathname];
  const back = backByPath[pathname];

  return (
    <div className="flex min-h-screen flex-col bg-sable">
      <div className="border-b border-dore/20 bg-ivoire">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          {back ? (
            <Link
              to={back.to}
              className="flex items-center gap-1.5 text-sm text-brun/60 transition-colors hover:text-brun"
            >
              <ArrowLeft size={15} strokeWidth={1.5} />
              {back.label}
            </Link>
          ) : (
            <span />
          )}
          <Link
            to="/"
            className="font-heading text-xl font-normal tracking-title text-brun"
          >
            GlowSkin
          </Link>
          <span className="w-24" aria-hidden="true" />
        </div>
        {currentStep && <CheckoutSteps current={currentStep} />}
      </div>

      <main className="flex-1">{children}</main>

      <div className="border-t border-dore/20 py-6 text-center text-xs text-brun/40">
        Paiement sécurisé · Livraison suivie · Retours sous 30 jours
      </div>
    </div>
  );
}
