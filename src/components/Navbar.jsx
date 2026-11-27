import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Terminal, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'PROCESS', href: '#process' },
    { name: 'CONTACT', href: '#contact' },
  ];

  // Header background: a cheap passive scroll listener (React skips
  // re-rendering when the boolean doesn't change).
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy: IntersectionObserver instead of measuring every section on
  // every scroll event.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMobileMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-3.5 ${
        isScrolled 
          ? 'bg-[#070a12]/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-black/40' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
        >
          <div className="relative w-9 h-9 rounded-xl overflow-hidden p-[1.5px] bg-gradient-to-tr from-cyan-500 via-sky-500 to-purple-600 shadow-md shadow-cyan-500/30 group-hover:shadow-cyan-400/50 transition-all">
            <img
              src="./assets/avatar.jpg"
              alt=""
              width="36"
              height="36"
              className="w-full h-full object-cover object-center rounded-[10px]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold tracking-wider text-base sm:text-lg text-white flex items-center gap-1.5">
              {personalInfo.displayName.toUpperCase()}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </span>
            <span className="text-[10px] text-cyan-400/80 -mt-1 font-mono tracking-widest uppercase">
              PYTHON • AI DEV
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-glass-dark">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                className={`relative px-3.5 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-full ${
                  isActive 
                    ? 'text-cyan-400 bg-cyan-500/10 shadow-xs shadow-cyan-500/20 font-semibold' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={personalInfo.contact.resumeUrl}
            download="Lohith_V_Resume.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 rounded-full transition-all duration-200"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            Resume
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2 text-xs font-mono font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 p-[1px] shadow-sm hover:shadow-neon-cyan transition-all duration-300"
          >
            <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-950/80 group-hover:bg-transparent transition-colors">
              LET'S TALK
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="lg:hidden mt-3 p-5 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-cyan-500/30 shadow-2xl shadow-black/80 flex flex-col gap-2 animate-in fade-in zoom-in-95 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-xs font-mono font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-[10px] text-slate-500">→</span>
            </a>
          ))}
          <div className="pt-3 mt-1 border-t border-white/10 flex flex-col gap-2">
            <a
              href={personalInfo.contact.resumeUrl}
              download="Lohith_V_Resume.pdf"
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-medium text-slate-300 bg-slate-900 rounded-xl border border-white/10 hover:border-cyan-500/30"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl shadow-neon-cyan"
            >
              LET'S TALK
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
