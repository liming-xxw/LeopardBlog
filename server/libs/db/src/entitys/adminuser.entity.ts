import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class AdminUser extends BaseEntity{
   @Column()
   adminname:String

   @Column({select:false})
   adminpass:String

   @Column()
   admingrade:string    

   @Column({default:"https://leopardblog.oss-cn-hangzhou.aliyuncs.com/478c7caf1ae749fd7c0bc13269052dc3.png"})
   avatar:string
}