import React from 'react';

export const Intro: React.FC = () => {
  const scrollToDevices = () =>
    document.querySelector('#apparaten')?.scrollIntoView({ behavior: 'smooth' });

  const scrollToPlans = () =>
    document.querySelector('#plannen')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80"
          alt="Afstandsbediening gericht op een televisie met streamingdiensten"
          className="w-full rounded-xl card-shadow object-cover aspect-[4/3]"
          loading="lazy"
        />

        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-snug">
            Alles-In-Één Premium IPTV-Dienst
          </h2>
          <p className="mt-5 text-[17px] text-navy/75 leading-relaxed">
            Geniet van een complete tv-ervaring voor een eerlijke prijs. Bestel eenvoudig
            via WhatsApp en krijg direct toegang tot meer dan 80.000 live kanalen uit de
            hele wereld, aangevuld met een bibliotheek van ruim 100.000 films en series —
            op al uw favoriete apparaten.
          </p>

          <p className="mt-8 font-semibold text-navy">Heeft u nog geen TV Box?</p>

          <div className="mt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
            <button
              onClick={scrollToDevices}
              className="px-7 py-3.5 rounded-lg font-medium text-white bg-navy hover:bg-navy-light transition-colors cursor-pointer"
            >
              Bekijk onze aanbevelingen
            </button>
            <button
              onClick={scrollToPlans}
              className="px-7 py-3.5 rounded-lg font-medium text-white bg-brand hover:bg-brand-dark transition-colors cursor-pointer"
            >
              Nu abonneren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
