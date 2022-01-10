import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("languages")
export class Language extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  language: string;
}
