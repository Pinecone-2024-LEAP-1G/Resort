import { chatModel } from "@/lib/models/chat.model";
import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ chatId: string }> },
) => {
  const chatId = (await params).chatId;

  try {
    const messages = await chatModel.find({
      _id: chatId,
    });
    return Response.json(messages);
  } catch (error) {
    return Response.json({ message: error });
  }
};
