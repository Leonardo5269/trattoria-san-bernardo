import styles from './page.module.scss';
import LoginForm from '@/components/LoginForm/LoginForm';
import { login } from './loginAction';

export default async function LoginPage() {
  return (
    <section className={`s-px ${styles.login}`}>
      <h2 className="">Accedi al tuo account</h2>
      <LoginForm login={login} />
    </section>
  );
}
