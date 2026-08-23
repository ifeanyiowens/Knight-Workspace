import React, { useState } from 'react';
import { CORE_PROBLEMS } from '../data/portfolioData';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { AlertCircle, CheckCircle2, ArrowRight, XCircle, Sparkles, Layers } from 'lucide-react';
import { sound } from '../utils/audio';

interface ProblemSectionProps {
  onOpenBooking: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenBooking }) => {
  const [selectedProblemIdx, setSelectedProblemIdx] = useState(0);

  const handleProblemSelect = (idx: number) => {
    sound.playClick();
    setSelectedProblemIdx(idx);
  };

  return (
    <section id="problem" className="py-24 bg-[#111815] text-[#EDEDEA] border-b border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#1B4332]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-mono uppercase tracking-widest mb-3">
            <AlertCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Anatomy of Operational Leakage</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
            Growth exposes what is broken behind the scenes.
          </h2>
          
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans">
            Most businesses do not fail because they lack sales. They stall because their backend is held together by sheer willpower, frantic chat messages, and spreadsheets nobody updated since last Tuesday.
          </p>
        </div>

        {/* Interactive Before vs After Comparison Slider */}
        <BeforeAfterSlider />

        {/* 4 Interactive Problem Diagnostic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {CORE_PROBLEMS.map((problem, idx) => (
            <div
              key={problem.id}
              onClick={() => handleProblemSelect(idx)}
              className={`rounded-2xl p-6 transition-all cursor-pointer border flex flex-col justify-between ${
                selectedProblemIdx === idx
                  ? 'bg-[#1B4332] border-[#D4AF37] shadow-xl ring-1 ring-[#D4AF37]/40'
                  : 'bg-[#16201B] border-white/10 hover:bg-[#1A2520] hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#D4AF37] px-2.5 py-1 rounded-md bg-black/40 border border-[#D4AF37]/20">
                    0{idx + 1}
                  </span>
                  {selectedProblemIdx === idx && (
                    <span className="text-[10px] font-mono text-[#D4AF37] flex items-center gap-1 uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      Active Focus
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug">
                  {problem.title}
                </h3>

                <div className="text-xs font-mono text-[#D4AF37] mb-3">
                  {problem.symptom}
                </div>

                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  {problem.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-[#D4AF37] flex items-center gap-1.5">
                <span>Explore the fix</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Problem-to-Solution Bridge */}
        <div className="rounded-2xl bg-[#16201B] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Current Chaos */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-red-400 text-xs font-mono uppercase tracking-widest">
                <XCircle className="w-4 h-4 text-red-400" />
                <span>The Unsystematized Reality</span>
              </div>
              
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {CORE_PROBLEMS[selectedProblemIdx].title}
              </h4>
              
              <p className="text-sm text-white/80 leading-relaxed">
                {CORE_PROBLEMS[selectedProblemIdx].description}
              </p>
            </div>

            {/* Middle: Transform indicator */}
            <div className="hidden lg:flex lg:col-span-2 justify-center">
              <div className="w-12 h-12 rounded-full bg-[#1B4332] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-xl">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* Right: The Oparaku Engineered System */}
            <div className="lg:col-span-5 space-y-4 bg-[#111815] p-6 sm:p-7 rounded-2xl border border-[#D4AF37]/30">
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-mono uppercase tracking-widest font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>The Oparaku Engineered Fix</span>
              </div>
              
              <div className="font-serif text-xl sm:text-2xl font-bold text-white">
                Relational Architecture & Automations
              </div>
              
              <p className="text-sm text-white/90 leading-relaxed">
                {CORE_PROBLEMS[selectedProblemIdx].solution}
              </p>
              
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4AF37] hover:underline cursor-pointer font-bold"
                >
                  <span>Audit your setup with Owens</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

