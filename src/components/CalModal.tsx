import React from 'react';
import { BRAND_INFO } from '../data/portfolioData';
import { X, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

interface CalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalModal: React.FC<CalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl h-[90vh] bg-white rounded-3xl shadow-2xl border border-black/10 flex flex-col overflow-hidden text-[#16201B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="p-4 sm:px-6 bg-white text-[#16201B] flex items-center justify-between border-b border-black/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#A8C6A9] text-[#D4AF37] border border-[#D4AF37]/30">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#16201B]">
                Book a Systems Discovery Call
              </h3>
              <p className="text-xs font-mono text-[#16201B]/60">
                20-minute operational audit with Owens Oparaku
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={BRAND_INFO.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#D4AF37] hover:underline px-3 py-1.5 rounded-xl bg-black/5 border border-black/10"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/10 text-[#16201B] transition-colors cursor-pointer"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Cal.com iFrame */}
        <div className="flex-1 w-full bg-white relative">
          <iframe
            src={`${BRAND_INFO.bookingLink}?embed=true`}
            title="Book a Call with Owens Oparaku"
            className="w-full h-full border-0"
            allow="camera; microphone; autoplay; fullscreen"
          />
        </div>

        {/* Modal footer */}
        <div className="p-3 sm:px-6 bg-white border-t border-black/10 flex flex-wrap items-center justify-between text-xs font-mono text-[#16201B]/60 gap-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Direct diagnostic session to map bottlenecks and recommend architecture.</span>
          </div>
          <a
            href={BRAND_INFO.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] font-semibold hover:underline"
          >
            cal.com/owen-oparaku
          </a>
        </div>

      </div>
    </div>
  );
};
