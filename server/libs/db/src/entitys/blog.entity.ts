import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { BlogAndTag } from './blogandtag.entity';
import { Tag } from './tag.entity';
import { User } from './user.entity';

@Entity()
export class Blog extends BaseEntity {
  @Column({
    nullable: true,
  })
  title: String;

  @Column({
    type: 'text',
    nullable: true,
  })
  content: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  htmlcontent: string;

  @Column({
    nullable: true,
  })
  introduce: string;

  @ManyToOne(() => Tag, (Tag) => Tag.grade)
  type: Tag;

  @OneToMany(() => BlogAndTag, (tag) => tag.blogid)
  tags: BlogAndTag[];

  @ManyToOne(() => User, (user) => user.nickname)
  author: User;

  @Column({
    nullable: true,
  })
  cover: string;

  @Column({
    nullable: true,
  })
  topping: boolean;

  @Column({
    nullable: true,
  })
  hot: boolean;

  @Column({
    nullable: true,
  })
  recommend: boolean;
}
