import { model, Model, models, Schema } from "mongoose";

type Category = {
  _id: number;
  name: string;
  icon: string;
};
const CategorySchema = new Schema<Category>(
  {
    name: { type: String, required: true },
    icon: { type: String },
  },
  { timestamps: true },
);
export const CategoryModel: Model<Category> =
  models.Categories || model<Category>("Categories", CategorySchema);
