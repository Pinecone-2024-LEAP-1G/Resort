import { model, Model, models, Schema } from "mongoose";

type Category = {
  name: string;
  createdAt: Date;
};
const categorySchema = new Schema<Category>(
  {
    name: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
export const CategoryModel: Model<Category> =
  models.Category || model<Category>("Category", CategorySchema);
