import { Module } from "@nestjs/common";
import { TaskService } from "./task.service";
import { TaskController } from "./task.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./task.entity";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports:[JwtModule.register({
        secret: '8adf91bd-fbb9-4f31-bc88-3b787196a1b9',
        signOptions: { expiresIn: '30h' }, 
      }),
      TypeOrmModule.forFeature([Task])],
    controllers:[TaskController],
    providers:[TaskService]
})
export class TaskModule{

}