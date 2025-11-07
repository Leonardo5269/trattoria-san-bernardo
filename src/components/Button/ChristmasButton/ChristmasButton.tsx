import Link from 'next/link';
import React from 'react';
import styles from './ChristmasButton.module.scss';

export default function ChristmasButton({ classname }: Readonly<{ classname?: string }>) {
  return (
    <Link href={'/menu-natalizio.pdf'} className={`${styles['button']} ${classname}`} rel='noopener' target='_blank'>
      Menù natalizio
    </Link>
  );
};
