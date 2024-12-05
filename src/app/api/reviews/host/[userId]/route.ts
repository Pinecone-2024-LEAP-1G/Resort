import { ReviewModel } from "@/lib/models";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ hostId: string }> },
) => {
  const hostId = (await params).hostId;

  try {
    const review = await ReviewModel.find({
      hostId: hostId,
    }).populate("userId");

    console.log(review.length);

    return Response.json({ review: review });
  } catch (error) {
    return Response.json({ message: error });
  }
};
