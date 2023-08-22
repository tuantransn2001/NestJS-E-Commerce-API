"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64toUUID = exports.uuidToBase64 = void 0;
function uuidToBase64(uuid) {
    return Buffer.from(uuid.replace(/-/g, ''), 'hex').toString('base64url');
}
exports.uuidToBase64 = uuidToBase64;
function base64toUUID(base64) {
    const hex = Buffer.from(base64, 'base64url').toString('hex');
    return `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(12, 16)}-${hex.substring(16, 20)}-${hex.substring(20)}`;
}
exports.base64toUUID = base64toUUID;
//# sourceMappingURL=handleConvertString.js.map