import { ReviewModel } from "@/lib/models";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ propertyId: string }> },
) => {
  const propertyId = (await params).propertyId;

  try {
    const review = await ReviewModel.findOne({
      propertyId: propertyId,
    }).populate("userId");
    return Response.json({ review: review });
  } catch (error) {
    return Response.json({ message: error });
  }
};
