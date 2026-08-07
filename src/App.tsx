import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Pricing } from './components/Pricing';
import { Devices } from './components/Devices';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-navy flex flex-col font-sans selection:bg-brand selection:text-white">
      <Header />

      <main className="flex-1">
        <Hero />

        {/* Intro: image + "Alles-In-Één Premium IPTV-Dienst" */}
        <Intro />

        {/* Kies uw plan — pricing with screen toggle, orders go via WhatsApp */}
        <Pricing />

        {/* Compatibel Met Alle Apparaten */}
        <Devices />

        {/* Three highlight cards */}
        <Features />

        {/* Veelgestelde vragen + WhatsApp contact panel */}
        <FAQ />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}
