import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("boards")
export class Board extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  board: string;
}
