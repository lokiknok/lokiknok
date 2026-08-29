import React from 'react';
import { Terminal, BrainCircuit, Bot, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { services } from '../data/portfolio';

export default function Services() {
  const iconMap = {
    Terminal,
    BrainCircuit,
    Bot,
    Layers,
  };

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] font-mono font-semibold tracking-widest text-cyan-300 uppercase">
              WHAT I DO
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            SERVICES & FOCUS AREAS
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-xs">
          End-to-end technical capabilities grounded in Python, automation, and applied AI.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = iconMap[service.iconName] || Terminal;
          return (
            <div
              key={service.id}
              className="glass-card-dark p-6 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle Neon Top Border Highlight */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.accent} opacity-40 group-hover:opacity-100 transition-opacity`} />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-500/50 transition-all shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xl font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-heading text-base sm:text-lg font-bold text-white tracking-wide mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                  {service.shortDesc}
                </p>

                {/* Details List */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Indicator */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>PRACTICAL & PRODUCTION</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

