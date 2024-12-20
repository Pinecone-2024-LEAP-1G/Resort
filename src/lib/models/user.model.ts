import { PropertyType } from "@/components/Review";
import mongoose, { Model, Schema, model, models } from "mongoose";

type User = {
  _id: string;
  name: string;
  email: string;
  image: string;
  password: string;
  phoneNumber: number;
  reservationId: mongoose.Schema.Types.ObjectId;
  role: "User" | "Admin";
  propertyId: mongoose.Schema.Types.ObjectId[];
};

export type HostTypePopulatedProperties = Omit<User, "propertyId"> & {
  propertyId: PropertyType[];
};

const UserSchema = new Schema<User>(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, min: 8, required: true },
    phoneNumber: { type: Number, min: 8, required: true },
    image: { type: String },
    reservationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservations",
    },
    role: { type: String, enum: ["Admin", "User"], default: "User" },
    propertyId: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Property",
    },
  },
  { timestamps: true },
);

export const UserModel: Model<User> =
  models.Users || model<User>("Users", UserSchema);
