import mongoose from "mongoose";
import { UserModel } from "@/lib/models";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const users = await UserModel.find();
    return Response.json({ users });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error });
  }
};

export const POST = async (request: NextRequest) => {
  const { name, email, password, phone_number, profile_picture } =
    await request.json();

  try {
    const user = await UserModel.create({
      name,
      email,
      password,
      phone_number,
      profile_picture,
    });
    return Response.json({ message: "success", user });
  } catch (error) {
    return Response.json({ message: error });
  }
};

export const PUT = async (
  request: NextRequest,
  response: NextResponse
  // { params }: { params: any }
) => {
  // const { id } = params;
  const { _id, email } = request.json();
  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(_id);

    const user = await UserModel.findOneAndUpdate(
      { _id: objectId },
      { email: email },
      {
        new: true,
      }
    );
    response.json({ user: user });
  } catch (error) {
    response.json({ message: error });
  }
};
