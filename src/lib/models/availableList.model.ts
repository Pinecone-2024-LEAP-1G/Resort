import { Model, Schema, model, models } from "mongoose";

type AvailableList = {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone_number: string;
};

const availableListSchema = new Schema<AvailableList>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
  },
  { timestamps: true }
);

export const AvailableListModel: Model<AvailableList> =
  models.availableLists ||
  model<AvailableList>("availableLists", availableListSchema);
