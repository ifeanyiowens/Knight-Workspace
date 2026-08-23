import React, { useState } from 'react';
import { BRAND_INFO } from '../data/portfolioData';
import owensProfilePhoto from '../assets/owens_profile.png';
import { Calendar, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [imageError, setImageError] = useState(false);

  const handleBookClick = () => {
    sound.playTrigger();
    onOpenBooking();
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-[#0E1411] text-[#EDEDEA] overflow-hidden border-b border-white/10">
      {/* Ambient warm background glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#1B4332]/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#D4AF37]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle warm mesh grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Clear, Friendly Statement & Positioning (Variation 03) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Friendly Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-semibold tracking-wide backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Systems & Operations Architect for Growing Businesses</span>
            </div>

            {/* Chosen Variation 3 Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.08] text-white font-bold tracking-tight">
              I turn chaotic operations into systems that do not need you to remember everything.
            </h1>

            {/* Warm & Welcoming Subtext */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-sans">
              Growth exposes what is broken behind the scenes. I build the clean Notion, Airtable, and Make.com systems that catch up to where your company already is — before it costs you another client or founder burnout.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={handleBookClick}
                id="hero-book-call-cta"
                data-cursor-text="BOOK"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#D4AF37] text-[#111815] font-bold text-sm uppercase tracking-wider hover:bg-[#E5C358] transition-all shadow-xl group cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Free Discovery Call</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#case-studies"
                data-cursor-text="WORKS"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/5 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-all border border-white/10"
              >
                <span>View Selected Works</span>
              </a>
            </div>

            {/* Quick Proof Badges (Friendly & Readable) */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-white/70">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Notion Academy Certified
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                ClickUp Certified Admin
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Airtable Certified
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Make.com Automation Expert
              </span>
            </div>

          </div>

          {/* Right Column: Clean, Welcoming Portrait Image of Owens (No cluttered cards) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Soft warm ambient halo behind the photo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#1B4332]/60 to-[#D4AF37]/30 rounded-3xl blur-2xl opacity-70 -z-10" />

              {/* Clean Image Container with elegant soft framing */}
              <div className="relative rounded-3xl overflow-hidden bg-[#16201B] border border-white/15 shadow-2xl group">
                {!imageError ? (
                  <img
                    src={owensProfilePhoto}
                    alt="Owens Oparaku"
                    className="w-full h-auto max-h-[480px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-80 flex flex-col items-center justify-center bg-[#1B4332] text-white p-6 text-center">
                    <span className="font-serif text-4xl font-bold text-[#D4AF37] mb-2">OO</span>
                    <span className="font-serif text-lg font-bold">Owens Oparaku</span>
                    <span className="text-xs text-white/70 mt-1">Business Operations Architect</span>
                  </div>
                )}

                {/* Subtle soft bottom gradient overlay for smooth contrast */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0E1411] via-[#0E1411]/60 to-transparent pointer-events-none" />

                {/* Friendly, Welcoming Name & Title Bar */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-2xl bg-[#111815]/90 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-white leading-tight">
                      Owens Oparaku
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-medium">
                      Your Systems & Operations Architect
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-semibold border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available for Q2/Q3
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

