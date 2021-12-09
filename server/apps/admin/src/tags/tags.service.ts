import { Blog } from '@libs/db/entitys/blog.entity';
import { Tag } from '@libs/db/entitys/tag.entity';
import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { ApiresultService } from '../apiresult/apiresult.service';
import { Pading } from '../apiresult/Dto/paging.dto';

@Injectable()
export class TagsService {
  constructor(private readonly ApiresultService: ApiresultService) {}

  async findAll(query: Pading) {
    const search = query.search || {};
    const limit = Number(query.limit) || 10;
    const page = (query.page - 1) * limit || 0;
    const data = await getManager()
      .createQueryBuilder(Tag, 'tag')
      .leftJoinAndSelect('tag.superiors', 'superiors')
      .where(JSON.parse(search))
      .skip(page)
      .take(limit)
      .getMany();

    const total = await getManager()
      .createQueryBuilder(Tag, 'tag')
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

  async create(task: Tag) {
    const data = await getManager()
      .createQueryBuilder()
      .insert()
      .into(Tag)
      .values(task)
      .execute();
    if (data.raw.affectedRows >= 1) {
      return this.ApiresultService.message('插入成功', 200);
    } else {
      return this.ApiresultService.message('未知错误', 100);
    }
  }

  async update(table: Tag) {
    const data = await getManager()
      .createQueryBuilder()
      .update(Tag)
      .set(table)
      .where('id=:id', { id: table.id })
      .execute();
    if (data.affected >= 1) {
      return this.ApiresultService.message('修改成功', 200);
    } else {
      return this.ApiresultService.message('未知错误,请检查id', 100);
    }
  }

  async delete(id) {
    const taskitem = await getManager()
      .createQueryBuilder()
      .update(Blog)
      .set({
        tags: null,
      })
      .where('tags=:id', { id: id })
      .execute();

    const data = await getManager()
      .createQueryBuilder()
      .delete()
      .from(Tag)
      .where('id=:id', { id: id })
      .execute();
    if (data.affected != 0) {
      return this.ApiresultService.message('删除成功', 200);
    } else {
      return this.ApiresultService.message('删除失败', 100);
    }
  }
}
