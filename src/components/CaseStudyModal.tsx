import React from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle2, Database, Calendar } from 'lucide-react';

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
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-black/10 p-6 sm:p-8 text-[#16201B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-[#16201B]/80 transition-colors cursor-pointer border border-black/10 z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#059C54] text-[#04703D] border border-[#D4AF37]/30 uppercase tracking-wider">
            {study.badge}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono text-[#16201B]/80 bg-black/5 border border-black/10">
            {study.industry}
          </span>
          {study.location && (
            <span className="px-3 py-1 rounded-full text-xs font-mono text-[#16201B]/60 bg-black/5">
              📍 {study.location}
            </span>
          )}
        </div>

        {/* Header Title */}
        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#16201B] mb-1.5">
          {study.title}
        </h3>
        <p className="text-xs font-mono text-[#04703D] uppercase tracking-widest mb-6">
          Client: {study.client}
        </p>

        {/* System Preview Image */}
        {study.image && (
          <div className="mb-6 overflow-hidden rounded-2xl border border-black/15 bg-[#EDEDEA] shadow-xl group relative">
            <img 
              src={study.image} 
              alt={`${study.title} Notion System Interface Preview`} 
              referrerPolicy="no-referrer"
              className="w-full h-56 sm:h-72 object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/10 pointer-events-none" />
          </div>
        )}

        {/* Key Stat */}
        <div className="mb-6">
          {study.stats && (
            <div className="p-4 rounded-2xl bg-white border border-[#D4AF37]/30 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#16201B]/60">
                {study.stats.label}
              </span>
              <span className="font-serif text-lg sm:text-xl font-bold text-[#D4AF37]">
                {study.stats.value}
              </span>
            </div>
          )}
        </div>

        {/* Problem Breakdown */}
        <div className="space-y-5 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-red-500/20">
            <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              <span>The Operational Bottleneck</span>
            </div>
            <p className="text-xs sm:text-sm text-[#16201B]/80 leading-relaxed font-sans">
              {study.problem}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#D4AF37]/30">
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Database className="w-4 h-4 text-[#D4AF37]" />
              <span>The Custom Oparaku Architecture</span>
            </div>
            <p className="text-xs sm:text-sm text-[#16201B]/90 leading-relaxed mb-4 font-sans">
              {study.solution}
            </p>

            <div className="pt-3 border-t border-black/10 space-y-2">
              <span className="text-xs font-mono text-[#04703D] block font-bold uppercase tracking-wider">
                Technical Highlights:
              </span>
              {study.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#16201B]/70">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#059C54] text-[#16201B] p-5 rounded-2xl border border-[#D4AF37]/40 shadow-lg">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#04703D] mb-1">
              Measurable Operational Result
            </div>
            <p className="text-sm text-[#16201B]/95 leading-relaxed font-sans">
              {study.outcome}
            </p>
          </div>
        </div>

        {/* Tools Used */}
        <div className="mb-8">
          <span className="text-xs font-mono text-[#16201B]/60 uppercase tracking-widest block mb-2">
            Tools & Platform Stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {study.tools.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-black/5 border border-black/10 text-[#16201B]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-5 border-t border-black/10">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-[#D4AF37] text-[#111815] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#E5C358] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Call to Build Similar Architecture</span>
          </button>
          {study.link && (
            <a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-5 rounded-xl border border-[#D4AF37]/40 bg-[#059C54]/60 text-xs font-mono font-bold uppercase tracking-wider text-[#04703D] hover:bg-[#059C54] transition-colors flex items-center justify-center gap-2"
            >
              <span>Open Link</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3.5 px-5 rounded-xl border border-black/10 bg-black/5 text-xs font-mono uppercase tracking-wider text-[#16201B] hover:bg-black/10 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
