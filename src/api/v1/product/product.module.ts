import { Module } from '@nestjs/common';
import { modelDefineProvider } from '../common/provider';
import { DatabaseModule } from '../database/database.module';
import { ProductSchema } from '../schema/product.schema';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [
    ...modelDefineProvider(MODEL_NAME.PRODUCT, ProductSchema),
    ProductService,
  ],
})
export class ProductModule {}
