import { User } from '@libs/db/entitys/user.entity';
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { getManager } from 'typeorm';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post('email')
  async Email(@Body() body) {
    return this.UsersService.email(body);
  }

  @Post()
  async UserCreate(@Body() body) {
    return this.UsersService.UserCreate(body);
  }

  @Post()
  async UserUpdate(){
    // await getManager().createQueryBuilder(User).
  }

  @Post('finduser')
  @UseGuards(AuthGuard('jwt'))
  async finduser(@Req() req) {
    return req.user;
  }
}
