import React from 'react';
import { X, Github, ExternalLink, Check, Layers, Cpu, Code2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm transition-all duration-300">
      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white/95 backdrop-blur-2xl border border-sky-100 shadow-2xl p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Project Number & Title */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-sky-600 px-2 py-0.5 rounded-md bg-sky-50 border border-sky-200">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-slate-600 uppercase">
              {project.category}
            </span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
            {project.title}
          </h3>
        </div>

        {/* Visual Preview Graphic */}
        <div className="rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-900 to-sky-950 p-6 border border-slate-800 text-white relative overflow-hidden shadow-inner">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-sky-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM ARCHITECTURE
            </span>
            <span>PYTHON • ENGINE</span>
          </div>

          <div className="py-4 space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-sky-400">➜</span>
              <span className="text-slate-400">Core Pipeline:</span>
              <span className="text-white font-semibold">{project.pipeline}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-sky-400">➜</span>
              <span className="text-slate-400">Input Data:</span>
              <span className="text-sky-200">{project.input}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-sky-400">➜</span>
              <span className="text-slate-400">Model / Engine:</span>
              <span className="text-cyan-300">{project.engine}</span>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase font-semibold text-slate-600 tracking-wider">
            OVERVIEW & IMPACT
          </h4>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Key Features List */}
        {project.features && (
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-semibold text-slate-600 tracking-wider">
              KEY IMPLEMENTATIONS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Grid */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-mono uppercase font-semibold text-slate-600 tracking-wider">
            TECH STACK
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-sky-50 text-sky-700 border border-sky-200/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs sm:text-sm font-medium transition-colors shadow-sm"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs sm:text-sm font-medium transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>

      </div>
    </div>
  );
}

