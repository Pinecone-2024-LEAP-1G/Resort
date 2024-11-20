import { ReviewModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const reviews = await ReviewModel.find();

    return Response.json({ reviews });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const { propertyId, userId, rating, comment } = await request.json();

  try {
    const review = await ReviewModel.create({
      propertyId,
      userId,
      rating,
      comment,
    });
    return Response.json({ message: "success", review });
  } catch (error) {
    return Response.json({ message: error });
  }
};
