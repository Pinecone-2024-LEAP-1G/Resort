import { ReservationModel } from "lib/models";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const propertyId = searchParams.get("propertyId");
  try {
    const propertyReservations = await ReservationModel.find({
      propertyId: propertyId,
    });
    const inDate = propertyReservations.map((reservation) => {
      return reservation.checkIn;
    });
    const outDate = propertyReservations.map((reservation) => {
      return reservation.checkOut;
    });
    console.log(inDate, outDate);

    // const newReservations = await AvailableListModel.insertMany();
    return Response.json({ propertyReservations: propertyReservations });
  } catch (error) {
    return Response.json({ error: error });
  }
};
