"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.default.Schema({
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
                            v: { type: String },
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
}, { timestamps: true, minimize: false });
//# sourceMappingURL=product.schema.js.map