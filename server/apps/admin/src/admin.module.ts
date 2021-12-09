import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { ApiresultModule } from './apiresult/apiresult.module';
import { MulterModule } from '@nestjs/platform-express';
import { AdminusersModule } from './adminusers/adminusers.module';
import { BlogsModule } from './blogs/blogs.module';
import { TagsModule } from './tags/tags.module';
const MAO = require('multer-aliyun-oss');
@Module({
  imports: [
    MulterModule.register({
      storage: MAO({
        config: {
          region: 'oss-cn-hangzhou',
          accessKeyId: 'LTAI5t9cTejWx6na6quuTFPw',
          accessKeySecret: 'SiS7YUNxjFWjt264RJZhWDyqoMToyE',
          bucket: 'whxxw',
        },
      }),
    }),
    DbModule,
    UsersModule,
    ApiresultModule,
    AdminusersModule,
    BlogsModule,
    TagsModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
