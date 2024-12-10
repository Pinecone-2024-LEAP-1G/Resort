import { chatModel } from "@/lib/models/chat.model";
import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> },
) => {
  const userId = (await params).userId;

  try {
    const chats = await chatModel.find({
      userId: userId,
    });
    return Response.json(chats);
  } catch (error) {
    return Response.json({ message: error });
  }
};
