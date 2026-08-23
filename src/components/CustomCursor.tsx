import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorType, setCursorType] = useState<'default' | 'view' | 'drag' | 'link' | 'copy'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check for touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if target has custom cursor attributes or is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const closestText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
        const closestType = target.closest('[data-cursor-type]')?.getAttribute('data-cursor-type') as any;
        const isClickable = target.closest('button, a, input, select, textarea, [role="button"], [data-cursor]');

        if (closestText) {
          setCursorText(closestText);
          setIsHovered(true);
          setCursorType(closestType || 'view');
        } else if (closestType) {
          setCursorType(closestType);
          setIsHovered(true);
          setCursorText(closestType.toUpperCase());
        } else if (isClickable) {
          setIsHovered(true);
          setCursorType('link');
          setCursorText('');
        } else {
          setIsHovered(false);
          setCursorText('');
          setCursorType('default');
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth animation loop for the trailing circle
    let animationFrameId: number;
    const animate = () => {
      const ease = 0.18;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetPos.current.x}px, ${targetPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#D4AF37] transition-opacity duration-150 ${
          isHovered && cursorText ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Trailing Outer Ring / Badge */}
      <div
        ref={circleRef}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center transition-[width,height,background-color,border-color,opacity] duration-200 ease-out border ${
          cursorText
            ? 'w-16 h-16 bg-[#D4AF37] text-[#111815] font-mono text-[10px] font-bold border-transparent shadow-xl tracking-widest'
            : isHovered
            ? 'w-10 h-10 bg-[#D4AF37]/15 border-[#D4AF37]/80 backdrop-blur-[1px]'
            : 'w-7 h-7 bg-transparent border-white/30'
        }`}
      >
        {cursorText && (
          <span className="select-none uppercase animate-in fade-in zoom-in-75 duration-150">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
