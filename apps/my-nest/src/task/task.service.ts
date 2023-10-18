import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Task } from "./task.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskDto } from "../dtos/task.dto";

@Injectable()
export class TaskService{

    constructor(
        @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
     
    ){}
    async create(dto:TaskDto,){

        const task = await this.taskRepository.create(dto);

        if(!task){
            throw new HttpException("Some thing Went Wrong", HttpStatus.BAD_REQUEST);
        }

        return await this.taskRepository.save(task)
    }

    async update(taskId:string,taskDto:TaskDto){
        const task = await this.taskRepository.findOne({where:{taskId}})

        if(!task){
            throw new HttpException("task not found", HttpStatus.BAD_REQUEST);
        }
        return await this.taskRepository.save(taskDto)
    }

    async deletetask(taskId:string){
        
        const task = await this.taskRepository.findOne({where:{taskId}})

        if(!task){
            throw new HttpException("task not found", HttpStatus.BAD_REQUEST);
        }
        return await this.taskRepository.remove(task)
    }

    async getAll(){
        const tasks = await this.taskRepository.find();

        if(!tasks.length && tasks.length!=0){
            throw new HttpException("task ", HttpStatus.BAD_REQUEST);
        }
        return tasks
    }
    
}