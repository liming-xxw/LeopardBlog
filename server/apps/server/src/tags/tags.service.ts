import { BlogAndTag } from '@libs/db/entitys/blogandtag.entity';
import { Tag } from '@libs/db/entitys/tag.entity';
import { Injectable } from '@nestjs/common';
import console from 'console';
import { getManager } from 'typeorm';
import { Crud } from '../../../../libs/common/src/Utils/Crud';
@Injectable()
export class TagsService {
  Crud = new Crud(Tag);

  async findAll(query: any) {
    const data = await this.Crud.FindAll(query);

    var promises = data.data.map(async (item) => {
      return await getManager()
        .createQueryBuilder(BlogAndTag, 'bat')
        .leftJoinAndSelect('bat.tagid', 'tags')
        .where({
          tagid: item.id,
        })
        .getMany();
    });

    var list: any = await Promise.all(promises);

    data.data.forEach((item, i) => {
      list.forEach((code, i) => {
        if (String(item.id) == code[0]?.tagid.id) {
          item.num = code.length;
        } else {
          if (!item.num) {
            item.num = 0;
          }
        }
      });
    });
    return data;
  }
}
