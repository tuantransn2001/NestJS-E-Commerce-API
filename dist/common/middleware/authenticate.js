"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateMiddleware = void 0;
const jwt = require("jsonwebtoken");
const api_enums_1 = require("../../ts/enums/api_enums");
const apiResponse_1 = require("../../ts/utils/apiResponse");
const common_1 = require("@nestjs/common");
let AuthenticateMiddleware = exports.AuthenticateMiddleware = class AuthenticateMiddleware {
    use(req, res, next) {
        try {
            const JWT_TOKEN_SECRET_KEY = process.env
                .JWT_TOKEN_SECRET_KEY;
            const { token } = req.headers;
            const foundUserAuthenticated = jwt.verify(token, JWT_TOKEN_SECRET_KEY);
            if (foundUserAuthenticated) {
                req.currentUser = foundUserAuthenticated.user;
                return next();
            }
            else {
                res
                    .status(api_enums_1.STATUS_CODE.STATUS_CODE_401)
                    .send(apiResponse_1.default.onSuccess(api_enums_1.STATUS_CODE.STATUS_CODE_401, api_enums_1.STATUS_MESSAGE.UN_AUTHORIZE, 'Client-Error && In-Valid Token'));
            }
        }
        catch (err) {
            res.status(api_enums_1.STATUS_CODE.STATUS_CODE_500).send(apiResponse_1.default.onFail(api_enums_1.STATUS_CODE.STATUS_CODE_500, {
                message: err.message,
            }));
        }
    }
};
exports.AuthenticateMiddleware = AuthenticateMiddleware = __decorate([
    (0, common_1.Injectable)()
], AuthenticateMiddleware);
//# sourceMappingURL=authenticate.js.map