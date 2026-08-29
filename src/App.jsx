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

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#070a12] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Futuristic Background Ambient Glows & Lighting Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
        {/* Cyan Orb Top Left */}
        <div className="absolute -top-[10%] left-[10%] w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse-glow" />
        
        {/* Purple Orb Center Right */}
        <div className="absolute top-[30%] -right-[5%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        
        {/* Blue Orb Lower Left */}
        <div className="absolute top-[60%] -left-[10%] w-[550px] h-[550px] rounded-full bg-blue-500/10 blur-[140px] animate-pulse-glow" style={{ animationDelay: '4s' }} />

        {/* Bottom Ambient Glow */}
        <div className="absolute bottom-[5%] right-[15%] w-[650px] h-[650px] rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      {/* Futuristic Tech Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none -z-10 tech-grid-bg opacity-70" />

      {/* Main Page Layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
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
