import React from 'react';
import { GraduationCap, Terminal, BrainCircuit, Cog, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function About() {
  const iconMap = {
    GraduationCap,
    Terminal,
    BrainCircuit,
    Cog,
  };

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Container with Dark Glassmorphism */}
      <div className="rounded-3xl sm:rounded-[36px] glass-panel-dark p-6 sm:p-10 lg:p-14 relative overflow-hidden">
        
        {/* Ambient Glow Blob */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[11px] font-mono font-semibold tracking-widest text-cyan-300 uppercase">
                ABOUT ME
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Building Practical Software with <br />
              <span className="text-neon-gradient">
                Python & Intelligent Algorithms
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                I am a <strong className="text-white">BCA graduate</strong> with a dedicated focus on <strong className="text-cyan-400">Python</strong>, <strong className="text-purple-400">Artificial Intelligence</strong>, Machine Learning, and practical automation.
              </p>
              <p>
                I enjoy engineering end-to-end software solutions—spanning resilient web scraping, API backend integration, and generative AI document pipelines. Rather than focusing on theoretical models alone, my goal is to build reliable, functional applications that solve concrete problems.
              </p>
              <p className="text-slate-400 text-sm font-mono pt-1">
                Currently actively seeking <span className="text-cyan-300">entry-level Software Engineer / Python Developer / AI & ML</span> opportunities where I can contribute actively and expand my technical depth.
              </p>
            </div>

            {/* Verification Checklist */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>BCA — Bharathiar University (June 2026)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Based in {personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Clean Informational Cards (Zero Fake Statistics) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalInfo.aboutCards.map((card) => {
              const Icon = iconMap[card.iconName] || Terminal;
              return (
                <div
                  key={card.title}
                  className="glass-card-dark p-5 rounded-2xl flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-sm font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
