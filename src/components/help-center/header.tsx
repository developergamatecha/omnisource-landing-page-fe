'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export function HelpCenterHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { label: 'Beranda', href: '/help-center' },
    { label: 'Panduan', href: '/panduan' },
    { label: 'Fitur', href: '/fitur' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <nav className="bg-card/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <Image
                  alt="Logo"
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
            </div>
          </Link>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                className={cn(
                  pathname == item.href && 'text-primary! font-semibold',
                  'text-muted-foreground  hover:text-primary transition-colors relative group',
                )}
                href={item.href}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
