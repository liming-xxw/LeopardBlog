import { Crud } from '@app/common/Utils/Crud';
import Like from '@libs/db/entitys/like.entity';
import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';

@Injectable()
export class LikesService {
  Card = new Crud(Like);

  async findAll(query) {
    return await this.Card.FindAll(query);
  }

  async create(body) {
    const data = await getManager()
      .createQueryBuilder(Like, 'like')
      .where({
        user: body.user,
        blog: body.blog,
      })
      .getOne();
    if (data) {
      return await this.Card.delete(String(data.id));
    } else {
      return await this.Card.create(body);
    }
  }

  async findone(body: any) {
    const data = await getManager()
      .createQueryBuilder(Like, 'like')
      .where({
        user: body.user,
        blog: body.blog,
      })
      .getOne();
    return data;
  }
}
