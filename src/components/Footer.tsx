import React, { useState, useEffect } from 'react';
import { BRAND_INFO, PAGES_CONFIG } from '../data/portfolioData';
import { PageId } from '../types';
import { sound } from '../utils/audio';
import { Instagram, Linkedin, Facebook, Mail, ArrowUp, Calendar, ArrowUpRight, Clock } from 'lucide-react';

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
    <footer className="bg-[#0A0E0C] text-[#EDEDEA] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant Statement Headline (Moritz Dunkel signature) */}
        <div className="pb-16 mb-16 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] block mb-3">
                LET'S TALK ARCHITECTURE
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.02]">
                Let's build a system that holds.
              </h2>
            </div>

            <button
              onClick={() => {
                sound.playTrigger();
                onOpenBooking();
              }}
              className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-[#D4AF37] text-[#111815] font-mono font-bold text-sm uppercase tracking-wider hover:bg-[#E5C358] transition-all self-start lg:self-auto cursor-pointer shadow-2xl group"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Systems Diagnostic</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Main 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand & Positioning */}
          <div className="md:col-span-5 space-y-5">
            <button
              onClick={() => handlePageClick('home')}
              className="flex items-center gap-3 text-left cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1B4332] text-[#D4AF37] flex items-center justify-center font-serif text-xl font-bold border border-[#D4AF37]/40 shadow-sm group-hover:scale-105 transition-transform">
                O
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">
                  Owens Oparaku
                </span>
                <span className="block text-[11px] font-mono text-[#D4AF37] uppercase tracking-widest">
                  OPARAKU SYSTEMS
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed font-sans">
              Certified business operations and systems architect. Replacing scattered spreadsheets, messy communication, and manual friction with custom Notion, ClickUp, Airtable, and Make.com engines.
            </p>

            {/* Social channels */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#D4AF37] hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#D4AF37] hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#D4AF37] hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#D4AF37] hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.notionSite}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#D4AF37] hover:bg-white/10 transition-colors text-xs font-mono flex items-center gap-1.5"
                title="Notion Site Profile"
              >
                <span className="font-bold">Notion Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Site Directory / 6-Page Index */}
          <div className="md:col-span-4 space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
              Site Index [06 Pages]
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {PAGES_CONFIG.map((page) => {
                const isActive = currentPage === page.id;
                return (
                  <li key={page.id}>
                    <button
                      onClick={() => handlePageClick(page.id)}
                      className={`hover:text-white hover:underline flex items-center gap-2 transition-colors cursor-pointer text-left ${
                        isActive ? 'text-[#D4AF37] font-bold' : 'text-white/70'
                      }`}
                    >
                      <span className={`text-[10px] ${isActive ? 'text-[#D4AF37]' : 'text-white/40'}`}>
                        [{page.index}]
                      </span>
                      <span>{page.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Direct Contact & Availability */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
              Direct Contact
            </h4>
            
            <div className="space-y-2 text-xs font-mono text-white/70">
              <div>
                <span className="block text-white/40 text-[10px]">EMAIL</span>
                <a href={`mailto:${BRAND_INFO.email}`} className="text-white hover:text-[#D4AF37] transition-colors">
                  {BRAND_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <span className="block text-white/40 text-[10px]">CALENDAR</span>
                <button
                  onClick={() => {
                    sound.playTrigger();
                    onOpenBooking();
                  }}
                  className="text-[#D4AF37] hover:underline cursor-pointer text-left block"
                >
                  cal.com/owen-oparaku
                </button>
              </div>
              <div className="pt-2">
                <span className="block text-white/40 text-[10px]">INSTAGRAM</span>
                <span className="text-white">{BRAND_INFO.instagramHandle}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-white/80">
              <span className="text-[#D4AF37] font-bold block mb-1">Status: Open for Q2/Q3</span>
              <span>Accepting 2 new workspace architecture builds this month.</span>
            </div>
          </div>

        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/50 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Oparaku Systems. Founded by Owens Oparaku.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white/40">Notion, ClickUp, Airtable & Make Certified</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#D4AF37] border border-white/10 transition-colors flex items-center gap-1 cursor-pointer"
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
