import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Blog } from './blog.entity';
import { User } from './user.entity';

@Entity()
export default class Comment extends BaseEntity {
  @ManyToOne(() => User, (user) => user.id)
  comment_user_top: User;

  @ManyToOne(() => User, (user) => user)
  comment_user: User;

  @Column()
  content: string;

  @ManyToOne(() => Comment, (comment) => comment.id)
  commentid: Comment;

  @ManyToOne(() => Blog, (blog) => blog.id)
  blogid: Blog;

  @Column()
  top: string;

  @Column({
    default: 0,
  })
  good: number;

  @Column({
    default: 0,
  })
  bad: number;
}
