import { connectToMongoDB } from "@/lib/db";
import { PropertyModel, UserModel } from "@/lib/models";
import { HostModel } from "@/lib/models/host.model";
import { NextRequest } from "next/server";

connectToMongoDB();

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
    email,
  } = await request.json();

  const hostExist = await HostModel.findOne({ email });

  if (!hostExist) {
    const user = await UserModel.findOne({ email });
    await HostModel.create({
      name: user?.firstName,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
    });
  }

  try {
    const properties = await PropertyModel.create({
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
      email,
    });
    return Response.json({ message: "success", properties });
  } catch (error) {
    return Response.json({ message: error });
  }
};
