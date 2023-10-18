import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "./customers.entity";
import { CustomerService } from "./customers.service";
import { CustomerController } from "./customers.controller";

@Module({
    imports:[TypeOrmModule.forFeature([Customer])],
    providers:[CustomerService],
    controllers:[CustomerController]
})
export class CustomerModule{

}