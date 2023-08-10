import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PaymentController } from './payment.controller';
import { modelDefineProvider } from '../common/provider/modelDefine.provider';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { PaymentSchema } from '../schema/payment.schema';
import { PaymentService } from './payment.service';
@Module({
  imports: [DatabaseModule],
  controllers: [PaymentController],
  providers: [
    ...modelDefineProvider(MODEL_NAME.PAYMENT, PaymentSchema),
    PaymentService,
  ],
})
export class PaymentModule {}
