import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BookCategory } from "../BookCategory/BookCategory.entity";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("book_sub_categories")
export class BookSubCategory extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  book_sub_category: string;

  @ManyToOne(() => BookCategory, (book_category) => book_category, {
    nullable: false,
  })
  @JoinColumn({ name: "book_category_id" })
  book_category_id: BookCategory;
}
