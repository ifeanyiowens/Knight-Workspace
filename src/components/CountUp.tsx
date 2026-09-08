import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

/**
 * Animates the numeric portion of a stat string from 0 up to its real value
 * once it scrolls into view, keeping any surrounding text (like "Up to " or
 * "%+") intact and only animating the digits themselves.
 */
export const CountUp: React.FC<CountUpProps> = ({ value, duration = 1400, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(value.replace(/[0-9]/g, '0'));

  useEffect(() => {
    const match = value.match(/[\d,]+/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const numStr = match[0];
    const target = parseInt(numStr.replace(/,/g, ''), 10);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index || 0) + numStr.length);
    const hasComma = numStr.includes(',');

    const el = ref.current;
    if (!el) return;

    let rafId: number;
    const runAnimation = () => {
      setDisplay(`${prefix}0${suffix}`);
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        const formatted = hasComma ? current.toLocaleString() : String(current);
        setDisplay(`${prefix}${formatted}${suffix}`);
        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        }
      };
      rafId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation();
          } else {
            cancelAnimationFrame(rafId);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};
