import mongoose, { Model, Schema, model, models } from "mongoose";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  password: string;
  phoneNumber: number;
  reservationId: mongoose.Schema.Types.ObjectId;
  role: "User" | "Admin";
};

const UserSchema = new Schema<User>(
  {
    firstName: { type: String, min: 5, required: true },
    lastName: { type: String, min: 5, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, min: 8, required: true },
    phoneNumber: { type: Number, min: 8, required: true },
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
