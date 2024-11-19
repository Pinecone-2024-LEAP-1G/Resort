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
  const { property_id, user_id, rating, comment } = await request.json();

  try {
    const review = await ReviewModel.create({
      property_id,
      user_id,
      rating,
      comment,
    });
    return Response.json({ message: "success", review });
  } catch (error) {
    return Response.json({ message: error });
  }
};
