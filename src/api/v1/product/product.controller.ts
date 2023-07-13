import { Query, Controller, Get } from '@nestjs/common';
import { PaginationDTO } from '../ts/dto/query.dto';
import { ProductService } from './product.service';
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/get-all')
  public async getAll(
    @Query() { page_number, page_size, searchParam }: PaginationDTO,
  ) {
    return this.productService.getAll({ page_number, page_size }, searchParam);
  }

  @Get('/get-by-id')
  public async getByID(
    @Query() { id }: Omit<PaginationDTO, 'page_number' | 'page_size'>,
  ) {
    return await this.productService.getByID({ id });
  }
}
