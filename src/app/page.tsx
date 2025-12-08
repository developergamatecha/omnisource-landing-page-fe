import { V5Hero } from '~/components/home/hero';
import { V5Product } from '~/components/home/overview';

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen">
      <V5Hero />
      <V5Product />
    </main>
  );
}
