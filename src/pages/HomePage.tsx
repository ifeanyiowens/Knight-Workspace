import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { CORE_PROBLEMS } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';
import { PageId } from '../types';
import { sound } from '../utils/audio';
import {
  Calendar,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Database,
  Quote,
  Clock,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking, onNavigate }) => {
  const [selectedProblemIdx, setSelectedProblemIdx] = useState(0);

  const handleProblemSelect = (idx: number) => {
    sound.playClick();
    setSelectedProblemIdx(idx);
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section with Statement Layout & Dynamic Taglines */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. Infinite Kinetic Marquee Ticker */}
      <MarqueeTicker speed="normal" />

      {/* 3. Verified High-Impact Metric Numbers */}
      <StatsBar />

      {/* 4. Problem & Diagnostic Showcase with Before/After Slider */}
      <section className="py-20 bg-[#EDEDEA] text-[#16201B] border-b border-black/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-8 border-b border-black/10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#04703D]">
                  WHERE TIME GETS LOST
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#16201B] tracking-tight leading-tight">
                Signs your business outgrew its current setup.
              </h2>
            </div>
            
            <p className="text-sm text-[#16201B]/70 max-w-sm font-sans">
              When your company grows faster than your tools, you become the bottleneck. Here is what is happening behind the scenes:
            </p>
          </div>

          {/* 4 Super Simple & Human Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12">
            {CORE_PROBLEMS.map((problem, idx) => (
              <ScrollReveal key={problem.id} delay={(idx % 4) * 90}>
              <div
                onClick={() => handleProblemSelect(idx)}
                className={`hover-lift rounded-2xl p-6 transition-all cursor-pointer border flex flex-col justify-between h-full ${
                  selectedProblemIdx === idx
                    ? 'bg-[#059C54] border-[#D4AF37] shadow-xl ring-1 ring-[#D4AF37]/40'
                    : 'bg-white border-black/10 hover:border-black/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#D4AF37]">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/5 text-[#16201B]/80">
                      {problem.symptom}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#16201B] mb-2 leading-snug">
                    {problem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#16201B]/75 leading-relaxed mb-4">
                    {problem.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/10 text-xs text-[#D4AF37] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{problem.solution}</span>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Before vs After comparison */}
          <div className="my-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono text-[#04703D] uppercase tracking-widest font-bold block mb-1">
                THE TRANSFORMATION
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#16201B]">
                Before vs. After
              </h3>
            </div>
            <BeforeAfterSlider />
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={() => {
                sound.playClick();
                onNavigate('process');
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-black/5 hover:bg-black/10 text-[#16201B] border border-black/10 text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <span>See How We Fix These in 4 Weeks</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>

        </div>
      </section>


      {/* 8. Bottom Page-Turn Call to Action */}
      <section className="py-20 bg-[#EDEDEA] text-[#16201B] border-b border-black/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-mono text-[#04703D] uppercase tracking-widest block mb-2">
                READY TO STOP RUNNING ON STICKY NOTES?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16201B] mb-2">
                Book your 30-minute Systems Diagnostic.
              </h2>
              <p className="text-sm text-[#16201B]/70 max-w-xl font-sans">
                We'll audit your current tool stack, identify the #1 operational bottleneck stealing founder hours, and map out your custom architecture blueprint.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <button
                onClick={() => {
                  sound.playTrigger();
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D4AF37] text-[#111815] font-bold text-sm font-mono uppercase tracking-wider hover:bg-[#E5C358] transition-all shadow-2xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Call with Owens</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onNavigate('contact');
                }}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-black/5 hover:bg-black/10 text-[#16201B] font-mono text-xs uppercase tracking-wider border border-black/10 transition-all text-center"
              >
                <span>Calculate Your ROI</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
