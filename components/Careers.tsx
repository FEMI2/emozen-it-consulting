import { motion } from 'motion/react';
import { useState } from 'react';

const values = [
  { number: '01', title: 'Move with Purpose', description: 'We operate at the intersection of speed and precision. Every project has real business stakes.' },
  { number: '02', title: 'Integrity Above All', description: 'Our clients trust us with critical infrastructure. We earn that trust every day.' },
  { number: '03', title: 'Global Ambition', description: 'We operate across 40+ countries. Think at global scale, see borders as a challenge.' },
  { number: '04', title: 'People Over Process', description: 'Great technology is built by great people. We invest in every person on our team.' },
];

const perks = [
  'Competitive compensation + equity',
  'Remote-first, async culture',
  'Full benefits package',
  'Continuous learning budget',
  'Cutting-edge technology stack',
  'Rapid career progression',
];

export function Careers() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubmitted(true); setEmail(''); }
  };

  return (
    <section id="careers" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 'clamp(64px, 10vw, 120px)', paddingBottom: 'clamp(64px, 10vw, 120px)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 64px)' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 'clamp(40px, 8vw, 72px)' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: '16px' }}>Join the Team</p>
          <h2 style={{ fontFamily: "'Syne', system-ui, sans-serif", fontSize: 'clamp(1.9rem, 4.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#ffffff' }}>
            Build the future<br />
            <span style={{ color: 'rgba(255,255,255,0.22)' }}>of enterprise technology.</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.06 }} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', padding: 'clamp(28px, 4vw, 48px)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: 'clamp(40px, 8vw, 72px)' }} className="careers-notice">
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '12px' }}>Position Status</p>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#ffffff', marginBottom: '10px' }}>No open positions at this time.</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', lineHeight: 1.75, color: 'rgba(255,255,255,0.32)', maxWidth: '520px' }}>We're a lean, intentional team — we only hire when we've found the right person for the right role. Leave your email and we'll contact you when something opens.</p>
          </div>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '14px' }}>Get Notified</p>
            {submitted ? (
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>You're on the list. We'll be in touch.</p>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@company.com" required style={{ flex: '1', minWidth: '200px', padding: '11px 16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '100px', color: '#ffffff', fontFamily: "'Inter', sans-serif", fontSize: '13px', outline: 'none' }} onFocus={e => ((e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.3)')} onBlur={e => ((e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.14)')} />
                <button type="submit" className="pill-btn pill-btn-outline">Notify Me</button>
              </form>
            )}
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px' }} className="careers-content">
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: '32px' }}>What We Stand For</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2px' }}>
              {values.map((v, i) => (
                <motion.div key={v.number} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} style={{ padding: '28px 24px', background: '#0f0f0f', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 800, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em' }}>{v.number}</span>
                  <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: '15px', fontWeight: 800, letterSpacing: '-0.015em', color: '#ffffff' }}>{v.title}</h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.32)' }}>{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="careers-bottom">
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: '24px' }}>What You Get</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                {perks.map((p, i) => (
                  <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', borderRight: '1px solid rgba(255,255,255,0.07)', paddingRight: '16px', fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{p}</div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff', marginBottom: '6px' }}>Think you belong here?</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>We always make room for extraordinary people.</p>
              </div>
              <a href="mailto:careers@emozen.com" className="pill-btn pill-btn-outline">Send Your CV</a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) { .careers-notice { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .careers-content { grid-template-columns: 1fr 1fr !important; } .careers-bottom { grid-column: 1 / -1; } }
      `}</style>
    </section>
  );
}