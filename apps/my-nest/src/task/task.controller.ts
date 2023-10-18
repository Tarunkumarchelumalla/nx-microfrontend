import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Req, UseGuards, UsePipes } from "@nestjs/common";
import { AuthGuard } from "../guards/auth.guard";
import { TaskDto } from "../dtos/task.dto";
import { JoiBodyValidator } from "../middleware/pipe/joi.body.validator";
import { TaskSchema } from "../middleware/validations/validators";
import { TaskService } from "./task.service";
import { Cls_Task } from "../models/task.model";

@Controller('task')
@UseGuards(AuthGuard)
export class TaskController{
    
    constructor(private taskService:TaskService){}
    
    @Post()
    @UsePipes(new JoiBodyValidator(TaskSchema))
    async createTask(@Body() task:TaskDto,@Req() request: any){
        try {
            console.log(request)
            const currentUser = request.user
            console.log(currentUser)
            // task.taskAssigner = 
            return await this.taskService.create(task);
        } catch (error) {
            console.log(error);

            throw new HttpException(
                error.message,
                error?.status || HttpStatus.NOT_IMPLEMENTED,
            );
        }
    }

    @Put(':id')
    @UsePipes(new JoiBodyValidator(TaskSchema))
    async updateTask(@Param() id:string, @Body() task:Cls_Task){
        try {
            return await this.taskService.update(id, task);
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
            return await this.taskService.deletetask(id);
        } catch (error) {
            console.log(error);

            throw new HttpException(
                error.message,
                error?.status || HttpStatus.NOT_IMPLEMENTED,
            );
        }

    }

    @Get()
    async getAll(@Req() req:any) {
        console.log(req.user)
        try{

        return await this.taskService.getAll();
        } catch(error){
            console.log(error);

            throw new HttpException(
                error.message,
                error?.status || HttpStatus.NOT_IMPLEMENTED,
            );
        }
    }



}