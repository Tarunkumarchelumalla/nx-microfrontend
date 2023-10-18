import { Body, Controller, HttpException, HttpStatus, Post, UsePipes } from "@nestjs/common";
import { OrderService } from "./orders.service";
import { Order } from "../dtos/order.dto";

@Controller('order')
export class OrderController{
   
    constructor(private readonly orderService: OrderService) {}
   
    @Post()
    async createProfile(@Body() order:Order){
        try {
            return await this.orderService.createProfile(order);
        } catch (error) {
            console.log(error);

            throw new HttpException(
                error.message,
                error?.status || HttpStatus.NOT_IMPLEMENTED,
            );
        }
    }


}