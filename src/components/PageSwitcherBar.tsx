import React from 'react';
import { PAGES_CONFIG } from '../data/portfolioData';
import { PageId } from '../types';
import { sound } from '../utils/audio';
import { ChevronLeft, ChevronRight, Layers } from 'lucide-react';

interface PageSwitcherBarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const PageSwitcherBar: React.FC<PageSwitcherBarProps> = ({ currentPage, onNavigate }) => {
  const currentIndex = PAGES_CONFIG.findIndex(p => p.id === currentPage);
  const prevPage = currentIndex > 0 ? PAGES_CONFIG[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGES_CONFIG.length - 1 ? PAGES_CONFIG[currentIndex + 1] : null;

  const handleNavigate = (pageId: PageId) => {
    sound.playClick();
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-full px-4 pointer-events-none">
      <div className="bg-[#111815]/90 backdrop-blur-xl border border-white/15 p-1.5 rounded-full shadow-2xl flex items-center gap-1 font-mono text-xs pointer-events-auto ring-1 ring-black/40">
        
        {/* Prev Page Button */}
        <button
          onClick={() => prevPage && handleNavigate(prevPage.id)}
          disabled={!prevPage}
          className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-20 disabled:hover:bg-transparent transition-all cursor-pointer"
          title={prevPage ? `Previous: [${prevPage.index}] ${prevPage.shortTitle}` : 'First Page'}
          aria-label="Previous Page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* 6 Page Pills */}
        <div className="flex items-center gap-1">
          {PAGES_CONFIG.map((page) => {
            const isActive = currentPage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => handleNavigate(page.id)}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                  isActive
                    ? 'bg-[#D4AF37] text-[#111815] font-bold shadow-md'
                    : 'text-white/60 hover:text-white hover:bg-white/10 text-[11px]'
                }`}
                title={`Jump to [${page.index}] ${page.title}`}
              >
                <span className={`text-[10px] ${isActive ? 'text-[#111815]' : 'text-[#D4AF37]'}`}>
                  {page.index}
                </span>
                <span className="hidden sm:inline">{page.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Next Page Button */}
        <button
          onClick={() => nextPage && handleNavigate(nextPage.id)}
          disabled={!nextPage}
          className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-20 disabled:hover:bg-transparent transition-all cursor-pointer"
          title={nextPage ? `Next: [${nextPage.index}] ${nextPage.shortTitle}` : 'Last Page'}
          aria-label="Next Page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
