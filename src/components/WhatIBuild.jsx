import React from 'react';
import { Bot, Terminal, Globe, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhatIBuild() {
  const categories = [
    {
      id: 'ai-apps',
      title: 'AI APPLICATIONS',
      badge: 'INTELLIGENCE',
      icon: Bot,
      accent: 'from-sky-500/20 via-cyan-400/10 to-transparent',
      borderColor: 'group-hover:border-sky-300',
      iconColor: 'text-sky-600 bg-sky-50',
      desc: 'Applied machine learning systems, semantic retrieval (RAG) over knowledge bases, OpenCV computer vision tools, and conversational interfaces that solve real-world operational problems.',
      items: [
        'Retrieval-Augmented Generation (RAG)',
        'Vector Embeddings & Semantic Search',
        'OpenCV Face & Object Recognition',
        'Conversational Document Q&A',
      ],
    },
    {
      id: 'automation',
      title: 'PYTHON AUTOMATION',
      badge: 'RELIABILITY',
      icon: Terminal,
      accent: 'from-cyan-500/20 via-blue-400/10 to-transparent',
      borderColor: 'group-hover:border-cyan-300',
      iconColor: 'text-cyan-600 bg-cyan-50',
      desc: 'Robust headless browser bots with Playwright and Selenium, automated multi-source scrapers, structured data ingestion pipelines, and event-driven notifications.',
      items: [
        'Headless Browser Automation (Playwright)',
        'Multi-page Web Scraping & Normalization',
        'CSV & Data Pipeline Scheduling',
        'Automated Messaging & Notifications',
      ],
    },
    {
      id: 'web-tools',
      title: 'INTELLIGENT WEB TOOLS',
      badge: 'USER EXPERIENCE',
      icon: Globe,
      accent: 'from-blue-500/20 via-indigo-400/10 to-transparent',
      borderColor: 'group-hover:border-blue-300',
      iconColor: 'text-blue-600 bg-blue-50',
      desc: 'Full-stack tools combining lightweight Flask REST APIs with modern, responsive frontends to expose complex computational algorithms through clean, accessible interfaces.',
      items: [
        'Flask RESTful API Microservices',
        'Responsive Modern Web Dashboards',
        'Real-time Algorithmic Visualizations',
        'Structured JSON Schema Validation',
      ],
    },
  ];

  return (
    <section id="what-i-build" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-sky-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-700 uppercase">
              CORE DOMAINS
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            WHAT I BUILD
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-slate-600 max-w-xs">
          Practical software engineering bridging data algorithms and real-world tools.
        </p>
      </div>

      {/* 3 Futuristic Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              className={`group rounded-3xl bg-white/70 backdrop-blur-xl border border-white/90 p-6 sm:p-8 shadow-glass hover:shadow-glass-hover ${cat.borderColor} flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden`}
            >
              {/* Subtle Animated Hover Glow */}
              <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl ${cat.accent} rounded-full blur-2xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

              <div>
                {/* Category Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${cat.iconColor} border border-slate-200/60 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded-md bg-white/90 text-slate-600 border border-slate-200/70">
                    {cat.badge}
                  </span>
                </div>

                {/* Category Heading */}
                <h3 className="font-heading text-xl font-bold text-slate-900 tracking-tight mb-3 group-hover:text-sky-600 transition-colors">
                  {cat.title}
                </h3>

                {/* Explanation */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {cat.desc}
                </p>

                {/* Capabilities list */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-600">
                <span>STATUS: PRODUCTION-READY</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:animate-ping" />
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}

