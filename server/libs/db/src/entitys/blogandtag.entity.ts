import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Blog } from './blog.entity';
import { Tag } from './tag.entity';
@Entity()
export class BlogAndTag extends BaseEntity {
  @ManyToOne((type) => Blog, (blog) => blog.tags)
  blogid: Blog;

  @Column({
    nullable:true
  })
  blog:string

  @ManyToOne((type) => Tag, (Tag) => Tag.blogs)
  tagid: Tag;
}
