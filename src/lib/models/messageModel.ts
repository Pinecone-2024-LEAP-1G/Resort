import mongoose, { model, Model, models } from "mongoose";
import { Schema } from "mongoose";

type Message = {
  chatId: mongoose.Schema.Types.ObjectId;
  senderId: mongoose.Schema.Types.ObjectId;
  text: string;
};

export const messageSchema = new Schema<Message>(
  {
    chatId: { type: mongoose.Schema.Types.ObjectId },
    senderId: { type: mongoose.Schema.Types.ObjectId },
    text: { type: String },
  },
  {
    timestamps: true,
  },
);

export const messageModel: Model<Message> =
  models.Chats || model<Message>("Messages", messageSchema);
