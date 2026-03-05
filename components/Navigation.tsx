import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ScrollProgress } from './ScrollProgress';
import { Logo } from './Logo';

const NAV_LINKS = [
  { label: 'Solutions',  href: '#solutions'   },
  { label: 'Work',       href: '#case-studies' },
  { label: 'Why Emozen', href: '#why-emozen'  },
  { label: 'Careers',    href: '#careers'      },
];

export function Navigation() {
  const [scrolled,       setScrolled]       = useState(false);
  const [hidden,         setHidden]         = useState(false);
  const [open,           setOpen]           = useState(false);
  const [activeSection,  setActiveSection]  = useState('');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (open) return;
      if (y < 80) {
        setHidden(false);
      } else if (y > lastScrollY.current + 6) {
        setHidden(true);
      } else if (y < lastScrollY.current - 6) {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) setHidden(false);
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <ScrollProgress />
      <style>{`
        .nav-desktop-links { display: none; }
        .nav-desktop-ctas  { display: none; }
        .nav-mobile-toggle { display: flex;  }
        @media (min-width: 768px) {
          .nav-desktop-links { display: flex; align-items: center; gap: clamp(16px, 2.5vw, 32px); }
          .nav-desktop-ctas  { display: flex; align-items: center; gap: 8px; }
          .nav-mobile-toggle { display: none; }
        }
        @media (min-width: 768px) and (max-width: 899px) {
          .nav-desktop-links { gap: 16px !important; }
          .nav-desktop-ctas  { gap: 6px  !important; }
        }
      `}</style>

      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: 'clamp(56px, 8vw, 64px)',
          display: 'flex',
          alignItems: 'center',
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.38s cubic-bezier(0.4,0,0.2,1), background 0.3s ease, border-color 0.3s ease',
          background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            width: '100%',
            paddingLeft:  'max(clamp(14px, 3.5vw, 48px), env(safe-area-inset-left))',
            paddingRight: 'max(clamp(14px, 3.5vw, 48px), env(safe-area-inset-right))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ flexShrink: 0, textDecoration: 'none', display: 'flex', alignItems: 'center', height: 'clamp(56px, 8vw, 64px)' }}
            aria-label="Emozen IT Consulting — back to top"
          >
            <Logo height={40} />
          </a>

          <div className="nav-desktop-links">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.4)',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                    paddingBottom: '3px',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = isActive ? '#ffffff' : 'rgba(255,255,255,0.4)')}
                >
                  {link.label}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: isActive ? '16px' : '0px',
                      height: '1px',
                      background: 'rgba(255,255,255,0.55)',
                      display: 'block',
                      borderRadius: '1px',
                      transition: 'width 0.25s ease',
                    }}
                  />
                </a>
              );
            })}
          </div>

          <div className="nav-desktop-ctas">
            <a href="/portal" className="pill-btn pill-btn-outline" style={{ fontSize: '10px', padding: '9px 16px', minHeight: '36px' }}>Client Portal</a>
            <a href="#contact" className="pill-btn pill-btn-solid" style={{ fontSize: '10px', padding: '9px 16px', minHeight: '36px' }}>Get Started</a>
          </div>

          <button
            className="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px', padding: '10px', cursor: 'pointer', width: '44px', height: '44px', flexShrink: 0 }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: i === 1 ? '16px' : '22px',
                  height: '1.5px',
                  background: 'rgba(255,255,255,0.8)',
                  borderRadius: '1px',
                  transition: 'transform 0.25s ease, opacity 0.25s ease, width 0.25s ease',
                  transformOrigin: 'center',
                  transform:
                    open && i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)' :
                    open && i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: '#080808',
              display: 'flex',
              flexDirection: 'column',
              paddingTop: 'clamp(72px, 14vw, 96px)',
              paddingBottom: 'max(28px, env(safe-area-inset-bottom))',
              paddingLeft:  'max(clamp(20px, 6vw, 44px), env(safe-area-inset-left))',
              paddingRight: 'max(clamp(20px, 6vw, 44px), env(safe-area-inset-right))',
              overflowY: 'auto',
            }}
          >
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'clamp(16px, 4vw, 22px) 0',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.16)', minWidth: '20px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.8rem, 8vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'rgba(255,255,255,0.75)', lineHeight: 1 }}>
                      {link.label}
                    </span>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, opacity: 0.3 }}>
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '28px' }}>
              <a href="/portal" className="pill-btn pill-btn-outline" onClick={() => setOpen(false)} style={{ justifyContent: 'center', width: '100%' }}>Client Portal</a>
              <a href="#contact" className="pill-btn pill-btn-solid" onClick={() => setOpen(false)} style={{ justifyContent: 'center', width: '100%' }}>Get Started</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}