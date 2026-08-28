/**
 * Tailwind config — GlowSkin Accessoires.
 * Values mirror src/design/tokens.ts (kept in sync manually since this file
 * runs outside the Vite/TS pipeline).
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sable: '#F7F2EB',
        ivoire: '#FFFDF9',
        sauge: '#A3B18A',
        /** Sauge assombri — même teinte, ~5.4:1 sur ivoire/sable (WCAG AA) pour tout texte ou icône porteuse de sens. */
        'sauge-ink': '#5F6E4A',
        terracotta: '#C98B6B',
        /** Terracotta assombri — même teinte, ~5.4:1 sur ivoire/sable (WCAG AA) pour tout texte. */
        'terracotta-ink': '#895F49',
        brun: '#3B332C',
        dore: '#C9A24D',
      },
      fontFamily: {
        heading: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
      },
      borderRadius: {
        DEFAULT: '20px',
        card: '20px',
      },
      boxShadow: {
        diffuse: '0 8px 40px rgba(59, 51, 44, 0.06)',
      },
      letterSpacing: {
        title: '-0.02em',
      },
      lineHeight: {
        body: '1.6',
      },
      spacing: {
        18: '4.5rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heroZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 500ms ease-out forwards',
        'hero-zoom': 'heroZoom 8s ease-out forwards',
        marquee: 'marquee 28s linear infinite',
      },
      transitionDuration: {
        600: '600ms',
      },
      scale: {
        103: '1.03',
      },
    },
  },
  plugins: [],
};
