import mongoose from "mongoose";
import { ReviewModel } from "../../../lib/models";
import { NextRequest } from "next/server";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();
export const GET = async () => {
  try {
    const reviews = await ReviewModel.find();

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
    return Response.json({ review });
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
    return Response.json({ message: "success" });
  } catch (error) {
    return Response.json({ message: error });
  }
};
