import { Column, Entity,  ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Blog } from './blog.entity';

@Entity()
export class Tag extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => Tag, (tag) => tag.superiors)
  superiorid: Tag;

  @OneToMany((type) => Tag, (tag) => tag.superiorid)
  superiors: Tag[];

  @OneToMany((type) => Blog, (blog) => blog.tags)
  blogs: Blog[];

  @Column()
  grade:string
}
