export const API_BASE = "http://localhost:3000";

export async function apiGet(path: string) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`Erreur API: ${res.status}`);
  return res.json();
}
