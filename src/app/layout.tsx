import type { Metadata } from 'next';

import '~/styles/globals.css';
import { Rubik } from 'next/font/google';

import { Toaster } from '~/components/ui/sonner';
import { cn } from '~/lib/utils';

export const metadata: Metadata = {
  title: 'OmniSource - One Platform to Manage All Your Outsourcing Operations',
  description:
    'OmniSource adalah platform SaaS berbasis web dan mobile yang dirancang untuk mengelola operasional outsourcing secara terintegrasi, transparan, dan efisien.',
};

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(rubik.className, 'relative')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
