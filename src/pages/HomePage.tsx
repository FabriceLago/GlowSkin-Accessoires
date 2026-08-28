import { Hero } from '../components/home/Hero';
import { MarqueeBanner } from '../components/home/MarqueeBanner';
import { BestSellers } from '../components/home/BestSellers';
import { RitualEditorial } from '../components/home/RitualEditorial';
import { Materials } from '../components/home/Materials';
import { Testimonials } from '../components/home/Testimonials';
import { BeforeAfter } from '../components/home/BeforeAfter';
import { InstagramGrid } from '../components/home/InstagramGrid';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { useSeo } from '../hooks/useSeo';

export function HomePage() {
  useSeo({
    title: 'GlowSkin Accessoires — Le geste avant le produit',
    description:
      'Accessoires de soin naturels et sensoriels : gua sha, rouleaux de jade, brosses konjac, masques LED, bandeaux spa, kits rituels.',
  });

  return (
    <>
      <Hero />
      <MarqueeBanner />
      <BestSellers />
      <RitualEditorial />
      <Materials />
      <Testimonials />
      <BeforeAfter />
      <InstagramGrid />
      <NewsletterSection />
    </>
  );
}
