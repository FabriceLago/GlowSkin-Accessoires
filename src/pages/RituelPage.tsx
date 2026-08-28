import { RituelHero } from '../components/rituel/RituelHero';
import { Manifesto } from '../components/rituel/Manifesto';
import { MethodSection } from '../components/rituel/MethodSection';
import { Commitments } from '../components/rituel/Commitments';
import { QuoteBand } from '../components/rituel/QuoteBand';
import { useSeo } from '../hooks/useSeo';

export function RituelPage() {
  useSeo({
    title: 'Le Rituel — GlowSkin Accessoires',
    description:
      'Notre philosophie, notre méthode en 3 gestes et nos engagements pour un rituel beauté naturel et sensoriel.',
  });

  return (
    <>
      <RituelHero />
      <Manifesto />
      <MethodSection />
      <Commitments />
      <QuoteBand />
    </>
  );
}
