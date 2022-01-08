import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("genders")
export class Gender extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  gender: string;
}
