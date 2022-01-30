import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { District } from "../District/District.entity";
import { Region } from "../Region/Region.entity";
import { Subdivision } from "../Subdivision/Subdivision.entity";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("colleges")
export class College extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  college_name: string;

  @ManyToOne(() => Subdivision, (subdivision) => subdivision, {
    nullable: false,
  })
  @JoinColumn({ name: "subdivision_id" })
  subdivision_id: Subdivision;

  @ManyToOne(() => District, (district) => district, {
    nullable: false,
  })
  @JoinColumn({ name: "district_id" })
  district_id: District;

  @ManyToOne(() => Region, (region) => region, {
    nullable: false,
  })
  @JoinColumn({ name: "region_id" })
  region_id: Region;
}
