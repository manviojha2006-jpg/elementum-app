import AnimSection from './AnimSection';

export default function HowWeHelp() {
  return (
    <section
      style={{ padding: '100px 5%', background: '#fff', position: 'relative', overflow: 'hidden' }}
    >
      {/* Red wavy line top */}
      <svg
        style={{ position: 'absolute', top: 20, left: '30%', width: 300, pointerEvents: 'none' }}
        viewBox="0 0 300 60" fill="none"
      >
        <path d="M10 30 Q75 5 150 30 Q225 55 290 30" stroke="#FF6B6B" strokeWidth="2" fill="none" />
      </svg>

      <div
        className="two-col"
        style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap' }}
      >
        {/* Left — Circle Image with triangles */}
        <AnimSection style={{ flex: 1, minWidth: 280, position: 'relative' }}>
          {/* Red triangle top-left */}
          <div style={{
            position: 'absolute', top: -10, left: -10,
            width: 0, height: 0,
            borderLeft: '40px solid transparent',
            borderRight: '40px solid transparent',
            borderBottom: '70px solid #FF6B6B',
            zIndex: 2,
          }} />
          {/* Red triangle bottom */}
          <div style={{
            position: 'absolute', bottom: 20, left: 60,
            width: 0, height: 0,
            borderLeft: '55px solid transparent',
            borderRight: '55px solid transparent',
            borderBottom: '90px solid #FF6B6B',
            zIndex: 2,
          }} />

          <div
            className="circle-img"
            style={{
              width: 'min(420px, 100%)',
              aspectRatio: '1',
              background: 'linear-gradient(135deg, #b8cce0, #d0c8e8)',
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 72,
            }}
          >
            💼
          </div>
        </AnimSection>

        {/* Right — Text */}
        <AnimSection delay={0.15} style={{ flex: 1, minWidth: 280 }}>
          <h2 style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(32px, 4vw, 56px)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: 24,
          }}>
            <span className="highlight-green">See</span> how we can<br />
            help you <span className="highlight-yellow">progress</span>
          </h2>

          <p style={{ color: '#555', fontSize: 16, lineHeight: 1.75, marginBottom: 28, maxWidth: 420 }}>
            We add a layer of fearless insights and action for decision makers
            to accelerate their progress in areas of digital comms and social research.
          </p>

          <a href="#services" className="read-more-link">
            Read more
            <span style={{ display: 'inline-block', width: 60, height: 1, background: '#111', verticalAlign: 'middle' }} />
            →
          </a>
        </AnimSection>
      </div>
    </section>
  );
}
