import AnimSection from './AnimSection';

export default function Studio() {
  return (
    <section
      id="studio"
      style={{ padding: '100px 5%', background: '#fff', position: 'relative', overflow: 'hidden' }}
    >
      {/* Pink glow top-right */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 300, height: 300,
        background: 'radial-gradient(circle, #FFEBF0 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div
        className="two-col"
        style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap' }}
      >
        {/* Left — Text */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <AnimSection>
            <h2 style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: 24,
            }}>
              <span className="highlight-yellow">Tomorrow</span> should<br />
              be better than <span className="highlight-green">today</span>
            </h2>

            <p style={{ color: '#555', fontSize: 16, lineHeight: 1.75, marginBottom: 28, maxWidth: 400 }}>
              We are a team of strategists, designers communicators, researchers.
              Together, we believe that progress only happens when you refuse to play things safe.
            </p>

            <a href="#services" className="read-more-link">
              Read more
              <span style={{ display: 'inline-block', width: 60, height: 1, background: '#111', verticalAlign: 'middle' }} />
              →
            </a>
          </AnimSection>
        </div>

        {/* Right — Circle Image */}
        <AnimSection delay={0.15} style={{ flex: 1, minWidth: 280 }}>
          <div style={{ position: 'relative' }}>
            {/* Red square decoration */}
            <div style={{
              position: 'absolute', top: -20, right: 20,
              width: 60, height: 60,
              background: '#FF6B6B',
              zIndex: 0,
            }} />

            <div
              className="circle-img"
              style={{
                width: 'min(400px, 100%)',
                aspectRatio: '1',
                background: 'linear-gradient(135deg, #c8d8e8, #d8c8e8)',
                position: 'relative',
                zIndex: 1,
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 72,
              }}
            >
              👥
            </div>

            {/* Red wavy line bottom */}
            <svg
              style={{ position: 'absolute', bottom: -40, right: -30, width: 200, pointerEvents: 'none' }}
              viewBox="0 0 200 80" fill="none"
            >
              <path d="M10 40 Q50 10 100 40 Q150 70 190 40" stroke="#FF6B6B" strokeWidth="2.5" fill="none" />
            </svg>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
