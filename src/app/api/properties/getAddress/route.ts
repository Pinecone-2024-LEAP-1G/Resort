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
    const properties = await PropertyModel.find();
    if (address === "" && from === "null" && to === "null" && guests === "0") {
      return Response.json({ properties: properties });
    }
    if (!from || !to) return Response.json(new Error("aldaa"));
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
        const conflictDay = await AvailableListModel.find({
          propertyId: property._id,
          $or: [
            {
              checkInDate: { $lte: checkoutdate },
              checkOutDate: { $gte: checkindate },
            },
          ],
        }).populate("propertyId");

        // console.log(conflictDay);
        if (conflictDay.length === 0) return { property, conflictDay: false };
        if (conflictDay.length > 0)
          return conflictDay.map((p) => p._id), { conflictDay: true };
      }),
    );
    const filteredProperties = result.map((property) => {
      if (property?.conflictDay === false) return property;
      if (!property?.conflictDay === true)
        return getGuests.filter(
          (getguestproperty) =>
            getguestproperty._id !== property?.property?._id,
        );
    });
    // console.log(filteredProperties);
    // const filter = result.map((property) => property?.property?._id);
    // const filteredProperties = getGuests.filter((property) => {
    // property._id!==
    // });
    // const filteredProperties=result.filter((property)=>)
    return Response.json({ searchProperty: filteredProperties });
  } catch (error) {
    return Response.json({ error: error });
  }
};
