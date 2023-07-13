import mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema(
  {
    id: { type: String },
    subCategoryID: { type: String },
    title: { type: String },
    subTitle: { type: String },
    description: { type: [String] },
    img: { type: String },
    contents: {
      type: [
        {
          title: { type: String },
          subTitle: { type: String },
          content: { type: [String] },
        },
      ],
    },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { timestamps: true, minimize: false },
);
