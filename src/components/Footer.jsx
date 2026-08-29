import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 mt-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2.5">
            <img
              src="./assets/avatar.jpg"
              alt="Lohith V"
              className="w-7 h-7 rounded-lg object-cover border border-cyan-500/30"
            />
            <div className="flex items-center gap-2 font-heading font-bold text-base text-white tracking-wider">
              <span>{personalInfo.displayName.toUpperCase()}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-xs font-mono font-normal text-slate-400">
                PYTHON & AI/ML DEVELOPER
              </span>
            </div>
          </div>
          <p className="text-xs font-mono text-slate-500">
            © 2026 {personalInfo.name}. All rights reserved.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 border border-white/5 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 border border-white/5 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.contact.email}`}
            aria-label="Email Park"
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 border border-white/5 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-xs font-mono text-slate-400 hover:text-white border border-white/10 hover:border-cyan-500/30 transition-all"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>

      </div>
    </footer>
  );
}
