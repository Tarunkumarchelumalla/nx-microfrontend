import { InjectRepository } from "@nestjs/typeorm";
import { Auth } from "./auth.entity";
import { Repository } from "typeorm";
import { HttpException, HttpStatus } from "@nestjs/common";

export class AuthService{
    constructor(
        @InjectRepository(Auth) private readonly userRepository: Repository<Auth>,
    ){}

    async createUser(dto){
        const user = await this.userRepository.create(dto);

        if(!user){
            throw new HttpException("User Types not found", HttpStatus.BAD_REQUEST);
        }

        return await this.userRepository.save(user)
    }

    async updateUser(id:string,userDto:any){
        const user = await this.userRepository.findOne({where:{id}})

        if(!user){
            throw new HttpException("User Types not found", HttpStatus.BAD_REQUEST);
        }
        return await this.userRepository.save(userDto)
    }

    async deleteUser(id:string){
        
        const user = await this.userRepository.findOne({where:{id}})

        if(!user){
            throw new HttpException("User Types not found", HttpStatus.BAD_REQUEST);
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
    async getByQuery(){
        const data = await this.userRepository.createQueryBuilder('user')
        .orderBy('user.name', 'ASC')
        .getMany();
        return data
    }
    // .createQueryBuilder('user')
    // .where('user.status = :status', { status: 'active' })
    // .orderBy('user.username', 'ASC')
    // .getMany();

    
}