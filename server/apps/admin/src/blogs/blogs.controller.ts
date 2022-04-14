import { Blog } from '@libs/db/entitys/blog.entity';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { getManager } from 'typeorm';
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

  @Post('/update')
  async update(@Body() body) {
    return await this.BlogService.update(body);
  }

  @Get('ceshi')
  async kkk(@Query() query) {
    // const search = query.search || '{}';
    const like = query.like || '{}';
    // const like = query.like || '{}';
    console.log(like);

    // // console.log(JSON.parse(like));
    // const search = "blog.title LIKE:title blog.tag:tag"
    // const like = {
    //   title:"%vue%",
    //   tag:"4"
    // }

    // return getManager()
    //   .createQueryBuilder(Blog, 'blog')
    //   .where(search)
    //   .setParameters()
    //   .getMany();
  }
}
