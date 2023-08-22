"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.default.Schema({
    id: { type: String },
    type: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    avatar: { type: String },
    address: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    password: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
}, { timestamps: true, minimize: false });
//# sourceMappingURL=user.schema.js.map