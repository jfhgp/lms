import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Scale } from "../Scale/Scale.entity";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("designations")
export class Designation extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  designation: string;

  @OneToOne(() => Scale, (scale) => scale, { nullable: false })
  @JoinColumn({name: 'scale_id'})
  scale_id: Scale;
}
