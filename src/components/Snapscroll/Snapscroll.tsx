"use client";

import React, { useRef, useEffect, useState } from 'react';
import styles from './Snapscroll.module.scss';
import { snapscrollElements } from '@/features/snapscrollElements';
import Image from 'next/image';
import SectionCounter from './SectionCounter/SectionCounter';
import { useRouter } from 'next/dist/client/components/navigation';

export default function Snapscroll() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            setCurrentIndex(idx);
          }
        });
      },
      {
        root: null,
      }
    );

    const refs = sectionRefs.current;

    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className={styles['snapscroll-container']}>
      <SectionCounter currentIndex={currentIndex}/>
      <div className={styles.snapscroll}>
        {snapscrollElements.map((el, index) => (
            <div
              className={styles.section}
              key={index}
            >
              <div className={styles['imgs-grid']} onClick={() => {router.push("/galleria")}}>
                <div className={styles['img-cell']}>
                  <Image
                    src={el.imgs[0]}
                    alt="image-grid"
                    fill
                    className={styles.image}
                    sizes="(max-width: 600px) 100vw, 262px"
                  />
                </div>
                <div className={styles['img-cell']}>
                  <Image
                    src={el.imgs[1]}
                    alt="image-grid"
                    fill
                    className={styles.image}
                    sizes="(max-width: 600px) 100vw, 205px"
                  />
                </div>
                <div className={styles['img-cell']}>
                  <Image
                    src={el.imgs[2]}
                    alt="image-grid"
                    fill
                    className={styles.image}
                    sizes="(max-width: 600px) 100vw, 205px"
                  />
                </div>
              </div>
              <div className={styles['text-content']}>
                <h3
                  ref={el => {(sectionRefs.current[index] = el)}}
                  data-index={index}
                >
                    {el.title}
                </h3>
                <p className='medium mt-l'>{el.description}</p>
                <button className="btn-1l mt-xxl" onClick={() => {router.push("/galleria")}}>Vai alla galleria</button>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};
