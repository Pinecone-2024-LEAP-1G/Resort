import { auth } from "@/auth";
import { connectToMongoDB } from "@/lib/db";
import { ReservationModel } from "@/lib/models";

connectToMongoDB();

export const GET = async () => {
  const session = await auth();

  if (!session) {
    return Response.json({ message: "Not authenticated" }, { status: 401 });
  }

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
