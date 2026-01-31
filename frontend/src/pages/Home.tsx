/* ==================================
   BARACBAU – Frontend / Pages
   Home.tsx
   Home page hero section
   ================================== */

import { Link } from "react-router-dom";

import "./home.css";
import backgroundHome from "@/assets/images/HB_Home.jpg";

/* ================================
   Hero navigation configuration
   ================================ */

const HERO_LINKS = [
  {
    label: "Neubau",
    path: "/leistungen/neubau",
  },
  {
    label: "Komplettsanierung",
    path: "/leistungen/komplettsanierung",
  },
  {
    label: "Modernisierung",
    path: "/leistungen/modernisierung",
  },
];

/* ================================
   Component
   ================================ */

export default function Home() {
  return (
    <section
      className="home"
      style={{ backgroundImage: `url(${backgroundHome})` }}
    >
      {/* Overlay */}
      <div className="home__overlay" />

      {/* Hero content */}
      <div className="home__content">
        <p className="home__subtitle">
          {HERO_LINKS.map((item, index) => (
            <span key={item.path}>
              <Link
                to={item.path}
                className="home__hero-link"
              >
                {item.label}
              </Link>

              {index < HERO_LINKS.length - 1 && (
                <span className="home__separator"> · </span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
