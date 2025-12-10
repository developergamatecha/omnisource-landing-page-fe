import {
  BrushCleaning,
  Download,
  Eye,
  Group,
  Key,
  Lock,
  User,
} from 'lucide-react';

import { Button } from '~/components/ui/button';

const listGuide = [
  {
    icon: <User className="w-10 h-10 text-primary" />,
    title: 'Web Owner',
    href: '/help-center/panduan',
  },
  {
    icon: <Key className="w-10 h-10 text-primary" />,
    title: 'Web Admin',
    href: '/help-center/panduan',
  },
  {
    icon: <Eye className="w-10 h-10 text-primary" />,
    title: 'Pengawas',
    href: '/help-center/panduan',
  },
  {
    icon: <Lock className="w-10 h-10 text-primary" />,
    title: 'Keamanan',
    href: '/help-center/panduan',
  },
  {
    icon: <BrushCleaning className="w-10 h-10 text-primary" />,
    title: 'Kebersihan',
    href: '/help-center/panduan',
  },
  {
    icon: <Group className="w-10 h-10 text-primary" />,
    title: 'Umum',
    href: '/help-center/panduan',
  },
];

export default function PanduanPage() {
  return (
    <div className="container mx-auto py-10 lg:py-20 px-5">
      <h1 className="text-center text-2xl lg:text-4xl font-semibold">
        Panduan Pengguna
      </h1>
      <p className="text-center text-neutral-500 mt-4">
        Unduh panduan lengkap untuk menggunakan Website & Aplikasi Omnisource
        secara efektif.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {listGuide.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-2 p-4 border border-neutral-200 rounded-lg hover:border-primary duration-300 "
          >
            {item.icon}
            <p className="text-center font-semibold tex-lg lg:text-2xl">
              {item.title}
            </p>
            <p>Klik ini untuk mengunduh user guide {item.title}</p>
            <a className="mt-3 w-full" href={item.href} target="_blank">
              <Button className="w-full cursor-pointer">
                <Download />
                Unduh
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
