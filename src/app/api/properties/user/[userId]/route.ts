import { connectToMongoDB } from "@/lib/db";
import { PropertyModel } from "@/lib/models";

connectToMongoDB();
export const GET = async (
  request: Request,
  { params }: { params: Promise<{ userId: string }> },
) => {
  const userId = (await params).userId;

  try {
    const property = await PropertyModel.findOne({
      userId: userId,
    }).populate({
      path: "reviewId",
    });
    return Response.json({ property: property });
  } catch (error) {
    return Response.json({ message: error });
  }
};
