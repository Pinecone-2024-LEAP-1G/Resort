import mongoose, { Model, Schema, model, models } from "mongoose";
export type HostType = {
  _id?: mongoose.Schema.Types.ObjectId;
  experience: string;
  Address: string;
  description: string;
  propertyId: mongoose.Schema.Types.ObjectId[];
  name: string;
  phoneNumber: number;
  email: string;
  image: string;
};

const Host = new Schema<HostType>(
  {
    experience: { type: String },
    Address: { type: String },
    description: { type: String },
    propertyId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
    name: { type: String },
    phoneNumber: { type: Number },
    email: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true },
);

export const HostModel: Model<HostType> =
  models.Host || model<HostType>("Host", Host);
