import { Controller, Get, Query } from '@nestjs/common';
import { PaginationDTO } from '../ts/dto/query.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Get('/get-all')
  public async getAll(@Query() paginationDTO: PaginationDTO) {
    return await this.categoryService.getAll(paginationDTO);
  }
  @Get('/get-by-id')
  public async getByID(@Query() { id }: Partial<PaginationDTO>) {
    return await this.categoryService.getByID({ id });
  }
}
