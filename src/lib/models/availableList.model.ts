import { Model, Schema, model, models } from "mongoose";

type AvailableList = {
  _id: string;
  reservation_id: string;
  start_date: string;
  end_date: string;
};

const availableListSchema = new Schema<AvailableList>(
  {
    reservation_id: { type: String, required: true },
    start_date: { type: String, required: true },
    end_date: { type: String, required: true },
  },
  { timestamps: true }
);

export const AvailableListModel: Model<AvailableList> =
  models.availableLists ||
  model<AvailableList>("availableLists", availableListSchema);
