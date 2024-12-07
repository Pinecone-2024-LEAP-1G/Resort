import mongoose, { Model, Schema, model, models } from "mongoose";

export type Reservation = {
  _id: string;
  userId: mongoose.Schema.Types.ObjectId;
  propertyId: mongoose.Schema.Types.ObjectId;
  checkIn: Date;
  checkOut: Date;
  adult: number;
  children: number;
  infants: number;
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
    adult: { type: Number },
    children: { type: Number },
    infants: { type: Number },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export const ReservationModel: Model<Reservation> =
  models.Reservations || model<Reservation>("Reservations", ReservationSchema);
