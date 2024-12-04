import mongoose, { Model, Schema, model, models } from "mongoose";

type HostType = {
  _id?: string;
  experience: string;
  Address: string;
  description: string;
  propertyId: mongoose.Schema.Types.ObjectId[];
  name: string;
  phoneNumber: string;
  email: string;
};

const Host = new Schema<HostType>(
  {
    experience: { type: String },
    Address: { type: String },
    description: { type: String },
    propertyId: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Property",
    },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true },
);

export const HostModel: Model<HostType> =
  models.Host || model<HostType>("Host", Host);
