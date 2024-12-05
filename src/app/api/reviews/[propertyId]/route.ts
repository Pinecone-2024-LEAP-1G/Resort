import { ReviewModel } from "@/lib/models";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ propertyId: string }> },
) => {
  const propertyId = (await params).propertyId;

  try {
    const review = await ReviewModel.find({
      propertyId: propertyId,
    }).populate("userId");

    console.log(review.length);

    return Response.json({ review: review });
  } catch (error) {
    return Response.json({ message: error });
  }
};
