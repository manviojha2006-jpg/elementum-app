import { useState, useEffect } from 'react';

const NAV_LINKS = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 5%', height: 68,
      background: scrolled ? 'rgba(255,255,255,0.93)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid #f0f0f0' : 'none',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <span style={{
        fontFamily: "'Space Mono', monospace",
        fontWeight: 700, fontSize: 20, letterSpacing: '-0.02em',
      }}>
        Elementum
      </span>

      {/* Desktop Links */}
      <div className="desktop-nav" style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
        {NAV_LINKS.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
            {link}
          </a>
        ))}
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: 5, padding: 4,
        }}
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            width: 24, height: 2, background: '#111', display: 'block',
            transition: 'all 0.3s',
            transform: menuOpen
              ? i === 0 ? 'rotate(45deg) translateY(7px)'
              : i === 2 ? 'rotate(-45deg) translateY(-7px)'
              : 'none'
              : 'none',
            opacity: menuOpen && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0,
          background: '#fff', padding: '24px 5%',
          borderBottom: '1px solid #f0f0f0',
          display: 'flex', flexDirection: 'column', gap: 20,
          boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
        }}>
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
              style={{ fontSize: 18 }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
