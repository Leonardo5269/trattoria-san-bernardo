import { createClient } from '@/utils/supabase/server';
import styles from './page.module.scss';
import { UploadMenu } from '@/components/UploadMenu/UploadMenu';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect('/login')
  }

  return (
    <section className={`s-px ${styles.admin}`}>
      <h2>Pannello Admin</h2>
      <UploadMenu />
    </section>
  );
}
