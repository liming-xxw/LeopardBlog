import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entitys/user.entity';
import { AdminUser } from './entitys/adminuser.entity';
import { Tag } from './entitys/tag.entity';
import { Blog } from './entitys/blog.entity';
import { BlogAndTag } from './entitys/blogandtag.entity';

const Entity = TypeOrmModule.forFeature([
  User,
  AdminUser,
  Tag,
  Blog,
  BlogAndTag,
]);

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'xiaoxiwen',
      database: 'leopardblog',
      entities: [User, AdminUser, Tag, Blog, BlogAndTag],
      synchronize: true,
    }),
    Entity,
  ],
  providers: [DbService],
  exports: [DbService, Entity],
})
export class DbModule {}
