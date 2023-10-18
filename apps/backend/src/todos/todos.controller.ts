

import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodoDto } from "../dtos/create-todo.dto";
import { AuthGuard } from "../guards/auth.guard";

@Controller('todos')
@UseGuards(AuthGuard)
export class TodosController{
    
    constructor( private readonly todoService: TodosService){}

    @Post()
    async create(@Body() dto:CreateTodoDto){
        return await this.todoService.create(dto);
    }

    @Put(':id') 
    async update(@Param('id') id: string, @Body() dto: CreateTodoDto) {
        const updatedTodo = await this.todoService.update(Number(id), dto);

        if (!updatedTodo) {
            return { message: 'Todo not found' };
        }

        return updatedTodo;
    }
    @Delete(':id')
    async delete(@Param(':id') id: string){
        const deleteTodo = await this.todoService.delete(Number(id));

        if(!deleteTodo){
            return {message: 'Todo not found'};
        }

        return deleteTodo;
    }
    @Get()
    async get(){
        const todoList = await this.todoService.getAll();
        
        if(!todoList.length){
            return {message : 'No Data Found'};
        }
        return todoList
    }
}