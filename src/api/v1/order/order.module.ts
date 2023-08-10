import { Module } from '@nestjs/common';
import { modelDefineProvider } from '../common/provider';
import { DatabaseModule } from '../database/database.module';
import { OrderSchema } from '../schema/order.schema';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderController],
  providers: [
    ...modelDefineProvider(MODEL_NAME.ORDER, OrderSchema),
    OrderService,
  ],
})
export class OrderModule {}
