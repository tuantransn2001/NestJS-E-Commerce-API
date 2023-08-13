"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PaymentSchema = new mongoose_1.default.Schema({
    id: { type: String },
    title: { type: String },
    description: { type: String },
}, { timestamps: true, minimize: false });
//# sourceMappingURL=payment.schema.js.map