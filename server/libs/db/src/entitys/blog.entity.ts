import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Tag } from './tag.entity';
import { User } from './user.entity';

@Entity()
export class Blog extends BaseEntity {
  @Column()
  title: String;

  @Column()
  content: string;

  @Column()
  htmlcontent: string;

  @Column()
  introduce: string;

  @OneToOne((type) => Tag)
  @JoinColumn()
  type: Tag;

  @ManyToOne(() => Tag, (tag) => tag.blogs)
  tags: Tag;

  @OneToOne((type) => User)
  @JoinColumn()
  author: User;

  @Column()
  cover: string;

  @Column()
  topping: boolean;

  @Column()
  hot: boolean;

  @Column()
  recommend: boolean;
}
