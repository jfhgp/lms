import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("book_types")
export class BookType extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  book_type: string;
}
