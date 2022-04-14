import { Crud } from '@app/common/Utils/Crud';
import { User } from '@libs/db/entitys/user.entity';
import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { ApiresultService } from '../apiresult/apiresult.service';
@Injectable()
export class UsersService {
  constructor(private readonly ApiresultService: ApiresultService) {}
  Crudx = new Crud(User);

  async findAll(query) {
    return await this.Crudx.FindAll(query);
  }

  async create(user: User) {
    return await this.Crudx.create(user);
  }

  async update(table: User) {
    return await this.Crudx.update(table);
  }

  async delete(id) {
    return await this.Crudx.delete(id);
  }
}
