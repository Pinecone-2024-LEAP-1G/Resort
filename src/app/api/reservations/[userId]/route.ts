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
  const reservationId = (await params).userId;
  try {
    const reservation = await ReservationModel.find({
      userId: reservationId,
    });
    return Response.json({ reservation: reservation });
  } catch (error) {
    return Response.json({ error: error });
  }
};
