import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AtSign, Send } from 'lucide-react';

const columns = [
  {
    title: 'Boutique',
    links: [
      { label: 'Gua sha', to: '/boutique/gua-sha' },
      { label: 'Rouleaux de jade', to: '/boutique/rouleaux-de-jade' },
      { label: 'Brosses konjac', to: '/boutique/brosses-konjac' },
      { label: 'Masques LED', to: '/boutique/masques-led' },
      { label: 'Kits rituels', to: '/boutique/kits-rituels' },
    ],
  },
  {
    title: 'Le Rituel',
    links: [
      { label: 'Notre philosophie', to: '/le-rituel' },
      { label: 'Guides d’utilisation', to: '/le-rituel/guides' },
      { label: 'Journal', to: '/journal' },
      { label: 'Ingrédients & matières', to: '/le-rituel/matieres' },
    ],
  },
  {
    title: 'Service client',
    links: [
      { label: 'Nous contacter', to: '/contact' },
      { label: 'Livraison & retours', to: '/livraison-retours' },
      { label: 'Suivre ma commande', to: '/suivi-commande' },
      { label: 'Questions fréquentes', to: '/faq' },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <footer className="border-t border-dore/20 bg-ivoire">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Colonne marque */}
          <div>
            <Link
              to="/"
              className="font-heading text-2xl font-normal tracking-title text-brun"
            >
              GlowSkin
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-body text-brun/70">
              Le geste avant le produit. Des accessoires de soin pensés pour
              un rituel beauté naturel et sensoriel.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="mt-6 inline-flex text-brun transition-opacity hover:opacity-60"
            >
              <AtSign size={20} strokeWidth={1.5} />
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-medium tracking-wide text-brun">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-brun/70 transition-colors hover:text-terracotta-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 rounded-card border border-dore/30 bg-sable/60 px-8 py-10 lg:mt-24 lg:flex lg:items-center lg:justify-between lg:px-10">
          <div>
            <h3 className="font-heading text-xl font-light tracking-title text-brun">
              Recevez le rituel dans votre boîte mail
            </h3>
            <p className="mt-2 text-sm text-brun/70">
              Conseils, nouveautés et offres douces — une fois par semaine,
              pas plus.
            </p>
          </div>

          {submitted ? (
            <p className="mt-6 text-sm text-sauge-ink lg:mt-0">
              Merci, vous êtes inscrite avec succès.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex w-full max-w-sm items-center gap-2 border-b border-brun/30 pb-2 lg:mt-0"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse e-mail"
                className="w-full bg-transparent text-sm text-brun placeholder:text-brun/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="S’inscrire à la newsletter"
                className="text-brun transition-opacity hover:opacity-60"
              >
                <Send size={18} strokeWidth={1.5} />
              </button>
            </form>
          )}
        </div>

        {/* Mentions */}
        <div className="mt-12 flex flex-col gap-4 border-t border-dore/20 pt-8 text-xs text-brun/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GlowSkin Accessoires. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/mentions-legales" className="hover:text-terracotta-ink">
              Mentions légales
            </Link>
            <Link to="/cgv" className="hover:text-terracotta-ink">
              CGV
            </Link>
            <Link
              to="/politique-de-confidentialite"
              className="hover:text-terracotta-ink"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
