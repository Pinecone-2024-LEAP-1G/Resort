import mongoose, { Model, Schema, model, models } from "mongoose";

type Review = {
  _id: string;
  userId: mongoose.Schema.Types.ObjectId;
  propertyId: string;
  rating: number;
  comment: string;
};

const ReviewSchema = new Schema<Review>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    propertyId: { type: String, ref: "properties" },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

export const ReviewModel: Model<Review> =
  models.Review || model<Review>("Review", ReviewSchema);
