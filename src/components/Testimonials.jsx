import { useState, useEffect } from 'react';
import AnimSection from './AnimSection';

const TESTIMONIALS = [
  {
    text: 'Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in organic traffic and 30% more qualified leads. The team was professional and responsive throughout.',
    name: 'Alex Johnson',
    role: 'Marketing Director',
  },
  {
    text: 'Working with Elementum was a transformative experience. Their strategic thinking helped us reposition our brand and the results were immediate — 40% more engagement in just 2 months.',
    name: 'Sarah Chen',
    role: 'CEO, TechStart',
  },
  {
    text: "The team's research-backed approach gave us confidence. They didn't just execute, they challenged our assumptions and pushed us to better outcomes.",
    name: 'Marcus Reed',
    role: 'Product Lead',
  },
];

const AVATAR_POSITIONS = [
  { left: '2%',   top: '10%', size: 64  },
  { left: '8%',   top: '55%', size: 72  },
  { left: '0%',   top: '78%', size: 52  },
  { left: '15%',  top: '68%', size: 80  },
  { right: '2%',  top: '5%',  size: 72  },
  { right: '0%',  top: '40%', size: 60  },
  { right: '10%', top: '65%', size: 80  },
  { right: '2%',  top: '83%', size: 52  },
];

const AVATAR_EMOJIS = ['👨', '👩‍💼', '🧑', '👨‍💻', '👩', '🧔', '😊', '🙂'];
const AVATAR_COLORS = ['#dde8f5', '#f5dde8', '#ddf5e8', '#f5f0dd', '#e8ddf5', '#ddf5f5', '#f5e8dd', '#fde8d8'];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="contact"
      style={{ padding: '100px 5%', background: '#fff', position: 'relative', overflow: 'hidden' }}
    >
      {/* Scattered background avatars */}
      {AVATAR_POSITIONS.map((pos, i) => (
        <div
          key={i}
          className="circle-img"
          style={{
            position: 'absolute',
            ...pos,
            width: pos.size,
            height: pos.size,
            background: AVATAR_COLORS[i],
            opacity: 0.65,
          }}
        >
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: pos.size * 0.42,
          }}>
            {AVATAR_EMOJIS[i]}
          </div>
        </div>
      ))}

      {/* Content */}
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <AnimSection>
          <h2 style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 52px)',
            letterSpacing: '-0.03em',
            marginBottom: 48,
          }}>
            What our customer<br />
            <span className="highlight-yellow">says</span> <span className="highlight-green">About Us</span>
          </h2>
        </AnimSection>

        {/* Carousel */}
        <div style={{ position: 'relative', minHeight: 230 }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              style={{
                position: i === 0 ? 'relative' : 'absolute',
                top: 0, left: 0, right: 0,
                opacity: i === active ? 1 : 0,
                transform: i === active ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                pointerEvents: i === active ? 'auto' : 'none',
              }}
            >
              <div style={{
                background: '#f0f8f0',
                borderRadius: 20,
                padding: '32px 36px',
              }}>
                <span style={{ fontSize: 48, color: '#7B5CF5', lineHeight: 1, display: 'block', marginBottom: 8 }}>"</span>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: '#333', marginBottom: 24 }}>{t.text}</p>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                <div style={{ color: '#888', fontSize: 13, marginTop: 2 }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                borderRadius: 100,
                background: i === active ? '#7B5CF5' : '#ddd',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
