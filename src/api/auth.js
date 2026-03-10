const API = '/api';

async function parseResponse(res) {
  const text = await res.text();
  if (!text) {
    if (res.status === 404) throw new Error('API not found. Is the backend server running on port 5000?');
    throw new Error('Server returned empty response. Check if backend is running.');
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new Error('Invalid response from server. Check backend logs.');
  }
}

export async function register(data) {
  const res = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await parseResponse(res);
  if (!res.ok) throw new Error(json.error || 'Registration failed');
  return json;
}

export async function login(data) {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await parseResponse(res);
  if (!res.ok) throw new Error(json.error || 'Login failed');
  return json;
}
