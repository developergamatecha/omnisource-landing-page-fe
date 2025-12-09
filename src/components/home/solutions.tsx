import { Box, BarChart3, Zap, Shield, HeadphonesIcon } from 'lucide-react';
import Image from 'next/image';

const solutions = [
  {
    id: 1,
    icon: Box,
    title: 'All-in-One Platform',
    description: 'Web dan Mobile terintegrasi dalam satu sistem SaaS.',
  },
  {
    id: 2,
    icon: BarChart3,
    title: 'Realtime Dashboard',
    description: 'Monitoring aktivitas, absensi, dan laporan secara instan.',
  },
  {
    id: 3,
    icon: Zap,
    title: 'Automation-Driven',
    description: 'Payroll, shift, dan laporan otomatis tanpa input manual.',
  },
  {
    id: 4,
    icon: Shield,
    title: 'Scalable & Secure:',
    description:
      'Sistem cloud yang dapat berkembang sesuai kebutuhan perusahaan.',
  },
  {
    id: 5,
    icon: HeadphonesIcon,
    title: 'Supported Implementation',
    description:
      'Tim ahli kami siap mendampingi implementasidari awal hingga pasca go-live.',
  },
];

export function SectionSolutions() {
  return (
    <section className="py-20 lg:py-32 overflow-hidden bg-background">
      {/* Background green and soft blue gradients */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-green-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-sky-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[250px] h-[250px] bg-cyan-400/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Temukan <span className="text-primary">Solusi Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing elit:
          </p>
        </div>

        {/* USP Layout - Cards around phone */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-3 gap-8 items-center">
            {/* Left Cards */}
            <div className="space-y-8">
              {solutions.slice(0, 2).map((solution, index) => (
                <div
                  key={solution.id}
                  className="relative bg-card rounded-2xl p-6 shadow-lg border border-border/50 animate-fade-in hover:shadow-xl transition-shadow"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Number Badge */}
                  <div className="absolute -top-3 right-6 w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                    {solution.id}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Phone */}
            <div
              className="flex justify-center animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <Image
                alt="App mockup"
                className="w-64 h-auto drop-shadow-2xl"
                height={600}
                src="/assets/v5/phone-center-mockup.png"
                width={300}
              />
            </div>

            {/* Right Cards */}
            <div className="space-y-8">
              {solutions.slice(3, 5).map((solution, index) => (
                <div
                  key={solution.id}
                  className="relative bg-card rounded-2xl p-6 shadow-lg border border-border/50 animate-fade-in hover:shadow-xl transition-shadow"
                  style={{ animationDelay: `${(index + 3) * 0.15}s` }}
                >
                  {/* Number Badge */}
                  <div className="absolute -top-3 right-6 w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                    {solution.id}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Center Card (Desktop) */}
          <div className="hidden lg:flex justify-center mt-8">
            <div
              className="relative bg-card rounded-2xl p-6 shadow-lg border border-border/50 max-w-sm animate-fade-in hover:shadow-xl transition-shadow"
              style={{ animationDelay: '0.45s' }}
            >
              {/* Number Badge */}
              <div className="absolute -top-3 right-6 w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                {solutions[2].id}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {solutions[2].title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {solutions[2].description}
              </p>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {/* Phone at top for mobile */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <Image
                alt="App mockup"
                className="w-48 h-auto drop-shadow-2xl"
                height={600}
                src="/assets/v5/phone-center-mockup.png"
                width={300}
              />
            </div>

            {/* Cards in grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  className="relative bg-card rounded-2xl p-6 shadow-lg border border-border/50 animate-fade-in hover:shadow-xl transition-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Number Badge */}
                  <div className="absolute -top-3 right-6 w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                    {solution.id}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
