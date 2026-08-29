import React from 'react';
import { Sparkles, Terminal, Cpu, Globe, Database, BookOpen, Layers } from 'lucide-react';
import { skillCategories } from '../data/portfolio';

export default function Skills() {
  const categoryIcons = {
    PROGRAMMING: Terminal,
    'AI / MACHINE LEARNING': Cpu,
    'BACKEND / APIs': Layers,
    'AUTOMATION / WEB': Globe,
    TOOLS: BookOpen,
  };

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] font-mono font-semibold tracking-widest text-cyan-300 uppercase">
              TECHNICAL STACK
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            SKILLS & TECHNOLOGIES
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-xs">
          Categorized by core domain. Realistic proficiency indicators with zero fake percentage metrics.
        </p>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((group) => {
          const Icon = categoryIcons[group.category] || Terminal;
          return (
            <div
              key={group.category}
              className="glass-card-dark p-6 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-slate-800/90 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-white tracking-wider">
                      {group.category}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 block">
                      {group.skills.length} Technologies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Skills List in Category */}
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-sans leading-tight">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>VERIFIED SKILL</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
