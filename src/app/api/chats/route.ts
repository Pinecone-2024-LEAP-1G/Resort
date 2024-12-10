import { chatModel } from "@/lib/models/chat.model";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { userId, hostId } = await request.json();

  try {
    const chat = await chatModel.find({
      userId: userId,
      hostId: hostId,
    });
    if (chat) return Response.json(chat);

    const newChat = await chatModel.create({
      userId,
      hostId,
    });

    return Response.json(newChat);
  } catch (error) {
    console.log(error);

    return Response.json({ message: error });
  }
};

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  const hostId = searchParams.get("hostId");
  try {
    const chats = await chatModel.find({
      userId: userId,
      hostId: hostId,
    });
    return Response.json(chats);
  } catch (error) {
    return Response.json({ message: error });
  }
};
