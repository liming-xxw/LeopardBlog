import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { hashSync } from 'bcryptjs';

@Entity()
export class User extends BaseEntity {
  @BeforeInsert()
  updatex() {
    this.password = hashSync(this.password);
  }

  @Column()
  username: string;

  @Column({ select: false })
  password: string;

  @Column()
  nickname: string;

  @Column({
    default:
      'https://leopardblog.oss-cn-hangzhou.aliyuncs.com/478c7caf1ae749fd7c0bc13269052dc3.png',
  })
  avatar: string;

  @Column()
  email: string;
}
