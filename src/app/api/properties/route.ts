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
    categoryId,
    propertyPictures,
    totalBedrooms,
    totalBathrooms,
    email,
    cleaningFee,
    userId,
    phoneNumber,
  } = await request.json();
  const hostExist = await HostModel.findOne({
    email,
  });

  if (!hostExist) {
    const user = await UserModel.findOne({
      email,
    });
    await HostModel.create({
      name: user?.name,
      email: user?.email,
      phoneNumber: phoneNumber,
      avatar: user?.image,
    });
  }

  try {
    const hostExist = await HostModel.findOne({
      email,
    });
    if (!hostExist) {
      const user = await UserModel.findOne({
        email,
      });
      await HostModel.create({
        name: user?.name,
        email: user?.email,
        phoneNumber: phoneNumber,
      });
    }

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

    const updatedHost = await HostModel.findOneAndUpdate(
      {
        email: email,
      },
      { $push: { propertyId: properties?._id } },
      { new: true },
    );

    const updateProprty = await PropertyModel.findByIdAndUpdate(
      { _id: properties?._id },
      {
        userId: updatedHost?._id,
      },
      { new: true },
    );
    return Response.json({
      updateProprty: updateProprty,
      updatedHost: updatedHost,
    });
  } catch (error) {
    return Response.json({ message: error });
  }
};
