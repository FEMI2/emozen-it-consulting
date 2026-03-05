/**
 * AnimatedBackground — fixed full-viewport ambient texture layer.
 */
export function AnimatedBackground() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          background: '#0a0a0a',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.028) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,0,0,0.55) 0%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,0,0,0.55) 0%, transparent 100%)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(255,255,255,0.012) 0%, transparent 70%)',
        }}
      />
    </>
  );
}