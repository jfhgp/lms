import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("teaching_status")
export class TeachingStatus extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  teaching_status: string;
}
