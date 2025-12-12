import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

import { FormDataSeceurity } from '~/components/data-security/form';

export default function Securities() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="bg-card/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              className="flex items-center gap-3 group cursor-pointer"
              href="/"
            >
              <div className="relative">
                <Image
                  alt=""
                  height={30}
                  src="/assets/white-logo.webp"
                  width={30}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground leading-tight tracking-tight">
                  OMNI SOURCE
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - V5 Style with Gradient */}
      <section className="relative py-16 lg:pt-20 min-h-[550px] h-[80svh] overflow-hidden">
        {/* Background gradients matching V5 design */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-background to-orange-400/10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-warning/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Back Button */}
          <Link
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            href="/"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Formulir <span className="text-foreground">Keamanan Data</span>
          </h1>

          <p
            className="text-primary max-w-3xl mx-auto mb-4 text-sm md:text-base animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            OmniSource memahami bahwa pengalaman pelanggan yang lebih baik
            dimulai dengan privasi dan perlindungan data.
          </p>

          <p
            className="text-muted-foreground max-w-4xl mx-auto mb-4 text-sm md:text-base animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Kami senang dapat membantu setiap pertanyaan, masukan, atau
            permintaan yang Anda miliki mengenai Pemberitahuan Privasi
            OmniSource, praktik privasi dan perlindungan data kami, atau
            bagaimana OmniSource menerapkan hukum privasi dan perlindungan data.
          </p>

          <p
            className="text-muted-foreground max-w-4xl mx-auto mb-4 text-sm md:text-base animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Jika anda ingin mempelajari lebih lanjut tentang pendekatan
            OmniSource terhadap{' '}
            <span className="text-primary cursor-pointer hover:underline">
              privasi
            </span>{' '}
            dan{' '}
            <span className="text-primary cursor-pointer hover:underline">
              perlindungan data
            </span>
            , Anda dapat mengakses Pemberitahuan Privasi kami untuk informasi
            lebih lanjut.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative">
        {/* Continuing gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 via-background to-emerald-500/10" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 -translate-y-[20svh]">
          <div className="max-w-3xl mx-auto">
            {/* Form Card - V5 Style */}
            <div
              className="bg-background rounded-[2rem] p-8 md:p-12 shadow-xl border border-border/50 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <FormDataSeceurity />
              {/* Notes */}
              <div className="mt-10 p-6 bg-gradient-to-br from-primary/5 to-warning/5 rounded-2xl border border-primary/10">
                <h3 className="font-semibold text-foreground mb-4">Notes:</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      Informasi yang diminta di atas digunakan untuk tujuan
                      otentikasi. Selain itu, informasi tambahan dapat diminta
                      untuk tujuan validasi/verifikasi (sebagaimana berlaku),
                      serta untuk pemenuhan permintaan.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      Jangka waktu pemenuhan permintaan dapat berbeda di setiap
                      wilayah sesuai dengan hukum yang berlaku.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      Pemohon dengan ini diinstruksikan untuk memastikan agar
                      pengidentifikasi unik dibuat tidak dapat dipahami sebelum
                      menyerahkan salinan pindaian dokumen otentikasi.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      Semua pertanyaan dengan tanda bintang wajib diisi.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-8 border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <svg
                fill="none"
                height="32"
                viewBox="0 0 40 40"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4C11.163 4 4 11.163 4 20C4 28.837 11.163 36 20 36C24.418 36 28.418 34.209 31.314 31.314"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeLinecap="round"
                  strokeWidth="5"
                />
                <circle cx="32" cy="14" fill="hsl(var(--primary))" r="5" />
                <ellipse
                  cx="32"
                  cy="26"
                  fill="hsl(var(--primary))"
                  rx="4"
                  ry="6"
                />
              </svg>
              <span className="text-background font-bold">OMNI SOURCE</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 OmniSource. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
