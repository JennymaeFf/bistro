// app/actions/auth.ts
'use server';

const FLASK_URL = process.env.FLASK_API_URL ?? 'http://localhost:5000';

export async function loginAction(_prevState: unknown, formData: FormData) {
  try {
    const res = await fetch(`${FLASK_URL}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    });
    return res.json();
  } catch {
    return { error: 'Could not connect to server. Please try again.' };
  }
}

export async function registerAction(_prevState: unknown, formData: FormData) {
  try {
    const res = await fetch(`${FLASK_URL}/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    });
    return res.json();
  } catch {
    return { error: 'Could not connect to server. Please try again.' };
  }
}