import { auth } from "@/auth";
import { connectToMongoDB } from "@/lib/db";
import { ReservationModel } from "@/lib/models";
import { formatDate } from "date-fns";
import { NextRequest } from "next/server";

connectToMongoDB();

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ propertyId: string }> },
) => {
  const propertyId = (await params).propertyId;
  const session = await auth();
  const userId = session?.user.id;
  try {
    const reservations = await ReservationModel.find({
      propertyId: propertyId,
      userId: userId,
    });
    const today = formatDate(new Date());
    const checkOutDay = reservations.filter(
      (reservation) => formatDate(new Date(reservation.checkOut)) === today,
    );
    console.log(checkOutDay);
    return Response.json({ reservation: checkOutDay });
  } catch (error) {
    return Response.json(error);
  }
};
