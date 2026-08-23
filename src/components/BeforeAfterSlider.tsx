import React, { useState, useRef, useEffect } from 'react';
import { AlertCircle, CheckCircle2, Sliders, ArrowLeftRight, Sparkles, Layers, Zap } from 'lucide-react';
import { sound } from '../utils/audio';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
    sound.playClick();
  };

  useEffect(() => {
    const handleMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, [isDragging]);

  return (
    <div className="w-full my-12">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Transformation Matrix
          </span>
        </div>
        <span className="text-[11px] font-mono text-white/50 hidden sm:inline">
          Drag slider horizontally to compare all 4 operational states
        </span>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full min-h-[520px] sm:min-h-[460px] rounded-3xl overflow-hidden select-none border border-white/10 shadow-2xl bg-[#0B0F0D] cursor-ew-resize"
        data-cursor-text="DRAG"
      >
        {/* AFTER LAYER (Full background right side) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#122B20] via-[#16201B] to-[#0A0E0C] p-6 sm:p-8 flex flex-col justify-between text-[#EDEDEA]">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
            <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/40 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              AFTER: Oparaku Systems Architecture (4 Pillars)
            </span>
            <span className="text-xs font-mono text-[#D4AF37] hidden md:block">
              Scale 10x with zero extra headcount
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-auto py-3">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#1B4332]/50 border border-[#D4AF37]/30 backdrop-blur-md text-left shadow-lg">
              <div className="text-xs font-mono text-[#D4AF37] font-bold uppercase mb-1 flex items-center gap-1.5">
                <span>✓ 01. Unified Relational Hub</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                One centralized workspace where every lead, project milestone, contractor task, and invoice links dynamically with zero duplicate data entry.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#1B4332]/50 border border-[#D4AF37]/30 backdrop-blur-md text-left shadow-lg">
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase mb-1 flex items-center gap-1.5">
                <span>✓ 02. Silent Make.com Webhooks</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                Forms auto-populate CRM, invoices auto-dispatch on Stripe payment, and team tasks generate instantaneously 24/7.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#1B4332]/50 border border-[#D4AF37]/30 backdrop-blur-md text-left shadow-lg">
              <div className="text-xs font-mono text-[#D4AF37] font-bold uppercase mb-1 flex items-center gap-1.5">
                <span>✓ 03. Role-Based Video SOPs</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                Bespoke Loom libraries and permission views so every contractor and manager executes independently with zero hand-holding.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#1B4332]/50 border border-[#D4AF37]/30 backdrop-blur-md text-left shadow-lg">
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase mb-1 flex items-center gap-1.5">
                <span>✓ 04. 100% Deterministic Scaling</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                Founder reclaims 20+ hours per week, eliminating operational chaos to focus purely on high-leverage revenue growth.
              </p>
            </div>
          </div>

          <div className="text-right text-xs font-mono text-emerald-400/80 pt-2 border-t border-emerald-500/20">
            ✓ 90% Reduction in dropped tasks • 1,000+ hours saved annually
          </div>
        </div>

        {/* BEFORE LAYER (Clipped left side) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#1F1212] via-[#181111] to-[#0E0A0A] p-6 sm:p-8 flex flex-col justify-between text-[#EDEDEA] overflow-hidden border-r border-red-500/40"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="min-w-[640px] flex items-center justify-between pb-3 border-b border-red-500/20">
            <span className="font-mono text-xs font-bold text-red-400 bg-red-950/80 px-3 py-1 rounded-full border border-red-500/40 flex items-center gap-1.5 inline-flex">
              <AlertCircle className="w-3.5 h-3.5" />
              BEFORE: Operational Chaos (4 Bottlenecks)
            </span>
            <span className="text-xs font-mono text-red-400/70 hidden sm:block pr-8">
              Fragile tools & founder burnout
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3.5 my-auto py-3 min-w-[640px]">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-red-950/35 border border-red-500/30 backdrop-blur-md shadow-lg text-left">
              <div className="text-xs font-mono text-red-400 font-bold uppercase mb-1 flex items-center gap-1.5">
                <span>✗ 01. Fragmented Spreadsheets</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                Customer info scattered across 6+ Google Sheets, WhatsApp threads, and unorganized email folders with zero sync.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-red-950/35 border border-red-500/30 backdrop-blur-md shadow-lg text-left">
              <div className="text-xs font-mono text-red-400 font-bold uppercase mb-1 flex items-center gap-1.5">
                <span>✗ 02. Founder Is The Bottleneck</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                Workflows only exist in the founder's head. Team constantly interrupts for basic approvals and access credentials.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-red-950/35 border border-red-500/30 backdrop-blur-md shadow-lg text-left">
              <div className="text-xs font-mono text-red-400 font-bold uppercase mb-1 flex items-center gap-1.5">
                <span>✗ 03. Dropped Leads & Churn</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                New inquiries sit uncontacted for days. Client onboarding falls apart due to lack of clear delivery protocols.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-red-950/35 border border-red-500/30 backdrop-blur-md shadow-lg text-left">
              <div className="text-xs font-mono text-red-400 font-bold uppercase mb-1 flex items-center gap-1.5">
                <span>✗ 04. 40% Payroll Re-Entry Waste</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                Hours wasted copy-pasting customer records across apps, triggering duplicate invoices and painful delivery delays.
              </p>
            </div>
          </div>

          <div className="text-xs font-mono text-red-400/80 min-w-[640px] pt-2 border-t border-red-500/20">
            ✗ 40% of team payroll lost on manual clerical friction.
          </div>
        </div>

        {/* Interactive Slider Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#D4AF37] cursor-ew-resize z-30"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#D4AF37] text-[#111815] shadow-2xl flex items-center justify-center border-2 border-white/20">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
