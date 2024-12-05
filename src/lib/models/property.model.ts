import mongoose, { Model, Schema, model, models } from "mongoose";

export type Property = {
  _id: string;
  price: number;
  guests: number;
  address: string;
  description: string;
  propertyPictures: string[];
  categoryId: string;
  totalBedrooms: string;
  totalBathrooms: string;
  cleaningFee: number;
  email: string;
  reviewId: mongoose.Schema.Types.ObjectId[];
};

const PropertySchema = new Schema<Property>(
  {
    address: { type: String, required: true },
    description: { type: String },
    guests: { type: Number, required: true },
    price: { type: Number, required: true },
    categoryId: { type: String, ref: "Category" },
    propertyPictures: [{ type: String, required: true }],
    totalBedrooms: { type: String, required: true },
    totalBathrooms: { type: String, required: true },
    cleaningFee: { type: Number },
    email: { type: String, required: true, ref: "Host" },
    reviewId: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Review",
    },
  },
  { timestamps: true },
);

export const PropertyModel: Model<Property> =
  models.Property || model<Property>("Property", PropertySchema);
