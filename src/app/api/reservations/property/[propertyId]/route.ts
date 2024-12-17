import { connectToMongoDB } from "@/lib/db";
import { ReservationModel } from "@/lib/models";
import { NextRequest } from "next/server";

connectToMongoDB();
export const GET = async (
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ propertyId: string }>;
  },
) => {
  const propertyId = (await params).propertyId;
  try {
    const reservation = await ReservationModel.findOne({
      propertyId: propertyId,
    }).populate("userId");

    return Response.json({ reservations: [reservation] });
  } catch (error) {
    return Response.json({ error: error });
  }
};
