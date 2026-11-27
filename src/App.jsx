import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useCardTilt, useScrollReveal } from './hooks/use3DEffects';

export default function App() {
  useCardTilt();
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-[#070a12] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Futuristic Background Ambient Glows & Lighting Blobs */}
      {/* Radial gradients give the same soft glow as blurred blobs,
          without the per-frame GPU cost of animated blur filters. */}
      <div className="fixed inset-0 pointer-events-none -z-20 ambient-glow-bg" aria-hidden="true" />

      {/* Futuristic Tech Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none -z-10 tech-grid-bg opacity-70" aria-hidden="true" />

      {/* Main Page Layout */}
      <div className="relative z-10">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-cyan-500 focus:text-slate-950 focus:font-semibold"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>

    </div>
  );
}
