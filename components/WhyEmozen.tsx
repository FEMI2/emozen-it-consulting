import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const differentiators = [
  { number: '01', title: 'Business-First Approach', description: 'We lead with your business objectives. Every solution is mapped to measurable KPIs — not just technical specs. Technology serves strategy, not the other way around.' },
  { number: '02', title: 'C-Suite Partnership', description: 'We speak the language of board-level decision-making, translating complex technical choices into strategic growth levers your leadership can act on.' },
  { number: '03', title: 'Proven ROI in 18 Months', description: 'Our clients see an average 3× return on IT investment within 18 months through aggressive cost optimisation and revenue-enabling digital capabilities.' },
  { number: '04', title: 'Innovation at Enterprise Scale', description: 'We bridge cutting-edge innovation with enterprise-grade stability — deploying modern solutions without compromising on reliability or security posture.' },
];

export function WhyEmozen() {
  return (
    <section id="why-emozen" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 'clamp(80px, 12vw, 160px)', paddingBottom: 'clamp(80px, 12vw, 160px)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 64px)' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ marginBottom: 'clamp(40px, 8vw, 72px)' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: '16px' }}>Why Emozen</p>
          <h2 style={{ fontFamily: "'Syne', system-ui, sans-serif", fontSize: 'clamp(2.2rem, 5.5vw, 6.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#ffffff', maxWidth: '18ch', textWrap: 'balance' }}>
            Others deliver technology.<br />
            <span style={{ color: 'rgba(255,255,255,0.22)' }}>We deliver results.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="why-grid">
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {differentiators.map((item, i) => (
              <motion.div key={item.number} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }} className="why-row" style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '24px', padding: '28px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 0.25s ease' }}>
                <span style={{ fontFamily: "'Syne', system-ui, sans-serif", fontSize: '11px', fontWeight: 800, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.08em', paddingTop: '3px', transition: 'color 0.25s ease' }}>{item.number}</span>
                <div>
                  <h3 style={{ fontFamily: "'Syne', system-ui, sans-serif", fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', fontWeight: 800, letterSpacing: '-0.015em', color: '#ffffff', marginBottom: '8px', lineHeight: 1.2 }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: 1.78, color: 'rgba(255,255,255,0.35)' }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }} className="why-right">
            <div style={{ position: 'relative', overflow: 'hidden', flex: 1, minHeight: '280px' }}>
              <ImageWithFallback src="https://images.unsplash.com/photo-1733277936821-83eff364d87a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Strategic partnership" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.38) saturate(0.45)', transition: 'filter 0.4s ease' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, transparent 50%)' }} />
            </div>
            <div style={{ background: '#0f0f0f', padding: '28px 28px 24px', borderTop: '1px solid rgba(255,255,255,0.07)', transition: 'background 0.3s ease' }} className="why-quote">
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(0.9rem, 1.4vw, 1rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
                "Emozen transformed our cloud infrastructure and reduced costs by 40% while tripling performance metrics across the board."
              </p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)' }}>James Morrison — CTO, TechCorp</p>
            </div>
            <a href="#contact" className="pill-btn pill-btn-outline" style={{ width: '100%', justifyContent: 'center', borderRadius: '0', padding: '18px 24px' }}>Start the Conversation</a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .why-right { display: none; }
        @media (min-width: 768px) { .why-grid { grid-template-columns: 1fr 300px !important; gap: 48px !important; } .why-right { display: flex !important; } }
        @media (min-width: 1024px) { .why-grid { grid-template-columns: 1fr 380px !important; } }
        .why-quote:hover { background: #141414 !important; }
        .why-row:hover { border-bottom-color: rgba(255,255,255,0.15) !important; }
      `}</style>
    </section>
  );
}