/* =========================================
   BARACBAU – Frontend / Layout / Footer.tsx
   Footer (Impressum & Datenschutz)
   ========================================= */

import "./footer.css";

/* ================================
   Footer Component
   ================================ */

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Copyright */}
        <span className="footer__copyright">
          © {new Date().getFullYear()} BARACBAU
        </span>

        {/* Legal Navigation */}
        <nav className="footer__nav" aria-label="Rechtliches">
          <a href="/impressum" className="footer__link">
            Impressum
          </a>
          <a href="/datenschutz" className="footer__link">
            Datenschutz
          </a>
        </nav>
      </div>
    </footer>
  );
}
