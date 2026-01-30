/* =========================================
   BARACBAU – Frontend / Layout / Footer.tsx
   Footer (Impressum & Datenschutz)
   ========================================= */

import { Link } from "react-router-dom";
import "./footer.css";

/* ================================
   Footer Component
   ================================ */

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        {/* Legal Navigation */}
        <nav className="footer__nav" aria-label="Rechtliches">
          <Link to="/impressum" className="footer__link">
            Impressum
          </Link>
          <Link to="/datenschutz" className="footer__link">
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
}
