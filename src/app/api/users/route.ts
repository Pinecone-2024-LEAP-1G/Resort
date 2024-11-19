import { UserModel } from "@/lib/models";
import { NextRequest } from "next/server";

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
