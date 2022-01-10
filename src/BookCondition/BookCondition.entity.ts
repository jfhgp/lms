import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("book_conditions")
export class BookCondition extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  book_condition: string;
}
