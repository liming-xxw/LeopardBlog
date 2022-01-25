import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
     @PrimaryGeneratedColumn()
     id:number;

     @Column()
     username:string

     @Column({select:false})
     password:string

     @Column()
     nickname:string

     @Column({default:"https://leopardblog.oss-cn-hangzhou.aliyuncs.com/478c7caf1ae749fd7c0bc13269052dc3.png"})
     avatar:string
}