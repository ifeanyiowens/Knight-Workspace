import React from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle2, ArrowUpRight, Database, Calendar, ExternalLink, Sparkles } from 'lucide-react';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose, onOpenBooking }) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#16201B] rounded-3xl shadow-2xl border border-white/10 p-6 sm:p-8 text-[#EDEDEA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80 transition-colors cursor-pointer border border-white/10 z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#1B4332] text-[#D4AF37] border border-[#D4AF37]/30 uppercase tracking-wider">
            {study.badge}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono text-white/80 bg-white/5 border border-white/10">
            {study.industry}
          </span>
          {study.location && (
            <span className="px-3 py-1 rounded-full text-xs font-mono text-white/60 bg-white/5">
              📍 {study.location}
            </span>
          )}
        </div>

        {/* Header Title */}
        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1.5">
          {study.title}
        </h3>
        <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-6">
          Client: {study.client}
        </p>

        {/* System Preview Image */}
        {study.image && (
          <div className="mb-6 overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-xl group relative">
            <img 
              src={study.image} 
              alt={`${study.title} Notion System Interface Preview`} 
              referrerPolicy="no-referrer"
              className="w-full h-56 sm:h-72 object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16201B] via-transparent to-black/30 pointer-events-none" />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#D4AF37] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Verified System Workspace Preview</span>
            </div>
            {study.link && (
              <a
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#E5C358] text-[#111815] text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-lg"
              >
                <span>{study.linkText || 'Open System Link'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}

        {/* Key Stat & Quick Links Bar */}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {study.stats && (
            <div className="p-4 rounded-2xl bg-[#111815] border border-[#D4AF37]/30 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-white/60">
                {study.stats.label}
              </span>
              <span className="font-serif text-lg sm:text-xl font-bold text-[#D4AF37]">
                {study.stats.value}
              </span>
            </div>
          )}

          {study.link && (
            <a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#111815] hover:bg-[#1B4332]/40 border border-white/15 hover:border-[#D4AF37]/50 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-white/80 group-hover:text-white">
                <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                <span className="truncate">{study.linkText || 'Live Notion Link'}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
            </a>
          )}
        </div>

        {/* Problem Breakdown */}
        <div className="space-y-5 mb-8">
          <div className="bg-[#111815] p-5 rounded-2xl border border-red-500/20">
            <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              <span>The Operational Bottleneck</span>
            </div>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
              {study.problem}
            </p>
          </div>

          <div className="bg-[#111815] p-5 rounded-2xl border border-[#D4AF37]/30">
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Database className="w-4 h-4 text-[#D4AF37]" />
              <span>The Custom Oparaku Architecture</span>
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-4 font-sans">
              {study.solution}
            </p>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#D4AF37] block font-bold uppercase tracking-wider">
                Technical Highlights:
              </span>
              {study.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1B4332] text-[#EDEDEA] p-5 rounded-2xl border border-[#D4AF37]/40 shadow-lg">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37] mb-1">
              Measurable Operational Result
            </div>
            <p className="text-sm text-white/95 leading-relaxed font-sans">
              {study.outcome}
            </p>
          </div>
        </div>

        {/* Tools Used */}
        <div className="mb-8">
          <span className="text-xs font-mono text-white/60 uppercase tracking-widest block mb-2">
            Tools & Platform Stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {study.tools.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-5 border-t border-white/10">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-[#D4AF37] text-[#111815] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#E5C358] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Call to Build Similar Architecture</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          {study.link && (
            <a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-5 rounded-xl border border-[#D4AF37]/40 bg-[#1B4332]/60 text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] hover:bg-[#1B4332] transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Link</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3.5 px-5 rounded-xl border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-wider text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
