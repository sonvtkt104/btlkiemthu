import { Module } from '@nestjs/common';
import { ShopsController } from './shops.controller';
import { ShopsService } from './shops.service';

@Module({})
export class ShopsModule {
    controllers: [ShopsController]
    providers: [ShopsService]
}
