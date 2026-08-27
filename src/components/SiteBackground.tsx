import React from 'react';
import bgStreaks from '../assets/bg-streaks.webp';

export const SiteBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-30 pointer-events-none mix-blend-soft-light"
      aria-hidden="true"
      style={{
        backgroundImage: `url(${bgStreaks})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
        opacity: 0.5,
      }}
    />
  );
};
