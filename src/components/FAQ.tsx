import React, { useState } from 'react';
import { ChevronsDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS, whatsappLink } from '../data/iptvData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const contactLink = whatsappLink(
    'Hallo NeroIPTV! Ik heb een vraag over jullie IPTV-abonnement.',
  );

  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-navy text-center">
          Veelgestelde vragen
        </h2>

        <div className="mt-12 grid lg:grid-cols-[1fr_380px] gap-8 items-start">
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="bg-navy rounded-xl card-shadow">
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="font-semibold text-white text-[15px]">
                      {item.question}
                    </span>
                    <ChevronsDown
                      className={`w-5 h-5 shrink-0 text-white transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <p className="px-6 pb-6 -mt-1 text-[14.5px] text-white/75 leading-relaxed animate-fade-up">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* WhatsApp contact panel */}
          <div
            id="contact"
            className="bg-navy rounded-xl card-shadow px-8 py-14 text-center lg:sticky lg:top-8"
          >
            <HelpCircle className="w-14 h-14 mx-auto text-wa" strokeWidth={2} />
            <h3 className="mt-6 text-2xl font-bold text-white leading-snug">
              Neem contact met ons op via WhatsApp!
            </h3>
            <a
              href={contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-lg font-semibold text-white bg-wa hover:brightness-110 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Verstuur bericht
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
