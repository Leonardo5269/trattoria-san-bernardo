import Hero from '@/ui/Hero/Hero';
import Link from 'next/link';
import React from 'react';
import Snapscroll from '@/components/Snapscroll/Snapscroll';
import ReviewsSection from './ReviewsSection/ReviewsSection';
import Chiusura from '@/ui/Chiusura/Chiusura';
import FadeIn from '@/components/Animation/FadeIn';

export default function page() {
  return (
    <>
      <Hero>
        <h1 className='dark'>Mangia Bene e Rilassati</h1>
        <p className="large mt-regular">Dimentica il solito pranzo: qui ogni piatto è un viaggio tra gusto, tradizione e pura emozione</p>
        <div className="mt-xxl">
          <Link href='/prenota' className='btn-1l'>Prenota ora</Link>
          <Link href='https://kjobmsyqzvhwxbfnjgkz.supabase.co/storage/v1/object/public/menu//menu.pdf' className='btn-2l ml-xxl' rel='noopener' target='_blank'>Menù</Link>
        </div>
      </Hero>
      <FadeIn delay={0.4}>
        <Snapscroll />
      </FadeIn>
      <ReviewsSection />
      <Chiusura />
    </>
  );
}