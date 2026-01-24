export type HealthResponse = {
  status: string;
  service: string;
};

export async function fetchHealth(): Promise<HealthResponse> {
  const res = await fetch("/api/health");

  if (!res.ok) {
    throw new Error(`Health request failed: ${res.status}`);
  }

  return res.json();
}
