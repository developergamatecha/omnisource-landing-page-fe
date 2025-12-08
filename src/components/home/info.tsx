import Image from 'next/image';

import { Button } from '~/components/ui/button';
import laptopMockup from '~/assets/v5/info-laptop.png';
import phoneMockup from '~/assets/v5/info-phone.png';

export function V5Info() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-green-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-blue-400/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[280px] h-[280px] bg-emerald-400/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6 animate-fade-in order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Omnisource <span className="text-primary">Desktop</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Kami menyediakan layanan antarmuka desktop yang memfasilitasi
              pemilik bisnis outsource untuk memantau aktivitas utama yang
              dilakukan oleh petugas serta overview laporan. Anda juga dapat
              melakukan manajemen penempatan petugas dan mengatur jadwal
              penugasan secara terstruktur. Melalui omnisource, aktivitas
              mengelola klien dan perhitungan penggajian mudah untuk dilakukan
              pada satu platform terpusat
            </p>

            <Button className="mt-4" size="lg">
              Coba Omnisource
            </Button>
          </div>

          {/* Right - Product Mockups */}
          <div
            className="relative order-1 lg:order-2 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Glow behind mockups */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            </div>

            {/* Laptop mockup */}
            <div className="relative z-10">
              <Image
                alt="Dashboard preview"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
                src={laptopMockup}
              />

              {/* Phone mockup overlapping */}
              <Image
                alt="Mobile app preview"
                className="absolute -bottom-8 -right-4 lg:right-8 w-28 lg:w-36 drop-shadow-xl"
                src={phoneMockup}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
