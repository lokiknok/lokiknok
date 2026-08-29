import React, { useState } from 'react';
import { Github, ExternalLink, Sparkles, ArrowRight, Bot, Clock, Terminal, Layers, Check, X } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] font-mono font-semibold tracking-widest text-cyan-300 uppercase">
              FEATURED WORK
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            PROJECTS & PORTFOLIO
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-xs">
          Built with Python, automated headless crawlers, NLP pipelines, and applied machine learning.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, idx) => {
          const isFeatured = project.featured;
          const isPlaceholder = project.isPlaceholder;

          return (
            <div
              key={project.id}
              className={`glass-card-dark rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden ${
                isFeatured 
                  ? 'border-cyan-500/40 shadow-neon-cyan/20 lg:col-span-1' 
                  : isPlaceholder 
                  ? 'border-dashed border-white/10 opacity-80' 
                  : ''
              }`}
            >
              {/* Card Ambient Glow on Hover */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />

              <div>
                {/* Visual Header / Mockup Representation */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-white/10 mb-5 relative overflow-hidden group-hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5 text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-2 text-cyan-300">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      {project.category}
                    </span>
                    <span className="text-slate-500">0{idx + 1}</span>
                  </div>

                  <div className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        {isPlaceholder ? <Clock className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase block">ENGINE</span>
                        <span className="text-xs font-mono font-bold text-slate-200">
                          {isPlaceholder ? 'IN DEVELOPMENT' : project.tags.slice(0, 2).join(' • ').toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {isFeatured && (
                      <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 font-semibold">
                        PRIMARY PROJECT
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-heading text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-white/10 font-medium group-hover:border-cyan-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {/* GitHub Button - points to repository or profile fallback */}
                  <a
                    href={project.github || "https://github.com/lokiknok"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-300 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-colors"
                    title="View Source on GitHub"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    GitHub
                  </a>

                  {/* Live Demo or Status Button */}
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-slate-500 px-2 py-1">
                      {isPlaceholder ? 'Planned' : 'Local / CLI'}
                    </span>
                  )}
                </div>

                {!isPlaceholder && (
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 py-1.5 px-2.5 rounded-lg hover:bg-cyan-500/10 transition-all"
                  >
                    Architecture
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* Interactive Project Architecture Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md transition-all duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-950 border border-cyan-500/40 shadow-2xl p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-8">
              <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30">
                {activeModalProject.category}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                {activeModalProject.title}
              </h3>
            </div>

            <div className="rounded-2xl bg-slate-900/90 border border-white/10 p-5 font-mono text-xs text-slate-300 space-y-2.5">
              <div className="text-cyan-400 font-bold pb-1 border-b border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                EXECUTION PIPELINE
              </div>
              <div>{activeModalProject.pipeline}</div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase font-semibold text-slate-400 tracking-wider">
                OVERVIEW
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {activeModalProject.longDescription || activeModalProject.description}
              </p>
            </div>

            {activeModalProject.features && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase font-semibold text-slate-400 tracking-wider">
                  TECHNICAL CAPABILITIES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase font-semibold text-slate-400 tracking-wider">
                TECHNOLOGY BADGES
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <a
                href={activeModalProject.github || "https://github.com/lokiknok"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-medium border border-white/10 hover:border-cyan-500/40 transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                View Code on GitHub
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
