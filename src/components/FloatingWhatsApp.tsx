import React, { useState } from 'react';
import { X } from 'lucide-react';
import { whatsappLink } from '../data/iptvData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const contactLink = whatsappLink(
    'Hallo NeroIPTV! Ik heb een vraag over jullie IPTV-abonnement.',
  );

  const scrollToPlans = () => {
    setChatOpen(false);
    document.querySelector('#plannen')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {chatOpen && (
        <div className="mb-4 bg-navy rounded-xl p-5 max-w-xs w-full card-shadow space-y-3 animate-fade-up">
          <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
            <span className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              NeroIPTV support online
            </span>
            <button
              onClick={() => setChatOpen(false)}
              className="p-1 text-white/60 hover:text-white cursor-pointer"
              aria-label="Sluiten"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[13px] text-white/80 leading-snug">
            Hallo! Wilt u een pakket bestellen of hulp bij de installatie op uw Smart TV
            of Fire Stick? Wij helpen u direct via WhatsApp.
          </p>

          <button
            onClick={scrollToPlans}
            className="w-full py-2.5 rounded-lg text-[13px] font-semibold text-white bg-brand hover:bg-brand-dark transition-colors cursor-pointer"
          >
            Bekijk de pakketten
          </button>

          <a
            href={contactLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-lg text-[13px] font-semibold text-white bg-wa hover:brightness-110 transition-all flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Direct chatten op WhatsApp
          </a>
        </div>
      )}

      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="w-14 h-14 rounded-full bg-wa hover:brightness-110 text-white flex items-center justify-center card-shadow transition-all cursor-pointer"
        aria-label="Contact via WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </button>
    </div>
  );
};
