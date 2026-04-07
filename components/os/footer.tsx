'use client'

export default function OSFooter() {
  return (
    <footer className="os-footer" style={{
      padding: '40px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: 1080,
      margin: '0 auto',
      borderTop: '1px solid var(--bd)',
    }}>
      <span className="nova-wordmark" style={{ fontSize: 16, color: 'var(--tx3)' }}>NOVA</span>
      <ul style={{ display: 'flex', gap: 20, listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#" style={{ color: 'var(--tx3)', textDecoration: 'none', fontSize: 13 }}>Privacy</a></li>
        <li><a href="#" style={{ color: 'var(--tx3)', textDecoration: 'none', fontSize: 13 }}>Terms</a></li>
        <li><a href="#" style={{ color: 'var(--tx3)', textDecoration: 'none', fontSize: 13 }}>Contact</a></li>
      </ul>

      <style jsx>{`
        @media (max-width: 900px) {
          footer { flex-direction: column !important; gap: 12px !important; text-align: center !important; }
        }
      `}</style>
    </footer>
  )
}
