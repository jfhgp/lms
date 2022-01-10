import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Shelf } from "../Shelf/Shelf.entity";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("portions")
export class Portion extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  portion: string;

  @ManyToOne(() => Shelf, (shelf) => shelf, { nullable: false })
  @JoinColumn({ name: "shelf_id" })
  shelf_id: Shelf;
}
