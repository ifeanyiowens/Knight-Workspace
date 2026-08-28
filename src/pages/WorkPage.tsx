import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy, PageId } from '../types';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { TiltCard } from '../components/TiltCard';
import { ParallaxVisualMockup } from '../components/ParallaxVisualMockup';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { sound } from '../utils/audio';
import {
  Database,
  ArrowUpRight,
  Sparkles,
  ArrowRight,
  Layers,
  ExternalLink,
  SlidersHorizontal,
  CheckCircle2,
  Calendar,
  Zap,
  Activity,
  FolderGit2,
  Cpu
} from 'lucide-react';

interface WorkPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onOpenBooking, onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Notion' | 'Make' | 'Events' | 'CRM' | 'Retail'>('All');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const filters = [
    { label: 'All Architectures (06)', value: 'All' },
    { label: 'Notion OS', value: 'Notion' },
    { label: 'Make.com Logic', value: 'Make' },
    { label: 'Events & Production', value: 'Events' },
    { label: 'CRM & Pipelines', value: 'CRM' },
    { label: 'Retail & Supply Chain', value: 'Retail' },
  ];

  const handleFilterClick = (val: typeof selectedFilter) => {
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
    if (selectedFilter === 'Events') return study.industry.toLowerCase().includes('event') || study.title.toLowerCase().includes('event') || study.badge.toLowerCase().includes('production') || study.badge.toLowerCase().includes('agency');
    if (selectedFilter === 'CRM') return study.title.toLowerCase().includes('crm') || study.title.toLowerCase().includes('donor') || study.badge.toLowerCase().includes('donor') || study.badge.toLowerCase().includes('sales') || study.highlights.some(h => h.toLowerCase().includes('crm') || h.toLowerCase().includes('pipeline') || h.toLowerCase().includes('donor'));
    if (selectedFilter === 'Retail') return study.industry.toLowerCase().includes('retail') || study.industry.toLowerCase().includes('wholesale') || study.industry.toLowerCase().includes('jewelry') || study.industry.toLowerCase().includes('manufacturing');
    return true;
  });

  return (
    <div className="w-full text-[#EDEDEA]">
      
      {/* Page Header Banner */}
      <section className="py-20 md:py-24 bg-[#111815]/72 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1B4332]/30 rounded-full blur-[140px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-3 font-mono text-xs text-[#D4AF37] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>PAGE [02/06] • ARCHITECTURAL PORTFOLIO</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
            Selected Works & Systems Builds.
          </h1>

          <p className="text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed font-sans mb-8">
            Every build is a bespoke operational backbone engineered for real business complexity — eliminating spreadsheets, zeroing dropped tasks, and scaling team capacity without adding headcount.
          </p>

          {/* Quick Metrics Header Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs">
            <div>
              <span className="text-white/40 block text-[10px] uppercase">DEPLOYMENTS</span>
              <span className="text-lg font-bold text-[#D4AF37]">Master OS</span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px] uppercase">HOURS SAVED</span>
              <span className="text-lg font-bold text-emerald-400">1,000+ / yr</span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px] uppercase">DROPPED TASKS</span>
              <span className="text-lg font-bold text-white">90% Reduction</span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px] uppercase">CLIENT RATING</span>
              <span className="text-lg font-bold text-[#D4AF37]">5.0 ★ Top Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <MarqueeTicker speed="fast" />

      {/* Main Works Grid & Filter */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive Filter Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-white/60">
            <SlidersHorizontal className="w-4 h-4 text-[#D4AF37]" />
            <span>FILTER BY ECOSYSTEM:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => handleFilterClick(f.value as any)}
                className={`text-xs font-mono px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                  selectedFilter === f.value
                    ? 'bg-[#D4AF37] text-[#111815] font-bold shadow-md'
                    : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 In-Depth Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
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
                  <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-black/50 relative group/img aspect-[4/3] shadow-inner">
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

                {/* Bold, Commanding System Title */}
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
                <div className="text-xs text-white/80 leading-relaxed bg-[#141C18] p-3.5 rounded-xl border border-white/10 mb-5">
                  <span className="font-mono text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block mb-0.5">
                    Measurable Result:
                  </span>
                  <p className="text-white font-semibold text-sm">{study.stats?.value} — <span className="text-white/70 font-normal">{study.stats?.label}</span></p>
                </div>
              </div>

              {/* Bottom Tools & CTA */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {study.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-black/40 text-white/80 border border-white/10"
                    >
                      {tool}
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

        {/* Operational Comparison Matrix Table across all 6 clients */}
        <div className="rounded-3xl bg-[#16201B]/88 border border-white/10 p-6 sm:p-8 shadow-2xl mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#D4AF37]">
            <Cpu className="w-4 h-4" />
            <span>CROSS-CLIENT ARCHITECTURAL MATRIX</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white mb-6">
            Compare Deliverables & Stack Implementations
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-white/10 text-white/40 uppercase text-[10px]">
                  <th className="pb-3 pr-4">Client Project</th>
                  <th className="pb-3 px-4">Ecosystem</th>
                  <th className="pb-3 px-4">Key Innovation</th>
                  <th className="pb-3 px-4">Primary Metric</th>
                  <th className="pb-3 pl-4 text-right">Inspect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white/80">
                {CASE_STUDIES.map((cs) => (
                  <tr key={cs.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 pr-4 font-bold text-white">
                      {cs.client}
                      <span className="block text-[10px] font-normal text-white/50">{cs.industry}</span>
                    </td>
                    <td className="py-4 px-4 text-[#D4AF37]">
                      {cs.tools.slice(0, 2).join(' + ')}
                    </td>
                    <td className="py-4 px-4 text-white/70 max-w-xs truncate">
                      {cs.highlights[0] || cs.solution}
                    </td>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">
                      {cs.stats?.value}
                    </td>
                    <td className="py-4 pl-4 text-right">
                      <button
                        onClick={() => handleStudyOpen(cs)}
                        className="text-xs text-[#D4AF37] hover:underline cursor-pointer"
                      >
                        Details →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Page Bridge Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-[#111815]/88 border border-white/10">
          <div>
            <span className="text-xs font-mono text-white/40 uppercase">NEXT SECTION</span>
            <h4 className="font-serif text-2xl font-bold text-white">
              Explore Our Services & Systems Capabilities
            </h4>
            <p className="text-xs font-mono text-[#D4AF37] mt-1">
              [PAGE 03/06] Custom Notion, Make.com, Airtable & ClickUp packages
            </p>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onNavigate('services');
            }}
            className="px-6 py-3.5 rounded-xl bg-[#D4AF37] text-[#111815] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E5C358] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Proceed to Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      {/* Case Study Deep Dive Modal */}
      {activeModalStudy && (
        <CaseStudyModal
          study={activeModalStudy}
          onClose={() => setActiveModalStudy(null)}
          onOpenBooking={onOpenBooking}
        />
      )}

    </div>
  );
};
