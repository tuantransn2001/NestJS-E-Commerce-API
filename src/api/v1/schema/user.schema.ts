import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    id: { type: String },
    type: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    password: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { timestamps: true, minimize: false },
);
