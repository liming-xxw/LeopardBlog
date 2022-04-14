import { BeforeInsert, Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { hashSync } from 'bcryptjs';

@Entity()
export class AdminUser extends BaseEntity {

  @BeforeInsert()
  updatex() {
    this.adminpass = hashSync(this.adminpass);
  }

  @Column()
  adminname: String;

  @Column({ select: false })
  adminpass: String;

  @Column()
  nickname: string;

  @Column()
  admingrade: Number;

  @Column({
    default:
      'https://leopardblog.oss-cn-hangzhou.aliyuncs.com/478c7caf1ae749fd7c0bc13269052dc3.png',
  })
  avatar: string;
}
