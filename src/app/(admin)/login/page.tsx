'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import styles from './page.module.scss';

export default function LoginPage() {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else router.push('/dashboard');
  };

  return (
    <section className={`s-px ${styles.login}`}>
      <h2 className="">Accedi al tuo account</h2>
      <form onSubmit={handleLogin} className={`mt-l ${styles.form}`}>
        <input
          type="email" placeholder="Email"
          value={email} onChange={e => setEmail(e.target.value)}
          className="mt-l" required
        />
        <input
          type="password" placeholder="Password"
          value={password} onChange={e => setPassword(e.target.value)}
          className="mt-s" required
        />
        <button type="submit" className="btn-1l mt-xxl">Accedi</button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </section>
  );
}
