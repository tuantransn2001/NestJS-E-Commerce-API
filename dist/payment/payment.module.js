"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const payment_controller_1 = require("./payment.controller");
const modelDefine_provider_1 = require("../common/provider/modelDefine.provider");
const model_enums_1 = require("../ts/enums/model_enums");
const payment_schema_1 = require("../schema/payment.schema");
const payment_service_1 = require("./payment.service");
let PaymentModule = exports.PaymentModule = class PaymentModule {
};
exports.PaymentModule = PaymentModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [payment_controller_1.PaymentController],
        providers: [
            ...(0, modelDefine_provider_1.modelDefineProvider)(model_enums_1.MODEL_NAME.PAYMENT, payment_schema_1.PaymentSchema),
            payment_service_1.PaymentService,
        ],
    })
], PaymentModule);
//# sourceMappingURL=payment.module.js.map