import mongoose, { Model, Schema, model, models } from "mongoose";

export type Reservation = {
  _id: string;
  userId: mongoose.Schema.Types.ObjectId;
  propertyId: mongoose.Schema.Types.ObjectId;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
};

const ReservationSchema = new Schema<Reservation>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
    },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    guests: { type: Number },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export const ReservationModel: Model<Reservation> =
  models.Reservations || model<Reservation>("Reservations", ReservationSchema);
