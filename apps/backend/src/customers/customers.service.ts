import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "./customers.entity";

@Injectable()
export class CustomerService{

    constructor(
        @InjectRepository(Customer) private readonly cutomerRepository: Repository<Customer>,
    ){}
    
    // create customer
    
    async createCustomer(dto){
        const customer = await this.cutomerRepository.create(dto);

        if(!customer){
            throw new HttpException("customer Types not found", HttpStatus.BAD_REQUEST);
        }

        return await this.cutomerRepository.save(customer)
    }

    async fetchOrderDetails(dto){
        let query = ''
        const customer = await this.cutomerRepository.query(query);

        if(!query){
            throw new HttpException("customer Types not found", HttpStatus.BAD_REQUEST);
        }

        return customer
    }





}