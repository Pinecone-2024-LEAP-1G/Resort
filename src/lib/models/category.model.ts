import mongoose, { Schema } from "mongoose";

type Category = {
  name: string;
  createdAt: Date;
};
const categorySchema = new Schema<Category>({
  name: { type: String },
  createdAt: { type: Date, default: Date.now },
});
const CategoryModel = mongoose.model("Category", categorySchema);
export default CategoryModel;
