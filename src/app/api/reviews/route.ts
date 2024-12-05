import { PropertyModel, ReviewModel } from "../../../lib/models";
import { NextRequest } from "next/server";
import { connectToMongoDB } from "@/lib/db";

export const GET = async (request: NextRequest) => {
  const { propertyId } = await request.json();

  try {
    const reviews = await ReviewModel.find(propertyId);
    return Response.json({ reviews });
  } catch (error) {
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

    const { _id } = review;
    const updateProperty = await PropertyModel.findByIdAndUpdate(
      {
        _id: propertyId,
      },
      {
        $push: { reviewId: _id },
      },
      {
        new: true,
      },
    );
    return Response.json({ review, updateProperty });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const DELETE = async (request: NextRequest) => {
  const { _id } = await request.json();

  try {
    const review = await ReviewModel.findByIdAndDelete({
      _id,
    });
    return Response.json({ message: "success", review });
  } catch (error) {
    return Response.json({ message: error });
  }
};
