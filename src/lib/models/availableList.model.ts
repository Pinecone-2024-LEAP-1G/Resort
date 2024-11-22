import { Model, Schema, model, models } from "mongoose";

type AvailableList = {
  _id: string;
  propertyId: string;
  reservationId: string;
  checkInDate: Date;
  checkOutDate: Date;
};

const AvailableListSchema = new Schema<AvailableList>(
  {
    propertyId: { type: String, ref: "Property" },
    reservationId: { type: String, ref: "Reservations" },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
  },
  { timestamps: true },
);

export const AvailableListModel: Model<AvailableList> =
  models.AvailableList ||
  model<AvailableList>("AvailableList", AvailableListSchema);
