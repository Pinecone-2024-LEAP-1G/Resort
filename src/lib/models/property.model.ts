import { Model, Schema, model, models } from "mongoose";

type Property = {
  _id: string;
  name: string;
  address: string;
  description: string;
  price: number;
  category_id: string;
  property_pictures: string;
  total_rooms: string;
  total_bedrooms: string;
  total_occupancy: string;
  total_bathrooms: string;
};

const propertySchema = new Schema<Property>(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, min: 0, required: true },
    category_id: { type: String, required: true },
    property_pictures: { type: String, required: true },
    total_rooms: { type: String, required: true },
    total_bedrooms: { type: String, required: true },
    total_occupancy: { type: String, required: true },
    total_bathrooms: { type: String, required: true },
  },
  { timestamps: true }
);

export const PropertyModel: Model<Property> =
  models.properties || model<Property>("properties", propertySchema);
