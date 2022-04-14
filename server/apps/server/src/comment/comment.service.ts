import { Crud } from '@app/common/Utils/Crud';
import Comment from '@libs/db/entitys/comment.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  Crud = new Crud(Comment);

  async create(body: Comment) {
    return await this.Crud.create(body);
  }
}
