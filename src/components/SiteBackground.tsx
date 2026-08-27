import React from 'react';
import bgStreaks from '../assets/bg-streaks.webp';

export const SiteBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: `url(${bgStreaks})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    />
  );
};
