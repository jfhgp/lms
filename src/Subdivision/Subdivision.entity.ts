import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { District } from "../District/District.entity";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("subdivisions")
export class Subdivision extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  subdivision: string;

  @ManyToOne(() => District, (district) => district, { nullable: false })
  @JoinColumn({ name: "district_id" })
  district_id: District;
}
