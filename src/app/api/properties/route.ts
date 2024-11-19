import { PropertyModel } from "@/lib/models";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const properties = await PropertyModel.find();

    return Response.json({ properties });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const {
    name,
    address,
    description,
    price,
    category_id,
    property_pictures,
    total_rooms,
    total_bedrooms,
    total_occupancy,
    total_bathrooms,
  } = await request.json();

  try {
    const review = await PropertyModel.create({
      name,
      address,
      description,
      price,
      category_id,
      property_pictures,
      total_rooms,
      total_bedrooms,
      total_occupancy,
      total_bathrooms,
    });
    return Response.json({ message: "success", review });
  } catch (error) {
    return Response.json({ message: error });
  }
};
