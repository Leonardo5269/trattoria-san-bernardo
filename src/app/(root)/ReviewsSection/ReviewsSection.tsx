'use client';

import React from 'react';
import styles from './ReviewsSection.module.scss';
import { FaStar } from 'react-icons/fa';
import { socials } from '@/features/infos';
import Image from 'next/image';
import Carousel from '@/components/Carousel/Carousel';
import { reviews } from '@/features/reviews';
import ReviewItem from '@/components/Carousel/ReviewItem/Item';
import FadeIn from '@/components/Animation/FadeIn';

export default function ReviewsSection() {
  return (
    <section className={`${styles['reviews-section']} s-px`}>
      <FadeIn direction='up' delay={0.3}>
        <div className={styles['content']}>
          <div className={styles.text}>
            <h3>Cosa dicono di noi</h3>
            <p className="medium mt-regular"><FaStar className={styles.icon} /> 4.8 / 5 su oltre 900 recensioni tra <a href={socials.facebook} className="simple-link-2">Facebook</a> e <a href={socials.googleMaps} className="simple-link-2">Google Maps</a></p>
          </div>
          <div className={styles.logos}>
            <a href="https://www.tripadvisor.it/LocationPhotoDirectLink-g1079927-d2372529-i181379313-Trattoria_San_Bernardo-Morimondo_Province_of_Milan_Lombardy.html" target='_blanc'><Image src='/trip-advisor-logo.png' alt='trip-advisor' width={134} height={56} /></a>
            <a href="https://restaurantguru.it/Trattoria-San-Bernardo-Morimondo" target='_blanc'><Image src='/restaurant-guru-logo.webp' alt='trip-advisor' width={56} height={56} /></a>
          </div>
        </div>
        <Carousel items={
          reviews.map((review, i) => <ReviewItem key={i} item={review} />)}
        />
      </FadeIn>
    </section>
  );
};
