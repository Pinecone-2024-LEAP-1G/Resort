import { ReviewModel } from "@/lib/models";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ hostId: string }> },
) => {
  const { hostId } = await params;

  console.log({ hostId });

  if (!hostId) {
    throw new Error("no host id");
  }

  try {
    const reviews = await ReviewModel.find({ userId: hostId }).populate(
      "userId",
    );

    const reviewCount = reviews.length;

    return Response.json({ reviews, reviewCount });
  } catch (error) {
    return Response.json({ message: error });
  }
};
