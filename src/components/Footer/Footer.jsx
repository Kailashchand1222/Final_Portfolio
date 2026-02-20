import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-inner">
        <div className="footer-logo">
          <span className="fl-k">K</span>ailash<span className="fl-dot">.</span>
        </div>
        <p className="footer-copy">
          Built   by <span className="fc-name">Kailash Chand</span> © {2026}
        </p>
        <button
          className="to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑ Top
        </button>
      </div>
    </footer>
  )
}
