import { connectToMongoDB } from "@/lib/db";
import { ReservationModel } from "@/lib/models";
import { NextRequest } from "next/server";

connectToMongoDB();
export const GET = async (
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ userId: string }>;
  },
) => {
  const userId = (await params).userId;
  try {
    const reservation = await ReservationModel.find({
      userId: userId,
    })
      .populate("propertyId")
      .populate("userId");

    return Response.json({ reservation: reservation });
  } catch (error) {
    return Response.json({ error: error });
  }
};
