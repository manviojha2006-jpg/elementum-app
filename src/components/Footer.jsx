const FOOTER_LINKS = {
  Company: ['Home', 'Studio', 'Service', 'Blog'],
  'Terms & Policies': ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  'Follow Us': ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
};

const CONTACT_INFO = {
  address: '1498w Fluton ste, STE 2D Chicago, IL 63867.',
  phone: '(123) 456789000',
  email: 'info@elementum.com',
};

export default function Footer() {
  return (
    <footer
      id="faqs"
      style={{ background: '#C8F0D0', padding: '0 5% 40px', borderTop: '1px solid rgba(0,0,0,0.08)' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Links grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 40,
            paddingTop: 40,
            paddingBottom: 32,
          }}
        >
          {/* Company / Terms / Follow Us */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ fontWeight: 800, fontSize: 16, marginBottom: 16 }}>{heading}</h4>
              {links.map(link => (
                <a
                  key={link}
                  href="#"
                  style={{
                    display: 'block',
                    color: '#444',
                    textDecoration: 'none',
                    fontSize: 14,
                    marginBottom: 10,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = '#111'}
                  onMouseLeave={e => e.target.style.color = '#444'}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}

          {/* Contact info */}
          <div>
            <h4 style={{ fontWeight: 800, fontSize: 16, marginBottom: 16 }}>Terms & Policies</h4>
            <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, marginBottom: 8 }}>
              {CONTACT_INFO.address}
            </p>
            <p style={{ color: '#444', fontSize: 14, marginBottom: 8 }}>{CONTACT_INFO.phone}</p>
            <p style={{ color: '#444', fontSize: 14 }}>{CONTACT_INFO.email}</p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{
          borderTop: '1px solid rgba(0,0,0,0.1)',
          paddingTop: 20,
          textAlign: 'center',
          color: '#666',
          fontSize: 13,
        }}>
          ©2023 Elementum. All rights reserved
        </div>
      </div>
    </footer>
  );
}
