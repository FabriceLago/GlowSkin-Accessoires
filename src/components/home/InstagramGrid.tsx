import { instagramPosts } from '../../config/images';
import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

export function InstagramGrid() {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <section className="bg-ivoire">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-10 lg:py-24">
        <div ref={ref} className={className}>
          <h2 className="font-heading text-3xl font-light tracking-title text-brun">
            Suivez le rituel
          </h2>
          <a
            href="https://instagram.com/glowskin.accessoires"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-terracotta-ink underline underline-offset-4"
          >
            @glowskin.accessoires
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:gap-3">
          {instagramPosts.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/glowskin.accessoires"
              target="_blank"
              rel="noreferrer"
              className="hover-zoom block aspect-square overflow-hidden"
            >
              <img
                loading="lazy"
                src={src}
                alt="Publication Instagram GlowSkin Accessoires"
                className="h-full w-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
