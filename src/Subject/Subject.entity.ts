import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("subjects")
export class Subject extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  subject: string;
}
