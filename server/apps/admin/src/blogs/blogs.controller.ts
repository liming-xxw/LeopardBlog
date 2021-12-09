import { Controller, Get, Query } from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly BlogService: BlogsService) {}

  @Get()
  async findAll(@Query() query) {
    return await this.BlogService.findAll(query);
  }
}
