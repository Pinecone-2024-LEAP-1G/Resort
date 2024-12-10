import { chatModel } from "@/lib/models/chat.model";
import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ email: string }> },
) => {
  const email = (await params).email;

  try {
    const chats = await chatModel.find({
      email: email,
    });
    return Response.json(chats);
  } catch (error) {
    return Response.json({ message: error });
  }
};
