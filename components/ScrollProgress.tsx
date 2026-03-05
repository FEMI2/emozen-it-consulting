import { useEffect, useRef } from 'react';

/**
 * ScrollProgress — a 2px line at the top of the viewport that
 * fills left-to-right as the user scrolls.
 */
export function ScrollProgress() {
  const barRef  = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const scrollTop  = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current)  barRef.current.style.width  = `${pct}%`;
      if (glowRef.current) glowRef.current.style.left  = `${pct}%`;
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0,
        height: '2px',
        zIndex: 200,
        pointerEvents: 'none',
        width: '100%',
        background: 'rgba(255,255,255,0.04)',
      }}
    >
      <div
        ref={barRef}
        style={{
          height: '100%',
          width: '0%',
          background: 'linear-gradient(90deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.7) 100%)',
          transition: 'width 0.08s linear',
          willChange: 'width',
          position: 'relative',
        }}
      />
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          top: '-2px',
          left: '0%',
          width: '40px',
          height: '6px',
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, transparent 80%)',
          transform: 'translateX(-100%)',
          transition: 'left 0.08s linear',
          willChange: 'left',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}