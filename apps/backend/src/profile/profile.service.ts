import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Profile } from "./profile.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProfileService{

    constructor(
        @InjectRepository(Profile) private readonly userRepository: Repository<Profile>,
    ){}
 
    async createProfile(dto){
        const user = await this.userRepository.create(dto);

        if(!user){
            throw new HttpException("User Types not found", HttpStatus.BAD_REQUEST);
        }

        return await this.userRepository.save(user)
    }





}