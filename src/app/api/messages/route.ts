import { messageModel } from "@/lib/models/messageModel";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { chatId, senderId, text } = await request.json();

  try {
    const message = await messageModel.create({
      chatId: chatId,
      senderId: senderId,
      text: text,
    });
    return Response.json(message);
  } catch (error) {
    return Response.json({ message: error });
  }
};
