import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Shops } from './entitys/shops.entity';
import { Users } from './entitys/users';
import { Products } from './entitys/products.entity';
import { Collections } from './entitys/collections.entity';
import { Owners } from './entitys/owners.entity';
import { Cards } from './entitys/cards.entity';
import { HttpModule } from './http/http.module';
import { AuthMiddleware } from './middleware/auth.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: 'process.env',isGlobal: true}),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        Shops,
        Users, 
        Products, 
        Collections, 
        Owners, 
        Cards
      ],
      synchronize: true,
    }),
    HttpModule,
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}
