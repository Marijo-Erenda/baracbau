import { useEffect, useState } from "react";
import { fetchHealth, type HealthResponse } from "../api/health";

export default function Home() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHealth()
      .then(setHealth)
      .catch((e) => setError(e.message));
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>BARACBAU</h1>
      <h2>Backend Health</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {!error && !health && <p>Loading…</p>}

      {health && (
        <pre style={{ background: "#f4f4f4", padding: 12 }}>
          {JSON.stringify(health, null, 2)}
        </pre>
      )}
    </div>
  );
}
