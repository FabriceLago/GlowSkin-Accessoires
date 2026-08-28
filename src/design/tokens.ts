/**
 * Design tokens — GlowSkin Accessoires
 * Rituel beauté naturel, sensoriel, minimaliste.
 * Source de vérité partagée avec tailwind.config.js.
 */

export const colors = {
  sable: '#F7F2EB', // fond
  ivoire: '#FFFDF9', // cartes
  sauge: '#A3B18A', // accent 1
  saugeInk: '#5F6E4A', // sauge assombri, ~5.4:1 sur ivoire/sable — texte/icônes uniquement
  terracotta: '#C98B6B', // accent 2
  terracottaInk: '#895F49', // terracotta assombri, ~5.4:1 sur ivoire/sable — texte uniquement
  brun: '#3B332C', // texte
  dore: '#C9A24D', // filets 1px uniquement
} as const;

export const fonts = {
  heading: "'Fraunces', ui-serif, Georgia, serif",
  body: "'DM Sans', ui-sans-serif, system-ui, sans-serif",
} as const;

export const radius = {
  DEFAULT: '20px',
} as const;

export const shadows = {
  diffuse: '0 8px 40px rgba(59, 51, 44, 0.06)',
} as const;

export const spacing = {
  sectionDesktop: '6rem', // py-24
  sectionMobile: '4rem', // py-16
} as const;

export const animation = {
  fadeUpDuration: 500, // ms
  fadeUpEasing: 'ease-out',
  hoverScaleDuration: 600, // ms
  hoverScale: 1.03,
} as const;

export const letterSpacing = {
  tightTitle: '-0.02em',
} as const;

export const lineHeight = {
  body: 1.6,
} as const;

export const freeShippingThreshold = 49;
