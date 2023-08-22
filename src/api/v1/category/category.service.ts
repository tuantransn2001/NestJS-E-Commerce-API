import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { MODEL_NAME } from '../ts/enums/model_enums';
import RestFullAPI from '../utils/apiResponse';
import { STATUS_CODE, STATUS_MESSAGE } from '../ts/enums/api_enums';
import { handleServerError } from '../utils/serverErrorHandler';
import { getAllRecordHandler } from '../common';
import { Category } from '../ts/interfaces/category.d.type';
import { PaginationDTO } from '../ts/dto/query.dto';

@Injectable()
export class CategoryService {
  constructor(
    @Inject(MODEL_NAME.CATEGORY)
    private categoryModel: Model<Category>,
  ) {}

  public async getAll({ page_number, page_size }: PaginationDTO) {
    try {
      return getAllRecordHandler(
        this.categoryModel,
        { page_number, page_size },
        ['id', 'title', 'imgSrc', 'createdAt', 'updatedAt'],
      );
    } catch (err) {
      return handleServerError(err);
    }
  }
  public async getByID({ id }: Partial<PaginationDTO>) {
    try {
      const foundCategory = await this.categoryModel.findOne({ id }).exec();

      return RestFullAPI.onSuccess(
        STATUS_CODE.STATUS_CODE_200,
        STATUS_MESSAGE.SUCCESS,
        foundCategory,
      );
    } catch (err) {
      return handleServerError(err);
    }
  }
}
