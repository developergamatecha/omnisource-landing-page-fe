"use client"

import { Button } from "~/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function TopNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { label: "Beranda", href: "#beranda" },
        { label: "Produk Kami", href: "#produk" },
        { label: "Fitur", href: "#fitur" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact Us", href: "#contact" },
    ];

    return (
        <nav className="bg-card/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* C shape */}
                                <path
                                    d="M20 4C11.163 4 4 11.163 4 20C4 28.837 11.163 36 20 36C24.418 36 28.418 34.209 31.314 31.314"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                                {/* Person/dot */}
                                <circle cx="32" cy="14" r="5" fill="hsl(var(--primary))" />
                                <ellipse cx="32" cy="26" rx="4" ry="6" fill="hsl(var(--primary))" />
                            </svg>
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
                                href={item.href}
                                className="text-muted-foreground font-medium hover:text-primary transition-colors relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-semibold shadow-md hover:shadow-lg transition-all"
                        >
                            Mulai Akses
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-muted-foreground font-medium hover:text-primary transition-colors py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Button
                                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold mt-2"
                            >
                                Mulai Akses
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

