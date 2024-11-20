import { Model, Schema, model, models } from "mongoose";

type Host = {
  _id: string;
  Address: string;
  description: string;
  user_id: string;
  property_id: string;
  room_amount: string;
  property_images: string;
};

const hostSchema = new Schema<Host>(
  {
    Address: { type: String, required: true },
    description: { type: String, required: true },
    user_id: { type: String, ref:"user_id"},
    property_id: { type: String, ref:"property_id"},
    room_amount:{type: String, ref:"room_amount"},
    property_images: {type: String, ref:" property_images"},
  },
  { timestamps: true }
);

export const HostModel: Model<Host> =
  models.host || model<Host>("host", hostSchema);
