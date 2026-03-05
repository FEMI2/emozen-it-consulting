import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

function WordReveal({
  text,
  dimOpacity = 1,
  startDelay = 0,
}: {
  text: string;
  dimOpacity?: number;
  startDelay?: number;
}) {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 18, skewY: 1.5 },
            show: {
              opacity: dimOpacity,
              y: 0,
              skewY: 0,
              transition: {
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
                delay: startDelay + i * 0.055,
              },
            },
          }}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

export function ManifestoStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        padding: 'clamp(72px, 12vw, 140px) clamp(16px, 4vw, 64px)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxWidth: '1440px', margin: '0 auto', marginBottom: 'clamp(32px, 5vw, 56px)', display: 'flex', alignItems: 'center', gap: '14px' }}
      >
        <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.22)', flexShrink: 0 }} />
        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', margin: 0 }}>
          Our Conviction
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        variants={{ hidden: {}, show: {} }}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        style={{ maxWidth: '1440px', margin: '0 auto' }}
      >
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontStyle: 'italic',
            fontSize: 'clamp(2.2rem, 5.5vw, 6rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            maxWidth: '24ch',
            textWrap: 'balance',
          }}
        >
          <WordReveal text="Technology isn't the answer." dimOpacity={1} startDelay={0} />
          <br />
          <WordReveal text="The right strategy is." dimOpacity={0.28} startDelay={0.35} />
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: '1440px',
          margin: 'clamp(40px, 6vw, 72px) auto 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: 'clamp(20px, 3vw, 32px)',
        }}
      >
        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(13px, 1.2vw, 14px)', fontWeight: 400, color: 'rgba(255,255,255,0.26)', maxWidth: '480px', lineHeight: 1.78 }}>
          We've seen too many enterprises invest millions in technology that doesn't move the needle.
          We exist to make sure yours does. Every engagement starts with your business — not our tools.
        </p>
        <a href="#why-emozen" className="pill-btn pill-btn-outline">Our Philosophy</a>
      </motion.div>
    </section>
  );
}