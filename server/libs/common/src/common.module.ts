import { Global, Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from '@libs/db';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from '@nestjs-modules/mailer';
@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory() {
        return {
          transport: {
            host: 'smtp.qq.com',
            port: '465',
            auth: {
              user: process.env.EMAILD_USER,
              pass: process.env.EMAILD_PASS,
            },
          },
        };
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      useFactory() {
        return {
          secret: process.env.SECRET,
        };
      },
    }),
    DbModule,
  ],
  providers: [CommonService],
  exports: [CommonService, JwtModule],
})
export class CommonModule {}
