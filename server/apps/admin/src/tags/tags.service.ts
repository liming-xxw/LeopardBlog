import { Crud } from '@app/common/Utils/Crud';
import { Blog } from '@libs/db/entitys/blog.entity';
import { Tag } from '@libs/db/entitys/tag.entity';
import { Injectable } from '@nestjs/common';
import { getManager, Table } from 'typeorm';
import { ApiresultService } from '../apiresult/apiresult.service';
import { Pading } from '../apiresult/Dto/paging.dto';

@Injectable()
export class TagsService {
  constructor(private readonly ApiresultService: ApiresultService) {}
  Crudx = new Crud(Tag);
  async findAll(query: Pading) {
    return await this.Crudx.FindAll(query,'entity.superiors')
  }

  async create(task: Tag) {
    return await this.Crudx.create(task);
  }

  async update(table: Tag) {
    return await this.Crudx.update(Table);
  }

  async delete(id) {
    // const taskitem = await getManager()
    //   .createQueryBuilder()
    //   .update(Blog)
    //   .set({
    //     tags: null,
    //   })
    //   .where('tags=:id', { id: id })
    //   .execute();

    const data = await getManager()
      .createQueryBuilder()
      .delete()
      .from(Tag)
      .where('id=:id', { id: id })
      .execute();
    if (data.affected != 0) {
      return this.ApiresultService.message(200, '删除成功');
    } else {
      return this.ApiresultService.message(100, '删除失败');
    }
  }
}
