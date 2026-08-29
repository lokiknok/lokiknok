import React from 'react';
import { Search, FileSpreadsheet, Code2, ShieldCheck, Rocket, Sparkles } from 'lucide-react';
import { processSteps } from '../data/portfolio';

export default function Process() {
  const iconMap = {
    Search,
    FileSpreadsheet,
    Code2,
    ShieldCheck,
    Rocket,
  };

  return (
    <section id="process" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] font-mono font-semibold tracking-widest text-cyan-300 uppercase">
              WORKFLOW & EXECUTION
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            DEVELOPMENT PROCESS
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-xs">
          A disciplined engineering roadmap from conceptualization to reliable production code.
        </p>
      </div>

      {/* Main Process Container */}
      <div className="rounded-3xl sm:rounded-[36px] glass-panel-dark p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Desktop Horizontal Line */}
        <div className="hidden lg:block absolute top-[94px] left-16 right-16 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-30 z-0" />

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
          {processSteps.map((step, idx) => {
            const Icon = iconMap[step.iconName] || Code2;
            return (
              <div
                key={step.number}
                className="group flex flex-col items-start sm:items-center lg:items-start text-left sm:text-center lg:text-left space-y-4"
              >
                {/* Node with Number Badge */}
                <div className="relative flex items-center justify-center">
                  {/* Glowing Outer Ring */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 shadow-glass-dark group-hover:border-cyan-400/50 group-hover:shadow-neon-cyan/40 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Step Number Tag */}
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm">
                    {step.number}
                  </span>
                </div>

                {/* Step Titles */}
                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono font-medium text-cyan-400">
                    {step.subtitle}
                  </p>
                </div>

                {/* Step Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {step.desc}
                </p>

                {/* Mobile Connector Line */}
                {idx !== processSteps.length - 1 && (
                  <div className="lg:hidden w-[2px] h-8 bg-gradient-to-b from-cyan-500/50 to-transparent self-center my-2" />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

