import { model, Model, models, Schema } from "mongoose";

type Category = {
  name: string;
  createdAt: Date;
};
const CategorySchema = new Schema<Category>(
  {
    name: { type: String },
  },
  { timestamps: true }
);
export const CategoryModel: Model<Category> =
  models.Categories || model<Category>("Categories", CategorySchema);
