import { AdminUser } from '@libs/db/entitys/adminuser.entity';
import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { hashSync } from 'bcryptjs';
import { ApiresultService } from '../apiresult/apiresult.service';
class dto {
  adminname?: string;
  adminpass: string;
  admingrade?: string;
  nickname?: string;
  avatar?: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly ApiService: ApiresultService) {}
  async register(body: dto) {
    body.adminpass = hashSync(body.adminpass);

    const user = await getManager()
      .createQueryBuilder(AdminUser, 'adminuser')
      .where({
        adminname: body.adminname,
      })
      .getOne();
    if (user) {
      this.ApiService.message(500, '用户账号已被注册');
    }
    const data = await getManager()
      .createQueryBuilder()
      .insert()
      .into(AdminUser)
      .values(body)
      .execute();
    return data;
  }
}
