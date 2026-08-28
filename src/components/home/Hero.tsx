import { Link } from 'react-router-dom';
import { heroImage } from '../../config/images';

export function Hero() {
  return (
    <section className="relative flex h-[85vh] min-h-[560px] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Un rituel de soin naturel, à la lumière du jour"
        className="absolute inset-0 h-full w-full animate-hero-zoom object-cover"
      />
      <div className="absolute inset-0 bg-sable/20" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl font-light tracking-title text-ivoire drop-shadow-sm sm:text-5xl lg:text-6xl">
            Le geste avant le produit.
          </h1>
          <p className="mt-6 max-w-md text-base leading-body text-ivoire/90 drop-shadow-sm">
            Des accessoires de soin pensés pour ralentir, pas pour performer.
            <br />
            Un rituel simple, sensoriel, à la portée de chaque matin.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/boutique"
              className="rounded-full bg-sauge px-8 py-3.5 text-sm font-medium tracking-wide text-brun transition-opacity hover:opacity-90"
            >
              Découvrir la boutique
            </Link>
            <Link
              to="/le-rituel"
              className="text-sm font-medium tracking-wide text-ivoire underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              Nos rituels
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
