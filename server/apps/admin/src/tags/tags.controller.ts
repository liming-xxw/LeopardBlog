import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly TagsService: TagsService) {}

  @Get()
  async findAll(@Query() query) {
    return await this.TagsService.findAll(query);
  }

  @Post()
  async create(@Body() body) {
    return await this.TagsService.create(body);
  }

  @Post('update')
  async update(@Body() body) {
    return await this.TagsService.update(body);
  }

  @Post('/delete/:id')
  async delete(@Param('id') id) {
    return await this.TagsService.delete(id);
  }
}
