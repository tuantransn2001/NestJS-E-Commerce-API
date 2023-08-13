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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const esm_1 = require("awaity/esm");
const model_enums_1 = require("../ts/enums/model_enums");
const api_enums_1 = require("../ts/enums/api_enums");
const serverErrorHandler_1 = require("../ts/utils/serverErrorHandler");
const apiResponse_1 = require("../ts/utils/apiResponse");
let CartService = exports.CartService = class CartService {
    constructor(cartModel, productModel) {
        this.cartModel = cartModel;
        this.productModel = productModel;
        this.handleGetProductDetailByID = (prod) => (0, esm_1.map)(prod, async ({ product_variant_id, quantity }) => {
            const productDetail = await this.productModel
                .findOne({ 'variants.id': product_variant_id }, { variants: { $elemMatch: { id: product_variant_id } } })
                .exec();
            const { id: found_product_variant_id, name, imgSrc, price, } = productDetail.variants[0];
            return {
                product_variant_id: found_product_variant_id,
                name,
                imgSrc,
                price,
                quantity,
            };
        });
    }
    async getUserCart({ user_id }) {
        try {
            const foundCart = await this.cartModel.findOne({ user_id }).exec();
            if (foundCart) {
                const responseData = {
                    id: foundCart.id,
                    user_id: foundCart.user_id,
                    products: await this.handleGetProductDetailByID(foundCart.products),
                };
                return apiResponse_1.default.onSuccess(api_enums_1.STATUS_CODE.STATUS_CODE_200, api_enums_1.STATUS_MESSAGE.SUCCESS, responseData);
            }
            else {
                return apiResponse_1.default.onFail(api_enums_1.STATUS_CODE.STATUS_CODE_404, {
                    message: api_enums_1.STATUS_MESSAGE.NOT_FOUND,
                });
            }
        }
        catch (err) {
            return (0, serverErrorHandler_1.handleServerError)(err);
        }
    }
    async addToCart(payload) {
        try {
            const { user_id, products } = payload;
            const foundCart = await this.cartModel
                .findOne({
                user_id,
            })
                .exec();
            if (foundCart) {
                await this.cartModel.updateOne({ id: foundCart.id }, { $set: { products: [] } });
                await this.cartModel.updateOne({ id: foundCart.id }, {
                    $push: {
                        products: {
                            $each: products,
                        },
                    },
                });
            }
            else {
                await this.cartModel.create(payload);
            }
            const updatedCart = await this.cartModel
                .findOne({
                user_id,
            })
                .exec();
            const responseData = {
                id: updatedCart.id,
                user_id: updatedCart.user_id,
                products: await this.handleGetProductDetailByID(updatedCart.products),
            };
            return apiResponse_1.default.onSuccess(api_enums_1.STATUS_CODE.STATUS_CODE_201, api_enums_1.STATUS_MESSAGE.SUCCESS, responseData);
        }
        catch (err) {
            return (0, serverErrorHandler_1.handleServerError)(err);
        }
    }
};
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(model_enums_1.MODEL_NAME.CART)),
    __param(1, (0, common_1.Inject)(model_enums_1.MODEL_NAME.PRODUCT)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], CartService);
//# sourceMappingURL=cart.service.js.map