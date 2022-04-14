import { User } from '@libs/db/entitys/user.entity';
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
      .createQueryBuilder(User, 'User')
      .where('id=:id', {
        id: id,
      })
      .getOne();
  }
}
