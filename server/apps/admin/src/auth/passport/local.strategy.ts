import { Strategy, IStrategyOptions } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { getManager } from 'typeorm';
import { AdminUser } from '@libs/db/entitys/adminuser.entity';
import { BadRequestException, HttpException } from '@nestjs/common';
import { compareSync } from 'bcryptjs';
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      usernameField: 'adminname',
      passwordField: 'adminpass',
    } as IStrategyOptions);
  }

  async validate(username: string, password: string) {
    const user = await getManager()
      .createQueryBuilder(AdminUser, 'adminuser')
      .where('adminuser.adminname=:adminname', { adminname: username })
      .addSelect('adminuser.adminpass')
      .getOne();
    if (!user) {
      throw new HttpException('用户名不正确！', 401);
    }
    console.log(user);
    console.log("asdas");
    if (!compareSync(password, user.adminpass)) {
      throw new HttpException('密码不正确！', 401);
    }
    return user;
  }
}
