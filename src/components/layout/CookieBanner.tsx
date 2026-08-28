import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const STORAGE_KEY = 'glowskin-cookie-consent';

type Consent = 'accepted' | 'refused';

function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'accepted' || value === 'refused' ? value : null;
  } catch {
    return null;
  }
}

function writeConsent(value: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Stockage indisponible — le bandeau se represente à la visite suivante.
  }
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(readConsent() === null);
  }, []);

  function resolve(consent: Consent) {
    writeConsent(consent);
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Gestion des cookies"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-dore/20 bg-ivoire/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-4 sm:flex-row sm:justify-between">
        <p className="text-xs leading-body text-brun/70">
          Nous utilisons des cookies essentiels au fonctionnement du site,
          et — avec votre accord — des cookies de mesure d’audience. En
          savoir plus dans notre{' '}
          <Link
            to="/politique-de-confidentialite"
            className="text-terracotta-ink underline underline-offset-4"
          >
            politique de confidentialité
          </Link>
          .
        </p>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => resolve('refused')}
            className="rounded-full border border-brun/20 px-4 py-2 text-xs text-brun transition-colors hover:border-brun"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => resolve('accepted')}
            className="rounded-full bg-brun px-4 py-2 text-xs font-medium text-ivoire transition-opacity hover:opacity-90"
          >
            Accepter
          </button>
          <button
            type="button"
            aria-label="Fermer et refuser les cookies non essentiels"
            onClick={() => resolve('refused')}
            className="text-brun/40 hover:text-brun"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
