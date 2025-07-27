interface GoogleReview {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: ReviewText;
  originalText: ReviewText;
  authorAttribution: AuthorAttribution;
  publishTime: string;
  flagContentUri: string;
  googleMapsUri: string;
}

interface ReviewText {
  text: string;
  languageCode: string;
}

interface AuthorAttribution {
  displayName: string;
  uri: string;
  photoUri: string;
}

export type ReviewType = {
  name: string
  photoUri?: string
  rating: number
  text: string
  date: Date
}

export async function fetchReviews(): Promise<ReviewType[] | null> {
  try {
    const response = await fetch(
    `https://places.googleapis.com/v1/places/${process.env.PLACE_ID}?languageCode=it`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': process.env.API_KEY as string,
          'X-Goog-FieldMask': 'reviews'
        }
      }
    );

    if (!response.ok) {
      const error = await response.json()
      throw new Error('error fetching reviews: ', error)
    }

    const data: { reviews?: GoogleReview[] } = await response.json();
    if (!data.reviews || data.reviews.length === 0) {
      throw new Error('empty reviews field')
    }
    const reviews: ReviewType[] = (data.reviews).map(obj => ({
      name: obj.authorAttribution.displayName,
      photoUri: obj.authorAttribution.photoUri,
      rating: obj.rating,
      text: obj.text.text,
      date: new Date(obj.publishTime)
    }));

    return reviews;

  } catch (err) {
    console.error(err);
    return null;
  }
}