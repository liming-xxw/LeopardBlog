import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly AuthService: AuthService,
    private jwtService: JwtService,
  ) {}
  @Post('register')
  async register(@Body() body) {
    return await this.AuthService.register(body);
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Body() body, @Req() req) {
    return {
      token: this.jwtService.sign(String(req.user.id)),
    };
  }

  @Post('findone')
  @UseGuards(AuthGuard('jwt'))
  async findone(@Req() req) {
    return req.user;
  }
}
