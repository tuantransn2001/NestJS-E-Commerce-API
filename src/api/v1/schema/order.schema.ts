import mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema(
  {
    id: { type: String },
    user_id: { type: String },
    cart_id: { type: String },
    address_id: { type: String },
    payment_id: { type: String },
    discount_id: { type: String },
  },
  { timestamps: true, minimize: false },
);
