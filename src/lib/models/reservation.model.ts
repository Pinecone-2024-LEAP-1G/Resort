import mongoose, { Model, Schema, model, models } from "mongoose";

type Reservation = {
  _id: string;
  userId: mongoose.Schema.Types.ObjectId;
  propertyId: mongoose.Schema.Types.ObjectId;
  checkIn: Date;
  checkOut: Date;
  guest: [
    {
      Adult: number;
      Children: number;
      Infants: number;
    }
  ];

  totalPrice: number;
};

const ReservationSchema = new Schema<Reservation>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
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
  models.Reservations || model<Reservation>("Reservations", ReservationSchema);
