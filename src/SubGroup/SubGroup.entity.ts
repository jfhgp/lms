import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("sub_groups")
export class SubGroup extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  sub_group: string;
}
