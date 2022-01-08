import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("religions")
export class Religion extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  religion: string;
}
