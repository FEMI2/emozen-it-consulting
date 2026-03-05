import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const cases = [
  {
    tag: 'Cloud Migration',
    company: 'FinanceHub Global',
    headline: '40% cost reduction. Zero downtime.',
    description: 'Migrated a $2B financial services firm from legacy on-premise to multi-cloud in 90 days with zero downtime and full regulatory compliance.',
    metrics: [{ v: '40%', l: 'Cost Reduction' }, { v: '90d', l: 'Migration' }, { v: '0', l: 'Hours Downtime' }],
    image: 'https://images.unsplash.com/photo-1733277936821-83eff364d87a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    tag: 'Cybersecurity',
    company: 'MedCore Health Systems',
    headline: 'Zero breaches after a full security rebuild.',
    description: 'Rebuilt the security architecture of a HIPAA-regulated health network after a critical breach. Zero incidents in 18 months, three compliance audits passed.',
    metrics: [{ v: '94/100', l: 'Security Score' }, { v: '−100%', l: 'Incidents YoY' }, { v: '3/3', l: 'Audits Passed' }],
    image: 'https://images.unsplash.com/photo-1767112601676-1532f4307560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    tag: 'Custom Software',
    company: 'ScaleSys Commerce',
    headline: 'From 6-month cycles to weekly deployments.',
    description: 'Rebuilt a monolithic platform into microservices, enabling weekly releases, 50× traffic handling on peak days, and 99.99% annual uptime.',
    metrics: [{ v: '52×/yr', l: 'Deploys' }, { v: '50×', l: 'Traffic Scale' }, { v: '99.99%', l: 'Uptime' }],
    image: 'https://images.unsplash.com/photo-1770159116807-9b2a7bb82294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 'clamp(64px, 10vw, 120px)', paddingBottom: 'clamp(64px, 10vw, 120px)' }}>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 64px)', marginBottom: 'clamp(40px, 6vw, 64px)', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px' }}>
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.26)', marginBottom: '14px' }}>Selected Work</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.8rem, 4.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#ffffff' }}>
            Measurable results<br />
            <span style={{ color: 'rgba(255,255,255,0.26)' }}>for real enterprises.</span>
          </h2>
        </div>
        <a href="#contact" className="pill-btn pill-btn-outline" style={{ alignSelf: 'flex-end' }}>All Case Studies</a>
      </motion.div>

      <div className="cases-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 64px)', display: 'grid', gridTemplateColumns: '1fr', gap: '2px', background: 'rgba(255,255,255,0.06)' }}>
        {cases.map((c, i) => (
          <motion.div key={c.company} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.55, delay: i * 0.07 }} className="case-card" style={{ background: '#0a0a0a', overflow: 'hidden' }}>
            <div className="card-img-wrap" style={{ position: 'relative', height: 'clamp(180px, 22vw, 260px)', overflow: 'hidden' }}>
              <ImageWithFallback src={c.image} alt={c.company} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35) saturate(0.4)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 45%, rgba(10,10,10,1))' }} />
              <span className="case-tag" style={{ position: 'absolute', top: '18px', left: '20px', fontFamily: "'Inter', sans-serif", fontSize: '10px', letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>{c.tag}</span>
            </div>
            <div style={{ padding: 'clamp(18px, 2.5vw, 26px) clamp(18px, 2.5vw, 24px) clamp(22px, 3vw, 30px)' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '9px' }}>{c.company}</p>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#ffffff', lineHeight: 1.2, marginBottom: '12px' }}>{c.headline}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 1.1vw, 13px)', lineHeight: 1.72, color: 'rgba(255,255,255,0.3)', marginBottom: 'clamp(16px, 2.5vw, 22px)' }}>{c.description}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', paddingTop: 'clamp(14px, 2vw, 20px)', borderTop: '1px solid rgba(255,255,255,0.06)', gap: '8px' }}>
                {c.metrics.map((m) => (
                  <div key={m.l}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#ffffff', lineHeight: 1 }}>{m.v}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '5px' }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (min-width: 600px) { .cases-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (min-width: 1024px) { .cases-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        .case-card:hover { background: #111111 !important; }
      `}</style>
    </section>
  );
}