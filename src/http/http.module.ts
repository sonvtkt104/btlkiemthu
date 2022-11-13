import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { ShopsController } from './shops/shops.controller';
import { ShopsService } from './shops/shops.service';
import { ShopsModule } from './shops/shops.module';
import { ProductsModule } from './products/products.module';
import { CollectionsModule } from './collections/collections.module';
import { OwnersModule } from './owners/owners.module';
import { CardsModule } from './cards/cards.module';
import { OrdersModule } from './orders/orders.module';

@Module({
    imports: [UsersModule, ShopsModule, ProductsModule, CollectionsModule, OwnersModule, CardsModule, OrdersModule],
    controllers: [UsersController, ShopsController],
    providers: [UsersService, ShopsService]
})
export class HttpModule {}
