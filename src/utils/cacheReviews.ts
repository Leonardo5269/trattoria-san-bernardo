import redis from './connectCache';
import { fetchReviews, ReviewType } from './fetchReviews';

const SET_NAME: string = 'reviews:trattoriaSanBernardo';

async function addReviews(): Promise<boolean> {
  try {
    const reviews = await fetchReviews()
    if (!reviews || reviews.length === 0) {
      throw new Error('empty reviews')
    }
    await redis.set(SET_NAME, JSON.stringify(reviews), {
      EX: 60 * 60 * 24,
    });
    return true;
  } catch (err) {
    console.error('Error caching reviews:', err);
    return false;
  }
}

export default async function getReviews(): Promise<ReviewType[] | null> {
  try {
    const cached = await redis.get(SET_NAME);
    if (cached) {
      return JSON.parse(cached);
    }
    const updated = await addReviews();
    if (updated) {
      const fresh = await redis.get(SET_NAME);
      return fresh ? JSON.parse(fresh) : null;
    }
    throw new Error('fetching reviews from API');
  } catch (err) {
    console.error('Error getting cached reviews:', err);
    return null;
  }
}