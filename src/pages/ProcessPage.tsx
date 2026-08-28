import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { ProcessStep, PageId } from '../types';
import { SystemWorkflowVisualizer } from '../components/SystemWorkflowVisualizer';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { sound } from '../utils/audio';
import {
  Calendar,
  Check,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Clock,
  ShieldCheck,
  Zap,
  Activity,
  FileCheck2,
  Lock,
  GitBranch
} from 'lucide-react';

interface ProcessPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenBooking, onNavigate }) => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIdx];

  const handleStepSelect = (idx: number) => {
    sound.playClick();
    setActiveStepIdx(idx);
  };

  const guarantees = [
    {
      title: 'Zero Duct Tape Guarantee',
      desc: 'No fragile, undocumented Zapier zaps that break without warning. Every automation includes built-in error handling and fallback alerts.',
      icon: ShieldCheck
    },
    {
      title: 'Single Source of Truth',
      desc: 'Every team member knows exactly where data lives. No duplicate entries between Slack, WhatsApp, and spreadsheets.',
      icon: Lock
    },
    {
      title: '100% Video SOP Hand-Off',
      desc: 'Complete Loom video walkthroughs and searchable documentation so new team hires can onboard in under 48 hours.',
      icon: FileCheck2
    },
    {
      title: '14 Days of Free Support After Delivery',
      desc: '14 days of dedicated post-delivery support for workflow fine-tuning, team adoption, and minor adjustments just in case I am needed.',
      icon: Clock
    }
  ];

  return (
    <div className="w-full text-[#EDEDEA]">
      
      {/* Header Banner */}
      <section className="py-20 md:py-24 bg-[#111815]/72 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#1B4332]/35 rounded-full blur-[140px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-3 font-mono text-xs text-[#D4AF37] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>PAGE [04/06] • 4-WEEK ENGINEERING METHODOLOGY</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
            From Chaos to a System That Holds in 28 Days.
          </h1>

          <p className="text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed font-sans mb-8">
            A deterministic, sprint-based approach designed to prevent founder fatigue. We handle the heavy engineering while your business keeps generating revenue.
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
              <span>Schedule Sprint Kickoff</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onNavigate('work');
              }}
              className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider border border-white/10 transition-all flex items-center gap-2"
            >
              <span>Review Past Deployments</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <MarqueeTicker speed="normal" />

      {/* Main Process Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Sprint Phase Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              onClick={() => handleStepSelect(idx)}
              className={`rounded-2xl p-6 transition-all cursor-pointer border flex flex-col justify-between relative overflow-hidden ${
                activeStepIdx === idx
                  ? 'bg-[#1B4332] border-[#D4AF37] shadow-xl ring-1 ring-[#D4AF37]/50'
                  : 'bg-[#16201B] border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#D4AF37]">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-black/40 text-white/70 px-2 py-0.5 rounded border border-white/5">
                    {step.duration}
                  </span>
                </div>

                <div className="font-mono text-[11px] text-[#D4AF37] uppercase tracking-wider mb-1 font-semibold">
                  {step.phase}
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span className="text-[10px] uppercase">Deliverable</span>
                <span className="text-white font-semibold text-[11px] truncate max-w-[140px]">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Active Phase Deep Dive */}
        <div className="rounded-3xl bg-[#16201B]/88 border border-white/10 p-8 sm:p-10 shadow-2xl relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#D4AF37] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>PHASE {activeStep.number}: {activeStep.duration}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                {activeStep.title}
              </h3>

              <p className="text-sm text-white/80 leading-relaxed font-sans">
                {activeStep.description}
              </p>

              <div className="p-4 rounded-xl bg-[#111815] border border-white/10 font-mono text-xs">
                <span className="text-[#D4AF37] font-bold block mb-1">Key Deliverable:</span>
                <span className="text-white">{activeStep.deliverable}</span>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0E1411]/88 p-6 sm:p-8 rounded-2xl border border-white/5 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold block">
                PHASE EXECUTION CHECKLIST
              </span>

              <div className="space-y-3">
                {activeStep.activities.map((act, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm font-mono text-white/90">
                    <span className="w-5 h-5 rounded-md bg-[#1B4332] text-emerald-400 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 border border-[#D4AF37]/30">
                      ✓
                    </span>
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Live Systems Simulator */}
        <div className="mb-20">
          <SystemWorkflowVisualizer />
        </div>

        {/* Interactive Before vs After Comparison */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold block mb-1">
              THE TRANSFORMATION
            </span>
            <h3 className="font-serif text-3xl font-bold text-white">
              Before vs. After Oparaku Systems
            </h3>
          </div>
          <BeforeAfterSlider />
        </div>

        {/* The Anti-Template Debt Manifesto */}
        <div className="rounded-3xl bg-[#141C18]/88 border border-white/10 p-8 sm:p-12 mb-20">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold block mb-2">
              OUR CORE PHILOSOPHY
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
              Why $19 Notion Templates Destroy Operational Velocity.
            </h3>
            
            <div className="space-y-4 text-sm text-white/80 leading-relaxed font-sans">
              <p>
                Most small business owners buy pre-made templates hoping for an overnight cure. Within three weeks, the template is abandoned because it was designed for an imaginary generic company — not your team's real communication cadences, clients, or hand-off bottlenecks.
              </p>
              <p>
                At Oparaku Systems, we do not copy-paste templates. We engineer schemas derived directly from how your clients pay, how your staff communicates, and where tasks fall through the cracks.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Operational Guarantees */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Our 4 Operational Guarantees
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#16201B] border border-white/10">
                <g.icon className="w-6 h-6 text-[#D4AF37] mb-3" />
                <h4 className="font-serif text-lg font-bold text-white mb-2">
                  {g.title}
                </h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Page Bridge Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-[#111815]/88 border border-white/10">
          <div>
            <span className="text-xs font-mono text-white/40 uppercase">NEXT SECTION</span>
            <h4 className="font-serif text-2xl font-bold text-white">
              About Owens Oparaku & The Oparaku Philosophy
            </h4>
            <p className="text-xs font-mono text-[#D4AF37] mt-1">
              [PAGE 05/06] Credentials, Notion & Make certifications, and client reviews
            </p>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onNavigate('about');
            }}
            className="px-6 py-3.5 rounded-xl bg-[#D4AF37] text-[#111815] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E5C358] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Proceed to About</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

    </div>
  );
};
