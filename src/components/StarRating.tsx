import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  className?: string;
  size?: string;
}

/**
 * Renders a 5 star rating that fills in one star at a time, starting from
 * empty, once it scrolls into view.
 */
export const StarRating: React.FC<StarRatingProps> = ({ rating, className = '', size = 'w-4 h-4' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(0);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun) {
            setHasRun(true);
            for (let i = 1; i <= rating; i++) {
              setTimeout(() => setFilled(i), i * 120);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating, hasRun]);

  return (
    <div ref={ref} className={`flex items-center gap-0.5 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${size} transition-all duration-200 ${
            i < filled ? 'text-[#D4AF37] fill-[#D4AF37] scale-100' : 'text-black/15 fill-transparent scale-90'
          }`}
        />
      ))}
    </div>
  );
};
