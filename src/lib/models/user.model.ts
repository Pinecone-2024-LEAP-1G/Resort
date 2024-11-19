import { Model, Schema, model, models } from "mongoose";

type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone_number: string;
};

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserModel: Model<User> =
  models.users || model<User>("users", userSchema);
