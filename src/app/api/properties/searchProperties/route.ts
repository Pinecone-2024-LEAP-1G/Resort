import { AvailableListModel, PropertyModel } from "@/lib/models";
import { error } from "console";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("address");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const guests = searchParams.get("guests");
  const guestNumber = Number(guests);
  if (!from || !to) return Response.json({ message: error });
  console.log(address);
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

    const availableProperty = await PropertyModel.find({
      address: address,
      guests: { $gte: guestNumber },
    });

    const availablePropertyIds = availableProperty.map(({ _id }) => _id);

    const conflictDay = await AvailableListModel.find({
      propertyId: { $in: availablePropertyIds },
      $or: [
        {
          checkInDate: { $lte: checkoutDate },
          checkOutDate: { $gte: checkinDate },
        },
      ],
    });
    if (conflictDay.length > 0) {
      const availablePropertyList = availableProperty.map((item) =>
        conflictDay.filter(
          (items) => item._id.toString() !== items.propertyId.toString(),
        ),
      );
      return Response.json({ property: availablePropertyList });
    } else {
      return Response.json({ property: availableProperty });
    }
  } catch (error) {
    return Response.json({ error: error });
  }
};
