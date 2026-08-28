import { Link } from 'react-router-dom';
import { useSeo } from '../hooks/useSeo';

export function NotFoundPage() {
  useSeo({
    title: 'Page introuvable — GlowSkin Accessoires',
    description: 'Cette page n’existe pas ou plus.',
  });

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-24 text-center lg:py-32">
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        role="img"
        aria-label="Un galet de quartz rose isolé, entouré d’un chemin en pointillés qui s’égare"
        className="text-brun"
      >
        <circle
          cx="90"
          cy="90"
          r="72"
          fill="none"
          stroke="#C9A24D"
          strokeOpacity="0.3"
          strokeWidth="1"
          strokeDasharray="2 8"
        />
        <path
          d="M90 40c-20 0-30 14-30 30 0 18 14 24 14 40 0 8 7 12 16 12s16-4 16-12c0-16 14-22 14-40 0-16-10-30-30-30z"
          fill="#E8C4C4"
          opacity="0.9"
        />
        <path
          d="M40 130q20-10 40 0t40-6"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          strokeDasharray="1 7"
          strokeLinecap="round"
        />
      </svg>

      <p className="mt-4 font-heading text-6xl font-light tracking-title text-brun">
        404
      </p>
      <h1 className="mt-3 font-heading text-2xl font-light tracking-title text-brun">
        Ce chemin s’arrête ici
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-body text-brun/60">
        La page que vous cherchez n’existe pas, ou a changé d’adresse.
        Reprenons le rituel là où il continue.
      </p>

      <Link
        to="/boutique"
        className="mt-8 rounded-full bg-sauge px-8 py-3.5 text-sm font-medium tracking-wide text-brun transition-opacity hover:opacity-90"
      >
        Retour à la boutique
      </Link>
      <Link
        to="/"
        className="mt-4 text-sm text-brun/60 underline underline-offset-4 hover:text-brun"
      >
        Ou revenir à l’accueil
      </Link>
    </div>
  );
}
