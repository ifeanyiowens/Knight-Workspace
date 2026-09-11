import React, { useState, useEffect } from 'react';
import { BRAND_INFO, PAGES_CONFIG } from '../data/portfolioData';
import { PageId } from '../types';
import { sound } from '../utils/audio';
import { Instagram, Linkedin, Facebook, Mail, ArrowUp, Calendar, Clock } from 'lucide-react';

interface FooterProps {
  currentPage?: PageId;
  onNavigate?: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentPage = 'home', onNavigate, onOpenBooking }) => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageClick = (pageId: PageId) => {
    sound.playClick();
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <footer className="bg-[#EDEDEA] text-[#0A0A0A] pt-20 pb-12 border-t border-black/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant Statement Headline (Moritz Dunkel signature) */}
        <div className="pb-16 mb-16 border-b border-black/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#04703D] block mb-3">
                LET'S TALK ARCHITECTURE
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#0A0A0A] tracking-tight leading-[1.02]">
                Let's build a system that holds.
              </h2>
            </div>

            <button
              onClick={() => {
                sound.playTrigger();
                onOpenBooking();
              }}
              className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-[#04703D] text-white font-mono font-bold text-sm uppercase tracking-wider hover:bg-[#059C54] transition-all self-start lg:self-auto cursor-pointer shadow-2xl group"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a call</span>
            </button>
          </div>
        </div>

        {/* Footer Brand Block */}
        <div className="pb-16 border-b border-black/10">
          <div className="max-w-2xl space-y-5">
            <button
              onClick={() => handlePageClick('home')}
              className="flex items-center gap-3 text-left cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#059C54] text-[#04703D] flex items-center justify-center font-serif text-xl font-bold border border-[#04703D]/40 shadow-sm group-hover:scale-105 transition-transform">
                O
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-tight text-[#0A0A0A] group-hover:text-[#04703D] transition-colors">
                  Owens Oparaku
                </span>
                <span className="block text-[11px] font-mono text-[#04703D] uppercase tracking-widest">
                  Systems & Operations Architect
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-[#0A0A0A]/60 max-w-sm leading-relaxed font-sans">
              Certified business operations and systems architect. I replace messy communication and manual busywork with Notion, ClickUp, Airtable, and Make.com systems built to run on their own.
            </p>

            {/* Social channels */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-black/5 border border-black/10 text-[#0A0A0A] hover:text-[#04703D] hover:bg-black/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-black/5 border border-black/10 text-[#0A0A0A] hover:text-[#04703D] hover:bg-black/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-black/5 border border-black/10 text-[#0A0A0A] hover:text-[#04703D] hover:bg-black/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="p-2.5 rounded-xl bg-black/5 border border-black/10 text-[#0A0A0A] hover:text-[#04703D] hover:bg-black/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.notionSite}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-black/5 border border-black/10 text-[#0A0A0A] hover:text-[#04703D] hover:bg-black/10 transition-colors text-xs font-mono flex items-center gap-1.5"
                title="Notion Site Profile"
              >
                <span className="font-bold">Notion Site</span>
              </a>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#0A0A0A]/50 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Owens Oparaku.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#0A0A0A]/40">Notion, ClickUp, Airtable & Make Certified</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-black/5 hover:bg-black/10 text-[#04703D] border border-black/10 transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[10px] uppercase">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
