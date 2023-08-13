"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const common_1 = require("@nestjs/common");
const __1 = require("..");
exports.User = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return (0, __1.isEmpty)(request.currentUser) ? {} : request.currentUser;
});
//# sourceMappingURL=user.decorator.js.map