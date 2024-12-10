import { ReviewModel } from "@/lib/models";
import mongoose from "mongoose";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ propertyId: string }> },
) => {
  const propertyId = (await params).propertyId;

  try {
    const property = await ReviewModel.find({ propertyId: propertyId });
    return Response.json({ property: property });
  } catch (error) {
    return Response.json({ message: error });
  }
};
