import mongoose, { Model, Schema, model, models } from "mongoose";
import { Children } from "react";

type Reservation = {
  _id: string;
  userId: mongoose.Schema.Types.ObjectId;
  propertyId: mongoose.Schema.Types.ObjectId;
  checkIn: Date;
  checkOut: Date;
  guest: [
    {
      Adult: Number;
      Children: Number;
      Infants: Number;
    }
  ];
  totalPrice: Number;
};

const ReservationSchema = new Schema<Reservation>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    guest: [
      {
        Adults: { Type: Number },
        Children: { Type: Number },
        Infants: { Type: Number },
      },
    ],
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

export const ReservationModel: Model<Reservation> =
  models.Reservation || model<Reservation>("Reservation", ReservationSchema);