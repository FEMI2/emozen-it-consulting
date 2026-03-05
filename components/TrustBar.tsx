const items = [
  { name: 'FinanceHub', industry: 'Financial Services' },
  { name: 'MedCore', industry: 'Healthcare' },
  { name: 'DataFlow', industry: 'SaaS' },
  { name: 'ScaleSys', industry: 'Commerce' },
  { name: 'CloudNet', industry: 'Telecoms' },
  { name: 'NexusAI', industry: 'Deep Tech' },
  { name: 'Orion Systems', industry: 'Aerospace' },
  { name: 'Vaultex', industry: 'Fintech' },
  { name: 'GlobalTech', industry: 'Enterprise' },
  { name: 'SecureOps', industry: 'Government' },
];

const doubled = [...items, ...items];

export function TrustBar() {
  return (
    <section
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        position: 'relative',
        padding: '0',
      }}
    >
      <div className="trust-fade-left" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, background: 'linear-gradient(to right, #0a0a0a 35%, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div className="trust-fade-right" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, background: 'linear-gradient(to left, #0a0a0a 35%, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <div
        className="trust-track"
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 55s linear infinite',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          willChange: 'transform',
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '20px 40px 20px 0',
              borderRight: '1px solid rgba(255,255,255,0.05)',
              marginRight: '40px',
              flexShrink: 0,
              minWidth: '148px',
            }}
          >
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '-0.01em',
                color: 'rgba(255,255,255,0.2)',
                whiteSpace: 'nowrap',
                display: 'block',
                marginBottom: '3px',
              }}
            >
              {item.name}
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '9.5px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.09)',
                whiteSpace: 'nowrap',
              }}
            >
              {item.industry}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .trust-track:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}