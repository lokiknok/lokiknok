import React, { useState } from 'react';
import { Download, FileText, Award, Eye, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

export default function ResumeSection() {
  const [showPreview, setShowPreview] = useState(false);

  const certifications = [
    {
      title: 'Python Programming',
      issuer: 'Infosys Springboard',
      year: '2025',
      focus: 'Fundamentals, logic building, algorithms & data structures',
    },
    {
      title: 'Web Development & Fundamentals',
      issuer: 'IBM SkillsBuild (Edunet)',
      year: '2025',
      focus: 'HTML5, CSS3, modern web design & development practices',
    },
    {
      title: 'Salesforce Developer (Agent Blazer)',
      issuer: 'SmartBridge',
      year: '2025',
      focus: 'Cloud enterprise architecture & developer tooling',
    },
  ];

  return (
    <section id="resume" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Dedicated Glassmorphism Card */}
      <div className="rounded-3xl sm:rounded-[36px] bg-white/75 backdrop-blur-2xl border border-white p-8 sm:p-12 lg:p-16 shadow-glass relative overflow-hidden text-center">
        
        {/* Soft Ambient Radial Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-sky-200/40 to-cyan-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-700 uppercase">
              CAREER & OPPORTUNITIES
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            LET'S BUILD <br />
            <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              SOMETHING USEFUL
            </span>
          </h2>

          {/* Text */}
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            Looking for an opportunity where I can apply my Python, AI/ML, and problem-solving skills while growing as a developer.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href="./assets/Lohith_v resume.pdf"
              download="Lohith_v resume.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-slate-900 hover:bg-sky-600 text-white font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-sky-400" />
              DOWNLOAD RESUME ↓
            </a>

            <button
              onClick={() => setShowPreview(!showPreview)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/80 hover:bg-white text-slate-800 font-medium text-sm border border-slate-200/90 transition-all duration-300 shadow-xs hover:shadow hover:border-sky-300 hover:text-sky-600 hover:-translate-y-0.5"
            >
              <Eye className="w-4 h-4 text-slate-500" />
              {showPreview ? 'HIDE OVERVIEW' : 'VIEW HIGHLIGHTS'}
            </button>
          </div>

          {/* Verification Tag */}
          <div className="pt-2 text-xs font-mono text-slate-600 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Official Resume • PDF Format • Updated 2026</span>
          </div>

        </div>

        {/* Certifications Preview Accordion */}
        {showPreview && (
          <div className="mt-12 pt-8 border-t border-slate-100/90 text-left animate-in fade-in duration-300">
            <h3 className="text-xs font-mono uppercase font-semibold text-slate-600 tracking-wider mb-4 text-center">
              VERIFIED CERTIFICATIONS & TRAINING
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div 
                  key={cert.title}
                  className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 hover:border-sky-200 shadow-xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-100">
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] font-mono text-slate-600">{cert.year}</span>
                  </div>
                  <h4 className="font-heading text-sm font-bold text-slate-900 mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-snug">
                    {cert.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

