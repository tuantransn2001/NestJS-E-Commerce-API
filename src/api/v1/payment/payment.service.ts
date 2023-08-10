import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { getAllRecordHandler } from '../common';
import { PaginationDTO } from '../ts/dto/query.dto';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { Payment } from '../ts/interfaces/payment.type';
import { handleServerError } from '../ts/utils/serverErrorHandler';

@Injectable()
export class PaymentService {
  constructor(
    @Inject(MODEL_NAME.PAYMENT)
    private paymentModel: Model<Payment>,
  ) {}
  public async getAll({ page_number, page_size }: PaginationDTO) {
    try {
      return getAllRecordHandler(
        this.paymentModel,
        { page_number, page_size },
        ['id', 'title', 'description', 'createdAt', 'updatedAt'],
      );
    } catch (err) {
      return handleServerError(err);
    }
  }
}
