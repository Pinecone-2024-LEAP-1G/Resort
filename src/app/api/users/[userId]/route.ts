import { UserModel } from "@/lib/models";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ userId: string }> },
) => {
  try {
    const userId = (await params).userId;
    const user = await UserModel.findOne({ _id: userId }).populate(
      "propertyId",
    );

    return Response.json({ user: user });
  } catch (error) {
    console.log(error);

    return Response.json({ message: error });
  }
};
