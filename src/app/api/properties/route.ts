import { PropertyModel } from "lib/models";
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
    address,
    description,
    guests,
    price,
    userId,
    categoryId,
    propertyPictures,
    totalBedrooms,
    totalOccupancy,
    totalBathrooms,
  } = await request.json();

  try {
    const review = await PropertyModel.create({
      address,
      description,
      guests,
      price,
      userId,
      categoryId,
      propertyPictures,
      totalBedrooms,
      totalOccupancy,
      totalBathrooms,
    });
    return Response.json({ message: "success", review });
  } catch (error) {
    return Response.json({ message: error });
  }
};
