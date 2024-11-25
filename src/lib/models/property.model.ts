import mongoose, { Model, Schema, model, models } from "mongoose";

type RoomType = {
  _id: string;
  bedrooms: Number;
  bathrooms: Number;
};
const RoomSchema = new Schema<RoomType>({
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
});

type Location = {
  geo: [{ Type: "Point" }, { coordinates: [string] }];
  address: [
    { street: String },
    { state: String },
    { city: String },
    { zipcode: Number },
  ];
};
const LocationSchema = new Schema<Location>({
  geo: [
    { Type: { type: String, enum: ["Point"], default: "Point" } },
    { coordinates: [{ type: String }] },
  ],
  address: [
    { street: String },
    { state: String },
    { city: String },
    { zipcode: Number },
  ],
});

type PropertyType = {
  _id: string;
  userId: mongoose.Schema.Types.ObjectId;
  categoryId: mongoose.Schema.Types.ObjectId;
  price: number;
  guests: number;
  description: string;
  propertyPictures: [string];
  room: [RoomType];
  // location: object;
};
const PropertySchema = new Schema<PropertyType>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
    price: { type: Number, required: true },
    guests: { type: Number, required: true },
    description: { type: String, required: true },
    propertyPictures: [{ type: String, required: true }],
    room: new Schema<RoomType>({
      bedrooms: { type: Number, required: true },
      bathrooms: { type: Number, required: true },
    }),
    // location: [LocationSchema],
  },
  { timestamps: true },
);

export const PropertyModel: Model<PropertyType> =
  models.Property || model<PropertyType>("Property", PropertySchema);
