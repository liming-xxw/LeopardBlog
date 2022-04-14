import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [PassportModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
