import { handlers } from "@/auth";
import { connectToMongoDB } from "@/lib/db";
connectToMongoDB();
export const { GET, POST } = handlers;
