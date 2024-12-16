import { UserModel } from "@/lib/models";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ userId: string }> },
) => {
  const userId = (await params).userId;
  try {
    const host = await UserModel.findById({ _id: userId }).populate({
      path: "propertyId",
    });
    return Response.json({ host });
  } catch (error) {
    return Response.json({ message: error });
  }
};
