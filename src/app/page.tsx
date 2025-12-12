import { SectionCTA } from '~/components/home/cta';
import { SectionFeatures } from '~/components/home/feature';
import { SectionContact } from '~/components/home/footer';
import { SectionHero } from '~/components/home/hero';
import { SectionInfo } from '~/components/home/info';
import { SectionProduct } from '~/components/home/overview';
import { SectionPricing } from '~/components/home/pricing';
import { SectionSolutions } from '~/components/home/solutions';
import { TopNavbar } from '~/components/home/top-navbar';

export default function Home() {
  return (
    <>
      <TopNavbar />
      <main className="mx-auto min-h-screen scroll-smooth">
        <SectionHero />
        <SectionProduct />
        <SectionSolutions />
        <SectionInfo />
        <SectionCTA />
        <SectionFeatures />
        <SectionPricing />
        <SectionContact />
      </main>
    </>
  );
}
