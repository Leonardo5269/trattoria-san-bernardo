'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/Modal/Modal';
import FadeIn from '@/components/Animation/FadeIn';
import styles from './page.module.scss';

export type FestiveMenu = {
  src: string;
  alt: string;
  note?: string;
};

// Menù di Natale a pranzo del 25 dicembre
export const menuPranzoNatale: FestiveMenu[] = [
  {
    src: '/menu-festivo/menu-natalizio.jpeg',
    alt: 'Gran Menù di Natale – 90€',
    note: 'Solo per il 25 dicembre a pranzo',
  },
];

// Proposte per cene aziendali, in famiglia o tra amici, ordine per prezzo crescente
export const menuCeneNatalizie: FestiveMenu[] = [
  { src: '/menu-festivo/menu-auguri.jpeg', alt: 'Menù Auguri – 45€' },
  { src: '/menu-festivo/menu-stella.jpeg', alt: 'Menù Stella – 60€' },
  { src: '/menu-festivo/menu-fiocco.jpeg', alt: 'Menù Fiocco – 65€' },
  { src: '/menu-festivo/menu-ghirlanda.jpeg', alt: 'Menù Ghirlanda – 65€' },
];

type Props = {
  menus: FestiveMenu[];
  single?: boolean;
};

export default function MenuFestiviGrid({ menus, single = false }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<FestiveMenu | null>(null);

  const openMenu = (menu: FestiveMenu) => {
    setSelected(menu);
    modalRef.current?.showModal();
  };

  return (
    <>
      <div className={`${styles.grid} ${single ? styles.gridSingle : ''}`}>
        {menus.map((menu, i) => (
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
            {menu.note && <p className={styles.note}>{menu.note}</p>}
          </FadeIn>
        ))}
      </div>

      <Modal ref={modalRef} darkBackground>
        {selected && <img src={selected.src} alt={selected.alt} />}
      </Modal>
    </>
  );
}
