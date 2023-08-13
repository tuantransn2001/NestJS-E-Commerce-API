"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
const mongoose_1 = require("mongoose");
exports.CategorySchema = new mongoose_1.default.Schema({
    id: { type: String },
    subCategoryID: { type: String },
    title: { type: String },
    subTitle: { type: String },
    description: { type: [String] },
    imgSrc: { type: String },
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
}, { timestamps: true, minimize: false });
//# sourceMappingURL=category.schema.js.map