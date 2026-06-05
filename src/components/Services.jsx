import { useState } from 'react';
import AnimSection from './AnimSection';

const SERVICE_LIST = [
  {
    tag: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
    pinkArrow: false,
  },
  {
    tag: 'The hanger US Air Force digital experimental',
    title: 'We talk about our weight',
    pinkArrow: true,
  },
  {
    tag: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
    pinkArrow: false,
  },
];

function ServiceRow({ tag, title, pinkArrow }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 0',
        borderTop: '1px solid #e5e5e5',
        cursor: 'pointer',
        transition: 'all 0.25s',
      }}
    >
      {/* Left tag */}
      <span style={{ color: '#888', fontSize: 13, width: 180, flexShrink: 0, lineHeight: 1.5 }}>
        {tag}
      </span>

      {/* Center title */}
      <span style={{
        fontFamily: "'Space Mono', monospace",
        fontWeight: 700,
        fontSize: 'clamp(16px, 2.5vw, 30px)',
        letterSpacing: '-0.02em',
        flex: 1,
        padding: '0 24px',
        color: hovered ? '#7B5CF5' : '#111',
        transition: 'color 0.25s',
      }}>
        {title}
      </span>

      {/* Right arrow */}
      <div style={{
        width: 36, height: 36,
        borderRadius: '50%',
        border: `1.5px solid ${pinkArrow ? '#FF6B9D' : '#111'}`,
        background: hovered || pinkArrow ? (pinkArrow ? '#FF6B9D' : '#111') : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: hovered || pinkArrow ? '#fff' : '#111',
        transition: 'all 0.25s',
        flexShrink: 0,
      }}>
        →
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      style={{ padding: '80px 5%', background: '#fff', position: 'relative' }}
    >
      {/* Decorative wavy line top-right */}
      <svg
        style={{ position: 'absolute', top: 0, right: '5%', width: 120, pointerEvents: 'none' }}
        viewBox="0 0 120 120" fill="none"
      >
        <path d="M60 10 Q100 40 80 80 Q60 110 20 100" stroke="#FF6B6B" strokeWidth="2" fill="none" />
      </svg>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AnimSection>
          <h2 style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(32px, 4vw, 60px)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: 8,
          }}>
            What we <span className="highlight-green">can</span><br />
            offer <span className="highlight-yellow">you!</span>
          </h2>
        </AnimSection>

        <div style={{ marginTop: 40 }}>
          {SERVICE_LIST.map((service, i) => (
            <AnimSection key={service.title} delay={i * 0.1}>
              <ServiceRow {...service} />
            </AnimSection>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid #e5e5e5' }} />
        </div>
      </div>
    </section>
  );
}
