import { Module } from '@nestjs/common';
import { modelDefineProvider } from '../../common/provider';
import { CategorySchema } from '../../schema/category.schema';
import { ProductSchema } from '../../schema/product.schema';
import { UserSchema } from '../../schema/user.schema';
import { MODEL_NAME } from '../../ts/enums/model_enums';
import { DatabaseModule } from '../database.module';
import { SeedService } from './seed.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...modelDefineProvider(MODEL_NAME.USER, UserSchema),
    ...modelDefineProvider(MODEL_NAME.CATEGORY, CategorySchema),
    ...modelDefineProvider(MODEL_NAME.PRODUCT, ProductSchema),
    SeedService,
  ],
})
export class SeedModule {}
