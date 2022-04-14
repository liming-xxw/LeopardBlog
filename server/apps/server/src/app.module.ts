import { CommonModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ApiresultModule } from 'apps/admin/src/apiresult/apiresult.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { TagsModule } from './tags/tags.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LikesModule } from './likes/likes.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [BlogsModule, ApiresultModule, CommonModule, TagsModule, UsersModule, AuthModule, LikesModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
