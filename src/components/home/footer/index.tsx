import { Phone, Mail, Map } from 'lucide-react';
import Image from 'next/image';

import { FormQuotation } from './form-quotation';

const links = [
  { label: 'Beranda', href: '#home' },
  { label: 'Produk Kami', href: '#produk' },
  { label: 'Fitur', href: '#fitur' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Kontak', href: '#contact' },
];

const legals = [
  { label: 'Support Center', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

export function SectionContact() {
  return (
    <footer className="bg-linear-to-br from-emerald-500/10 via-green-400/5 to-orange-400/10">
      <section className="pt-20 lg:pt-32 pb-10 " id="contact">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Content */}
            <div className="space-y-6">
              <span className="text-primary font-medium">Contact us</span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                We value your input.
                <br />
                Share with us!
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Kami sangat menghargai pertanyaan lebih lanjut mengenai layanan
                dan produk kami. Mari berkoneksi demi mencapai tujuan bersama!
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground">
                      +62-813-1099-959
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">
                      ping@gamatecha.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-border/50">
              <h3 className="text-xl font-semibold text-foreground text-center mb-6">
                We value your input
              </h3>
              <FormQuotation />
            </div>
          </div>
        </div>
      </section>
      {/* Footer Bottom */}
      <section className="bg-[#22262a] rounded-t-3xl lg:rounded-t-[75px] text-white">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 py-20">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  alt="Logo"
                  height={35}
                  src="/assets/white-logo.webp"
                  width={35}
                />
                <h3 className="text-2xl md:text-3xl font-semibold text-white text-foreground">
                  Omnisource
                </h3>
              </div>
              <p className="text-sm text-[#525b65] lg:w-3/4 mb-5">
                Platform manajemen terpercaya untuk mengoptimalkan bisnis Anda
                dengan solusi yang inovatif dan terintegrasi
              </p>
              <div className="flex items-center gap-4 my-3">
                <Mail className="text-primary" />
                <a
                  className="text-sm font-semibold text-[#525b65]"
                  href="mailto:ping@gamatecha.com"
                >
                  ping@gamatecha.com
                </a>
              </div>
              <div className="flex items-center gap-4 my-3">
                <Phone className="text-primary" />
                <a
                  className="text-sm font-semibold text-[#525b65]"
                  href="tel:+628131099959"
                >
                  +62-813-1099-959
                </a>
              </div>
              <div className="flex items-center gap-4 my-3">
                <Map className="text-primary" />
                <span className="text-[#525b65]">Malang, Indonesia</span>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-5 md:mt-0">
              <div>
                <p className="text-lg mb-2 font-semibold text-white">Produk</p>
                <ul className="flex flex-col gap-3 text-[#525b65]">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        className="hover:text-primary duration-300 hover:font-semibold"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-lg mb-2 font-semibold text-white">Legal</p>
                <ul className="flex flex-col gap-3 text-[#525b65]">
                  {legals.map((link) => (
                    <li key={link.label}>
                      <a
                        className="hover:text-primary duration-300 hover:font-semibold"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Year */}
          <div className="flex items-center justify-center pb-5 border-t border-[#525b65] pt-5">
            <p className="text-gray-400 text-sm">
              ©2025 dibuat oleh PT Gamatecha Nusantara
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
