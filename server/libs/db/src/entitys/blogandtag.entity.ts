import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Blog } from './blog.entity';
import { Tag } from './tag.entity';
@Entity()
export class BlogAndTag extends BaseEntity {
  @OneToOne((type) => Blog)
  @JoinColumn()
  blogid: Blog;

  @OneToOne((type) => Tag)
  @JoinColumn()
  tagid: Tag;
}
