import { Body, Controller, HttpException, HttpStatus, Post, UsePipes } from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { profile } from "../dtos/profile.dto";
import { JoiBodyValidator } from "../middleware/pipe/joi.body.validator";
import { Profile_Schema } from "../middleware/validations/user.validators";

@Controller('profile')
export class ProfileController{
   
    constructor(private readonly profileService: ProfileService) {}
   
    @Post()
    @UsePipes(new JoiBodyValidator(Profile_Schema))
    async createProfile(@Body() profile:profile){
        try {
            return await this.profileService.createProfile(profile);
        } catch (error) {
            console.log(error);

            throw new HttpException(
                error.message,
                error?.status || HttpStatus.NOT_IMPLEMENTED,
            );
        }
    }


}