import { useEffect, useRef, useState } from 'react';

/**
 * Déclenche l'animation fade-up (500ms ease-out) quand l'élément entre
 * dans le viewport. Retourne un ref à attacher et les classes à appliquer.
 */
export function useScrollFadeUp<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return {
    ref,
    className: isVisible ? 'fade-up-visible' : 'fade-up-init',
  };
}
