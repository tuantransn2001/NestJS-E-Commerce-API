"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationSchema = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
exports.ConversationSchema = new mongoose_1.default.Schema({
    id: { type: String },
    name: { type: String },
    isDelete: { type: Boolean, default: false },
    members: {
        type: [
            {
                id: { type: String },
                firstName: { type: String },
                type: { type: String },
                avatar: { type: String },
            },
        ],
    },
    messages: {
        type: [
            {
                id: { type: String, default: (0, uuid_1.v4)() },
                sender: {
                    id: { type: String },
                    firstName: { type: String },
                    type: { type: String },
                    avatar: { type: String },
                },
                content: { type: String },
                isDelete: { type: Boolean, default: false },
                createdAt: { type: Date, default: new Date() },
                updatedAt: { type: Date, default: new Date() },
            },
        ],
    },
    createdAt: { type: Date },
    updatedAt: { type: Date },
}, { timestamps: true, minimize: false });
//# sourceMappingURL=conversation.schema.js.map