import { connectToMongoDB } from "@/lib/db";
import { AvailableListModel } from "@/lib/models";
import { NextRequest } from "next/server";

connectToMongoDB();

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
