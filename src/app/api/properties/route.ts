import { connectToMongoDB } from "@/lib/db";
import { PropertyModel, UserModel } from "@/lib/models";
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
    categoryId,
    propertyPictures,
    totalBedrooms,
    totalBathrooms,
    email,
    cleaningFee,
    userId,
    phoneNumber,
  } = await request.json();

  if (userId) {
    await UserModel.findOneAndUpdate(
      {
        _id: userId,
      },
      { phoneNumber: phoneNumber },
      { new: true },
    );
  }

  try {
    const properties = await PropertyModel.create({
      address,
      description,
      guests,
      price,
      categoryId,
      propertyPictures,
      totalBedrooms,
      totalBathrooms,
      email,
      cleaningFee,
      userId,
    });

    const updateUser = await UserModel.findOneAndUpdate(
      {
        _id: userId,
      },
      { $push: { propertyId: properties?._id } },
      { new: true },
    );

    return Response.json({
      updateUser: updateUser,
      properties: properties,
    });
  } catch (error) {
    return Response.json({ message: error });
  }
};
