import { ReservationModel } from "lib/models";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ reservationId: string }> }
) => {
  const reservationId = (await params).reservationId;

  try {
    const reservation = await ReservationModel.find({
      _id: reservationId,
    })
      .populate("propertyId")
      .populate("userId");

    return Response.json({ reservation: reservation });
  } catch (error) {
    return Response.json({ error: error });
  }
};
