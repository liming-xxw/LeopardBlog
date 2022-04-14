import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}
  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Body() body, @Req() req) {
    return {
      token: this.jwtService.sign(String(req.user.id)),
    };
  }  
}
