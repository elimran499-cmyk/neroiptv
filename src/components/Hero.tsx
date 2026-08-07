import React, { useEffect, useState } from 'react';
import { whatsappLink } from '../data/iptvData';
import { WhatsAppIcon } from './WhatsAppIcon';

const ROTATING_WORDS = ['stabiel', 'betrouwbaar', 'betaalbaar'];

export const Hero: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setWordIndex((i) => (i + 1) % ROTATING_WORDS.length),
      2600,
    );
    return () => clearInterval(timer);
  }, []);

  const scrollToPlans = () =>
    document.querySelector('#plannen')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative">
      <div className="relative min-h-[92vh] flex items-center hero-wedge">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-navy-dark/65" />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 pt-36 pb-32 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-tight">
            De <span className="text-brand">Beste</span> Aanbieder Van IPTV Abonnementen
          </h1>

          <p
            key={wordIndex}
            className="mt-4 text-xl sm:text-2xl font-medium text-brand animate-fade-up"
          >
            {ROTATING_WORDS[wordIndex]}
          </p>

          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
            80.000+ live kanalen · 100.000+ films &amp; series · Netflix, Amazon, HBO,
            Apple TV &amp; Hulu · 4K kwaliteit · werkt op elk apparaat · 24/7 support
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToPlans}
              className="w-full sm:w-auto px-10 py-4 rounded-lg text-lg font-medium tracking-wide text-white bg-brand hover:bg-brand-dark transition-colors cursor-pointer"
            >
              NU ABONNEREN
            </button>
            <a
              href={whatsappLink(
                'Hallo NeroIPTV! Ik heb een vraag over jullie IPTV-abonnement.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-lg text-lg font-medium tracking-wide text-white bg-navy hover:bg-navy-light transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              CONTACTEER ONS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
