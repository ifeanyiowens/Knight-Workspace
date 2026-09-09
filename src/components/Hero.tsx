import React, { useState, useRef, useLayoutEffect } from 'react';
import { BRAND_INFO } from '../data/portfolioData';
import owensProfilePhoto from '../assets/owens_profile_hoodie.png';
import { Calendar, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [imageError, setImageError] = useState(false);
  const textColRef = useRef<HTMLDivElement>(null);
  const [matchHeight, setMatchHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    const el = textColRef.current;
    if (!el) return;

    const update = () => setMatchHeight(el.offsetHeight);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  const handleBookClick = () => {
    sound.playTrigger();
    onOpenBooking();
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-[#EDEDEA] text-[#16201B] overflow-hidden border-b border-black/5">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 lg:items-start">

          {/* Left Column */}
          <div ref={textColRef} className="lg:col-span-6 flex flex-col justify-start items-start space-y-7">

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] leading-[1.05] text-[#16201B] font-bold tracking-tight">
              Your business shouldn't run on <span className="text-[#4A7350]">your memory</span>.
            </h1>

            <p className="text-lg sm:text-xl text-[#16201B]/75 leading-relaxed max-w-2xl font-sans">
              When a company grows fast, the systems behind it stop keeping up. Notion, Airtable, and Make.com can catch things up before it costs you a client or burns you out.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={handleBookClick}
                id="hero-book-call-cta"
                data-cursor-text="BOOK"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#D4AF37] text-[#16201B] font-bold text-sm uppercase tracking-wider hover:bg-[#C29B26] transition-all shadow-lg group cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a call</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#case-studies"
                data-cursor-text="WORKS"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-[#16201B] text-xs font-semibold uppercase tracking-wider hover:bg-black/5 transition-all border border-black/10"
              >
                <span>View selected works</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-[#16201B]/70">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Notion Academy certified
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                ClickUp certified admin
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Airtable certified
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Make.com automation expert
              </span>
            </div>

          </div>

          {/* Right Column: Photo sized to match the text column's height exactly */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end">
            <div className="relative w-full flex justify-center lg:justify-end" style={matchHeight ? { height: matchHeight } : undefined}>

              {/* Soft sage shape sitting behind the lower half, masks the crop and grounds the photo */}
              <div className="absolute bottom-0 inset-x-6 h-2/5 bg-[#A8C6A9] rounded-[2.5rem] -z-10" />

              {!imageError ? (
                <img
                  src={owensProfilePhoto}
                  alt="Owens Oparaku"
                  className="h-full w-auto object-contain object-top"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-80 flex flex-col items-center justify-center text-[#16201B] p-6 text-center">
                  <span className="font-serif text-4xl font-bold text-[#4A7350] mb-2">OO</span>
                  <span className="font-serif text-lg font-bold">Owens Oparaku</span>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-center gap-2.5">
              <span className="font-serif text-base font-bold text-[#16201B]">Owens Oparaku</span>
              <span className="text-[#16201B]/40">•</span>
              <span className="text-xs text-[#16201B]/70 font-medium">Systems & operations architect</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
