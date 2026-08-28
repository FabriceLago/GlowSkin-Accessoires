import { bannerImage } from '../../data/products';

export function BoutiqueHeader() {
  return (
    <header>
      <div className="mx-auto max-w-3xl px-6 pb-10 pt-16 text-center lg:pt-24">
        <h1 className="font-heading text-4xl font-light tracking-title text-brun sm:text-5xl">
          La boutique
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-body text-brun/60">
          Douze objets choisis pour leur matière et leur constance, pensés
          pour accompagner un rituel simple.
          <br />
          Aucune promesse, seulement de bons gestes, répétés.
        </p>
      </div>

      <div className="aspect-[16/5] w-full overflow-hidden">
        <img
          loading="lazy"
          src={bannerImage}
          alt="La collection GlowSkin Accessoires, à la lumière du jour"
          className="h-full w-full object-cover"
        />
      </div>
    </header>
  );
}
