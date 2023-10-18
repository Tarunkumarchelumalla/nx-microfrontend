
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "./todos.entity";
import { ObjectId, Repository } from "typeorm";
import { CreateTodoDto } from "../dtos/create-todo.dto";

@Injectable()
export class TodosService{

    constructor(
        @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
    ){}

    async create( dto: CreateTodoDto){
        const todo = this.todoRepository.create(dto);

        return await this.todoRepository.save(todo)
    }

    async update(id: number, dto: CreateTodoDto) {

        const existingTodo = await this.todoRepository.findOne({ where: { id } });
        
        if (!existingTodo) {
            // Handle the case where the todo with the given ID doesn't exist.
            // You can throw an exception or return an appropriate response.
            return null; // For simplicity, we return null here.
        }

        // Update the existingTodo with the new data from the dto.
        existingTodo.title = dto.title; // Assuming "title" is a property of your Todo entity.

        return await this.todoRepository.save(existingTodo);
    }

    async delete(id:number){

        const deleteTodo = await this.todoRepository.findOne({ where: { id } })

        if(!deleteTodo){

            return null
        }
        await this.todoRepository.remove(deleteTodo)
        return deleteTodo;
    }

    async getAll(){
        const getTodos = await this.todoRepository.find()
        return getTodos
        
    }

}