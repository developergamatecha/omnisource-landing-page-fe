import { HelpCenterHeader } from '~/components/help-center/header';
import { SectionContact } from '~/components/home/footer';

export default function HelpCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HelpCenterHeader />
      <main>{children}</main>
      <SectionContact />
    </>
  );
}
