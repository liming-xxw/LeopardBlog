import { Strategy, IStrategyOptions } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { getManager } from 'typeorm';
import { BadRequestException, HttpException } from '@nestjs/common';
import { compareSync } from 'bcryptjs';
import { User } from '@libs/db/entitys/user.entity';
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      usernameField: 'username',
      passwordField: 'password',
    } as IStrategyOptions);
  }

  async validate(username: string, password: string) {
    const user = await getManager()
      .createQueryBuilder(User, 'user')
      .where('user.username=:username', { username: username })
      .orWhere('user.email=:email', { email: username })
      .addSelect('user.password')
      .getOne();


    if (!user) {
      throw new HttpException('用户名不正确！', 401);
    }

    if (!compareSync(password, user.password)) {
      throw new HttpException('密码不正确！', 401);
    }
    return user;
  }
}
