import { connectToMongoDB } from "@/lib/db";
import { ReservationModel } from "@/lib/models";
import { NextRequest } from "next/server";

connectToMongoDB();
export const GET = async (
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ reservationId: string }>;
  },
) => {
  const reservationId = (await params).reservationId;
  try {
    const reservation = await ReservationModel.find({
      _id: reservationId,
    })
      .populate("userId")
      .populate("propertyId");
    return Response.json({ reservation: reservation });
  } catch (error) {
    return Response.json({ error: error });
  }
};
