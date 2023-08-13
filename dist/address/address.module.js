"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressModule = void 0;
const common_1 = require("@nestjs/common");
const provider_1 = require("../common/provider");
const database_module_1 = require("../database/database.module");
const address_schema_1 = require("../schema/address.schema");
const model_enums_1 = require("../ts/enums/model_enums");
const address_controller_1 = require("./address.controller");
const address_service_1 = require("./address.service");
let AddressModule = exports.AddressModule = class AddressModule {
};
exports.AddressModule = AddressModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [address_controller_1.AddressController],
        providers: [
            ...(0, provider_1.modelDefineProvider)(model_enums_1.MODEL_NAME.ADDRESS, address_schema_1.AddressSchema),
            address_service_1.AddressService,
        ],
    })
], AddressModule);
//# sourceMappingURL=address.module.js.map