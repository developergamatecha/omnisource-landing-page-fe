import type { Metadata } from 'next';

import '~/styles/globals.css';
import { Rubik } from 'next/font/google';

import { Toaster } from '~/components/ui/sonner';
import { cn } from '~/lib/utils';

export const metadata: Metadata = {
  title: 'OmniSource - One Platform to Manage All Your Outsourcing Operations',
  description:
    'OmniSource adalah platform SaaS berbasis web dan mobile yang dirancang untuk mengelola operasional outsourcing secara terintegrasi, transparan, dan efisien.',
  openGraph: {
    title:
      'OmniSource - One Platform to Manage All Your Outsourcing Operations',
    description:
      'OmniSource adalah platform SaaS berbasis web dan mobile yang dirancang untuk mengelola operasional outsourcing secara terintegrasi, transparan, dan efisien.',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_LP_URL}`,
    siteName: 'OmniSource',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_LP_URL}/assets/white-logo.webp`,
        width: 1200,
        height: 630,
        alt: 'OmniSource - One Platform to Manage All Your Outsourcing Operations',
      },
    ],
  },
  twitter: {
    title:
      'OmniSource - One Platform to Manage All Your Outsourcing Operations',
    description:
      'OmniSource adalah platform SaaS berbasis web dan mobile yang dirancang untuk mengelola operasional outsourcing secara terintegrasi, transparan, dan efisien.',
    card: 'summary_large_image',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_LP_URL}/assets/white-logo.webp`,
        width: 1200,
        height: 630,
        alt: 'OmniSource - One Platform to Manage All Your Outsourcing Operations',
      },
    ],
  },
  robots: {
    index: process.env.NEXT_PUBLIC_ENVIRONMENT == 'production' ? true : false,
    follow: process.env.NEXT_PUBLIC_ENVIRONMENT == 'production' ? true : false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon-32x32.webp',
    shortcut: '/favicon-32x32.webp',
  },
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
    <html lang="id">
      <body className={cn(rubik.className, 'relative')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
