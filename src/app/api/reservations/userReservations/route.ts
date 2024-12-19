import { auth } from "@/auth";
import { connectToMongoDB } from "@/lib/db";
import { ReservationModel } from "@/lib/models";
import { NextRequest } from "next/server";

connectToMongoDB();

export const GET = async (request: NextRequest) => {
  const session = await auth();

  if (!session) {
    return Response.json({ message: "Not authenticated" }, { status: 401 });
  }

  const searchParams = request.nextUrl.searchParams;

  try {
    const userreservation = await ReservationModel.find({
      userId: session?.user.id,
    })
      .populate("propertyId")
      .populate("userId");
    return Response.json({ userReservations: userreservation });
  } catch (error) {
    return Response.json({ error: error });
  }
};
