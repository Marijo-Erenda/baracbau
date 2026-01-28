import { useEffect, useState } from "react";
import { fetchHealth, type HealthResponse } from "../api/health";

import "./home.css";
import backgroundHome from "@/assets/images/background_home.jpg";

export default function Home() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHealth()
      .then(setHealth)
      .catch((e) => setError(e.message));
  }, []);

  return (
    <section
      className="home"
      style={{ backgroundImage: `url(${backgroundHome})` }}
    >
      <div className="home__overlay" />

      <div className="home__content">
        <h1>BARACBAU</h1>
        <p className="home__subtitle">
          Neubau · Komplettsanierung · Modernisierung
        </p>

        <div className="home__health">
          <h2>Backend Health</h2>

          {error && <p className="home__error">{error}</p>}
          {!error && !health && <p>Loading…</p>}

          {health && (
            <pre>{JSON.stringify(health, null, 2)}</pre>
          )}
        </div>
      </div>
    </section>
  );
}
