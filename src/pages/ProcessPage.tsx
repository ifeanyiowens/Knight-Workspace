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
      desc: 'No automations that quietly break one day with no warning. Every one has error handling and an alert built in.',
      icon: ShieldCheck
    },
    {
      title: 'Single Source of Truth',
      desc: 'Everyone on your team knows exactly where to find something, and it only lives in one place.',
      icon: Lock
    },
    {
      title: '100% Video SOP Hand-Off',
      desc: 'Short videos showing exactly how everything works, so a new hire can pick it up in under 48 hours.',
      icon: FileCheck2
    },
    {
      title: '14 Days of Free Support After Delivery',
      desc: 'Two weeks after delivery, I\'m still around for fine-tuning, questions, and small adjustments as your team settles in.',
      icon: Clock
    }
  ];

  return (
    <div className="w-full text-[#16201B]">
      
      {/* Header Banner */}
      <section className="py-20 md:py-24 bg-[#EDEDEA] border-b border-black/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#A8C6A9]/35 rounded-full blur-[140px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#16201B] tracking-tight leading-[1.05] mb-6">
            From Chaos to a System That Holds in 28 Days.
          </h1>

          <p className="text-base sm:text-xl text-[#16201B]/70 max-w-3xl leading-relaxed font-sans mb-8">
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
              <span>Book a call</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onNavigate('work');
              }}
              className="px-6 py-4 rounded-xl bg-black/5 hover:bg-black/10 text-[#16201B] font-mono text-xs uppercase tracking-wider border border-black/10 transition-all flex items-center gap-2"
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
                  ? 'bg-[#A8C6A9] border-[#D4AF37] shadow-xl ring-1 ring-[#D4AF37]/50'
                  : 'bg-white border-black/10 hover:border-black/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#4A7350]">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-black/5 text-[#16201B]/70 px-2 py-0.5 rounded border border-black/5">
                    {step.duration}
                  </span>
                </div>

                <div className="font-mono text-[11px] text-[#4A7350] uppercase tracking-wider mb-1 font-semibold">
                  {step.phase}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#16201B] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-[#16201B]/70 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs font-mono text-[#16201B]/60">
                <span className="text-[10px] uppercase">Deliverable</span>
                <span className="text-[#16201B] font-semibold text-[11px] truncate max-w-[140px]">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Active Phase Deep Dive */}
        <div className="rounded-3xl bg-white border border-black/10 p-8 sm:p-10 shadow-2xl relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#4A7350] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>PHASE {activeStep.number}: {activeStep.duration}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#16201B] leading-tight">
                {activeStep.title}
              </h3>

              <p className="text-sm text-[#16201B]/80 leading-relaxed font-sans">
                {activeStep.description}
              </p>

              <div className="p-4 rounded-xl bg-white border border-black/10 font-mono text-xs">
                <span className="text-[#D4AF37] font-bold block mb-1">Key Deliverable:</span>
                <span className="text-[#16201B]">{activeStep.deliverable}</span>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-black/5 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#4A7350] font-bold block">
                PHASE EXECUTION CHECKLIST
              </span>

              <div className="space-y-3">
                {activeStep.activities.map((act, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm font-mono text-[#16201B]/90">
                    <span className="w-5 h-5 rounded-md bg-[#A8C6A9] text-[#4A7350] flex items-center justify-center text-xs flex-shrink-0 mt-0.5 border border-[#D4AF37]/30">
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
            <span className="text-xs font-mono text-[#4A7350] uppercase tracking-widest font-bold block mb-1">
              THE TRANSFORMATION
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#16201B]">
              Before vs. After Oparaku Systems
            </h3>
          </div>
          <BeforeAfterSlider />
        </div>

        {/* The Anti-Template Debt Manifesto */}
        <div className="rounded-3xl bg-white border border-black/10 p-8 sm:p-12 mb-20">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#4A7350] font-bold block mb-2">
              OUR CORE PHILOSOPHY
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#16201B] mb-6">
              Why $19 Notion Templates Destroy Operational Velocity.
            </h3>
            
            <div className="space-y-4 text-sm text-[#16201B]/80 leading-relaxed font-sans">
              <p>
                Most small business owners buy a template hoping it fixes everything overnight. Three weeks later it sits unused, because it was built for a made up company, not your team, your clients, or the exact spot where handoffs keep breaking down.
              </p>
              <p>
                At Oparaku Systems, we do not copy-paste templates. We engineer schemas derived directly from how your clients pay, how your staff communicates, and where tasks fall through the cracks.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Operational Guarantees */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#16201B] mb-8 text-center">
            Our 4 Operational Guarantees
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-black/10">
                <g.icon className="w-6 h-6 text-[#D4AF37] mb-3" />
                <h4 className="font-serif text-lg font-bold text-[#16201B] mb-2">
                  {g.title}
                </h4>
                <p className="text-xs text-[#16201B]/70 leading-relaxed">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Page Bridge Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-white border border-black/10">
          <div>
            <span className="text-xs font-mono text-[#16201B]/40 uppercase">NEXT SECTION</span>
            <h4 className="font-serif text-2xl font-bold text-[#16201B]">
              About Owens Oparaku & The Oparaku Philosophy
            </h4>
            <p className="text-xs font-mono text-[#4A7350] mt-1">
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
