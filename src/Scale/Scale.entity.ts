import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("scales")
export class Scale extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  scale: string;
}
