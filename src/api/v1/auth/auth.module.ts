import { Module } from '@nestjs/common';
import { modelDefineProvider } from '../common/provider';
import { DatabaseModule } from '../database/database.module';
import { UserSchema } from '../schema/user.schema';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [...modelDefineProvider(MODEL_NAME.USER, UserSchema), AuthService],
})
export class AuthModule {}
