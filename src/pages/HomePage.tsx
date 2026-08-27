import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { SystemWorkflowVisualizer } from '../components/SystemWorkflowVisualizer';
import { CASE_STUDIES, CORE_PROBLEMS, TESTIMONIALS } from '../data/portfolioData';
import { TiltCard } from '../components/TiltCard';
import { ParallaxVisualMockup } from '../components/ParallaxVisualMockup';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { CaseStudy, PageId } from '../types';
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
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);
  const [selectedProblemIdx, setSelectedProblemIdx] = useState(0);

  const featuredStudies = CASE_STUDIES.slice(0, 3);

  const handleStudyOpen = (study: CaseStudy) => {
    sound.playTrigger();
    setActiveModalStudy(study);
  };

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
      <section className="py-20 bg-[#111815]/88 text-[#EDEDEA] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-8 border-b border-white/10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                  WHERE TIME GETS LOST
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Signs your business outgrew its current setup.
              </h2>
            </div>
            
            <p className="text-sm text-white/70 max-w-sm font-sans">
              When your company grows faster than your tools, you become the bottleneck. Here is what is happening behind the scenes:
            </p>
          </div>

          {/* Interactive Before vs After Comparison */}
          <BeforeAfterSlider />

          {/* 4 Super Simple & Human Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12">
            {CORE_PROBLEMS.map((problem, idx) => (
              <div
                key={problem.id}
                onClick={() => handleProblemSelect(idx)}
                className={`rounded-2xl p-6 transition-all cursor-pointer border flex flex-col justify-between ${
                  selectedProblemIdx === idx
                    ? 'bg-[#1B4332] border-[#D4AF37] shadow-xl ring-1 ring-[#D4AF37]/40'
                    : 'bg-[#16201B] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#D4AF37]">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/40 text-white/80">
                      {problem.symptom}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug">
                    {problem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-4">
                    {problem.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-xs text-[#D4AF37] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{problem.solution}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={() => {
                sound.playClick();
                onNavigate('process');
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <span>See How We Fix These in 4 Weeks</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. Featured Works Preview (3 Top Architectures) */}
      <section className="py-20 bg-[#0E1411]/88 text-[#EDEDEA] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-10 border-b border-white/10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                  SELECTED WORKS
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Real systems built for real businesses.
              </h2>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onNavigate('work');
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D4AF37] text-[#111815] text-xs font-bold uppercase tracking-wider hover:bg-[#E5C358] transition-all self-start md:self-auto cursor-pointer shadow-lg group"
            >
              <span>View All 06 Case Studies</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* 3 Clean Featured Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredStudies.map((study, idx) => (
              <div
                key={study.id}
                className="rounded-3xl bg-[#16201B] border border-white/10 p-6 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#D4AF37]">
                      Case 0{idx + 1}
                    </span>
                    <span className="text-[11px] font-medium text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30">
                      {study.badge}
                    </span>
                  </div>

                  <div className="mb-4">
                    <ParallaxVisualMockup
                      studyId={study.id}
                      client={study.client}
                      title={study.title}
                      tools={study.tools}
                    />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white hover:text-[#D4AF37] transition-colors mb-1 leading-snug">
                    {study.title}
                  </h3>
                  
                  <div className="text-xs text-white/60 mb-3">
                    Client: <span className="text-white font-semibold">{study.client}</span> • {study.industry}
                  </div>

                  <div className="text-xs text-white/75 bg-[#111815] p-3 rounded-xl border border-white/5 mb-4">
                    {study.problem}
                  </div>

                  <div className="text-xs text-white/90 font-semibold mb-4 flex items-center gap-1.5">
                    <span className="text-[#D4AF37]">Result:</span>
                    <span>{study.stats?.value} ({study.stats?.label})</span>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {study.tools.map((tool) => (
                      <span key={tool} className="text-[11px] px-2.5 py-1 rounded-lg bg-black/40 text-white/80 border border-white/10">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleStudyOpen(study)}
                    className="w-full py-3 px-3 rounded-xl bg-white/5 text-white hover:bg-[#D4AF37] hover:text-[#111815] transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer border border-white/10 shadow-sm group"
                  >
                    <span>View Story & Solution</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Live Systems Simulator Preview */}
      <section className="py-20 bg-[#111815]/88 text-[#EDEDEA] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SystemWorkflowVisualizer />
        </div>
      </section>

      {/* 7. Verified Client Proof & Testimonials Spotlight */}
      <section className="py-20 bg-[#0E1411]/88 text-[#EDEDEA] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold block mb-2">
                VERIFIED SOCIAL PROOF
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                What clients say after the build.
              </h2>
            </div>
            
            <button
              onClick={() => {
                sound.playClick();
                onNavigate('about');
              }}
              className="text-xs font-mono text-[#D4AF37] hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              <span>View all certifications & reviews on [05] About</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {TESTIMONIALS.slice(0, 2).map((testi) => (
              <div key={testi.id} className="p-7 rounded-3xl bg-[#16201B] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#D4AF37]">
                      {[...Array(testi.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      {testi.source}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-white/90 italic leading-relaxed mb-6 font-serif">
                    "{testi.content}"
                  </p>
                </div>
                
                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <div>
                    <div className="font-bold text-white">{testi.author}</div>
                    <div className="text-white/50 text-[11px]">{testi.role || testi.company}</div>
                  </div>
                  <span className="text-[#D4AF37] text-[11px] bg-black/40 px-2.5 py-1 rounded-lg border border-white/5">
                    {testi.projectType}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Bottom Page-Turn Call to Action */}
      <section className="py-20 bg-[#16201B]/88 text-[#EDEDEA] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block mb-2">
                READY TO STOP RUNNING ON STICKY NOTES?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
                Book your 30-minute Systems Diagnostic.
              </h2>
              <p className="text-sm text-white/70 max-w-xl font-sans">
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
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider border border-white/10 transition-all text-center"
              >
                <span>Calculate Your ROI</span>
              </button>
            </div>
          </div>
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
