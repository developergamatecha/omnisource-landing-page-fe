import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

import { FormDataSeceurity } from '~/components/data-security/form';
import { MainFooter } from '~/components/footer';

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
            Omnisource sangat percaya bahwa pengalaman pengguna dapat menjadi
            lebih baik berangkat melalui privasi dan perlindungan data yang
            mumpuni.
          </p>

          <p
            className="text-muted-foreground max-w-4xl mx-auto mb-4 text-sm md:text-base animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Kami senang dapat membantu setiap pertanyaan, masukan, atau
            permintaan yang Anda miliki mengenai privasi data dan perlindungan
            kenyamanan anda selama menggunakan layanan omnisource
          </p>

          <p
            className="text-muted-foreground max-w-4xl mx-auto mb-4 text-sm md:text-base animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Jika anda ingin mempelajari lebih lanjut mengenai pendekatan
            omnisource terhadap kenyamanan serta
            <span className="text-primary cursor-pointer hover:underline">
              data privasi
            </span>{' '}
            selama menggunakan layanan kami, anda dapat mengakses layanan help
            center kami melalui informasi berikut <br />
            <a
              href={process.env.NEXT_PUBLIC_HELP_CENTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary cursor-pointer hover:underline"
            >
              help center
            </a>
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
                      Informasi yang diinputkan digunakan demi tujuan verifikasi
                      data dan pemenuhan permintaan atas pengajuan terkait.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      Pemohon diharapkan untuk mengisi data secara benar dan
                      sesuai dan tidak menyalahgunakan pengisian form ini.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>
                      Mohon untuk mengisi keseluruhan informasi bertanda bintang
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <MainFooter />
    </div>
  );
}
