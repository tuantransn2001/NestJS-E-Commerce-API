"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
class HashStringHandler {
    static hash(str, saltRounds) {
        return bcrypt.hashSync(str, saltRounds);
    }
    static verify(plainStr, hashedStr) {
        return bcrypt.compareSync(plainStr, hashedStr);
    }
}
exports.default = HashStringHandler;
//# sourceMappingURL=string.hash.js.map