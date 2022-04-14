import { Blog } from '@libs/db/entitys/blog.entity';
import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { ApiresultService } from '../apiresult/apiresult.service';
import { Pading } from '../apiresult/Dto/paging.dto';
import { Crud } from '@app/common/Utils/Crud';
import { Tag } from '@libs/db/entitys/tag.entity';
import { BlogAndTag } from '@libs/db/entitys/blogandtag.entity';
import { User } from '@libs/db/entitys/user.entity';
@Injectable()
export class BlogsService {
  constructor(private readonly ApiresultService: ApiresultService) {}
  Crudx = new Crud(Blog);
  Cruds = new Crud(BlogAndTag);
  async findAll(query: Pading) {
    const search = query.search || '{}';
    const like = query.like || '{}';
    const limit = Number(query.limit) || 10;
    const page = (query.page - 1) * limit || 0;
    // console.log(like)

    const data = await getManager()
      .createQueryBuilder(Blog, 'blog')
      .leftJoinAndSelect('blog.type', 'type')
      .leftJoinAndSelect('blog.author', 'author')
      .where(JSON.parse(search))
      .setParameters(JSON.parse(like))
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
        if (code.length > 0 && String(item.id) == code[0]?.blog) {
          item.items = code;
        } else {
          item.items = [];
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

  async create(blog: Blog) {
    delete blog.id;
    // blog.content = JSON.stringify(blog.content);
    
    console.log(blog.content);
    const data = await getManager()
      .createQueryBuilder()
      .insert()
      .into(Blog)
      .values(blog)
      .execute();
    console.log(data);
    const { tags } = blog;
    const values = [];
    for (let i = 0; i < tags.length; i++) {
      values[i] = {
        blogid: data.identifiers[0].id,
        tagid: tags[i],
        blog: data.identifiers[0].id,
      };
    }
    const tagdata = await getManager()
      .createQueryBuilder()
      .insert()
      .into(BlogAndTag)
      .values(values)
      .execute();

    if (data.raw.affectedRows > 0) {
      return this.ApiresultService.message(200, '插入成功');
    } else {
      return this.ApiresultService.message(500, '插入失败请检查参数');
    }
  }

  async delete(id) {
    await getManager()
      .createQueryBuilder()
      .delete()
      .from(BlogAndTag)
      .where('blogid=:id', { id })
      .execute();

    return await this.Crudx.delete(id);
  }

  async update(blog: Blog) {
    const { tags } = blog;
    const values = [];
    for (let i = 0; i < tags.length; i++) {
      values[i] = {
        blogid: blog.id,
        tagid: tags[i],
      };
    }

    values.forEach(async (v) => {
      await getManager()
        .createQueryBuilder()
        .update(BlogAndTag)
        .set(v)
        .where('');
    });

    return await this.Crudx.update(blog);
  }
}
