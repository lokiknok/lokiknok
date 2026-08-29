import React from 'react';
import { Sparkles, Terminal, Code2, Database, Globe, Layers, GitBranch, Github, Cpu, FileCode2 } from 'lucide-react';

export default function TechStack() {
  const technologies = [
    {
      name: 'Python',
      category: 'Primary Language',
      desc: 'Core language for automation, AI algorithms, and backend services.',
      icon: Terminal,
    },
    {
      name: 'Flask',
      category: 'Microframework',
      desc: 'Lightweight RESTful API endpoints and backend microservices.',
      icon: Layers,
    },
    {
      name: 'Pandas',
      category: 'Data Analysis',
      desc: 'Dataframe manipulation, data wrangling, and structured analysis.',
      icon: Database,
    },
    {
      name: 'NumPy',
      category: 'Numerical Computing',
      desc: 'High-performance N-dimensional arrays and matrix computations.',
      icon: Cpu,
    },
    {
      name: 'Scikit-learn',
      category: 'Machine Learning',
      desc: 'Supervised classification, regression, and model evaluation.',
      icon: Sparkles,
    },
    {
      name: 'Playwright',
      category: 'Browser Automation',
      desc: 'Reliable headless browser navigation and dynamic web extraction.',
      icon: Globe,
    },
    {
      name: 'Git',
      category: 'Version Control',
      desc: 'Distributed source code history, branching, and repository control.',
      icon: GitBranch,
    },
    {
      name: 'GitHub',
      category: 'Collaboration',
      desc: 'Code hosting, pull requests, CI/CD integration, and project tracking.',
      icon: Github,
    },
    {
      name: 'HTML5',
      category: 'Web Markup',
      desc: 'Semantic markup structure for accessible and modern user interfaces.',
      icon: FileCode2,
    },
    {
      name: 'CSS3',
      category: 'Styling',
      desc: 'Modern responsive layouts, Flexbox, Grid, and subtle animations.',
      icon: Layers,
    },
    {
      name: 'JavaScript',
      category: 'Scripting',
      desc: 'DOM manipulation, asynchronous fetching, and client-side interactions.',
      icon: Code2,
    },
  ];

  return (
    <section id="stack" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Separate Glass Card Container */}
      <div className="rounded-3xl sm:rounded-[32px] bg-white/70 backdrop-blur-xl border border-white/90 p-6 sm:p-10 lg:p-12 shadow-glass">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-sky-200/80 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-700 uppercase">
                TOOLS & FRAMEWORKS
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              TECH STACK
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-600 max-w-xs">
            Focused exclusively on technologies I actively use and build with.
          </p>
        </div>

        {/* Clean Monochrome/Light Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group relative p-4 rounded-2xl bg-white/80 border border-slate-200/80 hover:border-sky-300 hover:bg-white hover:shadow-md hover:shadow-sky-500/10 transition-all duration-300 flex flex-col items-center text-center justify-center hover:-translate-y-1"
              >
                {/* Tech Icon */}
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/70 group-hover:border-sky-300 group-hover:bg-sky-50/70 flex items-center justify-center text-slate-700 group-hover:text-sky-600 transition-all duration-300 mb-2.5">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Tech Name */}
                <h3 className="font-heading text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                  {tech.name}
                </h3>

                {/* Tech Role Tag */}
                <span className="text-[10px] font-mono text-slate-600 mt-0.5 truncate max-w-full">
                  {tech.category}
                </span>

                {/* Hover Details Tooltip */}
                <div className="opacity-0 group-hover:opacity-100 pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 p-2 rounded-xl bg-slate-900 text-white text-[10px] font-mono text-center shadow-xl transition-all duration-200 z-30 scale-95 group-hover:scale-100 hidden sm:block">
                  {tech.desc}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

