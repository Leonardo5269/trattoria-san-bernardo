import React from 'react';
import type { Metadata } from 'next';
import styles from './page.module.scss';
import { infos } from '@/features/infos';
import { IoIosCall } from 'react-icons/io';
import MenuFestiviGrid, { menuCeneNatalizie, menuPranzoNatale } from './MenuFestiviGrid';

export const metadata: Metadata = {
  title: 'Menù | Trattoria San Bernardo',
  description:
    'Scopri il menù alla carta della Trattoria San Bernardo, il Menù di Natale del 25 dicembre a pranzo e le nostre proposte per cene aziendali, in famiglia o tra amici: Auguri, Stella, Fiocco e Ghirlanda.',
};

export default function Page() {
  return (
    <>
      <main className={`s-mx ${styles.main}`}>
        {/* Intro */}
        <div className={styles.content}>
          <h1>I nostri menù</h1>
          <p className="mt-regular large">
            Dalla nostra cucina di tutti i giorni ai menù speciali delle feste:
            scegli il gusto che fa per te.
          </p>
        </div>

        {/* Menù alla carta */}
        <section className={styles.section}>
          <div className={styles.menuCard}>
            <h3>Menù alla carta</h3>
            <p className="mt-regular medium">
              La nostra cucina di sempre, tra tradizione e stagionalità.
            </p>
            <a
              href="/menu.pdf"
              className={`btn-1l ${styles.menuCardButton}`}
              rel="noopener"
              target="_blank"
            >
              Sfoglia il menù (PDF)
            </a>
          </div>
        </section>

        {/* Menù di Natale 25 dicembre a pranzo */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Menù di Natale</h2>
            <p className="mt-regular large">
              Il nostro menù speciale per il pranzo di Natale, disponibile solo
              il 25 dicembre. Tocca il menù per leggerlo per intero.
            </p>
          </div>
          <MenuFestiviGrid menus={menuPranzoNatale} single />
        </section>

        {/* Cene natalizie: aziendali, famiglia e amici */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Cene di Natale</h2>
            <p className="mt-regular large">
              Proposte per cene aziendali, in famiglia o tra amici nel periodo
              natalizio. Tocca un menù per leggerlo per intero.
            </p>
          </div>
          <MenuFestiviGrid menus={menuCeneNatalizie} />
        </section>
      </main>

      {/* Chiusura / CTA */}
      <section className={`${styles.chiusura} s-px`}>
        <div className={styles.textContent}>
          <h2>Prenota il tuo tavolo</h2>
          <p className="large mt-xl">Vieni a vivere i sapori della nostra cucina</p>
          <a href={`tel:+39${infos.phone.replace(/\s/g, '')}`} className="btn-1li mt-xxl">
            <IoIosCall />
            Prenota Ora
          </a>
        </div>
      </section>
    </>
  );
}
