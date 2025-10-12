import React from 'react';
import styles from './styles.module.scss';
import { infos } from '@/features/infos';
import { IoIosCall, IoIosMail } from 'react-icons/io';

export default function Page() {
  return (
    <main className={`s-mx ${styles.main}`}>
      <div className={styles['content']}>
        <h1>Organizza il tuo evento da noi</h1>
        <p className='mt-regular large'>Il nostro locale è il luogo ideale per pranzi aziendali, riunioni o occasioni speciali</p>
        <div className={`mt-xxl ${styles['buttons']}`}>
           <a href={`tel:${infos.phone}`} className='btn-1i'>
            <IoIosCall />
            <span>Chiama ora</span>
           </a>
           <a href={`mailto:${infos.email}`} className='btn-2i'>
            <IoIosMail />
            <span>Scrivici</span>
           </a>
        </div>
      </div>
      <img className={`${styles['image']} mt-xxxl`} src="/location/esterno-6_21-9.jpg" alt="Esterno" />
    </main>
  );
};
