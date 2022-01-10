import { Column, Entity } from "typeorm";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("book_categories")
export class BookCategory extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  book_category: string;
}
