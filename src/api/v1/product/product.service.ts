import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { getAllRecordHandler } from '../common';
import { PaginationDTO } from '../ts/dto/query.dto';
import { STATUS_CODE, STATUS_MESSAGE } from '../ts/enums/api_enums';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { Product } from '../ts/interfaces/product.d.type';
import { ObjectType } from '../ts/types/common';
import RestFullAPI from '../ts/utils/apiResponse';
import { handleServerError } from '../ts/utils/serverErrorHandler';
import URLSearchParam from '../ts/utils/urlSearchParam';

@Injectable()
export class ProductService {
  constructor(
    @Inject(MODEL_NAME.PRODUCT)
    private productModel: Model<Product>,
  ) {}

  public async getAll(
    { page_number, page_size }: PaginationDTO,
    searchParam: string,
  ) {
    try {
      const objFromSearchParam: ObjectType =
        URLSearchParam.urlParamsToObj(searchParam);

      return getAllRecordHandler(
        this.productModel,
        { page_number, page_size },
        [],
        objFromSearchParam,
      );
    } catch (err) {
      return handleServerError(err);
    }
  }

  public async getByID({
    id,
  }: Omit<PaginationDTO, 'page_number' | 'page_size'>) {
    try {
      const foundProduct = await this.productModel.findOne({ id }).exec();

      return RestFullAPI.onSuccess(
        STATUS_CODE.STATUS_CODE_200,
        STATUS_MESSAGE.SUCCESS,
        foundProduct,
      );
    } catch (err) {
      return handleServerError(err);
    }
  }
}
