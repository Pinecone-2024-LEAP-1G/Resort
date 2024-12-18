import { Review, ReviewModel } from "@/lib/models";
import mongoose from "mongoose";
import currency from "currency.js";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ hostId: string }> },
) => {
  const { hostId } = await params;

  if (!hostId) {
    throw new Error("no host id");
  }

  // const userId = new mongoose.Types.ObjectId("67583070e0fc9dc71e70e7ee");

  try {
    const reviews = await ReviewModel.find<Review>({ userId: hostId });

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
