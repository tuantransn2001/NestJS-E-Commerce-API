import { Module } from '@nestjs/common';
import { modelDefineProvider } from '../common/provider';
import { DatabaseModule } from '../database/database.module';
import { UserSchema } from '../schema/user.schema';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...modelDefineProvider(MODEL_NAME.USER, UserSchema), UserService],
})
export class UserModule {}
