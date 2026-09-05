import React from 'react';
import { STATS } from '../data/portfolioData';
import { Clock, CheckCircle2, TrendingUp, Sparkles, ArrowUpRight } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-4 h-4 text-[#D4AF37]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#D4AF37]" />;
    }
  };

  return (
    <section className="py-16 bg-[#EDEDEA] text-[#16201B] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-black/10 gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            MEASURABLE OPERATIONAL IMPACT ACROSS CLIENT WORKSPACES
          </span>
          <span className="font-mono text-[11px] text-[#16201B]/50">
            BASED ON LIVE WORKSPACE AUDITS
          </span>
        </div>

        {/* 3 Large Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className="rounded-2xl bg-white border border-black/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#D4AF37] font-bold px-2.5 py-1 rounded-md bg-black/40 border border-[#D4AF37]/20">
                  METRIC 0{idx + 1}
                </span>
                <span className="p-2 rounded-lg bg-[#A8C6A9]/50 border border-black/10">
                  {getIcon(stat.iconName)}
                </span>
              </div>

              <div>
                <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#16201B] tracking-tight mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {stat.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] mb-2 font-bold">
                  {stat.label}
                </div>
                <p className="text-xs sm:text-sm text-[#16201B]/70 leading-relaxed font-sans">
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
