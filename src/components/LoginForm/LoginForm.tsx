'use client';

import { useState, useTransition } from 'react';
import styles from './LoginForm.module.scss';
import { FiAlertCircle } from "react-icons/fi";
import Loader from '../Loader/Loader';

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
    <div className={styles["login-form"]}>
      <form onSubmit={handleSubmit}>
        <div className={styles["text-content"]}>
          <h3>Login</h3>
          <p className="medium mt-xxs">Accedi al tuo account</p>
        </div>
        <div className={styles["inputs-container"]}>
          <div className={styles["input"]}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
          </div>
          <div className={`${styles["input"]} mt-regular`}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" required />
          </div>
        </div>
        {error && <p id={styles["error"]} className="mt-xxs"><FiAlertCircle />{error}</p>}
        <button type="submit" className="btn-1l mt-xxl" disabled={isPending}>{isPending ? <Loader /> : 'Accedi'}</button>
      </form>
    </div>
  );
}