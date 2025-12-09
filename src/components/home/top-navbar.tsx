'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '~/components/ui/button';

export function TopNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Produk Kami', href: '#produk' },
    { label: 'Fitur', href: '#fitur' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="bg-card/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <Image
                src="/assets/white-logo.webp"
                alt="Logo"
                width={30}
                height={30}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight tracking-tight">
                OMNI SOURCE
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="text-muted-foreground font-medium hover:text-primary transition-colors relative group"
                href={item.href}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-semibold shadow-md hover:shadow-lg transition-all">
              Mulai Akses
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            className="lg:hidden"
            size="icon"
            variant="ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  className="text-muted-foreground font-medium hover:text-primary transition-colors py-2"
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold mt-2">
                Mulai Akses
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
