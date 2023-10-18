import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "./orders.entity";

@Injectable()
export class OrderService{

    constructor(
        @InjectRepository(Order) private readonly orderRepository: Repository<Order>,
    ){}
 
    // create order 
 
    async createProfile(dto){
        const order = await this.orderRepository.create(dto);

        if(!order){
            throw new HttpException("order Types not found", HttpStatus.BAD_REQUEST);
        }

        return await this.orderRepository.save(order)
    }



}