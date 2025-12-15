import { Phone, Mail, Map } from 'lucide-react';
import Image from 'next/image';

const links = [
  { label: 'Beranda', href: '#home' },
  { label: 'Produk Kami', href: '#produk' },
  { label: 'Fitur', href: '#fitur' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Kontak', href: '#contact' },
];

const legals = [
  {
    label: 'Support Center',
    href: 'https://dev-omnisource-help-center.gamatecha.space/',
  },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Data Security Form', href: '/data-security' },
];

export function MainFooter() {
  return (
    <footer className="bg-linear-to-br from-emerald-500/10 via-green-400/5 to-orange-400/10">
      {/* Footer Bottom */}
      <section className="bg-[#22262a] rounded-t-3xl lg:rounded-t-[75px] text-white">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 py-20">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  alt="Logo OmniSource"
                  height={35}
                  src="/assets/white-logo.webp"
                  width={35}
                />
                <h3 className="text-2xl md:text-3xl font-semibold text-white text-foreground">
                  Omnisource
                </h3>
              </div>
              <p className="text-sm text-[#626b75] lg:w-3/4 mb-5">
                Ruko De Castello, Jl Simpang Sulfat Selatan No 4B, Kelurahan
                Pandanwangi, Kecamatan Blimbing, Kota Malang, Jawa Timur,
                Indonesia (65124)
              </p>
              <div className="flex items-center gap-4 my-3">
                <Mail className="text-primary" />
                <a
                  className="text-sm font-semibold text-[#626b75]"
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
                <p className="text-lg mb-2 font-semibold text-white">
                  Kebijakan & Dukungan
                </p>
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
              ©PT Gamatecha Solusi Nusantara . All Rights Reserved
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
