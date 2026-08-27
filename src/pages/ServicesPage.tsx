import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
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
    <div className="w-full bg-[#0D1310] text-[#EDEDEA]">
      
      {/* Header Banner */}
      <section className="py-20 md:py-24 bg-[#111815]/88 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1B4332]/35 rounded-full blur-[140px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-3 font-mono text-xs text-[#D4AF37] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>PAGE [03/06] • SYSTEMS & CAPABILITIES</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
            Operational Engines Built to Last.
          </h1>

          <p className="text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed font-sans mb-8">
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
              <span>Scope Your Project</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onNavigate('process');
              }}
              className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider border border-white/10 transition-all flex items-center gap-2"
            >
              <span>See the 4-Week Process</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <MarqueeTicker speed="slow" />

      {/* Main Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-12 border-b border-white/10">
          <div>
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block mb-1">
              FULL CAPABILITY MATRIX
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              6 Core Operational Architecture Services
            </h2>
          </div>
          <p className="text-xs font-mono text-white/60 max-w-sm">
            Select any service to inspect granular deliverables, technical requirements, and target business profiles.
          </p>
        </div>

        {/* 6 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              onClick={() => handleSelectService(idx)}
              className={`rounded-3xl p-7 transition-all cursor-pointer border flex flex-col justify-between ${
                selectedServiceIdx === idx
                  ? 'bg-[#1B4332] border-[#D4AF37] shadow-2xl ring-1 ring-[#D4AF37]/50'
                  : 'bg-[#16201B] border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#D4AF37]">
                    [0{idx + 1}]
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="font-mono text-[10px] text-[#D4AF37] uppercase font-bold tracking-wider block">
                    Core Deliverables:
                  </span>
                  {service.deliverables.slice(0, 3).map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-[11px] font-mono text-white/50 mb-3">
                  Best For: <span className="text-white/80">{service.bestFor}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.tools.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-[#D4AF37] border border-[#D4AF37]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Service Deep Dive Card */}
        <div className="rounded-3xl bg-[#141C18] border border-white/10 p-8 sm:p-10 shadow-2xl mb-20 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#D4AF37] uppercase">
            <Sparkles className="w-4 h-4" />
            <span>DEEP DIVE: {selectedService.title}</span>
          </div>

          <h3 className="font-serif text-3xl font-bold text-white mb-4">
            How we implement {selectedService.title}
          </h3>

          <p className="text-sm text-white/70 max-w-3xl leading-relaxed mb-8">
            {selectedService.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10 mb-8">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-4">
                What's Included in the Sprint:
              </h4>
              <div className="space-y-3">
                {selectedService.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3 text-xs font-mono text-white/90">
                    <span className="w-5 h-5 rounded-md bg-[#1B4332] text-[#D4AF37] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0E1411] p-6 rounded-2xl border border-white/5 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 font-bold">
                IDEAL CLIENT FIT
              </h4>
              <p className="text-xs text-white/80 leading-relaxed font-mono">
                {selectedService.bestFor}
              </p>
              
              <div className="pt-4 border-t border-white/10">
                <span className="font-mono text-[10px] text-white/40 uppercase block mb-2">
                  TOOLS & INTEGRATIONS UTILIZED
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedService.tools.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-white/5 text-[#D4AF37] font-mono text-xs border border-white/10">
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
              <span>Book Discovery for This Service</span>
            </button>
          </div>
        </div>

        {/* 3-Tier Engagement Structure Comparison */}
        <div className="rounded-3xl bg-[#16201B] border border-white/10 p-8 sm:p-10 shadow-2xl mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold block mb-2">
              HOW WE WORK TOGETHER
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
              3 Transparent Engagement Models
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-sans">
              Choose the level of support that matches your growth velocity and current operational complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Tier 1: Sprint */}
            <div className="p-7 rounded-2xl bg-[#0E1411] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] block mb-1">
                  TIER 01 • ACCELERATOR
                </span>
                <h4 className="font-serif text-2xl font-bold text-white mb-2">
                  Systems Sprint
                </h4>
                <div className="font-mono text-xs text-white/50 mb-4">4-Week Turnkey Build</div>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  Perfect for focused bottlenecks (e.g. single Notion CRM, Typeform lead router, or ClickUp team setup).
                </p>
                <div className="space-y-2.5 text-xs text-white/80 mb-6 font-mono">
                  <div className="flex items-center gap-2">✓ Single Master Workspace</div>
                  <div className="flex items-center gap-2">✓ Up to 3 Core Automations</div>
                  <div className="flex items-center gap-2">✓ Full Loom Video SOPs</div>
                  <div className="flex items-center gap-2">✓ 14 Days of Free Support After Delivery</div>
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider border border-white/10 transition-all cursor-pointer"
              >
                Inquire on Sprint
              </button>
            </div>

            {/* Tier 2: Full Architecture */}
            <div className="p-7 rounded-2xl bg-[#1B4332] border-2 border-[#D4AF37] shadow-2xl flex flex-col justify-between relative">
              <div className="absolute -top-3 right-6 bg-[#D4AF37] text-[#111815] text-[10px] font-mono font-bold px-3 py-0.5 rounded-full uppercase">
                MOST POPULAR
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] block mb-1">
                  TIER 02 • FULL TRANSFORMATION
                </span>
                <h4 className="font-serif text-2xl font-bold text-white mb-2">
                  Operations Architecture
                </h4>
                <div className="font-mono text-xs text-white/70 mb-4">6-8 Week Complete Overhaul</div>
                <p className="text-xs text-white/80 leading-relaxed mb-6">
                  End-to-end operational engine for 5–25 person teams running on scattered tools and founder memory.
                </p>
                <div className="space-y-2.5 text-xs text-white/90 mb-6 font-mono">
                  <div className="flex items-center gap-2">✓ Company-Wide Single Source of Truth</div>
                  <div className="flex items-center gap-2">✓ Unlimited Inter-App Make.com Pipelines</div>
                  <div className="flex items-center gap-2">✓ Role-Based Permission Architecture</div>
                  <div className="flex items-center gap-2">✓ Live Team Training Workshop</div>
                  <div className="flex items-center gap-2">✓ 14 Days of Free Post-Delivery Support</div>
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-xl bg-[#D4AF37] text-[#111815] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E5C358] transition-all cursor-pointer shadow-lg"
              >
                Book Discovery Call
              </button>
            </div>

            {/* Tier 3: Retainer */}
            <div className="p-7 rounded-2xl bg-[#0E1411] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] block mb-1">
                  TIER 03 • FRACTIONAL OPERATIONS
                </span>
                <h4 className="font-serif text-2xl font-bold text-white mb-2">
                  Systems Hypercare
                </h4>
                <div className="font-mono text-xs text-white/50 mb-4">Monthly Dedicated Retainer</div>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  Ongoing operational leadership, quarterly schema updates, new integration builds, and team support.
                </p>
                <div className="space-y-2.5 text-xs text-white/80 mb-6 font-mono">
                  <div className="flex items-center gap-2">✓ Guaranteed 24hr Turnaround</div>
                  <div className="flex items-center gap-2">✓ New Scenario Builds on Demand</div>
                  <div className="flex items-center gap-2">✓ Monthly Team Optimization Review</div>
                  <div className="flex items-center gap-2">✓ Slack Channel Access</div>
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider border border-white/10 transition-all cursor-pointer"
              >
                Inquire on Retainer
              </button>
            </div>
          </div>
        </div>

        {/* Page Bridge Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-[#111815] border border-white/10">
          <div>
            <span className="text-xs font-mono text-white/40 uppercase">NEXT SECTION</span>
            <h4 className="font-serif text-2xl font-bold text-white">
              The 4-Week Engineering Sprint Methodology
            </h4>
            <p className="text-xs font-mono text-[#D4AF37] mt-1">
              [PAGE 04/06] Audit, Blueprint, Automation Build & Live Simulator
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
