import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "./orders.entity";
import { OrderService } from "./orders.service";
import { OrderController } from "./orders.controller";

@Module({
    imports:[TypeOrmModule.forFeature([Order])],
    providers:[OrderService],
    controllers:[OrderController]
})
export class OrderModule{

}