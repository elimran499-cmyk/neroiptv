import React from 'react';
import { Tv, Cast, Box, Smartphone, Tablet, Laptop, LucideIcon } from 'lucide-react';
import { SUPPORTED_DEVICES } from '../data/iptvData';

const ICONS: Record<string, LucideIcon> = {
  Tv,
  Cast,
  Box,
  Smartphone,
  Tablet,
  Laptop,
};

export const Devices: React.FC = () => (
  <section id="apparaten" className="py-16 sm:py-20">
    <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy">
          Compatibel Met Alle Apparaten
        </h2>
        <p className="mt-5 text-[17px] text-navy/75 leading-relaxed">
          Onze dienst werkt naadloos op vrijwel alles wat u in huis heeft: Smart TV's,
          Android boxen, telefoons, Apple TV, Amazon Fire Stick en Formuler kastjes.
          Eenvoudig in te stellen, universeel en betrouwbaar — zodat u overal en altijd
          van uw favoriete content kunt genieten.
        </p>

        <p className="mt-8 font-semibold text-navy">Heeft u nog geen TV Box?</p>

        <div className="mt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-lg font-medium text-white bg-navy hover:bg-navy-light transition-colors text-center"
          >
            Bekijk onze aanbevelingen
          </a>
          <a
            href="#plannen"
            className="px-7 py-3.5 rounded-lg font-medium text-white bg-brand hover:bg-brand-dark transition-colors text-center"
          >
            Nu abonneren
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {SUPPORTED_DEVICES.map((device) => {
          const Icon = ICONS[device.iconName] ?? Tv;
          return (
            <div
              key={device.id}
              className="bg-white/70 border border-navy/10 rounded-xl p-5 hover:border-brand/50 transition-colors"
            >
              <Icon className="w-7 h-7 text-brand" />
              <h3 className="mt-3 font-semibold text-navy text-[15px]">{device.name}</h3>
              <p className="mt-1 text-[13px] text-navy/65 leading-snug">
                {device.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
