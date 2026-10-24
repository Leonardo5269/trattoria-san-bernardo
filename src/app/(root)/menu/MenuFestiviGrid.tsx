'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/Modal/Modal';
import FadeIn from '@/components/Animation/FadeIn';
import styles from './page.module.scss';

type FestiveMenu = {
  src: string;
  alt: string;
};

// Ordine per prezzo crescente: Auguri 45€, Stella 60€, Fiocco 65€, Ghirlanda 65€
const festiveMenus: FestiveMenu[] = [
  { src: '/menu-festivo/menu-auguri.jpeg', alt: 'Menù Auguri – 45€' },
  { src: '/menu-festivo/menu-stella.jpeg', alt: 'Menù Stella – 60€' },
  { src: '/menu-festivo/menu-fiocco.jpeg', alt: 'Menù Fiocco – 65€' },
  { src: '/menu-festivo/menu-ghirlanda.jpeg', alt: 'Menù Ghirlanda – 65€' },
];

export default function MenuFestiviGrid() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<FestiveMenu | null>(null);

  const openMenu = (menu: FestiveMenu) => {
    setSelected(menu);
    modalRef.current?.showModal();
  };

  return (
    <>
      <div className={styles.grid}>
        {festiveMenus.map((menu, i) => (
          <FadeIn key={menu.src} delay={0.15 + i * 0.1}>
            <button
              type="button"
              className={styles.card}
              onClick={() => openMenu(menu)}
              aria-label={`Ingrandisci ${menu.alt}`}
            >
              <Image
                src={menu.src}
                alt={menu.alt}
                width={600}
                height={750}
                loading="lazy"
                sizes="(max-width: 521px) 100vw, (max-width: 1080px) 50vw, 45vw"
              />
            </button>
          </FadeIn>
        ))}
      </div>

      <Modal ref={modalRef} darkBackground>
        {selected && <img src={selected.src} alt={selected.alt} />}
      </Modal>
    </>
  );
}
