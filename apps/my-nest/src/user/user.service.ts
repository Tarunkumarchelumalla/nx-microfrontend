import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { UserDto } from "../dtos/user.sto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserService{

    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
        private readonly jwtService:JwtService
    ){}

    async createUser(dto){

        const user = await this.userRepository.create(dto);

        if(!user){
            throw new HttpException("Some thing Went Wrong", HttpStatus.BAD_REQUEST);
        }

        return await this.userRepository.save(user)
    }

    async update(userid:string,userDto:any){
        const user = await this.userRepository.findOne({where:{userid}})

        if(!user){
            throw new HttpException("User not found", HttpStatus.BAD_REQUEST);
        }
        return await this.userRepository.save(userDto)
    }

    async deleteUser(userid:string){
        
        const user = await this.userRepository.findOne({where:{userid}})

        if(!user){
            throw new HttpException("User not found", HttpStatus.BAD_REQUEST);
        }
        return await this.userRepository.remove(user)
    }

    async getAll(){
        const users = await this.userRepository.find();

        if(!users.length){
            throw new HttpException("User Types not found", HttpStatus.BAD_REQUEST);
        }
        return users
    }

    // token generation

    async login(doc:UserDto){

        const user = await this.userRepository.findOne({ where:{email: doc.email} });
        console.log(user)
        if(!user){
            throw new HttpException("User not found", HttpStatus.BAD_REQUEST);
        }
        if(doc.password === user.password){

            return this.jwtService.sign({user})
       
        }else{
            throw new HttpException("Some thing went wrong", HttpStatus.BAD_REQUEST);
        }
        

    }

    async reset(doc){

        const user = await this.userRepository.findOne({where:{email:doc.eamil}})

        if(!user){
            throw new HttpException("User not found", HttpStatus.BAD_REQUEST);
        }
        if(user){
            user.password = doc.password
            await this.userRepository.save(user)

            return {message:'pwd-resert successfull'} 
       
        }

    }

}