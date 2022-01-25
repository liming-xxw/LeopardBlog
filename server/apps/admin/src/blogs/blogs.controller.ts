import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly BlogService: BlogsService) {}

  @Get()
  async findAll(@Query() query) {
    return await this.BlogService.findAll(query);
  }

  @Post('')
  async create(@Body() body) {
    return await this.BlogService.create(body);
  }

  @Post('/delete/:id')
  async delete(@Param('id') id) {
    return await this.BlogService.delete(id);
  }
}
