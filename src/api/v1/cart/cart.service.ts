import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { map as asyncMap } from 'awaity/esm';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { Cart } from '../ts/interfaces/cart.d.type';
import { STATUS_CODE, STATUS_MESSAGE } from '../ts/enums/api_enums';
import { handleServerError } from '../utils/serverErrorHandler';
import { AddItemToCartDTO } from './dto/addToCartDTO';
import { GetUserCartDTO } from './dto/getUserCartDTO';
import RestFullAPI from '../utils/apiResponse';
import { Product } from '../ts/interfaces/product.d.type';
import { ObjectType } from '../ts/types/common';
import HttpException from '../utils/http.exception';
@Injectable()
export class CartService {
  constructor(
    @Inject(MODEL_NAME.CART)
    private cartModel: Model<Cart>,
    @Inject(MODEL_NAME.PRODUCT)
    private productModel: Model<Product>,
  ) {}
  private handleGetProductDetailByID = (prod: ObjectType[]) =>
    asyncMap(prod, async ({ product_variant_id, quantity }) => {
      const productDetail = await this.productModel
        .findOne(
          { 'variants.id': product_variant_id },
          { variants: { $elemMatch: { id: product_variant_id } } },
        )
        .exec();

      const {
        id: found_product_variant_id,
        name,
        imgSrc,
        price,
      } = productDetail.variants[0];
      return {
        product_variant_id: found_product_variant_id,
        name,
        imgSrc,
        price,
        quantity,
      };
    });
  public async getUserCart({ user_id }: GetUserCartDTO) {
    try {
      const foundCart = await this.cartModel.findOne({ user_id }).exec();
      if (foundCart) {
        const responseData = {
          id: foundCart.id,
          user_id: foundCart.user_id,
          products: await this.handleGetProductDetailByID(foundCart.products),
        };

        return RestFullAPI.onSuccess(
          STATUS_CODE.STATUS_CODE_200,
          STATUS_MESSAGE.SUCCESS,
          responseData,
        );
      } else {
        return RestFullAPI.onFail(STATUS_CODE.STATUS_CODE_404, {
          message: STATUS_MESSAGE.NOT_FOUND,
        } as HttpException);
      }
    } catch (err) {
      return handleServerError(err);
    }
  }

  public async addToCart(payload: AddItemToCartDTO) {
    try {
      const { user_id, products } = payload;

      // ? Check Exist
      const foundCart = await this.cartModel
        .findOne({
          user_id,
        })
        .exec();
      if (foundCart) {
        // ? => Already exist => Add
        // ? Remove old
        await this.cartModel.updateOne(
          { id: foundCart.id },
          { $set: { products: [] } },
        );

        await this.cartModel.updateOne(
          { id: foundCart.id },
          {
            $push: {
              products: {
                $each: products,
              },
            },
          },
        );

        // ? Add New
      } else {
        // ? => Do not exist before => Create => New
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

      return RestFullAPI.onSuccess(
        STATUS_CODE.STATUS_CODE_201,
        STATUS_MESSAGE.SUCCESS,
        responseData,
      );
    } catch (err) {
      return handleServerError(err);
    }
  }
}
