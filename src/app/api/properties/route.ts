import { PropertyModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const properties = await PropertyModel.find();

    return Response.json({ properties });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const { property_id, user_id, rating, comment } = await request.json();

  try {
    const review = await PropertyModel.create({
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
