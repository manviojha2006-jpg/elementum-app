import { useState } from 'react';
import AnimSection from './AnimSection';

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      style={{
        background: '#C8F0D0',
        padding: '80px 5%',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Decorative sketch square */}
      <svg
        style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', width: 80, opacity: 0.55 }}
        viewBox="0 0 80 80" fill="none"
      >
        <rect x="10" y="10" width="60" height="60" stroke="#333" strokeWidth="1.5" fill="none" />
        <path d="M10 10 Q30 0 70 10" stroke="#FF6B6B" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Purple shape right */}
      <div style={{
        position: 'absolute', right: '5%', top: '20%',
        width: 70, height: 90,
        background: '#7B5CF5',
        borderRadius: '0 0 0 999px',
      }} />

      <AnimSection>
        <h2 style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(32px, 5vw, 64px)',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: 16,
          marginTop: 40,
          position: 'relative',
          zIndex: 1,
        }}>
          Subscribe to<br />our newsletter
        </h2>

        <p style={{ color: '#444', fontSize: 16, marginBottom: 36, position: 'relative', zIndex: 1 }}>
          To make your stay special and even more memorable
        </p>

        {submitted ? (
          <div style={{
            background: '#fff',
            borderRadius: 999,
            padding: '14px 40px',
            display: 'inline-block',
            fontWeight: 700,
            color: '#2a8a2a',
            fontSize: 16,
          }}>
            ✅ Subscribed! Thank you.
          </div>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            style={{
              background: '#111',
              color: '#fff',
              border: 'none',
              borderRadius: 999,
              padding: '16px 48px',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              position: 'relative',
              zIndex: 1,
            }}
            onMouseEnter={e => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Subscribe Now
          </button>
        )}
      </AnimSection>
    </section>
  );
}
