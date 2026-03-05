import { motion } from 'motion/react';

const featured = {
  quote: "Emozen didn't just upgrade our cloud infrastructure — they fundamentally rewired how we think about technology as a strategic business driver. Operating costs dropped 40% and revenue velocity doubled within 14 months.",
  name: 'Sarah Chen',
  role: 'CEO, DataFlow Technologies',
  metric: '2× Revenue Velocity',
};

const others = [
  { quote: "After a near-catastrophic breach with our previous vendor, Emozen rebuilt our entire security posture from the ground up. Zero incidents in 18 months.", name: 'Marcus Williams', role: 'CISO, FinanceHub Global' },
  { quote: "We went from 6-month release cycles to weekly deployments. The best software engineering partnership we've had in 12 years of building.", name: 'Dr. Priya Patel', role: 'CTO, Innovate Health Systems' },
  { quote: "Their infrastructure held 50× Black Friday traffic without breaking. 99.99% uptime last year. They're not a vendor — they're a strategic partner.", name: 'Alex Rodriguez', role: 'VP Engineering, ScaleSys Commerce' },
];

const summaryStats = [
  { v: '97%', l: 'Client Satisfaction' },
  { v: '98%', l: 'On-Time Delivery' },
  { v: '89%', l: 'Repeat Business' },
];

export function Testimonials() {
  return (
    <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 'clamp(72px, 12vw, 140px)', paddingBottom: 'clamp(72px, 12vw, 140px)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 64px)' }}>
        <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: 'clamp(32px, 5vw, 52px)' }}>
          <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.22)', flexShrink: 0 }} />
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', margin: 0 }}>Client Voices</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }} style={{ paddingBottom: 'clamp(48px, 8vw, 88px)', marginBottom: 'clamp(48px, 8vw, 88px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ fontFamily: "'Syne', system-ui, sans-serif", fontSize: 'clamp(4rem, 10vw, 10rem)', fontWeight: 800, lineHeight: 0.7, color: 'rgba(255,255,255,0.05)', marginBottom: 'clamp(8px, 1.5vw, 16px)', userSelect: 'none', letterSpacing: '-0.04em' }} aria-hidden="true">"
          </div>
          <blockquote style={{ fontFamily: "'Inter', system-ui, sans-serif", fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(1.3rem, 3.5vw, 3.2rem)', lineHeight: 1.32, letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.85)', maxWidth: '1100px', marginBottom: 'clamp(28px, 4vw, 48px)', textWrap: 'balance' }}>
            {featured.quote}
          </blockquote>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne', system-ui, sans-serif", fontSize: '14px', fontWeight: 800, color: 'rgba(255,255,255,0.45)', flexShrink: 0 }}>{featured.name.charAt(0)}</div>
              <div>
                <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.65)', marginBottom: '2px' }}>{featured.name}</div>
                <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '12px', fontWeight: 400, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.02em' }}>{featured.role}</div>
              </div>
            </div>
            <div style={{ fontFamily: "'Syne', system-ui, sans-serif", fontSize: 'clamp(1rem, 1.8vw, 1.4rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'rgba(255,255,255,0.22)', lineHeight: 1.1 }}>{featured.metric}</div>
          </div>
        </motion.div>

        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', background: 'rgba(255,255,255,0.07)' }}>
          {others.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }} className="t-card" style={{ background: '#0a0a0a', padding: 'clamp(28px, 3.5vw, 40px) clamp(20px, 3vw, 32px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px', minHeight: '200px', transition: 'background 0.25s ease', position: 'relative', overflow: 'hidden' }}>
              <div className="t-card-bar" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, rgba(255,255,255,0.35) 0%, transparent 100%)', opacity: 0, transition: 'opacity 0.3s ease' }} />
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(13px, 1.2vw, 15px)', lineHeight: 1.8, color: 'rgba(255,255,255,0.44)', position: 'relative' }}>"{t.quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne', system-ui, sans-serif", fontSize: '11px', fontWeight: 800, color: 'rgba(255,255,255,0.32)', flexShrink: 0 }}>{t.name.charAt(0)}</div>
                <div>
                  <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.55)', marginBottom: '1px' }}>{t.name}</div>
                  <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px', fontWeight: 400, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.02em' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.26, ease: [0.22, 1, 0.36, 1] }} style={{ background: '#0f0f0f', padding: 'clamp(28px, 3.5vw, 40px) clamp(20px, 3vw, 32px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(20px, 3vw, 28px)', minHeight: '200px' }}>
            {summaryStats.map((m) => (
              <div key={m.l}>
                <div style={{ fontFamily: "'Syne', system-ui, sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.04em', color: '#ffffff', lineHeight: 1.05, marginBottom: '5px' }}>{m.v}</div>
                <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px', fontWeight: 400, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{m.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) { .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (min-width: 1024px) { .testimonials-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        .t-card:hover { background: #111111 !important; }
        .t-card:hover .t-card-bar { opacity: 1 !important; }
      `}</style>
    </section>
  );
}