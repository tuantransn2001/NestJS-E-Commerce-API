import { Controller, Get, Query } from '@nestjs/common';
import { PaginationDTO } from '../ts/dto/query.dto';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}
  @Get('/user') // ? Find by ref user_id
  public async getUserAddress(
    @Query() { id, page_number, page_size }: PaginationDTO,
  ) {
    return await this.addressService.getUserAddress({
      id,
      page_number,
      page_size,
    });
  }
}
