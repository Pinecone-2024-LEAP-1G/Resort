import { ReviewModel } from "@/lib/models";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ hostId: string }> },
) => {
  const { userId } = (await params).hostId;

  try {
    const reviews = await ReviewModel.find({ hostId: userId }).populate(
      "userId",
    );

    const reviewCount = reviews.length;

    return Response.json({ reviews, reviewCount });
  } catch (error) {
    return Response.json({ message: error });
  }
};
