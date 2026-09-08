import React, { useState, useEffect } from 'react';
import { BRAND_INFO, PAGES_CONFIG } from '../data/portfolioData';
import { PageId } from '../types';
import { sound } from '../utils/audio';
import { Calendar, Menu, X, ArrowUpRight, Instagram } from 'lucide-react';

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
      {/* Main Navigation Bar */}
      <div className={`px-4 sm:px-6 lg:px-8 transition-all ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-md py-3'
          : 'bg-white/90 backdrop-blur-md border-b border-black/5 py-4'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo / Monogram */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-[#A8C6A9] text-[#16201B] flex items-center justify-center font-serif text-lg font-bold border border-[#4A7350]/30 shadow-sm group-hover:scale-105 transition-transform">
              O
            </div>
            <div>
              <span className="block font-serif text-base sm:text-lg font-bold tracking-tight text-[#16201B] leading-tight group-hover:text-[#4A7350] transition-colors">
                Owens Oparaku
              </span>
              <span className="block text-[10px] font-mono font-medium text-[#4A7350] tracking-widest uppercase">
                OPARAKU SYSTEMS
              </span>
            </div>
          </button>

          {/* Desktop 6-Page Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/5 p-1 rounded-full border border-black/5">
            {PAGES_CONFIG.map((page) => {
              const isActive = currentPage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handleNavClick(page.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#16201B] font-bold shadow-sm'
                      : 'text-[#16201B]/70 hover:text-[#16201B] hover:bg-black/5'
                  }`}
                >
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4AF37] text-[#16201B] text-xs font-bold font-mono uppercase tracking-wider hover:bg-[#C29B26] transition-all shadow-sm group cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a call</span>
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
              className="sm:hidden px-3 py-1.5 rounded-full bg-[#D4AF37] text-[#16201B] text-[11px] font-bold font-mono uppercase flex items-center gap-1 cursor-pointer"
            >
              <Calendar className="w-3 h-3" />
              <span>Call</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#16201B] hover:bg-black/5 focus:outline-hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-black/10 px-4 pt-3 pb-6 space-y-4 shadow-md">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-black/10 font-mono">
            {PAGES_CONFIG.map((page) => {
              const isActive = currentPage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handleNavClick(page.id)}
                  className={`px-3 py-2.5 text-xs rounded-lg flex items-center gap-2 text-left cursor-pointer transition-colors ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#16201B] font-bold'
                      : 'text-[#16201B]/80 hover:text-[#16201B] hover:bg-black/5'
                  }`}
                >
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
              className="w-full py-3 px-4 rounded-xl bg-[#D4AF37] text-[#16201B] font-bold text-xs uppercase font-mono tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={BRAND_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl border border-black/10 text-[#16201B] text-xs font-mono text-center flex items-center justify-center gap-2 hover:bg-black/5"
            >
              <Instagram className="w-3.5 h-3.5 text-[#4A7350]" />
              <span>Follow {BRAND_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
