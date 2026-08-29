import React from 'react';
import { GraduationCap, Code2, BrainCircuit, Briefcase } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      top: 'BCA',
      bottom: 'Graduate',
      sub: 'Bharathiar Univ. \'26',
      icon: GraduationCap,
      color: 'from-blue-500 to-sky-400',
    },
    {
      top: 'Python',
      bottom: 'Focused',
      sub: 'Core & Data Ops',
      icon: Code2,
      color: 'from-sky-500 to-cyan-400',
    },
    {
      top: 'AI/ML',
      bottom: 'Projects',
      sub: 'RAG, Vision, Scrapers',
      icon: BrainCircuit,
      color: 'from-cyan-500 to-teal-400',
    },
    {
      top: 'Open',
      bottom: 'To Work',
      sub: 'Junior & Internship',
      icon: Briefcase,
      color: 'from-indigo-500 to-sky-500',
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto -mt-4 mb-16">
      {/* Horizontal Glass Statistics Container */}
      <div className="rounded-2xl sm:rounded-3xl bg-white/70 backdrop-blur-xl border border-white/90 p-4 sm:p-6 shadow-glass">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100/80">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.top} 
                className={`flex items-center gap-3.5 ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''} group`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-sky-50 to-white border border-sky-100 flex items-center justify-center text-sky-600 shadow-xs group-hover:scale-105 group-hover:border-sky-300 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-heading text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      {stat.top}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-600">
                      {stat.bottom}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-600 -mt-0.5">
                    {stat.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

