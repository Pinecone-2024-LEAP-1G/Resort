import mongoose, { Model, Schema, model, models } from "mongoose";
import { Property } from "./property.model";

export type HostType = {
  _id?: mongoose.Schema.Types.ObjectId;
  experience: string;
  Address: string;
  description: string;
  propertyId: mongoose.Schema.Types.ObjectId[];
  name: string;
  phoneNumber: number;
  email: string;
  avatar: string;
};

export type HostTypePopulatedProperties = Omit<HostType, "propertyId"> & {
  propertyId: Property[];
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
    avatar: { type: String },
  },
  { timestamps: true },
);

export const HostModel: Model<HostType> =
  models.Host || model<HostType>("Host", Host);
