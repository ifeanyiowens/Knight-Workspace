import React from 'react';

interface MarqueeTickerProps {
  items?: string[];
  reverse?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items = [
    'NOTION ARCHITECTURE',
    'MAKE.COM AUTOMATIONS',
    'AIRTABLE RELATIONAL SCHEMAS',
    'CLICKUP OPERATIONS',
    'ZERO TEMPLATE DEBT',
    'CUSTOM CRM PERMISSIONS',
    '4-WEEK SPRINT DELIVERY',
    '1,000+ HOURS RECLAIMED',
    'NO STICKY NOTES',
    '10X CAPACITY SCALING',
  ],
  reverse = false,
  speed = 'normal',
}) => {
  const durationClass = speed === 'slow' ? 'animate-[marquee_45s_linear_infinite]' : speed === 'fast' ? 'animate-[marquee_20s_linear_infinite]' : 'animate-[marquee_30s_linear_infinite]';
  const reverseClass = reverse ? 'animate-[marquee-reverse_30s_linear_infinite]' : durationClass;

  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-4 border-t border-b border-white/10 bg-[#0A0E0C] text-[#EDEDEA] select-none">
      <div className="inline-flex gap-8 items-center">
        <div className={`flex items-center gap-8 ${reverseClass}`}>
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="font-mono text-xs uppercase tracking-widest text-white/80 font-bold hover:text-[#D4AF37] transition-colors">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60" />
            </div>
          ))}
        </div>

        {/* Duplicate track for seamless infinite loop */}
        <div className={`flex items-center gap-8 ${reverseClass}`} aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-8">
              <span className="font-mono text-xs uppercase tracking-widest text-white/80 font-bold hover:text-[#D4AF37] transition-colors">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
