import { AvailableListModel, PropertyModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("address");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const guests = searchParams.get("guests");
  const guestNumber = Number(guests);
  try {
    const checkindate = new Date(from);
    const checkoutdate = new Date(to);
    const getAddressProperty = await PropertyModel.find({
      address: address,
    });

    const getGuests = getAddressProperty.filter(
      (property) => property.guests >= guestNumber,
    );
    const result = await Promise.all(
      getGuests.map(async (property) => {
        const possibleProperty = await AvailableListModel.find({
          propertyId: property._id,
          $or: [
            {
              checkInDate: { $lte: to },
              checkOutDate: { $gte: from },
            },
          ],
        }).populate("propertyId");
        // console.log(property);
        if (possibleProperty.length === 0) return { property };
        // const sortProperty=getGuests.filter(())
        else return { possibleProperty };
      }),
    );
    // console.log(result);
    return Response.json({ possibleProperty: result });
  } catch (error) {
    return Response.json({ error: error });
  }
};
