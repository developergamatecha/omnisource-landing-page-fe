import Image from 'next/image';

import ctaPhones from '~/assets/v5/cta-phones.png';

export function V5CTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-[250px] h-[250px] bg-blue-400/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Product Mockups */}
          <div className="relative animate-fade-in">
            {/* Glow behind mockups */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <Image
                alt="Mobile app preview"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
                src={ctaPhones}
              />
            </div>
          </div>

          {/* Right - Content */}
          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Omnisource <span className="text-primary">App</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Omnisource app diluncurkan sejak tahun 2025. Aplikasi berbasis
              mobile ini memungkinkan petugas untuk melakukan pelaporan
              aktivitas seperti kegiatan patroli, melaksanakan atensi, serta
              aktivitas operasional yang telah dilaksanakan. Hanya semudah dalam
              beberapa klik, petugas dapat memastikan laporan tersampaikan
              secara realtime termasuk dengan kegiatan absensi.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Google Play Button */}
              <a
                className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-lg hover:bg-black/80 transition-colors"
                href="#"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wide opacity-80">
                    Available on the
                  </div>
                  <div className="text-lg font-semibold leading-tight">
                    Google Play
                  </div>
                </div>
              </a>

              {/* App Store Button */}
              <a
                className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-lg hover:bg-black/80 transition-colors"
                href="#"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wide opacity-80">
                    Available on the
                  </div>
                  <div className="text-lg font-semibold leading-tight">
                    App Store
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default V5CTA;
