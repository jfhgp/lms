import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("posting_places")
export class PostingPlace extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  posting_place: string;
}
