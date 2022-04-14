import { ApiresultService } from 'apps/admin/src/apiresult/apiresult.service';
import { Pading } from 'apps/admin/src/apiresult/Dto/paging.dto';
import { Blog } from '@libs/db/entitys/blog.entity';
import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { BlogAndTag } from '@libs/db/entitys/blogandtag.entity';
import console from 'console';
@Injectable()
export class BlogsService {
  constructor(private readonly ApiresultService: ApiresultService) {}

  async findAll(query: Pading) {
    const search = query.search || '{}';
    const limit = Number(query.limit) || 10;
    const page = (query.page - 1) * limit || 0;
    const data = await getManager()
      .createQueryBuilder(Blog, 'blog')
      .leftJoinAndSelect('blog.type', 'type')
      .leftJoinAndSelect('blog.author', 'author')
      .where(JSON.parse(search))
      .skip(page)
      .take(limit)
      .getMany();

    var promises = data.map(async (item) => {
      return await getManager()
        .createQueryBuilder(BlogAndTag, 'bat')
        .leftJoinAndSelect('bat.tagid', 'tags')
        .where({
          blogid: item.id,
        })
        .getMany();
    });

    var list: any = await Promise.all(promises);

    data.forEach((item: any, i) => {
      list.forEach((code: any, i) => {
        if (String(item.id) == code[0]?.blog) {
          item.items = code;
          item.item = 'b';
        } else {
          item.item = 'a';
        }
      });
    });
    const total = await getManager()
      .createQueryBuilder(Blog, 'blog')
      .leftJoinAndSelect('blog.type', 'type')
      .where(JSON.parse(search))
      .getCount();

    const lastPage = Math.ceil(total / limit);

    return this.ApiresultService.paging({
      total,
      data,
      lastPage,
      page: query.page,
    });
  }

  async hotlist(query: Pading) {
    const search = query.search || '{}';
    const limit = Number(query.limit) || 10;
    const page = (query.page - 1) * limit || 0;
    const data = await getManager()
      .createQueryBuilder(Blog, 'blog')
      .leftJoinAndSelect('blog.type', 'type')
      .leftJoinAndSelect('blog.author', 'author')
      .where({
        hot: 1,
      })
      .skip(page)
      .take(limit)
      .getMany();
    const total = await getManager()
      .createQueryBuilder(Blog, 'blog')
      .leftJoinAndSelect('blog.type', 'type')
      .where({
        hot: 1,
      })
      .getCount();

    const lastPage = Math.ceil(total / limit);
    data.map((v: Blog) => {
      delete v.htmlcontent;
      delete v.content;
      delete v.introduce;
      delete v.type;
    });

    return this.ApiresultService.paging({
      total,
      data,
      lastPage,
      page: query.page,
    });
  }

  async findById(id) {
    const data = await getManager()
      .createQueryBuilder(Blog, 'blog')
      .where('blog.id = :id', { id: id })
      .getOne();
    return this.ApiresultService.MESSAGE(200, '查询成功', data);
  }
}
