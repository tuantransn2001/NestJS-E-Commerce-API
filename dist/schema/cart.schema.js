"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartSchema = void 0;
const uuid_1 = require("uuid");
const mongoose_1 = require("mongoose");
exports.CartSchema = new mongoose_1.default.Schema({
    id: { type: String, default: (0, uuid_1.v4)() },
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
}, { timestamps: true, minimize: false });
//# sourceMappingURL=cart.schema.js.map