import { Module } from '@nestjs/common';
import { modelDefineProvider } from '../../common/provider';
import { AddressSchema } from '../../schema/address.schema';
import { CartSchema } from '../../schema/cart.schema';
import { CategorySchema } from '../../schema/category.schema';
import { PaymentSchema } from '../../schema/payment.schema';
import { ProductSchema } from '../../schema/product.schema';
import { UserSchema } from '../../schema/user.schema';
import { MODEL_NAME } from '../../ts/enums/model_enums';
import { DatabaseModule } from '../database.module';
import { SeedService } from './seed.service';
import { SeedController } from './seedcontroller';

@Module({
  imports: [DatabaseModule],
  controllers: [SeedController],
  providers: [
    ...modelDefineProvider(MODEL_NAME.USER, UserSchema),
    ...modelDefineProvider(MODEL_NAME.CATEGORY, CategorySchema),
    ...modelDefineProvider(MODEL_NAME.PRODUCT, ProductSchema),
    ...modelDefineProvider(MODEL_NAME.CART, CartSchema),
    ...modelDefineProvider(MODEL_NAME.PAYMENT, PaymentSchema),
    ...modelDefineProvider(MODEL_NAME.ADDRESS, AddressSchema),
    SeedService,
  ],
})
export class SeedModule {}
