// import React from 'react';
// import styles from './ReviewsSection.module.scss';
// import { FaStar } from 'react-icons/fa';
// import { socials } from '@/features/infos';
// import Image from 'next/image';
// import Carousel from '@/components/Carousel/Carousel';
// import { reviews } from '@/features/reviews';
// import ReviewItem from '@/components/Carousel/ReviewItem/Item';
// import FadeIn from '@/components/Animation/FadeIn';

// export default function ReviewsSection() {
//   return (
//     <section className={`${styles['reviews-section']} s-px`}>
//       <FadeIn direction='up' delay={0.3}>
//         <div className={styles['content']}>
//           <div className={styles.text}>
//             <h3>Cosa dicono di noi</h3>
//             <p className="medium mt-regular"><FaStar className={styles.icon} /> 4.8 / 5 su oltre 900 recensioni tra <a href={socials.facebook} className="simple-link-2">Facebook</a> e <a href={socials.googleMaps} className="simple-link-2">Google Maps</a></p>
//           </div>
//           <div className={styles.logos}>
//             <a href="https://www.tripadvisor.it/LocationPhotoDirectLink-g1079927-d2372529-i181379313-Trattoria_San_Bernardo-Morimondo_Province_of_Milan_Lombardy.html" target='_blank'><Image src='/trip-advisor-logo.png' alt='trip-advisor' width={134} height={56} /></a>
//             <a href="https://restaurantguru.it/Trattoria-San-Bernardo-Morimondo" target='_blank'><Image src='/restaurant-guru-logo.webp' alt='trip-advisor' width={56} height={56} /></a>
//           </div>
//         </div>
//         <Carousel items={
//           reviews.map((review, i) => <ReviewItem key={i} item={review} />)}
//         />
//       </FadeIn>
//     </section>
//   );
// };

import React from 'react';
import styles from './ReviewsSection.module.scss';
import { FaStar } from 'react-icons/fa';
import { socials } from '@/features/infos';
import Image from 'next/image';
import Carousel from '@/components/Carousel/Carousel';
import ReviewItem from '@/components/Carousel/ReviewItem/Item';
import FadeIn from '@/components/Animation/FadeIn';
import { ReviewType } from '@/utils/fetchReviews';

export default async function ReviewsSection() {
  let dynamicReviews: ReviewType[] = [];
  let avgRating = 0;

  try {
    const response = await fetch('https://www.trattoriasanbernardo.it/api/reviews', { next: { revalidate: 86400 } });

    if (!response.ok) {
      throw new Error(`Failed to fetch reviews: ${response.status}`);
    }

    dynamicReviews = await response.json();

    const totalRate = dynamicReviews.reduce((acc, { rating }) => acc + rating, 0);
    avgRating = Math.round((totalRate / dynamicReviews.length) * 10) / 10;

  } catch (error) {
    console.error('Error fetching reviews:', error);
  }

  return (
    <section className={`${styles['reviews-section']} s-px`}>
      <FadeIn direction='up' delay={0.3}>
        <div className={styles['content']}>
          <div className={styles.text}>
            <h3>Cosa dicono di noi</h3>
            <p className="medium mt-regular"><FaStar className={styles.icon} /> {avgRating || 'N/A'} / 5 su oltre 900 recensioni tra <a href={socials.facebook} className="simple-link-2">Facebook</a> e <a href={socials.googleMaps} className="simple-link-2">Google Maps</a></p>
          </div>
          <div className={styles.logos}>
            <a href="https://www.tripadvisor.it/LocationPhotoDirectLink-g1079927-d2372529-i181379313-Trattoria_San_Bernardo-Morimondo_Province_of_Milan_Lombardy.html" target='_blank'><Image src='/trip-advisor-logo.png' alt='trip-advisor' width={134} height={56} /></a>
            <a href="https://restaurantguru.it/Trattoria-San-Bernardo-Morimondo" target='_blank'><Image src='/restaurant-guru-logo.webp' alt='trip-advisor' width={56} height={56} /></a>
          </div>
        </div>

        {
          dynamicReviews.length > 0 
            ? (<Carousel items={dynamicReviews.map((review, i) => <ReviewItem key={i} item={review} />)} />)
            : <p>Recensioni non disponibili</p>
        }
      </FadeIn>
    </section>
  );
}