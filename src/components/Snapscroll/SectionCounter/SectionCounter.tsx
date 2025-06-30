import React from 'react';
import Circle from '@/components/Button/Circle/Circle';
import styles from './SectionCounter.module.scss';
import { snapscrollElements } from '@/features/snapscrollElements';

export default function SectionCounter({ currentIndex }: { currentIndex: number}) {
  const isActive = (index: number) => currentIndex === index ? styles.active : '';

  return (
    <div className={styles['section-counter']}>
      <ul>
        {snapscrollElements.map((_, i) => (
          <li key={i}>
            <Circle Icon={`${i + 1}`} classname={`${styles.circle} ${isActive(i)}`} />
          </li>
        ))}
      </ul>
    </div>
  )
}
