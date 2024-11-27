import { AvailableListModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const propertyId = searchParams.get("propertyId");
  try {
    const AvailableLists = await AvailableListModel.find({
      propertyId: propertyId,
    });
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
