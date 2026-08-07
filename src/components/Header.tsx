import React, { useState } from 'react';
import { Menu, X, Lock } from 'lucide-react';
import { Logo } from './Logo';

const navLinks = [
  { name: 'Thuis', href: '#home' },
  { name: 'Plannen', href: '#plannen' },
  { name: 'Installatiegids', href: '#apparaten' },
  { name: 'Onze blog', href: '#faq' },
  { name: 'Wederverkoper worden', href: '#contact' },
  { name: 'Contacteer Ons', href: '#contact' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      {/* Anti-scam notice bar */}
      <div className="bg-brand text-white text-[13px] py-2.5 px-4 text-center">
        <Lock className="w-3.5 h-3.5 inline-block mb-0.5 mr-1.5" />
        Officiële website: <strong className="font-semibold">neroiptv.net</strong>
        <span className="mx-2 opacity-60">|</span>
        Let op nep-sites. Wij zijn de enige echte NeroIPTV.
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#home" onClick={() => handleNavClick('#home')} className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden xl:flex items-center gap-9">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-[15px] text-white/90 hover:text-white transition-colors py-1.5 border-b-2 border-transparent hover:border-brand cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="hidden sm:block">
          <button
            onClick={() => handleNavClick('#plannen')}
            className="px-7 py-3 rounded-lg text-[15px] font-medium text-white bg-brand hover:bg-brand-dark transition-colors cursor-pointer"
          >
            Nu abonneren
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-white cursor-pointer"
          aria-label="Menu openen"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden bg-navy px-6 py-5 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left py-3 text-[15px] text-white/90 border-b border-white/10 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#plannen')}
            className="w-full mt-4 py-3 rounded-lg text-[15px] font-medium text-white bg-brand cursor-pointer"
          >
            Nu abonneren
          </button>
        </div>
      )}
    </header>
  );
};
