import React from 'react';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import HeroScene from './HeroScene';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Real-time WebGL 3D scene (neural globe + wire core + parallax dust) */}
      <HeroScene />

      {/* Background Neon Glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* Left Column: Heading, Subtext, CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7 z-10">
          
          {/* Badge: HELLO, I'M PARK */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 shadow-neon-cyan/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-[11px] font-mono font-semibold tracking-widest text-cyan-300 uppercase">
              HELLO, I'M {personalInfo.displayName.toUpperCase()}
            </span>
          </div>

          {/* Main Heading: PYTHON & AI/ML DEVELOPER */}
          <div className="space-y-1">
            <h1 className="text-3d font-heading text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
              PYTHON & <span className="text-neon-gradient">AI/ML</span> <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                DEVELOPER
              </span>
            </h1>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg font-mono text-cyan-300/90 font-medium tracking-tight">
            {personalInfo.tagline}
          </p>

          {/* Short Professional Description */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
            {personalInfo.shortBio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-neon-cyan hover:-translate-y-0.5"
            >
              VIEW MY WORK
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={personalInfo.contact.resumeUrl}
              download="Lohith_V_Resume.pdf"
              className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-mono font-medium text-xs sm:text-sm border border-slate-700 hover:border-cyan-500/40 transition-all duration-300 shadow-glass-dark hover:-translate-y-0.5"
            >
              DOWNLOAD RESUME
              <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              PROFILES:
            </span>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              OPEN FOR WORK
            </span>
          </div>

        </div>

        {/* Right Column: Authentic Profile Visual Environment */}
        <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
          
          {/* Portrait card: tilts with the mouse; inner layers sit at different
              depths (depth-1/2/3) so they shift against each other in 3D. */}
          <div
            data-tilt
            data-tilt-max="16"
            className="relative w-full max-w-[310px] sm:max-w-[360px] p-3 rounded-[32px] bg-slate-900/70 border border-white/10 shadow-2xl shadow-cyan-950/40 group"
          >
            {/* Ambient Cyan/Purple Edge Glow, pushed behind the card */}
            <div
              className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-600/30 rounded-[34px] blur-xl opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none"
              style={{ transform: 'translateZ(-40px)' }}
            />

            {/* Futuristic Tech Corner Accents (float above the photo) */}
            <div className="depth-2 absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg pointer-events-none z-30" />
            <div className="depth-2 absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg pointer-events-none z-30" />
            <div className="depth-2 absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-purple-400 rounded-bl-lg pointer-events-none z-30" />
            <div className="depth-2 absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-purple-400 rounded-br-lg pointer-events-none z-30" />

            {/* Floating 3D skill badges */}
            <div className="depth-3 absolute -left-5 sm:-left-10 top-10 z-40 pointer-events-none" aria-hidden="true">
              <div className="animate-float-slow px-3 py-1.5 rounded-xl bg-slate-950/90 border border-cyan-400/40 shadow-neon-cyan text-[11px] font-mono font-semibold text-cyan-300">
                {'</>'} Python
              </div>
            </div>
            <div className="depth-3 absolute -right-4 sm:-right-8 bottom-16 z-40 pointer-events-none" aria-hidden="true">
              <div className="animate-float-slow px-3 py-1.5 rounded-xl bg-slate-950/90 border border-purple-400/40 shadow-neon-purple text-[11px] font-mono font-semibold text-purple-300" style={{ animationDelay: '-3.5s' }}>
                AI / ML
              </div>
            </div>

            {/* Profile Video / Visual Showcase */}
            <div className="depth-1 relative rounded-[24px] overflow-hidden bg-slate-950 aspect-[4/5] shadow-inner">
              <picture>
                <img
                  src="./assets/profile_suit.jpg"
                  alt="Lohith V - Python & AI/ML Developer in a black suit"
                  width="504"
                  height="614"
                  fetchpriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </picture>

              {/* Futuristic Glass Reflection Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/20 via-transparent to-white/10 pointer-events-none" />


            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
