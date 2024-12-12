import { connectToMongoDB } from "@/lib/db";
import { PropertyModel } from "@/lib/models";
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
  } = await request.json();
  // const hostExist = await HostModel.findOne({ email });

  // if (!hostExist) {
  //   const user = await UserModel.findOne({ email });
  //   await HostModel.create({
  //     name: user?.firstName,
  //     email: user?.email,
  //     phoneNumber: user?.phoneNumber,
  //   });
  // }

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
    });

    // const { _id } = properties;

    // const updateHost = await HostModel.findOneAndUpdate(
    //   {
    //     email: email,
    //   },
    //   { $push: { propertyId: _id } },
    //   { new: true },
    // );

    // const updateProprty = await PropertyModel.findByIdAndUpdate(
    //   { _id: _id },
    //   {
    //     userId: updateHost?._id,
    //   },
    //   { new: true },
    // );
    return Response.json({ message: "success", property: properties });
  } catch (error) {
    return Response.json({ message: error });
  }
};
