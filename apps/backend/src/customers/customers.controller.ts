import { Body, Controller, HttpException, HttpStatus, Post, UsePipes } from "@nestjs/common";
import { CustomerService } from "./customers.service";
import { Cls_Customer } from "../dtos/cutomer.dto";

@Controller('customer')
export class CustomerController{
   
    constructor(private readonly customerService: CustomerService) {}
   
    @Post()
    // @UsePipes(new JoiBodyValidator(Profile_Schema))
    async createProfile(@Body() customer:Cls_Customer){
        try {
            return await this.customerService.createCustomer(customer);
        } catch (error) {
            console.log(error);

            throw new HttpException(
                error.message,
                error?.status || HttpStatus.NOT_IMPLEMENTED,
            );
        }
    }


}