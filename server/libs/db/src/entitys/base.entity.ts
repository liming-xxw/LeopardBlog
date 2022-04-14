import {
  AfterLoad,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as dayjs from 'dayjs'

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @AfterLoad()
  updatakk() {
    const date: any = dayjs(this.createdAt).format('YYYY-MM-DD');
    this.createdAt = date;
  }

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'created_at',
    comment: '创建时间',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: false,
    name: 'updated_at',
    comment: '更新时间',
  })
  updateAt: Date;
}
