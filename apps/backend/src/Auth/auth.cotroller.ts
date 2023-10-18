import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards, UsePipes } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JoiBodyValidator } from "../middleware/pipe/joi.body.validator";
import { UserDetailsSchema } from "../middleware/validations/user.validators";
import { UserDto } from "../dtos/user.dto";

@Controller('user')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post()
    @UsePipes(new JoiBodyValidator(UserDetailsSchema))
    async createUser(@Body() user: UserDto) {
        try {
            return await this.authService.createUser(user);
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
    async updateUser(@Param('id') id: string, @Body() user: UserDto) {
        try {
            return await this.authService.updateUser(id, user);
        } catch (error) {
            console.log(error);

            throw new HttpException(
                error.message,
                error?.status || HttpStatus.NOT_IMPLEMENTED,
            );
        }
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        try{
        return await this.authService.deleteUser(id);
        } catch(error){
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
        return await this.authService.getAll();
        } catch(error){
            console.log(error);

            throw new HttpException(
                error.message,
                error?.status || HttpStatus.NOT_IMPLEMENTED,
            );
        }
    }

    @Get('/order')
    async getSome() {
        try{
        return await this.authService.getByQuery();
        } catch(error){
            console.log(error);

            throw new HttpException(
                error.message,
                error?.status || HttpStatus.NOT_IMPLEMENTED,
            );
        }
    }

}