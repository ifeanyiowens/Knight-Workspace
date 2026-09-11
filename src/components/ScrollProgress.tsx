import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowUp } from 'lucide-react';
import { sound } from '../utils/audio';

export const ScrollProgress: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isAudioActive, setIsAudioActive] = useState(!sound.getMuted());
  const [activeSection, setActiveSection] = useState('Overview');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100;
        setScrollPercent(Math.min(100, Math.max(0, current)));
      }

      // Check current section
      const sections = [
        { id: 'problem', name: '01 Bottlenecks' },
        { id: 'services', name: '02 Services' },
        { id: 'case-studies', name: '03 Works' },
        { id: 'process', name: '04 Process' },
        { id: 'calculator', name: '05 ROI' },
        { id: 'certifications', name: '06 Certs' },
        { id: 'testimonials', name: '07 Reviews' },
        { id: 'about', name: '08 Architect' },
        { id: 'contact', name: '09 Contact' },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            setActiveSection(sections[i].name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const newState = sound.toggleMute();
    setIsAudioActive(newState);
  };

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Thin Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-black/5 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#059C54] via-[#1C3A5E] to-[#2A4D7A] transition-all duration-75"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Floating Tactical Bottom-Right Pill Controls */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 bg-white backdrop-blur-md px-3.5 py-2 rounded-2xl border border-black/10 shadow-2xl">
        
        {/* Active Section Indicator */}
        <span className="font-mono text-[10px] text-[#16201B]/50 border-r border-black/10 pr-2.5 uppercase tracking-wider">
          <span className="text-[#1C3A5E] font-bold">{activeSection}</span>
        </span>

        {/* Tactile Audio Mode Toggle */}
        <button
          onClick={handleAudioToggle}
          className={`flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded-lg transition-colors cursor-pointer ${
            isAudioActive
              ? 'bg-[#1C3A5E] text-[#111815] font-bold'
              : 'text-[#16201B]/60 hover:text-[#16201B] hover:bg-black/5'
          }`}
          title={isAudioActive ? 'Mute tactile clicks' : 'Enable tactile audio effects'}
          aria-label="Toggle tactile audio"
        >
          {isAudioActive ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
          <span>{isAudioActive ? 'AUDIO ON' : 'TACTILE SFX'}</span>
        </button>

        {/* Back to Top */}
        {scrollPercent > 20 && (
          <button
            onClick={scrollToTop}
            className="p-1 rounded-lg hover:bg-black/10 text-[#16201B]/60 hover:text-[#1C3A5E] transition-colors cursor-pointer"
            title="Scroll to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </>
  );
};
