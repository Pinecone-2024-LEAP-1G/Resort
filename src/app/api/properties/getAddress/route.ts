import { AvailableListModel, PropertyModel } from "@/lib/models";
import mongoose from "mongoose";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("address");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const guests = searchParams.get("guests");
  const guestNumber = Number(guests);

  if (!from || !to) return new Error("aldaa garlaa");

  try {
    const checkinDate = new Date(from);
    const checkoutDate = new Date(to);
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
              checkInDate: { $lte: checkoutDate },
              checkOutDate: { $gte: checkinDate },
            },
          ],
        });
        // console.log(conflictDay);
        if (conflictDay.length === 0) return property;
        if (conflictDay.length > 0) return  
       const id=conflictDay.map((p) => p.propertyId);
       const mapid=id.map((iid)=> const objectid=await mongoose.Types.ObjectId.createFromHexString(id))
      

      }),
    );

    const filteredProperties = result.filter((property) => {
      // console.log(property);
      // const doublekill = property?.((pro) => {
      if (Array.isArray(property.price)) return property;
      if (property.price) return property;

      const filtermap = property?.map((pro) =>
        getGuests.filter((getguestproperty) =>
          // getguestproperty._id !== pro,
          console.log(getguestproperty, pro),
        ),
      );
      return filtermap;
    });
    // });
    // console.log(doublekill);
    // ("doublekill");
    // });
    return Response.json({ property: filteredProperties });
  } catch (error) {
    return Response.json({ error: error });
  }
};
