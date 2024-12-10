import { connectToMongoDB } from "@/lib/db";
import { PropertyModel } from "@/lib/models";
import { NextRequest } from "next/server";

connectToMongoDB();
export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const propertyId = searchParams.get("id");
  try {
    const property = await PropertyModel.findById({ _id: propertyId }).populate(
      { path: "reviewId", populate: { path: "userId" } },
    );
    return Response.json({ property: property });
  } catch (error) {
    return Response.json({ message: error });
  }
};
