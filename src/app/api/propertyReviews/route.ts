import { auth } from "@/auth";
import { ReviewModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { rating, comment, propertyId } = await request.json();
  const session = await auth();
  if (!session) return Response.json({ message: "newternvv" });
  const userId = session.user.id;
  try {
    const reviews = await ReviewModel.create(
      rating,
      comment,
      propertyId,
      userId,
    );
    return Response.json({ createReview: reviews });
  } catch (error) {
    return Response.json(error);
  }
};
