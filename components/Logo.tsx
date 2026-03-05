// Note: logoSrc uses figma:asset virtual module scheme — replace with your actual logo asset in production
// import logoSrc from 'figma:asset/f05b8b92b16822e950b1c7bb06a3673c113c823e.png';

interface LogoProps {
  height?: number;
  style?: React.CSSProperties;
}

export function Logo({ height = 36, style }: LogoProps) {
  // Fallback: text logo when asset not available
  return (
    <div
      style={{
        height: `${height}px`,
        display: 'flex',
        alignItems: 'center',
        fontFamily: "'Syne', system-ui, sans-serif",
        fontSize: `${height * 0.5}px`,
        fontWeight: 800,
        letterSpacing: '-0.02em',
        color: '#ffffff',
        ...style,
      }}
    >
      EMOZEN
    </div>
  );
}