import { Module } from "@nestjs/common";
import { AuthController } from "./auth.cotroller";
import { Auth } from "./auth.entity";

import { AuthService } from "./auth.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports:[TypeOrmModule.forFeature([Auth])],
    controllers:[AuthController],
    providers:[AuthService]
})
export class AuthModule{

}