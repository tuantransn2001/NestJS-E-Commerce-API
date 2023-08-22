import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { STATUS_CODE, STATUS_MESSAGE } from '../ts/enums/api_enums';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { Order } from '../ts/interfaces/order.d.type';
import RestFullAPI from '../utils/apiResponse';
import HttpException from '../utils/http.exception';
import { handleServerError } from '../utils/serverErrorHandler';
import { CreateOrderDTO } from './dto/createOrderDTO';

@Injectable()
export class OrderService {
  constructor(
    @Inject(MODEL_NAME.ORDER)
    private orderModel: Model<Order>,
  ) {}

  public async createUserOrder(payload: CreateOrderDTO) {
    try {
      return await this.orderModel
        .create(payload)
        .then(() => {
          return RestFullAPI.onSuccess(
            STATUS_CODE.STATUS_CODE_201,
            STATUS_MESSAGE.SUCCESS,
          );
        })
        .catch((err) => {
          return RestFullAPI.onFail(STATUS_CODE.STATUS_CODE_400, {
            message: err.message,
          } as HttpException);
        });
    } catch (err) {
      return handleServerError(err);
    }
  }
}
