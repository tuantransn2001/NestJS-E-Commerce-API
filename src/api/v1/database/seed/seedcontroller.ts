import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private seedService: SeedService) {}

  @Get('/get-data-test')
  public async getDataTest() {
    return {
      category: await this.seedService.generateCategoryMockData(),
    };
  }
}
