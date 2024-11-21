import { AvailableListModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const AvailableLists = await AvailableListModel.find();

    return Response.json({ AvailableLists });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const { propertyId, reservationId, checkInDate, checkOutDate } =
    await request.json();

  try {
    const availableList = await AvailableListModel.create({
      propertyId,
      reservationId,
      checkInDate,
      checkOutDate,
    });
    return Response.json({ message: "success", availableList });
  } catch (error) {
    return Response.json({ message: error });
  }
};
