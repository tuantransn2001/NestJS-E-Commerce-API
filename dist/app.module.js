"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_pino_1 = require("nestjs-pino");
const address_module_1 = require("./address/address.module");
const auth_module_1 = require("./auth/auth.module");
const cart_module_1 = require("./cart/cart.module");
const category_module_1 = require("./category/category.module");
const authenticate_1 = require("./common/middleware/authenticate");
const seed_module_1 = require("./database/seed/seed.module");
const order_module_1 = require("./order/order.module");
const payment_module_1 = require("./payment/payment.module");
const product_module_1 = require("./product/product.module");
let AppModule = exports.AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(authenticate_1.AuthenticateMiddleware).forRoutes('auth/me');
    }
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            nestjs_pino_1.LoggerModule.forRoot({
                pinoHttp: {
                    transport: {
                        target: 'pino-pretty',
                        options: {
                            singleLine: true,
                        },
                    },
                },
            }),
            auth_module_1.AuthModule,
            category_module_1.CategoryModule,
            seed_module_1.SeedModule,
            product_module_1.ProductModule,
            cart_module_1.CartModule,
            order_module_1.OrderModule,
            payment_module_1.PaymentModule,
            address_module_1.AddressModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map