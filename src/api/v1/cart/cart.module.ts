import { Module } from '@nestjs/common';
import { modelDefineProvider } from '../common/provider';
import { DatabaseModule } from '../database/database.module';
import { CartSchema } from '../schema/cart.schema';
import { ProductSchema } from '../schema/product.schema';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CartController],
  providers: [
    ...modelDefineProvider(MODEL_NAME.CART, CartSchema),
    ...modelDefineProvider(MODEL_NAME.PRODUCT, ProductSchema),
    CartService,
  ],
})
export class CartModule {}
