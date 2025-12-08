import V5CTA from '~/components/home/cta';
import { V5Features } from '~/components/home/feature';
import { V5Contact } from '~/components/home/footer';
import { V5Hero } from '~/components/home/hero';
import { V5Info } from '~/components/home/info';
import { V5Product } from '~/components/home/overview';
import { V5Pricing } from '~/components/home/pricing';
import { V5Solutions } from '~/components/home/solutions';

export default function Home() {
  return (
    <main className="mx-auto min-h-screen">
      <V5Hero />
      <V5Product />
      <V5Solutions />
      <V5Info />
      <V5CTA />
      <V5Features />
      <V5Pricing />
      <V5Contact />
    </main>
  );
}
