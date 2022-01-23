import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("groups")
export class Group extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  group: string;
}
