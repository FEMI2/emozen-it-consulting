import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    number: '01',
    title: 'Cloud Architecture',
    description: 'Multi-cloud design, governance, and optimisation at global enterprise scale. We reduce infrastructure cost by an average of 40% while improving resilience and velocity.',
    tags: ['AWS · Azure · GCP', 'FinOps', 'Kubernetes', 'Disaster Recovery'],
    image: 'https://images.unsplash.com/photo-1633174074875-f09b1b53ecf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    number: '02',
    title: 'Enterprise Cybersecurity',
    description: 'Zero-trust architecture, continuous compliance monitoring, and 24/7 threat intelligence built for organisations that cannot afford a breach.',
    tags: ['Zero-Trust', 'SOC 2 · ISO 27001', 'GDPR · HIPAA', 'Incident Response'],
    image: 'https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    number: '03',
    title: 'Custom Software',
    description: 'Production-ready enterprise applications architected for longevity. From microservices to full-stack platforms — built to be owned and extended.',
    tags: ['API-First', 'React · Node.js · Go', 'Microservices', 'CI/CD'],
    image: 'https://images.unsplash.com/photo-1770159116807-9b2a7bb82294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    number: '04',
    title: 'Infrastructure Scaling',
    description: 'Infrastructure that holds under any load. We design auto-scaling systems with 99.9% uptime SLAs, global CDN, and zero-bottleneck architecture.',
    tags: ['Auto-Scaling', 'Edge Delivery', 'Observability', '99.9% SLA'],
    image: 'https://images.unsplash.com/photo-1767112601676-1532f4307560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
];

export function BentoServices() {
  return (
    <section id="solutions" style={{ paddingTop: 'clamp(80px, 12vw, 160px)', paddingBottom: 'clamp(80px, 12vw, 160px)' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 64px)', marginBottom: 'clamp(40px, 6vw, 64px)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: '14px' }}>Our Expertise</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.2rem, 5.5vw, 6.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#ffffff', textWrap: 'balance' }}>
            Four disciplines.<br />
            <span style={{ color: 'rgba(255,255,255,0.22)' }}>One strategic partner.</span>
          </h2>
        </div>
        <a href="#contact" className="pill-btn pill-btn-outline" style={{ alignSelf: 'flex-end' }}>All Services</a>
      </motion.div>

      <div className="services-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 64px)', display: 'grid', gridTemplateColumns: '1fr', gap: '2px', background: 'rgba(255,255,255,0.06)' }}>
        {services.map((s, i) => (
          <motion.div key={s.number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }} className="service-card" style={{ background: '#0a0a0a', overflow: 'hidden', transition: 'background 0.3s ease' }}>
            <div className="card-img-wrap" style={{ position: 'relative', height: 'clamp(220px, 26vw, 400px)', overflow: 'hidden' }}>
              <ImageWithFallback src={s.image} alt={s.title} loading={i === 0 ? 'eager' : 'lazy'} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.36) saturate(0.5)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(10,10,10,0.97))' }} />
              <span className="card-number" style={{ position: 'absolute', top: '20px', left: '22px', fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.2)' }}>{s.number}</span>
              <div className="card-arrow" style={{ position: 'absolute', top: '18px', right: '20px' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10h14M11 4l6 6-6 6" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="card-accent-bar" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 100%)', opacity: 0, transition: 'opacity 0.3s ease' }} />
            </div>
            <div style={{ padding: 'clamp(20px, 3vw, 30px) clamp(20px, 3vw, 28px) clamp(24px, 3vw, 32px)' }}>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#ffffff', marginBottom: '10px', lineHeight: 1.2 }}>{s.title}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px, 1.1vw, 14px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.36)', marginBottom: '18px' }}>{s.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {s.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.28)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '4px 11px', whiteSpace: 'nowrap', transition: 'border-color 0.2s ease, color 0.2s ease' }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (min-width: 640px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (min-width: 1200px) { .services-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        .service-card:hover { background: #111111 !important; }
        .service-card:hover .card-accent-bar { opacity: 1 !important; }
      `}</style>
    </section>
  );
}