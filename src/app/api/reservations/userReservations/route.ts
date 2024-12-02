import { connectToMongoDB } from "@/lib/db";
import { ReservationModel } from "@/lib/models";
import { NextRequest } from "next/server";

connectToMongoDB();
export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");

  try {
    const userreservation = await ReservationModel.find({ userId: userId })
      .populate("propertyId")
      .populate("userId");
    return Response.json({ userReservations: userreservation });
  } catch (error) {
    return Response.json({ error: error });
  }
};
