import AnimSection from './AnimSection';

const TEAM_PHOTOS = [
  { left: '5%',  top: '35%', size: 110, emoji: '😊', bg: '#dde8f5' },
  { left: '14%', top: '5%',  size: 130, emoji: '🧑', bg: '#f5dde8' },
  { left: '27%', top: '0%',  size: 140, emoji: '👨‍💼', bg: '#ddf5e8' },
  { left: '42%', top: '15%', size: 125, emoji: '🧔', bg: '#f5f0dd' },
  { left: '54%', top: '0%',  size: 115, emoji: '👩', bg: '#e8ddf5' },
  { left: '65%', top: '20%', size: 140, emoji: '🧑‍💻', bg: '#ddf5f5' },
  { left: '79%', top: '5%',  size: 130, emoji: '🙂', bg: '#f5e8dd' },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 5% 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Wavy decorative lines — left */}
      <svg
        style={{ position: 'absolute', left: 0, top: '30%', width: 100, pointerEvents: 'none' }}
        viewBox="0 0 100 300"
        fill="none"
      >
        <path
          d="M80 10 Q10 60 80 110 Q150 160 80 210 Q10 260 80 300"
          stroke="#111" strokeWidth="2.5" fill="none"
          style={{ strokeDasharray: 1000, strokeDashoffset: 1000, animation: 'drawLine 2.5s ease 0.5s forwards' }}
        />
        <path
          d="M55 10 Q-15 60 55 110 Q125 160 55 210 Q-15 260 55 300"
          stroke="#FF6B6B" strokeWidth="2.5" fill="none"
          style={{ strokeDasharray: 1000, strokeDashoffset: 1000, animation: 'drawLine 2.5s ease 0.8s forwards' }}
        />
      </svg>

      {/* Floating purple shape — right */}
      <div style={{
        position: 'absolute', right: '4%', top: '28%',
        width: 80, height: 100,
        background: '#7B5CF5',
        borderRadius: '0 0 0 999px',
        animation: 'float 5s ease-in-out infinite',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', paddingLeft: 60 }}>
        {/* Main Headline */}
        <AnimSection delay={0.1}>
          <h1 style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(48px, 7.5vw, 92px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 28,
          }}>
            The <span className="highlight-yellow" style={{ fontStyle: 'italic' }}>thinkers</span> and<br />
            doers were <span className="highlight-pink">changing</span><br />
            the <span className="highlight-green">status</span> Quo with
          </h1>
        </AnimSection>

        {/* Subtext */}
        <AnimSection delay={0.2}>
          <p style={{
            fontSize: 17, color: '#555', lineHeight: 1.7,
            maxWidth: 560, marginBottom: 48,
          }}>
            We are a team of strategists, designers communicators, researchers. Together,
            we believe that progress only happens when you refuse to play things safe.
          </p>
        </AnimSection>

        {/* Scattered Team Photos */}
        <AnimSection delay={0.3}>
          <div style={{ position: 'relative', height: 300 }}>
            {TEAM_PHOTOS.map((p, i) => (
              <div
                key={i}
                className="circle-img"
                style={{
                  position: 'absolute',
                  left: p.left,
                  top: p.top,
                  width: p.size,
                  height: p.size,
                  background: p.bg,
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{
                  width: '100%', height: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: p.size * 0.35,
                }}>
                  {p.emoji}
                </div>
              </div>
            ))}
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
