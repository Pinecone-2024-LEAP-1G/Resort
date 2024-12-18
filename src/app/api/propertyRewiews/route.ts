import { auth } from "@/auth";
import { ReviewModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { rating, comment, propertyId } = await request.json();
  const auth = await auth();
  try {
    const reviews = await ReviewModel.create(rating, comment, propertyId);
    return Response.json({ createReview: reviews });
  } catch (error) {
    return Response.json(error);
  }
};
