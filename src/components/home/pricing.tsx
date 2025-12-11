import { Box, Check } from 'lucide-react';

import { Button } from '~/components/ui/button';

export function SectionPricing() {
  const plans = [
    {
      name: 'Paket Trial',
      price: 'Rp0',
      period: '/User',
      description:
        'Uji coba gratis selama 30 hari untuk merasakan kemudahan sistem OmniSource. Nikmati akses penuh ke fitur utama dengan kuota maksimal 3 karyawan sebelum beralih ke paket berbayar.',
      features: [
        '30 hari gratis',
        'Maksimal 3 karyawan',
        'Akses fitur dasar',
        'Support email',
      ],
      href: process.env.NEXT_PUBLIC_WEB_APP + 'auth/register',
      popular: false,
      buttonText: 'Mulai Trial Gratis',
    },
    {
      name: 'Bulanan',
      price: 'Rp10.000',
      period: '/User',
      description:
        'Paket berlanggan fleksible untuk perusahaan outsourcing dalam mengelola operasional secara efisien. Termasuk seluruh fitur utama seperti presensi digital, payroll, laporan aktivitas, serta support 24/7 dari tim Omnisource',
      features: [
        'Presensi digital (GPS + Selfie)',
        'HRIS & Shift Management',
        'Payroll automation',
        'Dashboard real-time',
        'Support 24/7',
      ],
      href: process.env.NEXT_PUBLIC_WEB_APP + 'auth/login',
      popular: true,
      buttonText: 'Pilih Paket',
    },
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" id="pricing">
      {/* Background gradients matching V5 design */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-background to-emerald-500/5" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[280px] h-[280px] bg-emerald-400/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-primary">Omnisource</span>
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Pricing & Plan Details
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative animate-fade-in ${plan.popular ? 'md:-mt-4' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-6 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`h-full rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-orange-500/15 via-card to-emerald-500/15 border-2 border-orange-400/30 shadow-2xl shadow-orange-500/10'
                    : 'bg-gradient-to-br from-emerald-500/10 via-card to-orange-500/10 backdrop-blur-sm border border-emerald-400/30 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10'
                }`}
              >
                {/* Plan Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      plan.popular ? 'bg-primary/20' : 'bg-primary/10'
                    }`}
                  >
                    <Box className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl lg:text-6xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-xl text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <a href={plan.href} target="_blank">
                  <Button
                    className={`w-full cursor-pointer ${plan.popular ? '' : ''}`}
                    size="lg"
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.buttonText}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
