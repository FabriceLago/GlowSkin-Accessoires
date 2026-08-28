import { heroImage } from '../../data/rituelContent';

export function RituelHero() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Un geste de soin à la lumière du jour"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-brun/25" />
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <h1 className="font-heading text-4xl font-light tracking-title text-ivoire drop-shadow-sm sm:text-5xl lg:text-6xl">
          Le geste avant le produit
        </h1>
      </div>
    </div>
  );
}
