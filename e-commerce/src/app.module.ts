import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { UserService } from './modules/user/user.service';
import { UserController } from './modules/user/user.controller';
import { OrderModule } from './modules/order/order.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from './jwt/jwt.module';
import * as process from 'node:process';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './src/environment/.development.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProductModule,
    UserModule,
    OrderModule,
    AuthModule,
    JwtModule,
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class AppModule {}
