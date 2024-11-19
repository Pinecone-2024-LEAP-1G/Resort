import { Model, Schema, model, models } from "mongoose";

type Property = {
  _id: string;
  address: string;
  description: string;
  total_occupancy: string;
  total_bedrooms: string;
  total_bathrooms: string;
  total_rooms: string;
  price: string;
  category_id: string;
  published_at: string;
  property_pictures: string;
};

const propertySchema = new Schema<Property>(
  {
    address: { type: String, required: true },
    description: { type: String, required: true },
    total_occupancy: { type: String, required: true },
    total_bedrooms: { type: String, required: true },
    total_rooms: { type: String, required: true },
    total_bathrooms: { type: String, required: true },
    category_id: { type: String, required: true },
    published_at: { type: String, required: true },
    property_pictures: { type: String, required: true },
  },
  { timestamps: true }
);

export const PropertyModel: Model<Property> =
  models.properties || model<Property>("properties", propertySchema);
