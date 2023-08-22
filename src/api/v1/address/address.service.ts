import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { getAllRecordHandler } from '../common';
import { PaginationDTO } from '../ts/dto/query.dto';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { Address } from '../ts/interfaces/address.d.type';
import { handleServerError } from '../utils/serverErrorHandler';

@Injectable()
export class AddressService {
  constructor(
    @Inject(MODEL_NAME.ADDRESS)
    private addressModel: Model<Address>,
  ) {}
  public async getUserAddress({ id, page_number, page_size }: PaginationDTO) {
    try {
      return getAllRecordHandler(
        this.addressModel,
        { page_number, page_size },
        ['id', 'city', 'country', 'postalCode', 'address'],
        { user_id: id },
      );
    } catch (err) {
      return handleServerError(err);
    }
  }
}
