import bgStreaks from '../assets/bg-streaks.webp';

/**
 * Builds an inline style that layers the brand streak image directly onto
 * a section's own background, tinted with that section's base color.
 * This keeps the effect scoped to plain section canvases only, cards and
 * other elements sitting on top keep their own solid backgrounds untouched.
 */
export function sectionBgStyle(rgb: string, tintAlpha: number = 0.72): React.CSSProperties {
  return {
    backgroundImage: `linear-gradient(rgba(${rgb}, ${tintAlpha}), rgba(${rgb}, ${tintAlpha})), url(${bgStreaks})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top right',
    backgroundRepeat: 'no-repeat',
  };
}
