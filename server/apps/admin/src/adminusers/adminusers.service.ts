import { AdminUser } from '@libs/db/entitys/adminuser.entity';
import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { ApiresultService } from '../apiresult/apiresult.service';

@Injectable()
export class AdminusersService {
    constructor(private readonly ApiresultService: ApiresultService) {}

  async findAll(): Promise<any> {
    const data = await  getManager().createQueryBuilder(AdminUser, 'user').getMany();
    return this.ApiresultService.MESSAGE('查询成功', 200, data);
  }

  async create(user: AdminUser) {
    const data = await getManager()
      .createQueryBuilder()
      .insert()
      .into(AdminUser)
      .values(user)
      .execute();
    if (data.raw.affectedRows >= 1) {
      return this.ApiresultService.message('插入成功', 200);
    } else {
      return this.ApiresultService.message('未知错误', 100);
    }
  }

  async update(table: AdminUser) {
    const data = await getManager()
      .createQueryBuilder()
      .update(AdminUser)
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
    const data = await getManager()
      .createQueryBuilder()
      .delete()
      .from(AdminUser)
      .where('id=:id', { id: id })
      .execute();
    if (data.affected != 0) {
      return this.ApiresultService.message('删除成功', 200);
    } else {
      return this.ApiresultService.message('删除失败', 100);
    }
  }
}
