import { AvailableListModel } from "lib/models";
import { NextRequest } from "next/server";

export const GET = async (request:NextRequest) => {
  const searchParams=request.nextUrl.searchParams
  const reservationId=searchParams.get("reservationId")
  try {
    const AvailableLists = await AvailableListModel.find({propertyId:reservationId});
    return Response.json({ AvailableLists });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const { propertyId, reservationId, checkInDate, checkOutDate } =
    await request.json();

  try {
    const availableLists = await AvailableListModel.find({propertyId:propertyId});
    const checkdate=availableLists.map((list)=>{

    })
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
