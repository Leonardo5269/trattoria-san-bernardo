import LoginForm from '@/components/LoginForm/LoginForm';
import { login } from './loginAction';

export default async function LoginPage() {
  return (
    <section>
      <LoginForm login={login} />
    </section>
  );
}
