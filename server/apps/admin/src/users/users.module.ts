import { Module } from '@nestjs/common';
import { ApiresultModule } from '../apiresult/apiresult.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports:[ApiresultModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
