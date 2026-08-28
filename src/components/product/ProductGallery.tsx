import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export function ProductGallery({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  function showPrev() {
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function showNext() {
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="flex gap-4">
      {/* Miniatures verticales */}
      <div className="flex flex-col gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Voir la photo ${i + 1}`}
            aria-current={activeIndex === i}
            className={`h-16 w-16 overflow-hidden rounded-lg border transition-colors ${
              activeIndex === i
                ? 'border-terracotta'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Image principale */}
      <button
        type="button"
        onClick={() => setIsLightboxOpen(true)}
        aria-label="Agrandir la photo"
        className="group relative flex-1 overflow-hidden rounded-card"
      >
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={images[activeIndex]}
            alt={productName}
            className="h-full w-full object-cover transition-transform duration-600 ease-out group-hover:scale-103"
          />
        </div>
        <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-ivoire/90 text-brun opacity-0 shadow-diffuse transition-opacity group-hover:opacity-100">
          <ZoomIn size={16} strokeWidth={1.5} />
        </span>
      </button>

      {/* Plein écran */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${productName} en plein écran`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brun/90 px-6"
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-6 top-6 text-ivoire transition-opacity hover:opacity-70"
          >
            <X size={24} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Photo précédente"
            onClick={showPrev}
            className="absolute left-4 text-ivoire transition-opacity hover:opacity-70 sm:left-8"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>

          <img
            src={images[activeIndex]}
            alt={productName}
            className="max-h-[85vh] max-w-full rounded-card object-contain"
          />

          <button
            type="button"
            aria-label="Photo suivante"
            onClick={showNext}
            className="absolute right-4 text-ivoire transition-opacity hover:opacity-70 sm:right-8"
          >
            <ChevronRight size={28} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </div>
  );
}
