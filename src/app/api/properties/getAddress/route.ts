import { AvailableListModel, PropertyModel } from "@/lib/models";
import { ReadonlyURLSearchParams } from "next/navigation";
import { NextRequest } from "next/server";
import { URLSearchParams } from "url";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("address");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const guests = searchParams.get("guests");
  const guestNumber = Number(guests);
  console.log(searchParams);
  try {
    const property = await PropertyModel.find();
    if (
      address === `${address}` &&
      from === `${from}` &&
      to === `${to}` &&
      guests === `${guests}`
    ) {
      return Response.json({ property: property });
    }
    // if (!from || !to) return Response.json(new Error("aldaa"));
    // const checkindate = new Date(from);
    // const checkoutdate = new Date(to);
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

        if (conflictDay.length === 0) return { property };
        if (conflictDay.length > 0) return conflictDay.map((p) => p._id);
      }),
    );

    const filteredProperties = result.filter((property) => {
      if (property?.property?.price) return property;
      if (!property?.property?.price)
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
    return Response.json(filteredProperties);
  } catch (error) {
    return Response.json({ error: error });
  }
};
