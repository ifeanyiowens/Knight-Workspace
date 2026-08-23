import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenBooking: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenBooking }) => {
  const [teamSize, setTeamSize] = useState<number>(5);
  const [hoursPerPersonPerWeek, setHoursPerPersonPerWeek] = useState<number>(6);
  const [hourlyRate, setHourlyRate] = useState<number>(35);

  // Calculations
  const weeklyHoursLost = teamSize * hoursPerPersonPerWeek;
  const annualHoursLost = weeklyHoursLost * 50; // 50 working weeks
  const annualCostWasted = annualHoursLost * hourlyRate;
  
  // Reclaimed with Oparaku Systems (estimated 80% automation & consolidation rate)
  const annualHoursReclaimed = Math.round(annualHoursLost * 0.8);
  const annualValueReclaimed = Math.round(annualCostWasted * 0.8);

  return (
    <section id="calculator" className="py-24 bg-[#0C120F] text-[#EDEDEA] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-mono uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Operational Audit</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
            Calculate your operational leakage.
          </h2>
          
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans">
            See how many working hours your team loses each year to manual copy-pasting, hunting for files across tabs, and chasing status updates.
          </p>
        </div>

        {/* Calculator Card Container (Moritz Dunkel style) */}
        <div className="rounded-3xl bg-[#16201B] border border-white/10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Sliders & Controls */}
            <div className="lg:col-span-6 p-7 sm:p-9 lg:p-11 border-b lg:border-b-0 lg:border-r border-white/10 space-y-8">
              
              <div className="border-b border-white/10 pb-4">
                <h3 className="font-serif text-2xl font-bold text-white">
                  Your Operational Profile
                </h3>
                <p className="text-xs font-mono text-white/60 mt-1">
                  Adjust the sliders to mirror your current team structure.
                </p>
              </div>

              {/* Slider 1: Team Size */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-white/80">
                    Team Size (including contractors)
                  </label>
                  <span className="font-mono text-xs font-bold text-[#D4AF37] px-3 py-1 bg-black/40 rounded-lg border border-[#D4AF37]/30">
                    {teamSize} {teamSize === 1 ? 'PERSON' : 'PEOPLE'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="25"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-black/50 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
                <div className="flex justify-between text-[10px] font-mono text-white/40">
                  <span>01 (Solo)</span>
                  <span>10 (Growing)</span>
                  <span>25+ (Scaling)</span>
                </div>
              </div>

              {/* Slider 2: Hours lost per person weekly */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-white/80">
                    Manual hours lost per person / week
                  </label>
                  <span className="font-mono text-xs font-bold text-[#D4AF37] px-3 py-1 bg-black/40 rounded-lg border border-[#D4AF37]/30">
                    {hoursPerPersonPerWeek} HRS / WK
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="15"
                  step="1"
                  value={hoursPerPersonPerWeek}
                  onChange={(e) => setHoursPerPersonPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-black/50 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
                <p className="text-xs text-white/50 font-sans">
                  Spent searching files, asking for updates, updating spreadsheets, and retyping client info.
                </p>
              </div>

              {/* Slider 3: Hourly Value */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-white/80">
                    Average hourly team cost / value
                  </label>
                  <span className="font-mono text-xs font-bold text-[#D4AF37] px-3 py-1 bg-black/40 rounded-lg border border-[#D4AF37]/30">
                    ${hourlyRate} / HR
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="150"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-black/50 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
                <div className="flex justify-between text-[10px] font-mono text-white/40">
                  <span>$15/hr</span>
                  <span>$75/hr</span>
                  <span>$150/hr</span>
                </div>
              </div>

            </div>

            {/* Right Column: Calculated Results & Impact */}
            <div className="lg:col-span-6 p-7 sm:p-9 lg:p-11 bg-[#111815] text-[#EDEDEA] flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                    Projected Annual Recovery
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/50 text-[#D4AF37] border border-[#D4AF37]/30">
                    80% Efficiency Gain
                  </span>
                </div>

                {/* Primary Metric Output */}
                <div className="mb-6 p-6 rounded-2xl bg-[#1B4332] border border-[#D4AF37]/40 shadow-xl">
                  <span className="text-xs font-mono uppercase tracking-wider text-white/80 block mb-1">
                    Hours Reclaimed Annually
                  </span>
                  <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-2">
                    {annualHoursReclaimed.toLocaleString()}+ hrs
                  </div>
                  <p className="text-xs font-mono text-[#D4AF37]">
                    Equivalent to gaining {Math.round(annualHoursReclaimed / 40)} full working weeks of productive team output.
                  </p>
                </div>

                {/* Secondary Cost Breakdown */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-black/40 border border-red-500/20">
                    <span className="text-[11px] font-mono text-white/50 block mb-1">Current Annual Leakage</span>
                    <div className="font-serif text-2xl font-bold text-red-400">
                      ${annualCostWasted.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-black/40 border border-[#D4AF37]/30">
                    <span className="text-[11px] font-mono text-[#D4AF37] block mb-1">Recovered Annual Value</span>
                    <div className="font-serif text-2xl font-bold text-[#D4AF37]">
                      ${annualValueReclaimed.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Micro guarantees */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-white/80 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <span>Eliminate manual data handoffs between tools</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <span>Free founder from being the operational bottleneck</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <span>Certified architecture tailored to your workflows</span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <button
                onClick={onOpenBooking}
                id="calc-claim-hours-cta"
                className="w-full py-4 px-6 rounded-xl bg-[#D4AF37] text-[#111815] hover:bg-[#E5C358] font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <span>Book Call to Reclaim {annualHoursReclaimed.toLocaleString()} Hours</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
