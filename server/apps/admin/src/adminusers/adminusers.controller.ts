import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdminusersService } from './adminusers.service';

@Controller('adminusers')
export class AdminusersController {
    constructor(private readonly AdminUserService:AdminusersService){}

    @Get("")
    async findAll(){
        return await this.AdminUserService.findAll();
    }

    @Post("")
    async create(@Body() body){
        return await this.AdminUserService.create(body);
    }

    @Post("update")
    async update(@Body() body){
        return await this.AdminUserService.update(body);
    }

    @Post("delete/:id")
    async delete(@Param('id') id){
        return await this.AdminUserService.delete(id);
    }
}
