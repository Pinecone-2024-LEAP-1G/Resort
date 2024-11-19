import { Model, Schema, model, models } from "mongoose";

type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone_number: Number;
  profile_picture: string;
  role: "User" | "Host" | "Admin";
};

const userSchema = new Schema<User>(
  {
    name: { type: String, min: 5, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, min: 8, required: true },
    phone_number: { type: Number, min: 8, required: true },
    profile_picture: { type: String },
    role: { type: String, enum: ["Admin", "Host", "User"], default: "User" },
  },
  { timestamps: true }
);

export const UserModel: Model<User> =
  models.users || model<User>("users", userSchema);
