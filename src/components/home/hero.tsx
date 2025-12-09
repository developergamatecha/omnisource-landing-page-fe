import Image from 'next/image';
import {
  ArrowRight,
  Truck,
  Headphones,
  ShieldCheck,
  CreditCard,
} from 'lucide-react';

import { Button } from '~/components/ui/button';

const featureItems = [
  {
    icon: Truck,
    title: 'Akses Mudah',
    description: 'Akses platform kapan saja dimana saja',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Dukungan 24/7 untuk Anda',
    color: 'bg-warning/10 text-warning',
  },
  {
    icon: ShieldCheck,
    title: 'Data Aman',
    description: 'Keamanan data terjamin',
    color: 'bg-info/10 text-info',
  },
  {
    icon: CreditCard,
    title: 'Pembayaran Aman',
    description: 'Transaksi 100% aman',
    color: 'bg-destructive/10 text-destructive',
  },
];

export function SectionHero() {
  return (
    <section className="bg-background overflow-hidden relative" id="beranda">
      {/* Background gradient decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-warning/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-warning/10 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto px-6 pt-[6svh] pb-16 lg:pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-muted text-muted-foreground text-sm font-medium px-4 py-2 rounded-full">
                Platform Manajemen Terbaik
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hadirkan Kemudahan Dalam
                <span className="text-primary"> Satu Platform</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Platform omnisource menciptakan kemudahan dalam mengelola tenaga
                kerja outsource, mendukung pantauan operasional secara
                real-time. Tingkatkan pelayanan perusahaan anda dengan cara yang
                lebih optimal.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 font-semibold shadow-lg hover:shadow-xl transition-all group"
                size="lg"
              >
                Akses Platform Sekarang
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">5000+</p>
                <p className="text-sm text-muted-foreground">Pengguna Aktif</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">150+</p>
                <p className="text-sm text-muted-foreground">Perusahaan</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">99%</p>
                <p className="text-sm text-muted-foreground">Kepuasan</p>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative h-[40svh] md:h-[550px] lg:h-full justify-center lg:justify-end">
            {/* Main phone mockup */}
            <div
              className={`absolute z-10 
                bottom-2 md:top-0 lg:top-9 md:min-h-[50svh]
                translate-x-1/2 md:-translate-x-[39%] xl:translate-x-[80%]
                right-1/2 md:right-0 xl:right-1/2
                w-[60%] md:w-[50%] xl:w-[42%] xl:h-full
                animate-fade-in`}
              style={{ animationDelay: '0.6s' }}
            >
              <Image
                alt="OmniSource App Preview"
                className="w-full lg:max-w-lg drop-shadow-2xl"
                height={0}
                sizes="100%"
                src="/assets/v5/hero-phones-1.png"
                width={0}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            {/* Secondary floating phone */}
            <div
              className={`absolute bottom-0 z-20 
                hidden lg:block animate-fade-in
                w-1/2 md:w-1/4 lg:w-1/2
              `}
              style={{ animationDelay: '0.4s' }}
            >
              <Image
                alt="OmniSource Dashboard Preview"
                className="w-full h-full drop-shadow-xl"
                src="/assets/v5/hero-phones-2.png"
                width={0}
                height={0}
                sizes="100%"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>

            {/* Floating elements */}
            <div
              className="absolute top-8 right-4 bg-card rounded-xl shadow-lg p-4 animate-fade-in hidden lg:block"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Happy Users
                  </p>
                  <p className="text-xs text-muted-foreground">
                    4.9 · 2k Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Bar */}
      <div className="container mx-auto px-6 -mt-20 relative z-30">
        <div className="bg-white rounded-2xl shadow-xl px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featureItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color}`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
