/* ==================================
   BARACBAU – Frontend / home.tsx
   Home page hero section
   ================================== */

import "./home.css";
import backgroundHome from "@/assets/images/background_home.jpg";

export default function Home() {
  return (
    <section
      className="home"
      style={{ backgroundImage: `url(${backgroundHome})` }}
    >
      <div className="home__overlay" />

      <div className="home__content">
        <p className="home__subtitle">
          Neubau · Komplettsanierung · Modernisierung
        </p>
      </div>
    </section>
  );
}
