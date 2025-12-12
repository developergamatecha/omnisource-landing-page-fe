import { MainFooter } from '~/components/footer';
import { TopNavbar } from '~/components/home/top-navbar';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavbar />
      <main className="min-h-screen">{children}</main>
      <MainFooter />
    </>
  );
}
