import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PRICING_PLANS, splitPrice, formatPrice, whatsappLink } from '../data/iptvData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ScreenOption } from '../types';

export const Pricing: React.FC = () => {
  const [screens, setScreens] = useState<ScreenOption>(1);

  const orderLink = (planName: string, price: number) =>
    whatsappLink(
      `Hallo NeroIPTV! Ik wil graag dit pakket bestellen:\n\n` +
        `Pakket: ${planName}\n` +
        `Schermen: ${screens}\n` +
        `Prijs: €${formatPrice(price)}\n\n` +
        `Kunt u mij een betaallink sturen?`,
    );

  return (
    <section id="plannen" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-navy text-center">
          Kies uw plan
        </h2>

        {/* Screen count toggle */}
        <div
          role="tablist"
          aria-label="Aantal schermen"
          className="mt-8 flex justify-center gap-2"
        >
          {([1, 2] as ScreenOption[]).map((option) => (
            <button
              key={option}
              role="tab"
              aria-selected={screens === option}
              onClick={() => setScreens(option)}
              className={`px-8 py-4 rounded-lg text-[15px] font-medium transition-colors cursor-pointer ${
                screens === option
                  ? 'bg-brand text-white'
                  : 'bg-cream-deep text-navy/70 hover:text-navy'
              }`}
            >
              {option === 1 ? 'Eén scherm' : 'Twee schermen'}
            </button>
          ))}
        </div>

        <div className="mt-12 max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan) => {
            const price = plan.price[screens];
            const { whole, cents } = splitPrice(price);

            return (
              <div
                key={plan.id}
                className="relative bg-navy rounded-xl card-shadow overflow-hidden flex flex-col pt-8 px-6 pb-7"
              >
                {plan.popular && (
                  <span className="ribbon">
                    <span>{plan.badge}</span>
                  </span>
                )}

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-1 text-sm text-white/70">
                    {screens} {screens === 1 ? 'scherm' : 'schermen'}
                  </p>

                  <p className="mt-6 flex items-start justify-center text-brand">
                    <span className="text-2xl font-bold mt-2">€</span>
                    <span className="text-7xl font-extrabold leading-none tracking-tight">
                      {whole}
                    </span>
                    <span className="text-2xl font-bold mt-2">,{cents}</span>
                  </p>
                  <p className="mt-1 text-[15px] text-white/80">{plan.billingText}</p>
                </div>

                <ul className="mt-7 space-y-0 flex-1">
                  {plan.features.map((feature, index) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 py-3 text-[13.5px] text-white/90 ${
                        index < plan.features.length - 1 ? 'border-b border-white/15' : ''
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-white/80" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={orderLink(plan.name, price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 mx-auto inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-white bg-brand hover:bg-brand-dark transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Nu kopen
                </a>

                <p className="mt-3 text-center text-xs text-white/65">
                  Bestellen via WhatsApp · 7 dagen geld terug garantie
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
