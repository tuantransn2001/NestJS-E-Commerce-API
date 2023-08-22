"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const uuid_1 = require("uuid");
const jsonwebtoken_1 = require("jsonwebtoken");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const api_enums_1 = require("../ts/enums/api_enums");
const model_enums_1 = require("../ts/enums/model_enums");
const apiResponse_1 = require("../utils/apiResponse");
const string_hash_1 = require("../utils/string.hash");
const user_enum_1 = require("../ts/enums/user_enum");
const common_2 = require("../common");
const serverErrorHandler_1 = require("../utils/serverErrorHandler");
let AuthService = exports.AuthService = class AuthService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async login({ email, password }) {
        try {
            const foundUser = await this.userModel
                .findOne({
                email,
            })
                .exec();
            if (foundUser) {
                const isMatchPassword = string_hash_1.default.verify(password, foundUser.password);
                switch (isMatchPassword) {
                    case true: {
                        const { id, firstName, lastName, email, type, avatar } = foundUser;
                        const payload = {
                            user: { id, firstName, lastName, email, type, avatar },
                        };
                        const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_TOKEN_SECRET_KEY, {
                            expiresIn: process.env.EXPIRES_IN,
                        });
                        return apiResponse_1.default.onSuccess(api_enums_1.STATUS_CODE.STATUS_CODE_200, api_enums_1.STATUS_MESSAGE.SUCCESS, {
                            access_token: token,
                            expires_in: process.env.EXPIRES_IN,
                        });
                    }
                    case false: {
                        return apiResponse_1.default.onFail(api_enums_1.STATUS_CODE.STATUS_CODE_401, {
                            message: `Password is in-correct!`,
                        });
                    }
                }
            }
            else {
                return apiResponse_1.default.onFail(api_enums_1.STATUS_CODE.STATUS_CODE_404, {
                    message: `User with email: ${email} doesn't exist ! Please check it and try again!`,
                });
            }
        }
        catch (err) {
            return apiResponse_1.default.onFail(api_enums_1.STATUS_CODE.STATUS_CODE_401, {
                message: `Client-Error & UnAuthorize`,
            });
        }
    }
    async register({ type, firstName, lastName, address, email, phoneNumber, password, }) {
        try {
            const argMissArg = (0, common_2.checkMissPropertyInObjectBaseOnValueCondition)({ firstName, lastName, address, email, phoneNumber, password }, [undefined, '']);
            if ((0, common_2.isEmpty)(argMissArg)) {
                const newUserDocument = {
                    id: (0, uuid_1.v4)(),
                    type: type ? type : user_enum_1.USER_ROLE.CUSTOMER,
                    firstName,
                    lastName,
                    address,
                    email,
                    phoneNumber,
                    password: string_hash_1.default.hash(password, 10),
                };
                await this.userModel.create(newUserDocument);
                return apiResponse_1.default.onSuccess(api_enums_1.STATUS_CODE.STATUS_CODE_200, api_enums_1.STATUS_MESSAGE.SUCCESS);
            }
            else {
                return apiResponse_1.default.onFail(api_enums_1.STATUS_CODE.STATUS_CODE_406, {
                    message: argMissArg.join(',') + ' is required!',
                });
            }
        }
        catch (err) {
            return (0, serverErrorHandler_1.handleServerError)(err);
        }
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(model_enums_1.MODEL_NAME.USER)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AuthService);
//# sourceMappingURL=auth.service.js.map