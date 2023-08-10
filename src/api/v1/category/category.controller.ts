import { Controller, Get, Query } from '@nestjs/common';
import { PaginationDTO } from '../ts/dto/query.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Get('/get-all')
  public async getAll(@Query() { page_number, page_size }: PaginationDTO) {
    return await this.categoryService.getAll({ page_number, page_size });
  }
  @Get('/get-by-id')
  public async getByID(@Query() { id }: Partial<PaginationDTO>) {
    return await this.categoryService.getByID({ id });
  }
}
