import { AvailableListModel, ReservationModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const DELETE = async (
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ reservationId: string }>;
  },
) => {
  try {
    const reservationId = (await params).reservationId;
    console.log(reservationId);
    await ReservationModel.findByIdAndDelete({
      _id: reservationId,
    });

    await AvailableListModel.findOneAndDelete({ reservationId: reservationId });

    return Response.json({ message: "ok" });
  } catch (error) {
    console.log(error);

    return Response.json({ messag: error });
  }
};
