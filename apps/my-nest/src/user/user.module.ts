import { Module } from "@nestjs/common";
import { userController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports:[TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
        secret: '8adf91bd-fbb9-4f31-bc88-3b787196a1b9',
        signOptions: { expiresIn: '30h' }, 
      }),],
    controllers:[userController],
    providers:[UserService]
})
export class UserModule{

}