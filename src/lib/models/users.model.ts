import { Model, Schema, model, models } from "mongoose";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: "Customer" | "Hoster" | "Admin";
 
};

const userSchema = new Schema<User>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, enum: ["Customer", "Hoster", "Admin"] },
   
  },
  { timestamps: true }
);

export const UserModel: Model<User> =
  models.users || model<User>("users", userSchema);