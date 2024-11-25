import { PropertyModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const properties = await PropertyModel.find();

    return Response.json({ properties });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const {
    userId,
    categoryId,
    price,
    guests,
    description,
    propertyPictures,
    room,
  } = await request.json();
  try {
    const property = await PropertyModel.create({
      userId,
      categoryId,
      price,
      guests,
      description,
      propertyPictures,
      room: {
        bedrooms: room.bedrooms,
        bathrooms: room.bathrooms,
      },
    });
    return Response.json({ message: "success", property });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error });
  }
};
