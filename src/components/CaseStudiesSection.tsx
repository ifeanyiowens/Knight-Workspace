import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { TiltCard } from './TiltCard';
import { ParallaxVisualMockup } from './ParallaxVisualMockup';
import { Database, ArrowUpRight, Sparkles, ArrowRight, Layers, ExternalLink, SlidersHorizontal } from 'lucide-react';
import { sound } from '../utils/audio';

interface CaseStudiesSectionProps {
  onOpenBooking: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Notion' | 'Make' | 'Events' | 'CRM' | 'Retail'>('All');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const filters = [
    { label: 'All Systems (6)', value: 'All' },
    { label: 'Notion Architecture', value: 'Notion' },
    { label: 'Make.com Automations', value: 'Make' },
    { label: 'Event Operations', value: 'Events' },
    { label: 'CRM & Pipelines', value: 'CRM' },
    { label: 'Supply & Atelier', value: 'Retail' },
  ];

  const handleFilterClick = (val: 'All' | 'Notion' | 'Make' | 'Events' | 'CRM' | 'Retail') => {
    sound.playClick();
    setSelectedFilter(val);
  };

  const handleStudyOpen = (study: CaseStudy) => {
    sound.playTrigger();
    setActiveModalStudy(study);
  };

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Notion') return study.tools.some((t) => t.toLowerCase().includes('notion'));
    if (selectedFilter === 'Make') return study.tools.some((t) => t.toLowerCase().includes('make'));
    if (selectedFilter === 'Events') return study.industry.toLowerCase().includes('event') || study.badge.toLowerCase().includes('production') || study.badge.toLowerCase().includes('agency');
    if (selectedFilter === 'CRM') return study.title.toLowerCase().includes('crm') || study.badge.toLowerCase().includes('crm') || study.badge.toLowerCase().includes('donor') || study.badge.toLowerCase().includes('sales') || study.industry.toLowerCase().includes('coaching');
    if (selectedFilter === 'Retail') return study.industry.toLowerCase().includes('retail') || study.industry.toLowerCase().includes('wholesale') || study.industry.toLowerCase().includes('jewelry') || study.industry.toLowerCase().includes('manufacturing');
    return true;
  });

  return (
    <section id="case-studies" className="py-24 bg-[#111815]/72 text-[#EDEDEA] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-mono uppercase tracking-widest mb-3">
              <Database className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Selected Works & Client Architectures</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
              Systems built to scale with growing teams.
            </h2>
            
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans">
              Every build starts with the messy reality of how the business actually runs, and transforms it into a dependable operational engine with real workspaces and automated pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-auto bg-black/40 p-1.5 rounded-2xl border border-white/10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => handleFilterClick(f.value as any)}
                className={`text-xs font-mono px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                  selectedFilter === f.value
                    ? 'bg-[#D4AF37] text-[#111815] font-bold shadow-md'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredStudies.map((study, idx) => (
            <TiltCard
              key={study.id}
              maxTilt={4}
              glare={true}
              cursorText="EXPLORE"
              className="rounded-3xl bg-[#16201B] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all shadow-xl group"
            >
              <div>
                {/* Top Number & Badge Header */}
                <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#D4AF37] px-2.5 py-1 rounded-md bg-black/60 border border-[#D4AF37]/30">
                      [{String(idx + 1).padStart(2, '0')} / 06]
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30">
                      {study.badge}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                    ✓ Deployed OS
                  </span>
                </div>

                {/* System Workspace Image Preview */}
                {study.image && (
                  <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-black/50 relative group/img aspect-[16/9] shadow-inner">
                    <img
                      src={study.image}
                      alt={`${study.title} Notion Workspace Preview`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16201B] via-transparent to-transparent opacity-75 pointer-events-none" />
                    {study.link && (
                      <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-2.5 right-2.5 px-2 py-1 rounded-lg bg-black/80 hover:bg-[#D4AF37] text-white/90 hover:text-[#111815] transition-all border border-white/20 text-[10px] font-mono font-medium flex items-center gap-1 shadow-md"
                        title="Open Live Notion Template / Workspace"
                      >
                        <span>Notion</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}

                {/* Title and Client */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2 leading-tight">
                  {study.title}
                </h3>
                
                <div className="text-xs font-mono text-white/60 mb-5">
                  Client: <span className="text-white font-semibold">{study.client}</span> • {study.industry}
                </div>

                {/* The Bottleneck Box */}
                <div className="text-xs text-white/70 leading-relaxed bg-[#111815] p-4 rounded-2xl border border-white/5 mb-4">
                  <span className="font-mono text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                    Operational Bottleneck:
                  </span>
                  <p className="line-clamp-3">{study.problem}</p>
                </div>

                {/* The Outcome Highlight */}
                {study.stats && (
                  <div className="text-xs text-white/80 leading-relaxed bg-[#141C18] p-3.5 rounded-xl border border-white/10 mb-5">
                    <span className="font-mono text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block mb-0.5">
                      Measurable Result:
                    </span>
                    <p className="text-white font-semibold text-sm">{study.stats.value} — <span className="text-white/70 font-normal">{study.stats.label}</span></p>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {study.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-black/40 text-white/80 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleStudyOpen(study)}
                    className="flex-1 py-3.5 px-4 rounded-xl bg-white/5 text-white hover:bg-[#D4AF37] hover:text-[#111815] transition-all text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer border border-white/10 shadow-sm group"
                  >
                    <span>Inspect Architecture</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  {study.link && (
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        sound.playClick();
                      }}
                      className="p-3.5 rounded-xl bg-white/5 hover:bg-[#1B4332] text-white/80 hover:text-[#D4AF37] border border-white/10 hover:border-[#D4AF37]/40 transition-all text-xs font-mono flex items-center justify-center gap-1.5 flex-shrink-0"
                      title={study.linkText || 'Open System Link'}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Modal for full study details */}
        <CaseStudyModal
          study={activeModalStudy}
          onClose={() => setActiveModalStudy(null)}
          onOpenBooking={onOpenBooking}
        />

      </div>
    </section>
  );
};

