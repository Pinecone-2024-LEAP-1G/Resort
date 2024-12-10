import mongoose, { model, Model, models, Schema } from "mongoose";

export type Chat = {
  _id?: string;
  userId: mongoose.Schema.Types.ObjectId;
  hostId: mongoose.Schema.Types.ObjectId;
};

const chatSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      reqire: true,
    },
    hostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Host",
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

export const chatModel: Model<Chat> =
  models.Chats || model<Chat>("Chats", chatSchema);
