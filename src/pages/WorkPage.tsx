import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy, PageId } from '../types';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { TiltCard } from '../components/TiltCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { CountUp } from '../components/CountUp';
import { ParallaxVisualMockup } from '../components/ParallaxVisualMockup';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { sound } from '../utils/audio';
import {
  Database,
  Sparkles,
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
    <div className="w-full text-[#16201B]">
      
      {/* Page Header Banner */}
      <section className="py-20 md:py-24 bg-[#EDEDEA] border-b border-black/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#059C54]/30 rounded-full blur-[140px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#16201B] tracking-tight leading-[1.05] mb-6">
            Selected Works & Systems Builds.
          </h1>

          <p className="text-base sm:text-xl text-[#16201B]/70 max-w-3xl leading-relaxed font-sans mb-8">
            Every build is made for how that specific business actually runs, so tasks stop getting dropped and the team can grow without hiring just to keep up.
          </p>

          {/* Quick Metrics Header Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-black/5 border border-black/10 font-mono text-xs">
            <div>
              <span className="text-[#16201B]/40 block text-[10px] uppercase">DEPLOYMENTS</span>
              <span className="text-lg font-bold text-[#1C3A5E]">Master OS</span>
            </div>
            <div>
              <span className="text-[#16201B]/40 block text-[10px] uppercase">HOURS SAVED</span>
              <span className="text-lg font-bold text-[#04703D]">1,000+ / yr</span>
            </div>
            <div>
              <span className="text-[#16201B]/40 block text-[10px] uppercase">DROPPED TASKS</span>
              <span className="text-lg font-bold text-[#16201B]">90% Reduction</span>
            </div>
            <div>
              <span className="text-[#16201B]/40 block text-[10px] uppercase">CLIENT RATING</span>
              <span className="text-lg font-bold text-[#1C3A5E]">5.0 ★ Top Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <MarqueeTicker speed="fast" />

      {/* Main Works Grid & Filter */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive Filter Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-black/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#16201B]/60">
            <SlidersHorizontal className="w-4 h-4 text-[#1C3A5E]" />
            <span>FILTER BY ECOSYSTEM:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => handleFilterClick(f.value as any)}
                className={`text-xs font-mono px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                  selectedFilter === f.value
                    ? 'bg-[#1C3A5E] text-[#111815] font-bold shadow-md'
                    : 'bg-black/5 text-[#16201B]/70 hover:text-[#16201B] hover:bg-black/10 border border-black/10'
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
            <ScrollReveal key={study.id} delay={(idx % 3) * 100}>
            <TiltCard
              maxTilt={4}
              glare={true}
              cursorText="EXPLORE"
              className="rounded-3xl bg-white border border-black/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#1C3A5E]/50 transition-all shadow-xl group"
            >
              <div>
                {/* Top Number & Badge Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/10">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#04703D] bg-[#1C3A5E]/10 px-2.5 py-0.5 rounded-full border border-[#1C3A5E]/30">
                      {study.badge}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#04703D] font-semibold">
                    ✓ Deployed OS
                  </span>
                </div>

                {/* System Workspace Image Preview */}
                {study.image && (
                  <div className="mb-5 overflow-hidden rounded-2xl border border-black/10 bg-[#EDEDEA] relative group/img aspect-[4/3] shadow-inner">
                    <img
                      src={study.image}
                      alt={`${study.title} Notion Workspace Preview`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-75 pointer-events-none" />
                  </div>
                )}

                {/* Bold, Commanding System Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#16201B] group-hover:text-[#1C3A5E] transition-colors mb-2 leading-tight">
                  {study.title}
                </h3>
                
                <div className="text-xs font-mono text-[#16201B]/60 mb-5">
                  Client: <span className="text-[#16201B] font-semibold">{study.client}</span> • {study.industry}
                </div>

                {/* The Bottleneck Box */}
                <div className="text-xs text-[#16201B]/70 leading-relaxed bg-white p-4 rounded-2xl border border-black/5 mb-4">
                  <span className="font-mono text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                    Operational Bottleneck:
                  </span>
                  <p className="line-clamp-3">{study.problem}</p>
                </div>

                {/* The Outcome Highlight */}
                <div className="text-xs text-[#16201B]/80 leading-relaxed bg-white p-3.5 rounded-xl border border-black/10 mb-5">
                  <span className="font-mono text-[10px] font-bold text-[#04703D] uppercase tracking-wider block mb-0.5">
                    Measurable Result:
                  </span>
                  <p className="text-[#16201B] font-semibold text-sm"><CountUp value={study.stats?.value || ''} className="text-[#16201B] font-semibold" /> <span className="text-[#16201B]/70 font-normal">, {study.stats?.label}</span></p>
                </div>
              </div>

              {/* Bottom Tools & CTA */}
              <div className="pt-4 border-t border-black/10">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {study.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-black/5 text-[#16201B]/80 border border-black/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleStudyOpen(study)}
                    className="flex-1 py-3.5 px-4 rounded-xl bg-black/5 text-white hover:bg-[#1C3A5E] hover:text-white transition-all text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer border border-black/10 shadow-sm group"
                  >
                    <span>Inspect Architecture</span>
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
                      className="p-3.5 rounded-xl bg-black/5 hover:bg-[#059C54] text-[#16201B]/80 hover:text-[#1C3A5E] border border-black/10 hover:border-[#1C3A5E]/40 transition-all text-xs font-mono flex items-center justify-center gap-1.5 flex-shrink-0"
                      title={study.linkText || 'Open System Link'}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Page Bridge Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-white border border-black/10">
          <div>
            <span className="text-xs font-mono text-[#16201B]/40 uppercase">NEXT SECTION</span>
            <h4 className="font-serif text-2xl font-bold text-[#16201B]">
              Explore Our Services & Systems Capabilities
            </h4>
            <p className="text-xs font-mono text-[#04703D] mt-1">
              Custom Notion, Make.com, Airtable & ClickUp packages
            </p>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onNavigate('services');
            }}
            className="px-6 py-3.5 rounded-xl bg-[#1C3A5E] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#2A4D7A] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Proceed to Services</span>
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
