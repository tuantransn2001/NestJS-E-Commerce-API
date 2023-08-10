import { Module } from '@nestjs/common';
import { modelDefineProvider } from '../common/provider';
import { DatabaseModule } from '../database/database.module';
import { AddressSchema } from '../schema/address.schema';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AddressController],
  providers: [
    ...modelDefineProvider(MODEL_NAME.ADDRESS, AddressSchema),
    AddressService,
  ],
})
export class AddressModule {}
