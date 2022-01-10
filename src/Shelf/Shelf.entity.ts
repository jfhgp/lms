import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { College } from "../College/College.entity";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("shelves")
export class Shelf extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  shelf: string;

  @ManyToOne(() => College, (college) => college, { nullable: false })
  @JoinColumn({ name: "college_id" })
  college_id: College;
}
