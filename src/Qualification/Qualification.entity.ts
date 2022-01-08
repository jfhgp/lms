import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("qualifications")
export class Qualification extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  qualification: string;
}
