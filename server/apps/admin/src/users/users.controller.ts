import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly UserService:UsersService){}

    @Get("")
    async findAll(){
        return await this.UserService.findAll();
    }

    @Post("")
    async create(@Body() body){
        return await this.UserService.create(body);
    }

    @Post("update")
    async update(@Body() body){
        return await this.UserService.update(body);
    }

    @Post("delete/:id")
    async delete(@Param('id') id){
        return await this.UserService.delete(id);
    }
}
