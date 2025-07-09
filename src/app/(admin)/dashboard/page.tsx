import styles from './page.module.scss';
import { UploadMenu } from '@/components/UploadMenu/UploadMenu';

export default async function AdminPage() {
  return (
    <section className={`s-px ${styles.admin}`}>
      <h2>Pannello Admin</h2>
      <UploadMenu />
    </section>
  );
}
