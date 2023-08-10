import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';

export const CartSchema = new mongoose.Schema(
  {
    id: { type: String, default: uuidv4() },
    user_id: { type: String },
    total: { type: String },
    products: {
      type: [
        {
          product_variant_id: { type: String },
          quantity: { type: Number },
        },
      ],
    },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { timestamps: true, minimize: false },
);
