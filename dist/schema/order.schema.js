"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.OrderSchema = new mongoose_1.default.Schema({
    id: { type: String },
    user_id: { type: String },
    cart_id: { type: String },
    address_id: { type: String },
    payment_id: { type: String },
    discount_id: { type: String },
}, { timestamps: true, minimize: false });
//# sourceMappingURL=order.schema.js.map