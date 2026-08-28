import { useEffect } from 'react';

type SeoOptions = {
  title: string;
  description: string;
  image?: string;
  type?: string;
};

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Définit title, meta description et Open Graph pour la page courante.
 * SPA sans SSR : géré côté client via effet, avec les valeurs de
 * index.html comme repli avant montage / pour les crawlers sans JS.
 */
export function useSeo({ title, description, image, type = 'website' }: SeoOptions) {
  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:url', window.location.href);
    if (image) {
      upsertMeta('property', 'og:image', image);
    }
  }, [title, description, image, type]);
}
