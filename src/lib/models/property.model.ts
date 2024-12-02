import mongoose, { Model, Schema, model, models } from "mongoose";

export type Property = {
  _id: string;
  price: number;
  guests: number;
  address: string;
  description: string;
  propertyPictures: string[];
  userId: mongoose.Schema.Types.ObjectId;
  categoryId: string;
  totalBedrooms: string;
  totalBathrooms: string;
};

const PropertySchema = new Schema<Property>(
  {
    address: { type: String, required: true },
    description: { type: String },
    guests: { type: Number, required: true },
    price: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    categoryId: { type: String, ref: "Category" },
    propertyPictures: [{ type: String, required: true }],
    totalBedrooms: { type: String, required: true },
    totalBathrooms: { type: String, required: true },
  },
  { timestamps: true },
);

export const PropertyModel: Model<Property> =
  models.Property || model<Property>("Property", PropertySchema);
