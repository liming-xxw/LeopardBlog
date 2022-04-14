import { Crud } from '@app/common/Utils/Crud';
import { User } from '@libs/db/entitys/user.entity';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ApiresultService } from 'apps/admin/src/apiresult/apiresult.service';
@Injectable()
export class UsersService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly ApiresultService: ApiresultService,
  ) {}
  Crud = new Crud(User);
  async email(query) {
    var aqq = /^[1-9][0-9]{4,10}@qq.com$/;
    const email = query.email;
    if (aqq.test(email)) {
      const randomNum = ('000000' + Math.floor(Math.random() * 999999)).slice(
        -6,
      );
      await this.mailerService.sendMail({
        to: email,
        from: '3111345436@qq.com',
        subject: 'CainBlog ✔',
        text: '验证码:' + randomNum,
      });

      return this.ApiresultService.MESSAGE(200, '验证成功,验证码已发送请确认', {
        email: randomNum,
        to: email,
      });
    } else {
      return this.ApiresultService.message(500, '邮箱格式不正确');
    }
  }

  async UserCreate(body: User) {
    
    return await this.Crud.create(body);
  }
}
