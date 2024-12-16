import { connectToMongoDB } from "@/lib/db";
import { ReservationModel } from "@/lib/models";

connectToMongoDB();
export const GET = async (
  request: Request,
  { params }: { params: Promise<{ propertyId: string }> },
) => {
  const propertyId = (await params).propertyId;

  try {
    const reviews = await ReservationModel.findOne({
      propertyId: propertyId,
    }).populate("userId");
    return Response.json({ reviews: [reviews] });
  } catch (error) {
    return Response.json({ message: error });
  }
};
