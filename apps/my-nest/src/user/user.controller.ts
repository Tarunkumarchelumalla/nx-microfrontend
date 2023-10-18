import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards, UsePipes } from "@nestjs/common";
import { UserService } from "./user.service";
import { Cls_User } from "../models/user.model";
import { JoiBodyValidator } from "../middleware/pipe/joi.body.validator";
import { UserDetailsSchema } from "../middleware/validations/validators";
import { UserDto } from "../dtos/user.sto";


@Controller('user')
export class userController{

    constructor(private readonly userService:UserService){}
    
    //register
    @Post('register')
    @UsePipes(new JoiBodyValidator(UserDetailsSchema))
    async create(@Body() user:UserDto){

        try {
            return await this.userService.createUser(user);
        } catch (error) {
            console.log(error);

            throw new HttpException(
                error.message,
                error?.status || HttpStatus.NOT_IMPLEMENTED,
            );
        }

    }

    @Put(':id')
    @UsePipes(new JoiBodyValidator(UserDetailsSchema))
    async update(@Param('id') id: string,@Body() user:Cls_User){
        try {
            return await this.userService.update(id, user);
        } catch (error) {
            console.log(error);

            throw new HttpException(
                error.message,
                error?.status || HttpStatus.NOT_IMPLEMENTED,
            );
        }

    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        try {
            return await this.userService.deleteUser(id);
        } catch (error) {
            console.log(error);

            throw new HttpException(
                error.message,
                error?.status || HttpStatus.NOT_IMPLEMENTED,
            );
        }

    }

    @Get()
    async getAll() {
        try{
        return await this.userService.getAll();
        } catch(error){
            console.log(error);

            throw new HttpException(
                error.message,
                error?.status || HttpStatus.NOT_IMPLEMENTED,
            );
        }
    }

    @Post('login')
    async loginUser(@Body() user:UserDto){
        try{
            return await this.userService.login(user);
            } catch(error){
                console.log(error);
    
                throw new HttpException(
                    error.message,
                    error?.status || HttpStatus.NOT_IMPLEMENTED,
                );
            }
    }
    @Post('reset-pwd')
    async forgotPwd(@Body() user:UserDto){
        try{
            return await this.userService.reset(user);
            } catch(error){
                console.log(error);
    
                throw new HttpException(
                    error.message,
                    error?.status || HttpStatus.NOT_IMPLEMENTED,
                );
            }
    }


}