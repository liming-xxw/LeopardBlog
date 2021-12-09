import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { ApiresultModule } from './apiresult/apiresult.module';
import { MulterModule } from '@nestjs/platform-express';
import { AdminusersModule } from './adminusers/adminusers.module';
import { BlogsModule } from './blogs/blogs.module';
import { TagsModule } from './tags/tags.module';
import { CommonModule } from '@app/common';
const MAO = require('multer-aliyun-oss');
@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: MAO({
            config: {
              region: process.env.OSS_REGION,
              accessKeyId: process.env.OSS_ACCESS_KEY_ID,
              accessKeySecret: process.env.OSS_ACCRSS_KEY_SECRET,
              bucket: process.env.OSS__BUCKET,
            },
          }),
        };
      },
    }),
    CommonModule,
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
