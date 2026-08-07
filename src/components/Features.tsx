import React from 'react';
import { Globe, Clock, Banknote, LucideIcon } from 'lucide-react';
import { FEATURES } from '../data/iptvData';

const ICONS: Record<string, LucideIcon> = { Globe, Clock, Banknote };

export const Features: React.FC = () => (
  <section className="pb-16 sm:pb-20">
    <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-3 gap-6">
      {FEATURES.map((feature) => {
        const Icon = ICONS[feature.iconName] ?? Globe;
        return (
          <div
            key={feature.id}
            className="bg-navy rounded-xl card-shadow px-7 py-9 text-center"
          >
            <Icon className="w-9 h-9 mx-auto text-brand" strokeWidth={1.75} />
            <h3 className="mt-5 text-xl font-bold text-white">{feature.title}</h3>
            <p className="mt-3 text-[15px] text-white/75 leading-relaxed">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);
