import mongoose from 'mongoose';

export const PaymentSchema = new mongoose.Schema(
  {
    id: { type: String },
    title: { type: String },
    description: { type: String },
  },
  { timestamps: true, minimize: false },
);
