import { Blog } from '@libs/db/entitys/blog.entity';
import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { ApiresultService } from '../apiresult/apiresult.service';
import { Pading } from '../apiresult/Dto/paging.dto';

@Injectable()
export class BlogsService {
    constructor(private readonly ApiresultService: ApiresultService) {}
  
    async findAll(query: Pading) {
        const search = query.search || {};
        const limit = Number(query.limit) || 10;
        const page = (query.page - 1) * limit || 0;
        const data = await getManager()
          .createQueryBuilder(Blog, 'blog')
          .leftJoinAndSelect('blog.type', 'type')
          .leftJoinAndSelect('blog.tags', 'tags')
          .leftJoinAndSelect('blog.author', 'author')
          .where(search)
          .skip(page)
          .take(limit)
          .getMany();
    
        const total = await getManager()
          .createQueryBuilder(Blog, 'blog')
          .leftJoinAndSelect('blog.type', 'type')
          .where(search)
          .getCount();
    
        const lastPage = Math.ceil(total / limit);
    
        return this.ApiresultService.paging({ total, data, lastPage, page:query.page });
      }


}
