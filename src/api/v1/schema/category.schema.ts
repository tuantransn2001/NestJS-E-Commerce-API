import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    id: { type: String },
    title: { type: String },
    description: { type: String },
    img: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { timestamps: true, minimize: false },
);

export { CategorySchema };
