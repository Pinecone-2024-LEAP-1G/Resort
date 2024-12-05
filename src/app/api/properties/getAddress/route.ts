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
    const property = await PropertyModel.find();
    if (
      address === "null" &&
      from === "null" &&
      to === "null" &&
      guests === "null"
    ) {
      return Response.json({ property: property });
    }

    const getAddressProperty = await PropertyModel.find({
      address: address,
    });

    const getGuests = getAddressProperty.filter(
      (property) => property.guests >= guestNumber,
    );
    const result = await Promise.all(
      getGuests.map(async (property) => {
        const conflictDay = await AvailableListModel.find({
          propertyId: property._id,
          $or: [
            {
              checkInDate: { $lte: from },
              checkOutDate: { $gte: to },
            },
          ],
        }).populate("propertyId");

        if (conflictDay.length === 0) return property;
        if (conflictDay.length > 0) return conflictDay.map((p) => p._id);
      }),
    );
    const filteredProperties = result.filter((property) => {
      if (Array.isArray(property)) {
        return false;
      }
      if (property?.price) return true;
      if (!property?.price)
        return getGuests.filter(
          (getguestproperty: { _id: string }) =>
            getguestproperty._id !== property?._id,
        );
    });

    return Response.json({ property: filteredProperties });
  } catch (error) {
    return Response.json({ error: error });
  }
};
