import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Portion } from "../Portion/Portion.entity";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("boxes")
export class Box extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  box: string;

  @ManyToOne(() => Portion, (portion) => portion, { nullable: false })
  @JoinColumn({ name: "portion_id" })
  portion_id: Portion;
}
