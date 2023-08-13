"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const provider_1 = require("../common/provider");
const database_module_1 = require("../database/database.module");
const user_schema_1 = require("../schema/user.schema");
const model_enums_1 = require("../ts/enums/model_enums");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
let AuthModule = exports.AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [auth_controller_1.AuthController],
        providers: [...(0, provider_1.modelDefineProvider)(model_enums_1.MODEL_NAME.USER, user_schema_1.UserSchema), auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map