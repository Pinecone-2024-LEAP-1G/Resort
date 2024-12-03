import mongoose, { Model, Schema, model, models } from "mongoose";

export type Review = {
  _id: string;
  userId: mongoose.Schema.Types.ObjectId;
  propertyId: string;
  rating: number;
  comment: string;
};

const ReviewSchema = new Schema<Review>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    propertyId: { type: String, ref: "Property" },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true },
);

export const ReviewModel: Model<Review> =
  models.Review || model<Review>("Review", ReviewSchema);
