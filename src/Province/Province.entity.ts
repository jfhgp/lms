import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("provinces")
export class Province extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  province: string;
}
