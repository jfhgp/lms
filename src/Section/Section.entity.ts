import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("sections")
export class Section extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  section: string;
}
