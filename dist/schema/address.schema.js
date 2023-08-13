"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AddressSchema = new mongoose_1.default.Schema({
    id: { type: String },
    user_id: { type: String },
    city: { type: String },
    country: { type: String },
    postalCode: { type: String },
    address: { type: String },
    status: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
}, { timestamps: true, minimize: false });
//# sourceMappingURL=address.schema.js.map