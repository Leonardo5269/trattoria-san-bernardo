import LoginForm from '@/components/LoginForm/LoginForm';
import { login } from './loginAction';

export default async function LoginPage() {
  return (
    <section className={`s-px`}>
      <h2>Accedi al tuo account</h2>
      <LoginForm login={login} />
    </section>
  );
}
