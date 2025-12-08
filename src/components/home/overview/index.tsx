import { Suspense } from 'react';

import { Scene } from './laptop-model';

export function V5Product() {
  return (
    <section
      className="bg-muted/30 py-20 lg:py-32 w-full relative overflow-hidden"
      id="produk"
    >
      {/* Background glow - green, purple, and yellow gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-purple-400/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-green-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/4 w-[250px] h-[250px] bg-emerald-400/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 w-[280px] h-[280px] bg-amber-300/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - 3D Laptop */}
          <div className="relative h-[400px] lg:h-[500px] animate-fade-in">
            {/* Glow behind laptop */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-primary/30 rounded-full blur-3xl" />
            </div>

            {/* Canvas Here */}

            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </div>

          {/* Right - Content */}
          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Bangun Bisnis Outsource Anda Jadi{' '}
              <span className="text-primary">Lebih Terkelola</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed">
              Solusi terbaik yang menyediakan kebutuhan operasional dalam satu
              aplikasi, mewujudkan aktivitas pantau kegiatan dan atensi secara
              terkendali, presensi, aktivitas, dan jadwal lebih transparan.
              Temukan cara baru dalam melayani klien bisnis anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
