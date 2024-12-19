import { Review, ReviewModel } from "@/lib/models";
import currency from "currency.js";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ userId: string }> },
) => {
  const { userId } = await params;

  if (!userId) {
    throw new Error("no host id");
  }

  try {
    const reviews = await ReviewModel.find<Review>({ userId: userId });

    const totalRating = reviews?.reduce((acc, curr) => {
      return currency(acc).add(curr.rating).value;
    }, 0);

    const rating = currency(totalRating).divide(reviews.length).value;

    return Response.json({
      reviews,
      rating: Math.floor(rating),
      reviewCount: reviews.length,
    });
  } catch (error) {
    return Response.json({ message: error });
  }
};
