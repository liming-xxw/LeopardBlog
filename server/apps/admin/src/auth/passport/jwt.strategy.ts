import { AdminUser } from '@libs/db/entitys/adminuser.entity';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, StrategyOptions, ExtractJwt } from 'passport-jwt';
import { getManager } from 'typeorm';
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
    } as StrategyOptions);
  }

  async validate(id) {
    return await getManager()
      .createQueryBuilder(AdminUser, 'adminuser')
      .where('id=:id', {
        id: id,
      })
      .getOne();
  }
}
