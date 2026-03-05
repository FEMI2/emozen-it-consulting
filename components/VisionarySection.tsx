import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const capabilities = [
  { label: 'Multi-region deployment', stat: '40+ zones' },
  { label: 'Accelerated time to market', stat: '60% faster' },
  { label: 'Infrastructure cost reduction', stat: 'Avg. −40%' },
];

const certs = ['SOC 2 Type II', 'ISO 27001', 'GDPR', 'HIPAA', 'PCI DSS'];

export function VisionarySection() {
  return (
    <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="visionary-grid" style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative', minHeight: 'clamp(320px, 50vw, 760px)', overflow: 'hidden' }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1721385453151-2045a2fd89dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Global scale infrastructure"
            loading="lazy"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.42) saturate(0.5)' }}
          />
          <div style={{ position: 'absolute', bottom: 'clamp(16px, 3vw, 32px)', left: 'clamp(16px, 3vw, 32px)', fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.24)' }}>
            Scale Without Limits
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          style={{ padding: 'clamp(40px, 6vw, 88px) clamp(16px, 5vw, 72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.26)', marginBottom: '22px' }}>Cloud Infrastructure</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 5.5rem)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-0.035em', color: '#ffffff', marginBottom: '22px' }}>
            Built for businesses<br />
            <span style={{ color: 'rgba(255,255,255,0.26)' }}>without borders.</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px, 1.3vw, 15px)', lineHeight: 1.82, color: 'rgba(255,255,255,0.36)', marginBottom: 'clamp(28px, 4vw, 40px)', maxWidth: '460px' }}>
            Your infrastructure isn't just supporting operations — it's enabling expansion.
            Emozen's cloud architecture empowers global organisations to scale across markets,
            time zones, and compliance frameworks simultaneously.
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginBottom: 'clamp(20px, 3vw, 32px)' }}>
            {capabilities.map((c, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 1.1vw, 13px)', color: 'rgba(255,255,255,0.42)' }}>{c.label}</span>
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '13px', fontWeight: 800, color: 'rgba(255,255,255,0.68)', whiteSpace: 'nowrap' }}>{c.stat}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: 'clamp(28px, 4vw, 36px)' }}>
            {certs.map((c) => (
              <span key={c} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.24)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '4px 12px', whiteSpace: 'nowrap' }}>{c}</span>
            ))}
          </div>
          <div><a href="#contact" className="pill-btn pill-btn-outline">Discuss Your Infrastructure</a></div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) { .visionary-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1100px) { .visionary-grid { grid-template-columns: 55fr 45fr !important; } }
      `}</style>
    </section>
  );
}