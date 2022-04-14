import { Crud } from '@app/common/Utils/Crud';
import { AdminUser } from '@libs/db/entitys/adminuser.entity';
import { Injectable } from '@nestjs/common';
import { ApiresultService } from '../apiresult/apiresult.service';
import { hashSync } from 'bcryptjs';

@Injectable()
export class AdminusersService {
  constructor(private readonly ApiresultService: ApiresultService) {}
  Crudx = new Crud(AdminUser);

  async findAll(query): Promise<any> {
    return await this.Crudx.FindAll(query);
  }

  async create(user: AdminUser) {
    user.adminpass = hashSync(user.adminpass);
    return await this.Crudx.create(user);
  }

  async update(table: AdminUser) {
    return await this.Crudx.update(table);
  }

  async delete(id) {
    return await this.Crudx.delete(id);
  }
}
