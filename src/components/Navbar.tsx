import React, { useState, useEffect } from 'react';
import { BRAND_INFO, PAGES_CONFIG } from '../data/portfolioData';
import { PageId } from '../types';
import { sound } from '../utils/audio';
import { Calendar, Menu, X, ArrowUpRight, Instagram, Layers } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId) => {
    sound.playClick();
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Status Bar (Moritz Dunkel style) */}
      <div className="bg-[#0C120F] text-[#EDEDEA] py-1.5 px-4 text-xs border-b border-white/5 font-mono">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-white/80 text-[11px] uppercase tracking-wider">
              OPERATIONAL SYSTEMS ARCHITECT • AVAILABLE FOR SELECT CLIENTS
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] text-white/60">
            <span className="text-[#D4AF37]">● Certified Across 8 Tech Badges</span>
            <a
              href={BRAND_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#D4AF37] transition-colors flex items-center gap-1"
            >
              <span>{BRAND_INFO.instagramHandle}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`px-4 sm:px-6 lg:px-8 transition-all ${
        scrolled
          ? 'bg-[#111815]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-[#111815]/90 backdrop-blur-md border-b border-white/5 py-4'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-[#1B4332] text-[#D4AF37] flex items-center justify-center font-serif text-lg font-bold border border-[#D4AF37]/40 shadow-sm group-hover:scale-105 transition-transform">
              O
            </div>
            <div>
              <span className="block font-serif text-base sm:text-lg font-bold tracking-tight text-white leading-tight group-hover:text-[#D4AF37] transition-colors">
                Owens Oparaku
              </span>
              <span className="block text-[10px] font-mono font-medium text-[#D4AF37] tracking-widest uppercase">
                OPARAKU SYSTEMS
              </span>
            </div>
          </button>

          {/* Desktop 6-Page Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 shadow-inner">
            {PAGES_CONFIG.map((page) => {
              const isActive = currentPage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handleNavClick(page.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#111815] font-bold shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? 'text-[#111815]' : 'text-[#D4AF37]'}`}>
                    {page.index}
                  </span>
                  <span>{page.shortTitle}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                sound.playTrigger();
                onOpenBooking();
              }}
              id="nav-book-call-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4AF37] text-[#111815] text-xs font-bold font-mono uppercase tracking-wider hover:bg-[#E5C358] transition-all shadow-md group cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => {
                sound.playTrigger();
                onOpenBooking();
              }}
              className="sm:hidden px-3 py-1.5 rounded-full bg-[#D4AF37] text-[#111815] text-[11px] font-bold font-mono uppercase flex items-center gap-1 cursor-pointer"
            >
              <Calendar className="w-3 h-3" />
              <span>Call</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white/90 hover:bg-white/10 focus:outline-hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111815] border-b border-white/10 px-4 pt-3 pb-6 space-y-4 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-white/10 font-mono">
            {PAGES_CONFIG.map((page) => {
              const isActive = currentPage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handleNavClick(page.id)}
                  className={`px-3 py-2.5 text-xs rounded-lg flex items-center gap-2 text-left cursor-pointer transition-colors ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#111815] font-bold'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? 'text-[#111815]' : 'text-[#D4AF37]'}`}>
                    {page.index}
                  </span>
                  <span>{page.shortTitle}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                sound.playTrigger();
                onOpenBooking();
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#D4AF37] text-[#111815] font-bold text-xs uppercase font-mono tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Systems Discovery Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            
            <a
              href={BRAND_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl border border-white/10 text-white text-xs font-mono text-center flex items-center justify-center gap-2 hover:bg-white/5"
            >
              <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Follow @notion_knight</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

