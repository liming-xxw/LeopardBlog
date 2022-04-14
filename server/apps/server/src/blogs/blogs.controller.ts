import { Controller, Get, Param, Query } from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly BlogService: BlogsService) {}

  @Get()
  async findAll(@Query() query) {
    return await this.BlogService.findAll(query);
  }

  @Get('hotlist')
  async hotLisy(@Query() query) {
    return await this.BlogService.hotlist(query);
  }

  @Get('findone/:id')
  async findById(@Param('id') id) {
    return await this.BlogService.findById(id);
  }
}
