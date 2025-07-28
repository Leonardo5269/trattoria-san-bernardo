import React from 'react';
import styles from './Items.module.scss';
import { ReviewType } from '@/lib/fetchReviews';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Image from 'next/image';

const MAX_CHAR = 160;

export default function Item({ item }: { item: ReviewType }) {
  const sliceText = (text: string): string => (
    text.length < MAX_CHAR ? text : `${text.slice(0, MAX_CHAR)}...`
  )
  return (
    <div className={styles.item}>
      <div className={styles.profile}>
        <Image width={56} height={56} alt='profile-picture' src={item.photoUri ? item.photoUri : '/google-maps-user.jpg'} />
        <div className={styles.info}>
          <h5>{item.name}</h5>
          <div className={styles.stars}>
            {Array.from({ length: item.rating }).map((_, i) => <FaStar key={i} />)}
            {Array.from({ length: 5 - item.rating }).map((_, i) => <FaRegStar key={i} />)}
          </div>
        </div>
      </div>
      <p className="mt-xs">{sliceText(item.text)}</p>
    </div>
  );
};
