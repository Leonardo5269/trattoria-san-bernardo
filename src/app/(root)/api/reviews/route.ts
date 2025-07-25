import getReviews from "@/lib/cacheReviews";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    const reviews = await getReviews();
    if (!reviews || reviews.length === 0) {
      throw new Error('error getting reviews')
    }
    return NextResponse.json({ reviews: reviews }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" }, 
      { status: 500 }
    )
  }
}