import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const points = [
  { title: 'Zero-Trust Architecture', desc: 'Never trust, always verify — at every access point, every time.' },
  { title: '24/7 Threat Intelligence', desc: 'AI-powered monitoring with automated incident response.' },
  { title: 'Compliance Mastery', desc: 'SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS — end-to-end.' },
  { title: 'Continuous Penetration Testing', desc: 'Proactive vulnerability discovery before adversaries find it.' },
];

export function ProblemSolver() {
  return (
    <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="problem-image"
          style={{ position: 'relative', minHeight: 'clamp(300px, 45vw, 720px)', overflow: 'hidden', order: 0 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Cybersecurity"
            loading="lazy"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.38) saturate(0.4)' }}
          />
          <div style={{ position: 'absolute', bottom: 'clamp(20px, 3vw, 32px)', left: 'clamp(16px, 3vw, 32px)', right: 'clamp(16px, 3vw, 32px)' }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', color: '#ffffff', lineHeight: 1 }}>$4.45M</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginTop: '6px' }}>Average breach cost — IBM 2024</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="problem-text"
          style={{ padding: 'clamp(40px, 6vw, 88px) clamp(16px, 5vw, 72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: 1 }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.26)', marginBottom: '22px' }}>Enterprise Cybersecurity</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 5.5rem)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-0.035em', color: '#ffffff', marginBottom: '22px' }}>
            Your legacy defences<br />
            <span style={{ color: 'rgba(255,255,255,0.26)' }}>weren't built for today.</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px, 1.3vw, 15px)', lineHeight: 1.82, color: 'rgba(255,255,255,0.36)', marginBottom: '14px', maxWidth: '460px' }}>
            The average breach costs <strong style={{ color: 'rgba(255,255,255,0.68)', fontWeight: 500 }}>$4.45 million</strong> and takes 277 days to identify and contain.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px, 1.3vw, 15px)', lineHeight: 1.82, color: 'rgba(255,255,255,0.36)', marginBottom: 'clamp(28px, 4vw, 40px)', maxWidth: '460px' }}>
            Emozen rebuilds your security posture from the ground up — zero-trust architecture, continuous compliance, and threat intelligence that never sleeps.
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginBottom: 'clamp(24px, 4vw, 36px)' }}>
            {points.map((p, i) => (
              <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 1.1vw, 13px)', fontWeight: 500, color: 'rgba(255,255,255,0.62)', marginBottom: '3px' }}>{p.title}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 1.1vw, 13px)', color: 'rgba(255,255,255,0.27)' }}>{p.desc}</div>
              </div>
            ))}
          </div>
          <div><a href="#contact" className="pill-btn pill-btn-outline">Secure Your Business</a></div>
        </motion.div>
      </div>
      <style>{`
        @media (min-width: 768px) { .problem-grid { grid-template-columns: 1fr 1fr !important; } .problem-text { order: 0 !important; } .problem-image { order: 1 !important; } }
        @media (min-width: 1100px) { .problem-grid { grid-template-columns: 45fr 55fr !important; } }
      `}</style>
    </section>
  );
}