'use client';

import { useState, useTransition } from 'react';

export default function LoginForm({ login }: { login: (formData: FormData) => Promise<{ error?: string }> }) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const res = await login(formData);
      if (res.error) setError(res.error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" className="mt-l" required />
      <input type="password" name="password" placeholder="Password" className="mt-s" required />
      <button type="submit" className="btn-1l mt-xxl" disabled={isPending}>Accedi</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}