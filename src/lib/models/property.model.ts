import { Model, Schema, model, models } from "mongoose";

type Property = {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone_number: string;
};

const propertySchema = new Schema<Property>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
  },
  { timestamps: true }
);

export const PropertyModel: Model<Property> =
  models.properties || model<Property>("properties", propertySchema);
