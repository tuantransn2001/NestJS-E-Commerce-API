import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { SeedModule } from './database/seed/seed.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    CategoryModule,
    SeedModule,
    ProductModule,
  ],
})
export class AppModule {}
