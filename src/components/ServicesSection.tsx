import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { LayoutGrid, Cpu, Users, Layers, Search, ShieldCheck, Check, ArrowUpRight, Calendar, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-[#1C3A5E]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#1C3A5E]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#1C3A5E]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#1C3A5E]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#1C3A5E]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#1C3A5E]" />;
      default:
        return <LayoutGrid className="w-5 h-5 text-[#1C3A5E]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0C120F]/72 text-[#EDEDEA] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Moritz Dunkel style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#1C3A5E] text-xs font-mono uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1C3A5E]"></span>
              <span>Scope of Expertise & Systems</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
              Engineered the right way from the start.
            </h2>
            
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans">
              I do not just throw together generic templates. I architect custom operational engines tailored to your team workflows, certified across Notion, ClickUp, Airtable, and Make.com.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-all self-start md:self-auto cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#1C3A5E]" />
            <span>Inquire About Custom Setup</span>
            <ArrowUpRight className="w-4 h-4 text-[#1C3A5E]" />
          </button>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              onClick={() => setSelectedServiceId(service.id)}
              className={`rounded-2xl p-7 transition-all cursor-pointer border flex flex-col justify-between ${
                selectedServiceId === service.id
                  ? 'bg-[#16201B] border-[#1C3A5E] shadow-xl ring-1 ring-[#1C3A5E]/30'
                  : 'bg-[#111815] border-white/10 hover:bg-[#141C18] hover:border-white/20'
              }`}
            >
              <div>
                {/* Header with Number and Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-black/50 text-[#1C3A5E] border border-[#1C3A5E]/20">
                      0{idx + 1}
                    </span>
                    <div className="p-2 rounded-lg bg-[#1B4332]/60 border border-[#1C3A5E]/30">
                      {getServiceIcon(service.icon)}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {service.tools.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans mb-5">
                  {service.description}
                </p>
              </div>

              <div>
                {/* Deliverables */}
                <div className="pt-4 border-t border-white/10 space-y-2 mb-5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1C3A5E] block">
                    Core Deliverables:
                  </span>
                  <div className="space-y-1.5">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-white/85">
                        <Check className="w-3.5 h-3.5 text-[#1C3A5E] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider bg-white/5 text-white hover:bg-[#1C3A5E] hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-white/10"
                >
                  <span>Inquire For This System</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-2xl bg-[#16201B]/88 border border-white/10 p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Unsure which setup fits your business best?
            </h4>
            <p className="text-xs sm:text-sm text-white/70 font-sans">
              Let us map your current tools and workflow in a 20-minute operational discovery session.
            </p>
          </div>
          
          <button
            onClick={onOpenBooking}
            className="px-7 py-3.5 rounded-xl bg-[#1C3A5E] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#2A4D7A] transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Systems Diagnostic</span>
          </button>
        </div>

      </div>
    </section>
  );
};
