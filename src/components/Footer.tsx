import React from 'react';
import { FOOTER_LINKS } from '../data/iptvData';

export const Footer: React.FC = () => (
  <footer className="mt-8">
    <div className="bg-navy px-5 sm:px-8 py-8">
      <nav className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link}
            href="#faq"
            className="text-[11.5px] uppercase tracking-wider text-white/85 hover:text-brand transition-colors"
          >
            {link}
          </a>
        ))}
      </nav>
    </div>

    <div className="bg-navy-dark py-4 text-center text-sm text-white/70">
      Copyright © NeroIPTV {new Date().getFullYear()}
    </div>
  </footer>
);
