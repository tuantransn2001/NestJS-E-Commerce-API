"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedModule = void 0;
const common_1 = require("@nestjs/common");
const provider_1 = require("../../common/provider");
const address_schema_1 = require("../../schema/address.schema");
const cart_schema_1 = require("../../schema/cart.schema");
const category_schema_1 = require("../../schema/category.schema");
const payment_schema_1 = require("../../schema/payment.schema");
const product_schema_1 = require("../../schema/product.schema");
const user_schema_1 = require("../../schema/user.schema");
const model_enums_1 = require("../../ts/enums/model_enums");
const database_module_1 = require("../database.module");
const seed_service_1 = require("./seed.service");
const seedcontroller_1 = require("./seedcontroller");
let SeedModule = exports.SeedModule = class SeedModule {
};
exports.SeedModule = SeedModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [seedcontroller_1.SeedController],
        providers: [
            ...(0, provider_1.modelDefineProvider)(model_enums_1.MODEL_NAME.USER, user_schema_1.UserSchema),
            ...(0, provider_1.modelDefineProvider)(model_enums_1.MODEL_NAME.CATEGORY, category_schema_1.CategorySchema),
            ...(0, provider_1.modelDefineProvider)(model_enums_1.MODEL_NAME.PRODUCT, product_schema_1.ProductSchema),
            ...(0, provider_1.modelDefineProvider)(model_enums_1.MODEL_NAME.CART, cart_schema_1.CartSchema),
            ...(0, provider_1.modelDefineProvider)(model_enums_1.MODEL_NAME.PAYMENT, payment_schema_1.PaymentSchema),
            ...(0, provider_1.modelDefineProvider)(model_enums_1.MODEL_NAME.ADDRESS, address_schema_1.AddressSchema),
            seed_service_1.SeedService,
        ],
    })
], SeedModule);
//# sourceMappingURL=seed.module.js.map