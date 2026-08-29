import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct mailto trigger (transparent, reliable, no fake backend claims)
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Container Card */}
      <div className="rounded-3xl sm:rounded-[36px] glass-panel-dark p-6 sm:p-10 lg:p-14 relative overflow-hidden">
        
        {/* Soft Ambient Radial Lights */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Authentic Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-mono font-semibold tracking-widest text-cyan-300 uppercase">
                  GET IN TOUCH
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                LET'S BUILD <br />
                <span className="text-neon-gradient">SOMETHING</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed font-sans pt-1">
                Open to entry-level software engineering, Python development, and AI/ML project opportunities. Reach out directly through any of the channels below.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3 pt-2">
              
              {/* Email with 1-click copy */}
              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/40 flex items-center justify-between gap-3 group transition-all">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="text-xs sm:text-sm font-mono font-medium text-slate-200 hover:text-cyan-400 transition-colors truncate block"
                    >
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/40 flex items-center justify-between gap-3 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">
                      LINKEDIN
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                      linkedin.com/in/lohith-v
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/40 flex items-center justify-between gap-3 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 border border-white/10">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">
                      GITHUB
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                      github.com/lokiknok
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* Location & Phone */}
              <div className="pt-2 flex flex-col gap-1 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalInfo.contact.phone}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 relative">
              <h3 className="font-heading text-lg font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Opens directly in your mail application with your pre-filled details.
              </p>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-medium">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-medium">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-medium">
                    MESSAGE / PROJECT DETAILS
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Park, I came across your portfolio and wanted to discuss an opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-xs font-mono font-semibold tracking-wider transition-all duration-300 shadow-neon-cyan/30 hover:shadow-neon-cyan hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  SEND MESSAGE
                </button>
              </form>

              {/* Developer note on backend connection */}
              <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500">
                Tip: Ready to link to Formspree, EmailJS, or custom Flask backend in <code className="text-slate-400">src/components/Contact.jsx</code>.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
