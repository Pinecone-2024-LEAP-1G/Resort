import { Model, Schema, model, models } from "mongoose";

type Review = {
  _id: string;
  property_id: string;
  user_id: string;
  rating: string;
  comment: string;
};

const reviewSchema = new Schema<Review>(
  {
    property_id: { type: String, required: true },
    user_id: { type: String, required: true },
    rating: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

export const ReviewModel: Model<Review> =
  models.reviews || model<Review>("reviews", reviewSchema);
