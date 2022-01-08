import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("marital_status")
export class MaritalStatus extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  marital_status: string;
}
