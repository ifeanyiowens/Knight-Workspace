import React from 'react';
import { STATS } from '../data/portfolioData';
import { Clock, CheckCircle2, TrendingUp, Sparkles, ArrowUpRight } from 'lucide-react';
import { CountUp } from './CountUp';

export const StatsBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-4 h-4 text-[#04703D]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-4 h-4 text-[#04703D]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4 text-[#04703D]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#04703D]" />;
    }
  };

  return (
    <section className="py-16 bg-[#EDEDEA] text-[#0A0A0A] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-black/10 gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#04703D]">
            MEASURABLE OPERATIONAL IMPACT ACROSS CLIENT WORKSPACES
          </span>
          <span className="font-mono text-[11px] text-[#0A0A0A]/50">
            BASED ON LIVE WORKSPACE AUDITS
          </span>
        </div>

        {/* 3 Large Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className="rounded-2xl bg-white border border-black/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#04703D]/50 transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#04703D] font-bold px-2.5 py-1 rounded-md bg-[#04703D]/10 border border-[#04703D]/20">
                  METRIC 0{idx + 1}
                </span>
                <span className="p-2 rounded-lg bg-[#059C54]/50 border border-black/10">
                  {getIcon(stat.iconName)}
                </span>
              </div>

              <div>
                <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A0A0A] tracking-tight mb-2 group-hover:text-[#04703D] transition-colors">
                  <CountUp value={stat.value} duration={1500 + idx * 200} />
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#04703D] mb-2 font-bold">
                  {stat.label}
                </div>
                <p className="text-xs sm:text-sm text-[#0A0A0A]/70 leading-relaxed font-sans">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
