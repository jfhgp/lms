import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Region } from "../Region/Region.entity";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("districts")
export class District extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  district: string;

  @ManyToOne(() => Region, (region) => region, { nullable: false })
  @JoinColumn({ name: "region_id" })
  region_id: Region;
}
