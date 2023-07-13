import { Module } from '@nestjs/common';
import { modelDefineProvider } from '../common/provider';
import { DatabaseModule } from '../database/database.module';
import { CategorySchema } from '../schema/category.schema';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [
    ...modelDefineProvider(MODEL_NAME.CATEGORY, CategorySchema),
    CategoryService,
  ],
})
export class CategoryModule {}
