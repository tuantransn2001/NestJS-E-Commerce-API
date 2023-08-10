import mongoose from 'mongoose';

export const AddressSchema = new mongoose.Schema(
  {
    id: { type: String },
    user_id: { type: String },
    city: { type: String },
    country: { type: String },
    postalCode: { type: String },
    address: { type: String },
    status: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { timestamps: true, minimize: false },
);
