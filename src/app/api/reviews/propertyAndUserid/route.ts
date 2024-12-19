import { auth } from "@/auth";
import { connectToMongoDB } from "@/lib/db";
import { ReviewModel } from "@/lib/models";
import { NextRequest } from "next/server";
connectToMongoDB();
export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const propertyId = searchParams.get("propertyId");
  const session = await auth();
  const userid = session?.user.id;
  try {
    const propertyReview = await ReviewModel.find({
      propertyId: propertyId,
      userId: userid,
    });
    return Response.json(propertyReview);
  } catch (error) {
    return Response.json(error);
  }
};
