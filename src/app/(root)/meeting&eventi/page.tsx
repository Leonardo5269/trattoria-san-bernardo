import React from 'react';
import styles from './styles.module.scss';
import { infos } from '@/features/infos';
import { IoIosCall, IoIosMail } from 'react-icons/io';
import Image from 'next/image';

export default function Page() {
  return (
    <main className={`s-mx ${styles.main}`}>
      <div className={styles['content']}>
        <h1>Organizza i tuoi meeting ed eventi da noi</h1>
        <p className='mt-regular large'>La nostra location a disposizione per ambientare i vostri eventi e incontri di lavoro in una dimensione diversa dall’ordinario</p>
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
      <Image width={1080} height={464} className={`${styles['image']} mt-xxxl`} src="/event.jpg" alt="Evento" />
    </main>
  );
};
