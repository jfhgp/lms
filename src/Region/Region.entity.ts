import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Province } from "../Province/Province.entity";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("regions")
export class Region extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  region: string;

  @ManyToOne(() => Province, (province) => province, { nullable: false })
  @JoinColumn({ name: "province_id" })
  province_id: Province;
}
