import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';
import { Service, PageId } from '../types';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { TiltCard } from '../components/TiltCard';
import { sound } from '../utils/audio';
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Zap,
  Database,
  FileCode2,
  Workflow,
  Clock,
  ShieldCheck,
  PackageCheck,
  FolderSync
} from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking, onNavigate }) => {
  const [selectedServiceIdx, setSelectedServiceIdx] = useState(0);
  const selectedService = SERVICES[selectedServiceIdx];

  const handleSelectService = (idx: number) => {
    sound.playClick();
    setSelectedServiceIdx(idx);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode2':
        return <FileCode2 className="w-5 h-5 text-[#D4AF37]" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-[#D4AF37]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#D4AF37]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#D4AF37]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Zap className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="w-full text-[#16201B]">
      
      {/* Header Banner */}
      <section className="py-20 md:py-24 bg-[#EDEDEA] border-b border-black/10 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#059C54]/35 rounded-full blur-[140px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#16201B] tracking-tight leading-[1.05] mb-6">
            Operational Engines Built to Last.
          </h1>

          <p className="text-base sm:text-xl text-[#16201B]/70 max-w-3xl leading-relaxed font-sans mb-8">
            No cookie-cutter templates. We architect bespoke relational backends, automated data pipelines, and clear SOPs tailored to your exact business workflows and team dynamics.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                sound.playTrigger();
                onOpenBooking();
              }}
              className="px-7 py-4 rounded-xl bg-[#D4AF37] text-[#111815] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E5C358] transition-all shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a call</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onNavigate('process');
              }}
              className="px-6 py-4 rounded-xl bg-black/5 hover:bg-black/10 text-[#16201B] font-mono text-xs uppercase tracking-wider border border-black/10 transition-all flex items-center gap-2"
            >
              <span>See the 7-Day Process</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <MarqueeTicker speed="slow" />

      {/* Main Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-12 border-b border-black/10">
          <div>
            <span className="text-xs font-mono text-[#04703D] uppercase tracking-widest block mb-1">
              FULL CAPABILITY MATRIX
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16201B]">
              6 Core Operational Architecture Services
            </h2>
          </div>
          <p className="text-xs font-mono text-[#16201B]/60 max-w-sm">
            Select any service to inspect granular deliverables, technical requirements, and target business profiles.
          </p>
        </div>

        {/* 6 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((service, idx) => (
            <ScrollReveal key={service.id} delay={(idx % 3) * 100}>
            <div
              onClick={() => handleSelectService(idx)}
              className={`hover-lift rounded-3xl p-7 transition-all cursor-pointer border flex flex-col justify-between h-full ${
                selectedServiceIdx === idx
                  ? 'bg-[#059C54] border-[#D4AF37] shadow-2xl ring-1 ring-[#D4AF37]/50'
                  : 'bg-white border-black/10 hover:border-black/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#059C54] border border-black/10 flex items-center justify-center">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#04703D]">
                    [0{idx + 1}]
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#16201B] mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-[#16201B]/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="font-mono text-[10px] text-[#04703D] uppercase font-bold tracking-wider block">
                    Core Deliverables:
                  </span>
                  {service.deliverables.slice(0, 3).map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#16201B]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#04703D] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-black/10">
                <div className="text-[11px] font-mono text-[#16201B]/50 mb-3">
                  Best For: <span className="text-[#16201B]/80">{service.bestFor}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.tools.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#04703D]/10 text-[#04703D] border border-[#D4AF37]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Selected Service Deep Dive Card */}
        <div className="rounded-3xl bg-white border border-black/10 p-8 sm:p-10 shadow-2xl mb-20 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#04703D] uppercase">
            <Sparkles className="w-4 h-4" />
            <span>DEEP DIVE: {selectedService.title}</span>
          </div>

          <h3 className="font-serif text-3xl font-bold text-[#16201B] mb-4">
            How we implement {selectedService.title}
          </h3>

          <p className="text-sm text-[#16201B]/70 max-w-3xl leading-relaxed mb-8">
            {selectedService.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-black/10 mb-8">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#04703D] font-bold mb-4">
                What's Included in the Sprint:
              </h4>
              <div className="space-y-3">
                {selectedService.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3 text-xs font-mono text-[#16201B]/90">
                    <span className="w-5 h-5 rounded-md bg-[#059C54] text-[#D4AF37] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#16201B]/40 font-bold">
                IDEAL CLIENT FIT
              </h4>
              <p className="text-xs text-[#16201B]/80 leading-relaxed font-mono">
                {selectedService.bestFor}
              </p>
              
              <div className="pt-4 border-t border-black/10">
                <span className="font-mono text-[10px] text-[#16201B]/40 uppercase block mb-2">
                  TOOLS & INTEGRATIONS UTILIZED
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedService.tools.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-black/5 text-[#D4AF37] font-mono text-xs border border-black/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => {
                sound.playTrigger();
                onOpenBooking();
              }}
              className="px-6 py-3.5 rounded-xl bg-[#D4AF37] text-[#111815] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E5C358] transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a call</span>
            </button>
          </div>
        </div>

        {/* 3-Tier Engagement Structure Comparison */}
        <div className="rounded-3xl bg-white border border-black/10 p-8 sm:p-10 shadow-2xl mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#04703D] uppercase tracking-widest font-bold block mb-2">
              HOW WE WORK TOGETHER
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#16201B] mb-3">
              Pick the Scope That Fits Right Now
            </h3>
            <p className="text-xs sm:text-sm text-[#16201B]/60 font-sans">
              Every tier is priced by what actually gets built, not a vague estimate. Bigger, multi-tool builds are scoped individually.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Tier 1: Quick Start */}
            <div className="p-7 rounded-2xl bg-white border border-black/10 flex flex-col justify-between hover-lift h-full">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#04703D] block mb-1">
                  TIER 01
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#16201B] mb-2">
                  Quick Start
                </h4>
                <div className="font-mono text-xs text-[#16201B]/50 mb-1">1 to 2 Days</div>
                <div className="font-mono text-sm font-bold text-[#04703D] mb-4">$70</div>
                <p className="text-xs text-[#16201B]/70 leading-relaxed mb-6">
                  One database done right. A client tracker, content calendar, or task list with real views and formulas, not a template.
                </p>
                <div className="space-y-2.5 text-xs text-[#16201B]/80 mb-6 font-mono">
                  <div className="flex items-center gap-2">✓ 1 Custom Database</div>
                  <div className="flex items-center gap-2">✓ Up to 3 Views</div>
                  <div className="flex items-center gap-2">✓ Loom Walkthrough</div>
                  <div className="flex items-center gap-2">✓ 1 Round of Revisions</div>
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-xl bg-black/5 hover:bg-black/10 text-[#16201B] font-mono text-xs uppercase tracking-wider border border-black/10 transition-all cursor-pointer"
              >
                Book a call
              </button>
            </div>

            {/* Tier 2: Mini Hub */}
            <div className="p-7 rounded-2xl bg-white border border-black/10 flex flex-col justify-between hover-lift h-full">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#04703D] block mb-1">
                  TIER 02
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#16201B] mb-2">
                  Mini Hub
                </h4>
                <div className="font-mono text-xs text-[#16201B]/50 mb-1">2 to 3 Days</div>
                <div className="font-mono text-sm font-bold text-[#04703D] mb-4">$150</div>
                <p className="text-xs text-[#16201B]/70 leading-relaxed mb-6">
                  A small system, not just a tracker. Two to three databases actually linked together with a simple dashboard.
                </p>
                <div className="space-y-2.5 text-xs text-[#16201B]/80 mb-6 font-mono">
                  <div className="flex items-center gap-2">✓ 2 to 3 Connected Databases</div>
                  <div className="flex items-center gap-2">✓ Relations & Rollups</div>
                  <div className="flex items-center gap-2">✓ Simple Dashboard View</div>
                  <div className="flex items-center gap-2">✓ 1 Round of Revisions</div>
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-xl bg-black/5 hover:bg-black/10 text-[#16201B] font-mono text-xs uppercase tracking-wider border border-black/10 transition-all cursor-pointer"
              >
                Book a call
              </button>
            </div>

            {/* Tier 3: Core Build */}
            <div className="p-7 rounded-2xl bg-white border border-black/10 flex flex-col justify-between hover-lift h-full">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#04703D] block mb-1">
                  TIER 03
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#16201B] mb-2">
                  Core Build
                </h4>
                <div className="font-mono text-xs text-[#16201B]/50 mb-1">3 to 4 Days</div>
                <div className="font-mono text-sm font-bold text-[#04703D] mb-4">$300</div>
                <p className="text-xs text-[#16201B]/70 leading-relaxed mb-6">
                  This is where it stops being a tracker and starts being a system. Real automation included.
                </p>
                <div className="space-y-2.5 text-xs text-[#16201B]/80 mb-6 font-mono">
                  <div className="flex items-center gap-2">✓ 4 to 6 Connected Databases</div>
                  <div className="flex items-center gap-2">✓ Team & Owner Dashboards</div>
                  <div className="flex items-center gap-2">✓ 1 Working Automation</div>
                  <div className="flex items-center gap-2">✓ Up to 2 Rounds of Revisions</div>
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-xl bg-black/5 hover:bg-black/10 text-[#16201B] font-mono text-xs uppercase tracking-wider border border-black/10 transition-all cursor-pointer"
              >
                Book a call
              </button>
            </div>

            {/* Tier 4: Standard Build */}
            <div className="p-7 rounded-2xl bg-[#059C54] border-2 border-[#D4AF37] shadow-2xl flex flex-col justify-between relative hover-lift h-full">
              <div className="absolute -top-3 right-6 bg-[#D4AF37] text-[#111815] text-[10px] font-mono font-bold px-3 py-0.5 rounded-full uppercase">
                FLAGSHIP
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#04703D] block mb-1">
                  STANDARD BUILD
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#16201B] mb-2">
                  Full Operations Build
                </h4>
                <div className="font-mono text-xs text-[#16201B]/70 mb-1">7 Days</div>
                <div className="font-mono text-sm font-bold text-[#16201B] mb-4">$1,500 and up</div>
                <p className="text-xs text-[#16201B]/80 leading-relaxed mb-6">
                  A complete operational engine, built once and meant to hold as the team grows.
                </p>
                <div className="space-y-2.5 text-xs text-[#16201B]/90 mb-6 font-mono">
                  <div className="flex items-center gap-2">✓ 8+ Connected Databases</div>
                  <div className="flex items-center gap-2">✓ Full Make.com Automation</div>
                  <div className="flex items-center gap-2">✓ Role-Based Permissions</div>
                  <div className="flex items-center gap-2">✓ Full Video SOP Library</div>
                  <div className="flex items-center gap-2">✓ Live Training Call</div>
                  <div className="flex items-center gap-2">✓ Revisions to Your Satisfaction</div>
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-xl bg-[#D4AF37] text-[#111815] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E5C358] transition-all cursor-pointer shadow-lg"
              >
                Book a call
              </button>
            </div>
          </div>

          <div className="mt-6 p-5 rounded-2xl bg-black/5 border border-black/10 text-xs sm:text-sm text-[#16201B]/70 text-center">
            Need more than one tool, or an ongoing retainer? Every custom package is scoped and priced after we talk through what you actually need.
          </div>
        </div>

        {/* Page Bridge Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-white border border-black/10">
          <div>
            <span className="text-xs font-mono text-[#16201B]/40 uppercase">NEXT SECTION</span>
            <h4 className="font-serif text-2xl font-bold text-[#16201B]">
              The 7-Day Engineering Sprint Methodology
            </h4>
            <p className="text-xs font-mono text-[#04703D] mt-1">
              Audit, Blueprint, and Automation Build
            </p>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onNavigate('process');
            }}
            className="px-6 py-3.5 rounded-xl bg-[#D4AF37] text-[#111815] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E5C358] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Proceed to Process</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

    </div>
  );
};
