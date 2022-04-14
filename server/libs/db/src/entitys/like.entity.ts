import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Blog } from './blog.entity';
import { User } from './user.entity';

@Entity()
export default class Like extends BaseEntity {
  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Blog, (blog) => blog.id)
  blog: Blog;
}
