import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function CountUp({ end, suffix = '', duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) { rafRef.current = requestAnimationFrame(tick); } else { setCount(end); }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const metrics = [
  { value: 500, suffix: '+',   label: 'Global Clients',  sub: 'Across 40+ countries' },
  { value: 3,   suffix: '×',   label: 'Average ROI',     sub: 'Within 18 months'     },
  { value: 99,  suffix: '.9%', label: 'Uptime SLA',      sub: 'Contractually guaranteed' },
  { value: 40,  suffix: '+',   label: 'Certifications',  sub: 'Security & compliance' },
];

export function StatsSection() {
  return (
    <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.07)' }}>
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="stat-cell"
            style={{ background: '#0a0a0a', padding: 'clamp(32px, 6vw, 88px) clamp(20px, 4vw, 64px)', cursor: 'default', transition: 'background 0.3s ease', position: 'relative', overflow: 'hidden' }}
          >
            <div className="stat-shimmer" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%)', opacity: 0, transition: 'opacity 0.35s ease', pointerEvents: 'none' }} />
            <div style={{ fontFamily: "'Syne', system-ui, sans-serif", fontSize: 'clamp(3rem, 9vw, 10rem)', fontWeight: 800, letterSpacing: '-0.05em', color: '#ffffff', lineHeight: 1, marginBottom: '14px', position: 'relative' }}>
              <CountUp end={m.value} suffix={m.suffix} />
            </div>
            <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.15)', marginBottom: '10px' }} />
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.02em', marginBottom: '3px' }}>{m.label}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.02em' }}>{m.sub}</div>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: 359px) { .stats-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 640px) { .stats-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        .stat-cell:hover { background: #111111 !important; }
        .stat-cell:hover .stat-shimmer { opacity: 1 !important; }
      `}</style>
    </section>
  );
}