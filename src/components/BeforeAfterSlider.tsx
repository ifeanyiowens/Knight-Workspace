import React, { useState, useRef, useEffect } from 'react';
import { AlertCircle, CheckCircle2, ArrowLeftRight, Sparkles } from 'lucide-react';
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
          <span className="font-mono text-xs uppercase tracking-widest text-[#4A7350] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Drag to compare
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#16201B]/50 hidden sm:inline">
          Drag the slider to see both sides
        </span>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full min-h-[520px] sm:min-h-[460px] rounded-3xl overflow-hidden select-none border border-black/10 shadow-xl bg-white cursor-ew-resize"
        data-cursor-text="DRAG"
      >
        {/* AFTER LAYER (revealed from the right) */}
        <div
          className="absolute inset-0 overflow-hidden bg-[#EEF4EE] p-6 sm:p-8 flex flex-col justify-between text-[#16201B]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="min-w-[640px] flex items-center justify-between pb-3 border-b border-[#4A7350]/20">
            <span className="font-mono text-xs font-bold text-[#2F4E33] bg-white px-3 py-1 rounded-full border border-[#4A7350]/40 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              After: what a real system looks like
            </span>
            <span className="text-xs font-mono text-[#4A7350] hidden md:block">
              Scales without adding headcount
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-auto py-3 min-w-[640px]">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#4A7350]/25 text-left shadow-sm">
              <div className="text-xs font-mono text-[#2F4E33] font-bold uppercase mb-1">
                One home for everything
              </div>
              <p className="text-xs text-[#16201B]/75 leading-relaxed font-sans">
                Every lead, project, contractor task, and invoice lives in one place and updates itself, no double entry.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#4A7350]/25 text-left shadow-sm">
              <div className="text-xs font-mono text-[#2F4E33] font-bold uppercase mb-1">
                Work happens automatically
              </div>
              <p className="text-xs text-[#16201B]/75 leading-relaxed font-sans">
                A form fills the CRM. A payment sends the invoice. A task shows up the moment it's needed, all day, every day.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#4A7350]/25 text-left shadow-sm">
              <div className="text-xs font-mono text-[#2F4E33] font-bold uppercase mb-1">
                Nobody needs to ask you
              </div>
              <p className="text-xs text-[#16201B]/75 leading-relaxed font-sans">
                Short videos and clear permissions mean your team gets unstuck on their own.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#4A7350]/25 text-left shadow-sm">
              <div className="text-xs font-mono text-[#2F4E33] font-bold uppercase mb-1">
                You get your week back
              </div>
              <p className="text-xs text-[#16201B]/75 leading-relaxed font-sans">
                20+ hours a week stop going to busywork, so they can go toward growing the business instead.
              </p>
            </div>
          </div>

          <div className="text-right text-xs font-mono text-[#2F4E33] pt-2 border-t border-[#4A7350]/20 min-w-[640px]">
            90% fewer dropped tasks, 1,000+ hours saved a year
          </div>
        </div>

        {/* BEFORE LAYER (clipped left side) */}
        <div
          className="absolute inset-0 bg-[#FBECEC] p-6 sm:p-8 flex flex-col justify-between text-[#16201B] overflow-hidden border-r border-red-300"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="min-w-[640px] flex items-center justify-between pb-3 border-b border-red-300">
            <span className="font-mono text-xs font-bold text-red-700 bg-white px-3 py-1 rounded-full border border-red-300 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              Before: how most businesses run
            </span>
            <span className="text-xs font-mono text-red-600/80 hidden sm:block pr-8">
              Fragile tools, tired founder
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3.5 my-auto py-3 min-w-[640px]">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-red-200 shadow-sm text-left">
              <div className="text-xs font-mono text-red-700 font-bold uppercase mb-1">
                Customer info everywhere
              </div>
              <p className="text-xs text-[#16201B]/75 leading-relaxed font-sans">
                Six different spreadsheets, WhatsApp threads, and email folders, none of them talking to each other.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-red-200 shadow-sm text-left">
              <div className="text-xs font-mono text-red-700 font-bold uppercase mb-1">
                You're the bottleneck
              </div>
              <p className="text-xs text-[#16201B]/75 leading-relaxed font-sans">
                The workflow only lives in your head, so the team keeps interrupting you for approvals and passwords.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-red-200 shadow-sm text-left">
              <div className="text-xs font-mono text-red-700 font-bold uppercase mb-1">
                Leads go cold
              </div>
              <p className="text-xs text-[#16201B]/75 leading-relaxed font-sans">
                New inquiries sit for days. Onboarding falls apart because there's no clear next step.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-red-200 shadow-sm text-left">
              <div className="text-xs font-mono text-red-700 font-bold uppercase mb-1">
                Hours lost to retyping
              </div>
              <p className="text-xs text-[#16201B]/75 leading-relaxed font-sans">
                The same customer record gets copied by hand into five different apps, and mistakes creep in every time.
              </p>
            </div>
          </div>

          <div className="text-xs font-mono text-red-700 min-w-[640px] pt-2 border-t border-red-300">
            40% of team hours lost to manual busywork
          </div>
        </div>

        {/* Slider Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#D4AF37] cursor-ew-resize z-30"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#D4AF37] text-[#16201B] shadow-lg flex items-center justify-center border-2 border-white">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
