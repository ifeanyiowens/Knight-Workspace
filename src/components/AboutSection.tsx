import React, { useState } from 'react';
import { BRAND_INFO, BIO_PARAGRAPHS, BADGE_PILLS } from '../data/portfolioData';
import { ShieldCheck, Instagram, Linkedin, Facebook, Mail, ArrowUpRight, Clock, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [currentImgSrc, setCurrentImgSrc] = useState<string>(BRAND_INFO.profilePhotoUrl);
  const [imageFailed, setImageFailed] = useState(false);

  const handleImageError = () => {
    if (currentImgSrc !== BRAND_INFO.profilePhotoFallback) {
      setCurrentImgSrc(BRAND_INFO.profilePhotoFallback);
    } else {
      setImageFailed(true);
    }
  };

  return (
    <section id="about" className="py-24 bg-[#111815] text-[#EDEDEA] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual Profile & Badges */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            <div className="rounded-3xl bg-[#16201B]/88 border border-white/10 p-7 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#1B4332] border-2 border-[#D4AF37] flex-shrink-0 shadow-lg">
                  {!imageFailed ? (
                    <img
                      src={currentImgSrc}
                      alt="Owens Oparaku"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#1B4332] text-[#D4AF37] font-serif text-2xl font-bold">
                      OO
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Owens Oparaku
                  </h3>
                  <p className="text-xs font-mono text-[#D4AF37]">
                    Founder & Systems Architect
                  </p>
                </div>
              </div>

              {/* Verified Badge Pills */}
              <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#D4AF37] block">
                  Official Certifications:
                </span>
                <div className="flex flex-col gap-2">
                  {BADGE_PILLS.map((badge, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-white/90 bg-black/40 p-2.5 rounded-xl border border-white/10 font-mono">
                      <ShieldCheck className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <a
                  href={BRAND_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-[#D4AF37] transition-colors px-3 py-2 rounded-xl bg-white/5 border border-white/10"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Instagram</span>
                </a>
                <a
                  href={BRAND_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-[#D4AF37] transition-colors px-3 py-2 rounded-xl bg-white/5 border border-white/10"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={BRAND_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-[#D4AF37] transition-colors px-3 py-2 rounded-xl bg-white/5 border border-white/10"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Facebook</span>
                </a>
              </div>

            </div>

            {/* Philosophy Quote block */}
            <div className="p-7 rounded-3xl bg-[#1B4332] text-[#EDEDEA] border border-[#D4AF37]/30 shadow-xl">
              <p className="font-serif italic text-base sm:text-lg leading-relaxed text-white">
                &ldquo;I do not just build once and leave. I set up systems that scale with a business, so when things get busier, the operations do not fall apart, they hold steady.&rdquo;
              </p>
              <span className="block text-xs font-mono font-bold text-[#D4AF37] mt-3 uppercase tracking-widest">
                — Owens Oparaku
              </span>
            </div>

          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-mono uppercase tracking-widest mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                <span>The Story & Philosophy</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                I build the operational backbone that holds your business together.
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-base text-white/80 leading-relaxed font-sans">
              {BIO_PARAGRAPHS.map((p, idx) => (
                <p key={idx} className="bg-[#16201B] p-5 rounded-2xl border border-white/10">
                  {p}
                </p>
              ))}
            </div>

            {/* Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D4AF37] text-[#111815] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#E5C358] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <span>Book a Call with Owens</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 text-white font-mono text-xs uppercase tracking-wider border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>{BRAND_INFO.email}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
