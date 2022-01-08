import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("domicile_type")
export class DomicileType extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  domicile_type: string;
}
