import mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    id: { type: String },
    categoryID: { type: String },
    subCategoryID: { type: String },
    name: { type: String },
    SKU: { type: String },
    classify: { type: String },
    discount_id: { type: String },
    variants: {
      type: [
        {
          id: { type: String },
          name: { type: String },
          imgSrc: { type: String },
          price: { type: String },
          options: {
            type: [
              {
                id: { type: String },
                k: { type: String },
                v: { type: String }, // ? Maybe Image
              },
            ],
          },
          details: {
            type: [
              {
                id: { type: String },
                name: { type: String },
                title: { type: String },
                contents: {
                  type: [
                    {
                      id: { type: String },
                      k: { type: String },
                      v: { type: [String] },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { timestamps: true, minimize: false },
);
