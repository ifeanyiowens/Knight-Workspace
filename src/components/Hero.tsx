import React, { useState, useRef, useLayoutEffect } from 'react';
import { BRAND_INFO } from '../data/portfolioData';
import owensProfilePhoto from '../assets/owens_profile_hoodie.webp';
import { Calendar, CheckCircle2, Sparkles } from 'lucide-react';
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
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-[#EDEDEA] text-[#0A0A0A] overflow-hidden border-b border-black/5">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 lg:items-start">

          {/* Left Column */}
          <div ref={textColRef} className="lg:col-span-6 flex flex-col justify-start items-start space-y-7">

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] leading-[1.05] text-[#0A0A0A] font-bold tracking-tight">
              Your business shouldn't run on <span className="text-[#04703D]">your memory</span>.
            </h1>

            <p className="text-lg sm:text-xl text-[#0A0A0A]/75 leading-relaxed max-w-2xl font-sans">
              When a company grows fast, the systems behind it stop keeping up. Notion, Airtable, and Make.com can catch things up before it costs you a client or burns you out.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={handleBookClick}
                id="hero-book-call-cta"
                data-cursor-text="BOOK"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#04703D] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#035C39] transition-all shadow-lg group cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a call</span>
              </button>

              <a
                href="#case-studies"
                data-cursor-text="WORKS"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-[#0A0A0A] text-xs font-semibold uppercase tracking-wider hover:bg-black/5 transition-all border border-black/10"
              >
                <span>View selected works</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-[#0A0A0A]/70">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#04703D]" />
                Notion Academy certified
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#04703D]" />
                ClickUp certified admin
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#04703D]" />
                Airtable certified
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#04703D]" />
                Make.com automation expert
              </span>
            </div>

          </div>

          {/* Right Column: Photo sized to match the text column's height exactly */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full flex justify-center" style={matchHeight ? { height: matchHeight } : undefined}>

              {!imageError ? (
                <img
                  src={owensProfilePhoto}
                  alt="Owens Oparaku"
                  className="h-full w-auto object-contain object-top"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 65%, transparent 96%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 96%)',
                  }}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-80 flex flex-col items-center justify-center text-[#0A0A0A] p-6 text-center">
                  <span className="font-serif text-4xl font-bold text-[#04703D] mb-2">OO</span>
                  <span className="font-serif text-lg font-bold">Owens Oparaku</span>
                </div>
              )}

              {/* Caption sits inside the faded area instead of below the photo */}
              <div className="absolute bottom-6 inset-x-0 flex items-center justify-center gap-2.5">
                <span className="font-serif text-base font-bold text-[#0A0A0A]">Owens Oparaku</span>
                <span className="text-[#0A0A0A]/40">•</span>
                <span className="text-xs text-[#0A0A0A]/70 font-medium">Systems & operations architect</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
