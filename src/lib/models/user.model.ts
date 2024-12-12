import mongoose, { Model, Schema, model, models } from "mongoose";

type User = {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  password: string;
  phoneNumber: number;
  reservationId: mongoose.Schema.Types.ObjectId;
  role: "User" | "Admin";
};

const UserSchema = new Schema<User>(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    phoneNumber: { type: Number },
    avatar: { type: String },
    reservationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservations",
    },
    role: { type: String, enum: ["Admin", "User"], default: "User" },
  },
  { timestamps: true },
);

export const UserModel: Model<User> =
  models.Users || model<User>("Users", UserSchema);
