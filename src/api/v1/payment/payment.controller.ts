import { Controller, Get, Query } from '@nestjs/common';
import { PaginationDTO } from '../ts/dto/query.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}
  @Get('/get-all')
  public async getAll(@Query() { page_number, page_size }: PaginationDTO) {
    return await this.paymentService.getAll({ page_number, page_size });
  }
}
