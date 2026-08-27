import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { ProcessStep } from '../types';
import { SystemWorkflowVisualizer } from './SystemWorkflowVisualizer';
import { Sparkles, Check, ArrowRight, Calendar, Layers, Clock, ShieldCheck, Zap } from 'lucide-react';
import { sound } from '../utils/audio';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIdx];

  const handleStepSelect = (idx: number) => {
    sound.playClick();
    setActiveStepIdx(idx);
  };

  return (
    <section id="process" className="py-24 bg-[#111815] text-[#EDEDEA] border-b border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#1B4332]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-mono uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>The 4-Step Methodology</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
              From chaos to an operational engine in 4 weeks.
            </h2>
            
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans">
              No endless discovery meetings or generic templates. A structured four-phase engineering sprint designed to give your business an operational backbone that holds.
            </p>
          </div>

          <button
            onClick={() => {
              sound.playTrigger();
              onOpenBooking();
            }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D4AF37] text-[#111815] font-bold text-sm hover:bg-[#E5C358] transition-all self-start md:self-auto cursor-pointer shadow-lg group"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Project Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              onClick={() => handleStepSelect(idx)}
              className={`rounded-2xl p-6 transition-all cursor-pointer border flex flex-col justify-between relative overflow-hidden ${
                activeStepIdx === idx
                  ? 'bg-[#1B4332] border-[#D4AF37] shadow-xl ring-1 ring-[#D4AF37]/50'
                  : 'bg-[#16201B]/80 border-white/10 hover:bg-[#1A2520] hover:border-white/20'
              }`}
            >
              <div>
                {/* Step Number & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-black/40 text-[#D4AF37] border border-[#D4AF37]/30">
                    PHASE {step.number}
                  </span>
                  <span className="text-[11px] font-mono text-white/60 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    {step.duration}
                  </span>
                </div>

                {/* Phase Tag */}
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] block mb-1">
                  {step.phase}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-white mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Pill */}
              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block mb-1">
                  Primary Outcome:
                </span>
                <span className="text-xs font-semibold text-[#D4AF37] line-clamp-1">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Spotlight for Active Phase */}
        <div className="rounded-2xl bg-[#16201B]/88 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Phase Overview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs px-3 py-1 rounded-md bg-[#1B4332] text-[#D4AF37] font-bold border border-[#D4AF37]/30">
                  PHASE {activeStep.number} / 04
                </span>
                <span className="text-xs text-white/60 font-mono">
                  {activeStep.phase} • {activeStep.duration}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {activeStep.title}
              </h3>

              <p className="text-sm text-white/80 leading-relaxed">
                {activeStep.description}
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block font-bold">
                    Official Deliverable
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {activeStep.deliverable}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Key Activities Checklist */}
            <div className="lg:col-span-6 bg-[#111815] p-6 rounded-xl border border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] block font-bold">
                Activities & Milestones in this Sprint:
              </span>

              <div className="space-y-3">
                {activeStep.activities.map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                    <div className="w-5 h-5 rounded-full bg-[#1B4332] text-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#D4AF37]/30">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{activity}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/60">
                  Ready to start Phase 01?
                </span>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Book Initial Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Live Systems Simulator */}
        <SystemWorkflowVisualizer />

      </div>
    </section>
  );
};

