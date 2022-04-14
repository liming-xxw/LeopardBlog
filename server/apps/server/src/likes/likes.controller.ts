import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { getManager, Like } from 'typeorm';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly LikesService: LikesService) {}
  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() body, @Req() req) {
    const val = {
      blog: body.blog,
      user: req.user.id,
    };
    return await this.LikesService.create(val);
  }

  @Get('finone/:id')
  @UseGuards(AuthGuard('jwt'))
  async findone(@Param('id') id, @Req() req) {
    return await this.LikesService.findone({ user: req.user.id, blog: id });
  }
}
